import React, { useEffect, useState } from "react";

/* ===========================
   Simulated backend fetch
=========================== */
const fetchCourseList = async () => [
  {
    id: "keyboard-fundamentals",
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=facearea&w=640&h=360",
    tags: [
      {
        label: (
          <span className="inline-flex items-center gap-2 bg-[#DDF4FA] text-black text-base rounded-full px-4 py-1 w-fit font-normal">
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1"
            >
              <path
                d="M9.98063 0.829227C9.93571 0.794225 9.8834 0.769914 9.82769 0.758137C9.77197 0.74636 9.71431 0.747427 9.65906 0.761258L3.65906 2.26126C3.57794 2.28154 3.50592 2.32835 3.45445 2.39426C3.40298 2.46016 3.37502 2.54138 3.375 2.62501V7.78501C3.06217 7.57599 2.68847 7.47751 2.31326 7.50521C1.93805 7.53291 1.58286 7.6852 1.30411 7.93789C1.02537 8.19058 0.839069 8.52918 0.774803 8.89988C0.710538 9.27058 0.771996 9.65213 0.949414 9.9839C1.12683 10.3157 1.41003 10.5786 1.75402 10.731C2.09801 10.8834 2.48306 10.9165 2.84799 10.8249C3.21292 10.7334 3.5368 10.5226 3.76817 10.2259C3.99955 9.92923 4.12514 9.56374 4.125 9.18751V2.91798L9.375 1.60548V6.28501C9.06217 6.07599 8.68847 5.97751 8.31326 6.00521C7.93805 6.03291 7.58286 6.1852 7.30412 6.43789C7.02537 6.69058 6.83907 7.02918 6.7748 7.39988C6.71054 7.77058 6.772 8.15213 6.94941 8.4839C7.12683 8.81567 7.41003 9.07864 7.75402 9.23102C8.09801 9.3834 8.48306 9.41646 8.84799 9.32494C9.21292 9.23342 9.5368 9.02258 9.76817 8.7259C9.99955 8.42923 10.1251 8.06374 10.125 7.68751V1.12501C10.125 1.06797 10.112 1.01169 10.087 0.960431C10.062 0.909176 10.0256 0.864303 9.98063 0.829227Z"
                fill="black"
              />
            </svg>
            Music
          </span>
        ),
      },
      { label: "Beginner", bg: "bg-[#C9E9FA]", text: "text-[#43A2DC]" },
    ],
    title: "Keyboard Fundamentals",
    instructor: "Ramya Veda",
  },
  {
    id: "spanish-for-business",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=640&h=360",
    tags: [
      {
        label: (
          <span className="inline-flex items-center gap-2 bg-[#94E9B880] text-black text-base rounded-full px-4 py-1 w-fit font-normal">
            <svg
              width="11"
              height="10"
              viewBox="0 0 11 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.9187 8.95719L8.29365 3.70719C8.2625 3.64491 8.21463 3.59253 8.15539 3.55593C8.09616 3.51932 8.0279 3.49993 7.95826 3.49993C7.88863 3.49993 7.82037 3.51932 7.76113 3.55593C7.70189 3.59253 7.65402 3.64491 7.62287 3.70719L6.60522 5.74297C5.80754 5.69811 5.04006 5.42258 4.396 4.94984C5.15166 4.14287 5.60952 3.10232 5.69396 2H6.8335C6.93295 2 7.02834 1.96049 7.09866 1.89016C7.16899 1.81984 7.2085 1.72446 7.2085 1.625C7.2085 1.52554 7.16899 1.43016 7.09866 1.35984C7.02834 1.28951 6.93295 1.25 6.8335 1.25H4.2085V0.5C4.2085 0.400544 4.16899 0.305161 4.09866 0.234835C4.02833 0.164509 3.93295 0.125 3.8335 0.125C3.73404 0.125 3.63866 0.164509 3.56833 0.234835C3.498 0.305161 3.4585 0.400544 3.4585 0.5V1.25H0.833496C0.73404 1.25 0.638657 1.28951 0.568331 1.35984C0.498005 1.43016 0.458496 1.52554 0.458496 1.625C0.458496 1.72446 0.498005 1.81984 0.568331 1.89016C0.638657 1.96049 0.73404 2 0.833496 2H4.94115C4.85763 2.91905 4.46751 3.78333 3.8335 4.45391C3.43841 4.03703 3.13503 3.54203 2.94287 3.00078C2.92707 2.95356 2.90202 2.90995 2.86919 2.87252C2.83636 2.83508 2.7964 2.80455 2.75164 2.78272C2.70688 2.76089 2.65823 2.74819 2.60851 2.74537C2.55879 2.74255 2.50901 2.74965 2.46207 2.76628C2.41513 2.7829 2.37197 2.8087 2.33511 2.84218C2.29825 2.87567 2.26843 2.91615 2.24738 2.96128C2.22634 3.00641 2.21449 3.05529 2.21254 3.10504C2.21058 3.1548 2.21856 3.20445 2.236 3.25109C2.45972 3.88384 2.81212 4.46337 3.271 4.95312C2.56448 5.47231 1.71026 5.75157 0.833496 5.75C0.73404 5.75 0.638657 5.78951 0.568331 5.85983C0.498005 5.93016 0.458496 6.02554 0.458496 6.125C0.458496 6.22446 0.498005 6.31984 0.568331 6.39017C0.638657 6.46049 0.73404 6.5 0.833496 6.5C1.92127 6.50121 2.97787 6.13668 3.8335 5.465C4.53173 6.01056 5.36526 6.35587 6.24475 6.46391L4.99787 8.95719C4.97583 9.00123 4.96269 9.04919 4.95918 9.09831C4.95568 9.14744 4.96188 9.19677 4.97744 9.2435C5.00887 9.33786 5.0765 9.41588 5.16545 9.46039C5.2544 9.5049 5.35739 9.51225 5.45176 9.48082C5.54613 9.44939 5.62415 9.38176 5.66865 9.29281L6.31506 8H9.60147L10.2479 9.29281C10.279 9.35511 10.327 9.4075 10.3862 9.4441C10.4455 9.48069 10.5138 9.50005 10.5835 9.5C10.6474 9.49997 10.7103 9.4836 10.7661 9.45245C10.8219 9.42129 10.8688 9.3764 10.9024 9.32201C10.936 9.26763 10.9551 9.20557 10.9579 9.14172C10.9608 9.07786 10.9473 9.01435 10.9187 8.95719ZM6.69006 7.25L7.9585 4.71359L9.22647 7.25H6.69006Z"
                fill="black"
              />
            </svg>
            Language
          </span>
        ),
      },
      { label: "Advanced", bg: "bg-[#FDF7F7]", text: "text-[#F26565]" },
    ],
    title: "Spanish For Business",
    instructor: "Pedro Avenz",
  },
  {
    id: "bharatnatyam-beginners",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=640&h=360",
    tags: [
      {
        label: (
          <span className="inline-flex items-center gap-2 bg-[#FFD36E80] text-black text-base rounded-full px-4 py-1 w-fit font-normal">
            <svg
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.66663 3.125C4.9633 3.125 5.25331 3.03703 5.49998 2.87221C5.74666 2.70738 5.93891 2.47312 6.05245 2.19903C6.16598 1.92494 6.19568 1.62334 6.1378 1.33237C6.07993 1.04139 5.93707 0.774119 5.72729 0.56434C5.51751 0.354562 5.25023 0.211701 4.95926 0.153823C4.66829 0.0959449 4.36669 0.12565 4.0926 0.239181C3.81851 0.352713 3.58424 0.544972 3.41942 0.791645C3.2546 1.03832 3.16663 1.32833 3.16663 1.625C3.16663 2.02283 3.32466 2.40436 3.60597 2.68566C3.88727 2.96697 4.2688 3.125 4.66663 3.125ZM4.66663 0.875001C4.81496 0.875001 4.95997 0.918988 5.0833 1.0014C5.20664 1.08381 5.30277 1.20094 5.35954 1.33799C5.4163 1.47503 5.43115 1.62583 5.40222 1.77132C5.37328 1.9168 5.30185 2.05044 5.19696 2.15533C5.09207 2.26022 4.95843 2.33165 4.81294 2.36059C4.66746 2.38953 4.51666 2.37468 4.37961 2.31791C4.24257 2.26114 4.12544 2.16502 4.04302 2.04168C3.96061 1.91834 3.91663 1.77334 3.91663 1.625C3.91663 1.42609 3.99564 1.23532 4.1363 1.09467C4.27695 0.954018 4.46771 0.875001 4.66663 0.875001ZM9.08413 4.18484C9.02207 4.26252 8.93172 4.31238 8.83292 4.32345C8.73412 4.33453 8.63496 4.30592 8.55725 4.24391C8.50335 4.20219 7.44584 3.41422 5.77663 4.2725C5.7635 4.74945 5.7165 5.22487 5.636 5.69516L7.15616 6.96078C7.21416 7.00907 7.25624 7.07374 7.2769 7.14634C7.29755 7.21893 7.29583 7.29606 7.27194 7.36766L6.52194 9.61766C6.49049 9.71202 6.42284 9.79002 6.33387 9.8345C6.24491 9.87898 6.14192 9.8863 6.04756 9.85485C5.95321 9.82339 5.87521 9.75574 5.83072 9.66678C5.78624 9.57782 5.77892 9.47483 5.81038 9.38047L6.47928 7.37328L5.44428 6.51078C5.37667 6.7388 5.29686 6.96303 5.20522 7.1825C4.56069 8.71719 3.40616 9.74328 1.77397 10.2331C1.67953 10.2591 1.57867 10.2471 1.49296 10.1997C1.40725 10.1523 1.34349 10.0732 1.31533 9.97941C1.28716 9.88559 1.29681 9.78448 1.34223 9.6977C1.38764 9.61091 1.46521 9.54534 1.55835 9.515C4.40272 8.66141 4.89303 6.12969 4.99991 4.75016C3.72913 5.55688 2.7246 5.75 2.0585 5.75C1.74473 5.75106 1.43302 5.69924 1.13647 5.59672C1.05714 5.56206 0.992255 5.50102 0.952811 5.42396C0.913366 5.3469 0.901798 5.25857 0.920069 5.17395C0.938339 5.08933 0.985323 5.01364 1.05305 4.95972C1.12077 4.9058 1.20507 4.87697 1.29163 4.87813C1.34523 4.87805 1.39819 4.88973 1.44678 4.91234C1.44678 4.91234 2.70116 5.41297 4.83069 3.96547C7.28178 2.29953 8.95569 3.60125 9.02647 3.6575C9.06489 3.68833 9.09687 3.72643 9.12056 3.76962C9.14425 3.81282 9.15921 3.86026 9.16456 3.90923C9.16991 3.9582 9.16557 4.00775 9.15177 4.05504C9.13796 4.10233 9.11498 4.14644 9.08413 4.18484Z"
                fill="black"
              />
            </svg>
            Dance
          </span>
        ),
      },
      {
        label: "Intermediate",
        bg: "bg-[#FCF4E3]",
        text: "text-[#F5B942]",
      },
    ],
    title: "Bharatnatyam for Beginners",
    instructor: "Keerthi Ramakrishnan",
  },
];

