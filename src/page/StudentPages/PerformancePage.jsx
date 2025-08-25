import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

// -------- DYNAMIC BACKEND SIM (replace with API) ----------
const fetchCourses = async () => [
  {
    id: "keyboard-fundamentals",
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=facearea&w=640&h=360",
    tags: [
      { label: "Music", bg: "#DDF4FA", text: "black" },
      { label: "Beginner", bg: "#C9E9FA", text: "#43A2DC" },
    ],
    title: "Keyboard Fundamentals",
    instructor: "Ramya Veda",
  },
  {
    id: "spanish-for-business",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=640&h=360",
    tags: [
      { label: "Language", bg: "#94E9B880", text: "black" },
      { label: "Advanced", bg: "#FDF7F7", text: "#F26565" },
    ],
    title: "Spanish For Business",
    instructor: "Pedro Avenz",
  },
  {
    id: "bharatnatyam-beginners",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=640&h=360",
    tags: [
      { label: "Dance", bg: "#FFD36E80", text: "black" },
      { label: "Intermediate", bg: "#FCF4E3", text: "#F5B942" },
    ],
    title: "Bharatnatyam for Beginners",
    instructor: "Keerthi Ramakrishnan",
  },
];

// ------- FEEDBACK SIM -----------
function getRecentFeedback(courseId) {
  const feedbackExamples = {
    "keyboard-fundamentals": [
      {
        date: "16 June 2025",
        feedback:
          "Excellent improvement in finger placement and consistency. Keep practicing the scale-pattern exercises.",
      },
      {
        date: "01 June 2025",
        feedback:
          "Great job completing your practice log and steady rhythm! Try to increase your tempo gradually.",
      },
    ],
    "spanish-for-business": [
      {
        date: "15 June 2025",
        feedback:
          "Well done with conversation exercises—fluency is steadily rising. Continue daily vocabulary.",
      },
      {
        date: "01 June 2025",
        feedback:
          "Participation was strong this fortnight. Work on business-related phrases for next assessment.",
      },
    ],
    "bharatnatyam-beginners": [
      {
        date: "15 June 2025",
        feedback:
          "Excellent posture and expressions. Focus on mudra precision for the upcoming assessment.",
      },
      {
        date: "01 June 2025",
        feedback:
          "Footwork has become sharper, maintain rhythm consistency in next session.",
      },
    ],
  };
  return feedbackExamples[courseId] || [];
}

const fetchPerformanceForCourse = async (courseId) => {
  return {
    stats: [
      { month: "Jan", Homework: 4, Practice: 5, Speed: 7, Performance: 4 },
      { month: "Feb", Homework: 6, Practice: 6, Speed: 6, Performance: 7 },
      { month: "Mar", Homework: 8, Practice: 5, Speed: 7, Performance: 7 },
      { month: "Apr", Homework: 7, Practice: 6, Speed: 7, Performance: 6 },
      { month: "May", Homework: 6, Practice: 7, Speed: 6, Performance: 7 },
      { month: "Jun", Homework: 8, Practice: 5, Speed: 9, Performance: 4 },
    ],
    feedback: getRecentFeedback(courseId),
  };
};

// ----------- MAIN PERFORMANCE PAGE -----------
export default function MyPerformancePage() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [chartData, setChartData] = useState([]);
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    fetchCourses().then(setCourses);
  }, []);
  useEffect(() => {
    const course = selectedCourse || courses[0];
    if (course) {
      fetchPerformanceForCourse(course.id).then((res) => {
        setChartData(res.stats);
        setFeedbackList(res.feedback);
      });
    }
  }, [selectedCourse, courses]);

  return (
    <main
      className="w-full px-4 sm:px-6 lg:px-12 py-6 min-h-screen bg-white"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Breadcrumb */}
      <nav className="mb-6 flex flex-wrap items-center text-sm text-[#6b7280] gap-2">
        <span className="font-semibold text-[#111827] text-lg">DUNAMIS</span>
        <span>›</span>
        <span>Home</span>
        <span>›</span>
        <span className="font-semibold text-[#111827] text-lg">
          My Performance
        </span>
      </nav>

      {/* Header */}
      <h2 className="text-[#111827] font-semibold text-xl mb-1">
        My Performance
      </h2>
      <p className="text-[#6b7280] text-sm mb-6">
        Select the course to see your performance and feedback!
      </p>

      {/* ✅ Course Cards - ALWAYS 2 per row on large, 1 per row on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            selected={selectedCourse?.id || courses[0]?.id}
            onClick={() => setSelectedCourse(course)}
          />
        ))}
      </div>

      {/* Stats + Feedback Section */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Chart Section */}
        <div className="flex-1 w-full">
          <h3 className="text-[#111827] font-semibold text-lg mb-1">
            {selectedCourse ? selectedCourse.title : courses?.[0]?.title}
          </h3>
          <p className="text-[#6b7280] text-sm mb-4">
            Check your monthly stats
          </p>
          <div className="rounded-2xl bg-white px-4 sm:px-6 py-6 shadow border border-[#f3f4f6]">
            <PerformanceBarChart chartData={chartData} />
          </div>
          {/* Legend */}
          <div className="flex flex-wrap gap-4 mt-5">
            <Legend color="#23305d" label="Homework" />
            <Legend color="#a0e2c4" label="Practice" />
            <Legend color="#fbafb2" label="Speed" />
            <Legend color="#dfc6f8" label="Performance" />
          </div>
        </div>

        {/* Feedback Section */}
        <div className="w-full lg:max-w-sm">
          <h3 className="text-[#111827] font-semibold text-lg mb-1">
            Feedback
          </h3>
          <p className="text-[#6b7280] text-sm mb-4">
            Here’s what your trainers think..
          </p>
          <div>
            {feedbackList.map((item, i) => (
              <div key={i} className="mb-5">
                <div className="text-[#111827] font-semibold text-base mb-1">
                  {item.date}
                </div>
                <p className="text-[#6b7280] text-sm leading-snug">
                  {item.feedback}
                </p>
              </div>
            ))}
          </div>
          <button className="border border-[#e5e7eb] rounded-lg py-2 px-5 w-full sm:w-auto bg-white hover:bg-gray-50 transition text-sm font-medium text-[#111827]">
            View All
          </button>
        </div>
      </div>
    </main>
  );
}

