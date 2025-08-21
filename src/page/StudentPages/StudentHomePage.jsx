import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseCard from "./CoursePage";

// SVG/emoji icons for stat cards
const StatIcon = ({ name }) => {
  switch (name) {
    case "courses":
      return <span className="inline-block mr-1 text-xl"></span>;
    case "completed":
      return <span className="inline-block mr-1 text-xl"></span>;
    case "assignments":
      return <span className="inline-block mr-1 text-xl"></span>;
    case "achievements":
      return <span className="inline-block mr-1 text-xl"></span>;
    default:
      return null;
  }
};

// Feedback Modal
function FeedbackModal({ open, feedback, onInput, onSubmit }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/20">
      <div className="bg-white rounded-2xl border border-[#e4e0e8] shadow-xl p-8 w-full max-w-md">
        <h2 className="text-xl font-bold text-center mb-5">
          Give us your feedback
          <br />
          Keyboard Fundamentals
        </h2>
        <div className="mb-4">
          <label className="block font-semibold mb-1">
            How satisfied are you with the course?{" "}
            <span className="text-red-500">*</span>
          </label>
          <div className="flex justify-between px-2 text-xs text-black/40 mb-2">
            <span>Not satisfied</span>
            <span>Very Satisfied</span>
          </div>
          <div className="flex justify-between mb-4">
            {[1, 2, 3, 4, 5].map((v) => (
              <button
                key={v}
                onClick={() => onInput({ ...feedback, ratingCourse: v })}
              >
                <div
                  className={`w-6 h-6 rounded-full border border-[#aaa] mx-1 flex items-center justify-center
                    ${
                      feedback.ratingCourse === v
                        ? "bg-[#5b4cb2] border-[#5b4cb2] text-white"
                        : "bg-white text-[#adb2bd]"
                    }`}
                >
                  {v}
                </div>
              </button>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1">
            How satisfied are you with the instructor?{" "}
            <span className="text-red-500">*</span>
          </label>
          <div className="flex justify-between px-2 text-xs text-black/40 mb-2">
            <span>Not satisfied</span>
            <span>Very Satisfied</span>
          </div>
          <div className="flex justify-between mb-4">
            {[1, 2, 3, 4, 5].map((v) => (
              <button
                key={v}
                onClick={() => onInput({ ...feedback, ratingInstructor: v })}
              >
                <div
                  className={`w-6 h-6 rounded-full border border-[#aaa] mx-1 flex items-center justify-center
                    ${
                      feedback.ratingInstructor === v
                        ? "bg-[#5b4cb2] border-[#5b4cb2] text-white"
                        : "bg-white text-[#adb2bd]"
                    }`}
                >
                  {v}
                </div>
              </button>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Feedback</label>
          <textarea
            className="w-full border border-[#EEE] rounded-lg p-2 min-h-[70px]"
            value={feedback.comment}
            placeholder="Let us know how we can improve"
            onChange={(e) => onInput({ ...feedback, comment: e.target.value })}
          />
        </div>
        <button
          className="w-full mt-2 bg-black text-white font-semibold py-2 rounded hover:bg-black/80 disabled:opacity-60"
          disabled={
            !feedback.ratingCourse ||
            !feedback.ratingInstructor ||
            !feedback.comment.trim()
          }
          onClick={onSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

// Reschedule Modal
function RescheduleModal({ open, onClose }) {
  const slots = [
    "6 PM - 7 PM\n02 Aug, Tue",
    "6 PM - 7 PM\n02 Aug, Tue",
    "6 PM - 7 PM\n02 Aug, Tue",
    "6 PM - 7 PM\n02 Aug, Tue",
  ];
  if (!open) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/20">
      <div className="bg-white rounded-2xl border border-[#e4e0e8] shadow-xl p-8 w-full max-w-md">
        <h2 className="text-lg font-bold mb-2">Request a Reschedule</h2>
        <div className="text-xs mb-3 text-[#8d7e56] border border-[#f7e3b2] rounded bg-[#fdf6e8] px-2 py-2">
          You can reschedule one class per calendar month at no extra cost.
          Please select a new slot.
        </div>
        <label className="block font-semibold mb-1 text-sm">
          Reason <span className="text-red-500">*</span>
        </label>
        <input
          className="w-full border border-[#EEE] rounded-lg mb-3 p-2"
          placeholder="Write your reason for reschedule.."
        />
        <label className="block font-semibold text-sm mb-1">
          Pick another slot
        </label>
        <div className="flex flex-wrap gap-2 mb-4">
          {slots.map((slot, idx) => (
            <button
              key={idx}
              className="border border-[#E4E0E7] bg-[#F6F0FA] rounded px-3 py-2 text-xs hover:bg-[#EEE] leading-tight whitespace-pre"
            >
              {slot}
            </button>
          ))}
        </div>
        <div className="flex justify-end gap-2">
          <button
            className="border border-black/20 px-4 py-2 rounded mr-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button className="bg-black text-white font-semibold px-4 py-2 rounded">
            Request Reschedule
          </button>
        </div>
      </div>
    </div>
  );
}

export default function StudentHomePage() {
  const navigate = useNavigate();
  // Dummy data simulating an API call
  const [courses] = useState([
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=facearea&w=400&h=200",
      tags: [
        { label: "🎵 Music", bg: "bg-[#E3F0FF]", text: "text-[#469AFF]" },
        { label: "Beginner", bg: "bg-[#C9E9FA]", text: "text-[#43A2DC]" },
      ],
      title: "Keyboard Fundamentals",
      instructor: "Ramya Veda",
      progress: 50,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=400&h=200",
      tags: [
        { label: "🌐 Language", bg: "bg-[#ECE9FC]", text: "text-[#7562E0]" },
        { label: "Advanced", bg: "bg-[#FDF7F7]", text: "text-[#F26565]" },
      ],
      title: "Spanish For Business",
      instructor: "Pedro Avenz",
      progress: 60,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=200",
      tags: [
        { label: "🩰 Dance", bg: "bg-[#FDECCC]", text: "text-[#FBBF24]" },
        {
          label: "Beginner to Intermediate",
          bg: "bg-[#FDF6E8]",
          text: "text-[#F59E42]",
        },
      ],
      title: "Bharatnatyam for Beginners",
      instructor: "Keerthi Ramakrishnan",
      progress: 20,
    },
  ]);
  // Feedback Modal state
  const [showFeedback, setShowFeedback] = useState(true);
  const [feedback, setFeedback] = useState({
    ratingCourse: 0,
    ratingInstructor: 0,
    comment: "",
  });
  // Reschedule Modal state
  const [showReschedule, setShowReschedule] = useState(false);

  function handleFeedbackSubmit() {
    setShowFeedback(false);
  }

  return (
    <div className="min-h-screen bg-[#FAFAFB] px-8 py-6 font-sans">
      {/* Payment Due and Stats */}
      <div className="flex flex-col gap-2">
        <div className="w-full flex justify-between items-center bg-[#FFF6DF] rounded-xl px-8 py-3 mb-8">
          <div className="flex items-center">
            <img
              src="./assets/info.png"
              alt="Info"
              className="mr-2"
              style={{
                width: "20px",
                height: "20px",
                objectFit: "contain",
                verticalAlign: "middle",
              }}
            />

            <div className="flex flex-col ml-2">
              <span className="font-semibold text-black text-base">
                Payment Due
              </span>
              <span className="text-black text-sm font-normal mt-[-2px]">
                Spanish for Beginners
              </span>
            </div>
          </div>
          <button className="px-5 py-2 border border-[#FFD36E] rounded-full bg-[#FFF6DF] hover:bg-[#FEF4C7] text-[black] font-semibold text-base transition">
            View Details
          </button>
        </div>

        <h2 className="text-2xl font-bold text-black">
          Welcome back, Student!
        </h2>
        <div className="text-base text-black/40 font-normal mb-6">
          Manage your classes and have fun learning.
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            {
              label: "Courses Enrolled",
              value: 2,
              icon: <StatIcon name="courses" />,
            },
            {
              label: "Courses Completed",
              value: 0,
              icon: <StatIcon name="completed" />,
            },
            {
              label: "Pending Assignments",
              value: 1,
              icon: <StatIcon name="assignments" />,
            },
            {
              label: "Achievements",
              value: 1,
              icon: <StatIcon name="achievements" />,
            },
          ].map((s, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-[#F5EBF7] px-4 py-5 flex flex-col justify-between items-start min-h-[84px]"
            >
              <div className="flex justify-between items-center w-full">
                <span className="text-base font-semibold mb-1">{s.label}</span>
                {s.icon}
              </div>
              <div className="text-2xl font-bold text-black">{s.value}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Assignment Due */}
      <div className="border border-[#eceaec] rounded-2xl bg-white flex justify-between items-center px-6 py-4 mb-4 shadow-sm">
        <div className="flex-1">
          <div className="flex items-center mb-1 text-[black] font-semibold">
            <span className="mr-1"></span> Assignment Due
          </div>
          <div className="flex items-center mb-1">
            <span className="bg-[#DDF4FA] text-[#198DB1] text-xs rounded px-2 mr-2 font-semibold">
              Music
            </span>
            Keyboard Fundamentals :{" "}
            <span className="font-semibold">Video Submission</span>
          </div>
          <span className="text-sm text-black/40 font-semibold">
            Assignment Details
          </span>
        </div>
        <div className="flex flex-col items-end space-y-1 min-w-[110px]">
          <span className="text-xs text-black/40">11:59 PM, Today</span>
          <button className="rounded-full bg-[#FF6F61] text-white px-6 py-1 mt-1 font-semibold hover:bg-[#f36b6b]">
            Submit
          </button>
        </div>
      </div>
      {/* Upcoming Class */}
      <div className="rounded-2xl bg-[#F7F7F8] flex justify-between items-center px-6 py-4 mb-8">
        <div className="flex-1">
          <div className="flex items-center mb-1 text-[#2BC48C] font-bold">
            <span className="mr-1"></span> Upcoming Class
          </div>
          <div className="flex items-center mb-1">
            <span className="bg-[#FDECCC] text-[#FBBF24] text-xs rounded px-2 mr-2 font-semibold">
              Dance
            </span>
            Bharatnatyam for Beginners
          </div>
          <span className="text-sm text-black/40 font-semibold">
            By Keerthi Ramakrishnan
          </span>
        </div>
        <div className="flex flex-col items-end gap-1 min-w-[191px]">
          <span className="text-xs text-black/50 mb-1">5:00 PM, Today</span>
          <div className="flex gap-2">
            <button
              className="border border-[#bababa] bg-white rounded-full px-6 py-1 mr-1 font-semibold"
              onClick={() => setShowReschedule(true)}
            >
              Reschedule
            </button>
            <button className="rounded-full bg-[#E6E0FC] text-[#7562E0] px-6 py-1 font-semibold hover:bg-[#e7ddfa]">
              Join Class
            </button>
          </div>
        </div>
      </div>
      {/* My Courses: horizontally scrollable on small screens, grid (2-col) wider */}
      <h3 className="text-xl font-bold mb-4">My Courses</h3>

      <CourseCard />

      {/* Feedback Modal */}
      <FeedbackModal
        open={showFeedback}
        feedback={feedback}
        onInput={setFeedback}
        onSubmit={handleFeedbackSubmit}
      />
      {/* Reschedule Modal */}
      <RescheduleModal
        open={showReschedule}
        onClose={() => setShowReschedule(false)}
      />
    </div>
  );
}