const fetchHomeworkForCourse = async (courseId) => {
  if (courseId === "keyboard-fundamentals") {
    return [
      {
        id: 1,
        date: "25 May 2025",
        title: "Keyboard Fundamentals",
        tag: "Music",
        homework: "Homework",
        homeworkDesc: "Lorem ipsum sorem itum sei",
        feedback:
          "Practice finger placement based on the chart in the text book.",
        lesson: "2.2.1",
      },
      {
        id: 2,
        date: "22 May 2025",
        title: "Keyboard Fundamentals",
        tag: "Music",
        homework: "Homework",
        homeworkDesc: "Lorem ipsum sorem itum sei",
        feedback:
          "Practice finger placement based on the chart in the text book.",
        lesson: "2.2.1",
      },
      {
        id: 3,
        date: "17 May 2025",
        title: "Keyboard Fundamentals",
        tag: "Music",
        homework: "Homework",
        homeworkDesc: "Lorem ipsum sorem itum sei",
        feedback:
          "Practice finger placement based on the chart in the text book.",
        lesson: "2.2.1",
      },
      {
        id: 4,
        date: "13 May 2025",
        title: "Keyboard Fundamentals",
        tag: "Music",
        homework: "Homework",
        homeworkDesc: "Lorem ipsum sorem itum sei",
        feedback:
          "Practice finger placement based on the chart in the text book.",
        lesson: "2.2.1",
      },
    ];
  } else if (courseId === "spanish-for-business") {
    return [
      {
        id: 1,
        date: "25 May 2025",
        title: "Keyboard Fundamentals",
        tag: "Music",
        homework: "Homework",
        homeworkDesc: "Lorem ipsum sorem itum sei",
        feedback:
          "Practice finger placement based on the chart in the text book.",
        lesson: "2.2.1",
      },
      {
        id: 2,
        date: "22 May 2025",
        title: "Keyboard Fundamentals",
        tag: "Music",
        homework: "Homework",
        homeworkDesc: "Lorem ipsum sorem itum sei",
        feedback:
          "Practice finger placement based on the chart in the text book.",
        lesson: "2.2.1",
      },
      {
        id: 3,
        date: "17 May 2025",
        title: "Keyboard Fundamentals",
        tag: "Music",
        homework: "Homework",
        homeworkDesc: "Lorem ipsum sorem itum sei",
        feedback:
          "Practice finger placement based on the chart in the text book.",
        lesson: "2.2.1",
      },
      {
        id: 4,
        date: "13 May 2025",
        title: "Keyboard Fundamentals",
        tag: "Music",
        homework: "Homework",
        homeworkDesc: "Lorem ipsum sorem itum sei",
        feedback:
          "Practice finger placement based on the chart in the text book.",
        lesson: "2.2.1",
      },
    ];
  } else if (courseId === "bharatnatyam-beginners") {
    return [
      {
        id: 1,
        date: "25 May 2025",
        title: "Keyboard Fundamentals",
        tag: "Music",
        homework: "Homework",
        homeworkDesc: "Lorem ipsum sorem itum sei",
        feedback:
          "Practice finger placement based on the chart in the text book.",
        lesson: "2.2.1",
      },
      {
        id: 2,
        date: "22 May 2025",
        title: "Keyboard Fundamentals",
        tag: "Music",
        homework: "Homework",
        homeworkDesc: "Lorem ipsum sorem itum sei",
        feedback:
          "Practice finger placement based on the chart in the text book.",
        lesson: "2.2.1",
      },
      {
        id: 3,
        date: "17 May 2025",
        title: "Keyboard Fundamentals",
        tag: "Music",
        homework: "Homework",
        homeworkDesc: "Lorem ipsum sorem itum sei",
        feedback:
          "Practice finger placement based on the chart in the text book.",
        lesson: "2.2.1",
      },
      {
        id: 4,
        date: "13 May 2025",
        title: "Keyboard Fundamentals",
        tag: "Music",
        homework: "Homework",
        homeworkDesc: "Lorem ipsum sorem itum sei",
        feedback:
          "Practice finger placement based on the chart in the text book.",
        lesson: "2.2.1",
      },
    ];
  }
  return [];
};