/* ------- COMPONENTS ------- */

/* Course Card Component */
function CourseCard({ course, selected, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex cursor-pointer bg-white rounded-xl border overflow-hidden shadow-sm hover:shadow-md transition h-auto ${
        selected === course.id
          ? "border-[#1a36c6] ring-2 ring-[#d8dcfa]"
          : "border-[#f3f4f6]"
      }`}
    >
      <div className="w-28 sm:w-40 md:w-44 h-full flex-shrink-0">
        <img
          src={course.image}
          alt={course.title}
          className="object-cover w-full h-full min-h-[110px]"
        />
      </div>
      <div className="flex-1 px-3 py-3 flex flex-col justify-center">
        <div className="flex flex-wrap gap-1 mb-2">
          {course.tags.map((tag, i) => (
            <span
              key={i}
              className="rounded px-2 py-0.5 text-xs font-medium"
              style={{ background: tag.bg, color: tag.text }}
            >
              {tag.label}
            </span>
          ))}
        </div>
        <div className="text-[#111827] font-semibold text-sm sm:text-base mb-1">
          {course.title}
        </div>
        <div className="text-[#6b7280] text-xs sm:text-sm">
          by {course.instructor}
        </div>
      </div>
    </div>
  );
}

/* Legend Item */
function Legend({ color, label }) {
  return (
    <div className="flex items-center gap-2 text-sm text-[#111827]">
      <span
        className="inline-block w-3 h-3 rounded-full"
        style={{ backgroundColor: color }}
      ></span>
      {label}
    </div>
  );
}

/* ChartJS */
function PerformanceBarChart({ chartData }) {
  if (!chartData?.length)
    return (
      <div className="text-center text-gray-400 py-14 text-sm">
        No stats available
      </div>
    );

  return (
    <div className="w-full h-[250px] sm:h-[300px] lg:h-[340px] overflow-x-auto">
      <Bar
        data={{
          labels: chartData.map((d) => d.month),
          datasets: [
            {
              label: "Homework",
              backgroundColor: "#23305d",
              data: chartData.map((d) => d.Homework),
              stack: "a",
              barThickness: 18,
              borderRadius: 6,
            },
            {
              label: "Practice",
              backgroundColor: "#a0e2c4",
              data: chartData.map((d) => d.Practice),
              stack: "a",
              barThickness: 18,
              borderRadius: 6,
            },
            {
              label: "Speed",
              backgroundColor: "#fbafb2",
              data: chartData.map((d) => d.Speed),
              stack: "a",
              barThickness: 18,
              borderRadius: 6,
            },
            {
              label: "Performance",
              backgroundColor: "#dfc6f8",
              data: chartData.map((d) => d.Performance),
              stack: "a",
              barThickness: 18,
              borderRadius: 6,
            },
          ],
        }}
        options={{
          plugins: {
            legend: { display: false },
            tooltip: {
              enabled: true,
              titleFont: { family: "Inter", size: 14, weight: "400" },
              bodyFont: { family: "Inter", size: 14, weight: "400" },
            },
          },
          responsive: true,
          maintainAspectRatio: false,
          interaction: { mode: "index", intersect: false },
          scales: {
            x: {
              stacked: true,
              grid: { display: false },
              ticks: {
                font: { family: "Inter", weight: "400", size: 12 },
                color: "#111827",
              },
            },
            y: {
              stacked: true,
              beginAtZero: true,
              grid: { color: "#f9fafb", drawBorder: false },
              ticks: {
                font: { family: "Inter", weight: "400", size: 12 },
                color: "#111827",
                stepSize: 5,
              },
            },
          },
        }}
      />
    </div>
  );
}