/* ===========================
   Component
=========================== */
export default function HomeworkPage() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [homeworks, setHomeworks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCourseList().then(setCourses);
  }, []);

  useEffect(() => {
    if (selectedCourse && selectedCourse.id) {
      setLoading(true);
      fetchHomeworkForCourse(selectedCourse.id)
        .then((hw) => setHomeworks(hw))
        .finally(() => setLoading(false));
    }
  }, [selectedCourse]);

  /* ======== Course Grid (My Courses) ======== */
  if (!selectedCourse) {
    return (
      <main className="flex-1 px-6 md:px-8 py-6 bg-[#fafafa] min-h-screen">
        <nav className="text-xs text-[#6e6e6e] font-medium mb-1 flex items-center gap-1">
          <span>Home</span>
          <span>/</span>
          <span>Homework</span>
        </nav>

        <h1 className="text-[18px] md:text-xl font-bold text-black mb-1">
          My Courses
        </h1>
        <p className="text-[12px] md:text-sm text-black/60 mb-5">
          Select the course to see your homework and session feedback
        </p>

        {/* EXACTLY two columns on md+ like your screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCourse(c)}
              className="group relative flex items-stretch text-left w-full overflow-hidden rounded-2xl border border-[#EDECF9] bg-white shadow-[0_1px_0_rgba(16,24,40,.04)] hover:shadow-md transition"
              style={{ minHeight: 120 }}
            >
              {/* Left image */}
              <div className="w-[210px] md:w-[230px] h-[120px] overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right content */}
              <div className="flex flex-col flex-1 px-4 py-3 justify-center">
                <div className="flex flex-wrap gap-2 mb-2">
                  {c.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`${tag.bg || ""} ${
                        tag.text || ""
                      } rounded-full text-[11px] font-medium px-2 py-[2px] leading-none h-6 inline-flex items-center`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>

                <div className="text-[14.5px] md:text-[15px] font-semibold text-gray-900 leading-snug">
                  {c.title}
                </div>
                <div className="text-[12px] text-gray-500 mt-1">
                  by {c.instructor}
                </div>
              </div>
            </button>
          ))}
        </div>
      </main>
    );
  }

  /* ======== Homework List (Selected Course) ======== */
  return (
    <main className="flex-1 px-6 md:px-8 py-6 bg-[#fafafa] min-h-screen">
      <div className="flex items-center gap-2 text-xs text-[#6e6e6e] mb-2 font-medium">
        <button
          className="mr-2 text-black hover:underline text-base"
          onClick={() => setSelectedCourse(null)}
        >
          &larr;
        </button>
        <span>Home</span>
        <span>/</span>
        <span>Homework</span>
        <span>/</span>
        <span className="text-black">{selectedCourse.title}</span>
      </div>

      <h1 className="text-xl font-bold text-black mb-6">
        {selectedCourse.title} Homework
      </h1>

      <div className="mb-6 flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="border border-[#ECEAEC] rounded-full px-5 py-2 text-sm w-72 bg-[#fafafa] mr-2"
        />
        <button className="inline-flex items-center border border-[#ECEAEC] px-3 py-2 rounded-lg text-base">
          <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 20 20">
            <path
              d="M3 6h14M5 10h10m-7 4h4"
              stroke="#666"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 20 20">
            <path
              d="M4 14l4-4 4 4"
              stroke="#666"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <button className="ml-2 text-lg border border-[#ECEAEC] w-10 h-10 rounded-lg flex items-center justify-center">
          +
        </button>
      </div>

      {loading ? (
        <div className="text-lg text-black/30 p-12">Loading...</div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {homeworks.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#CBCBCB] rounded-xl p-5 flex flex-col min-h-[186px] shadow-[0_1px_0_rgba(16,24,40,.04)]"
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center">
                  <span className="flex items-center justify-center w-7 h-7 bg-[#21305D] rounded-lg mr-2 text-white text-xs">
                    🎹
                  </span>
                  <span className="font-semibold text-black text-base">
                    {item.title}
                  </span>
                </div>
                <span className="text-xs text-[#757575]">{item.date}</span>
              </div>

              <span className="inline-flex items-center bg-[#DDF4FA] text-[#198DB1] text-xs rounded px-2 py-1 font-semibold w-fit mb-2">
                {item.tag}
              </span>

              <div className="font-bold text-sm mt-2 mb-1">{item.homework}</div>
              <div className="text-sm text-black/70 mb-2">
                {item.homeworkDesc}
              </div>

              <div className="font-bold text-sm mb-1">Feedback</div>
              <div className="text-sm text-black/70 mb-2">{item.feedback}</div>

              <div className="flex items-center gap-1 text-base text-black/80 mt-auto">
                <input
                  type="checkbox"
                  className="accent-[#49A078] border-gray-300"
                />
                <span className="text-sm font-medium">
                  Lesson {item.lesson}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
