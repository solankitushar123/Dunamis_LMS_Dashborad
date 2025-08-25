import React, { useState } from "react";

/* =========================================================
   DUMMY DATA (Replace with backend API integration)
   See comments below for REST/GraphQL/async fetch example.
=========================================================== */
const DUMMY_CURRICULUM = [
  {
    name: "Module 1: Name of Module",
    lessons: [
      {
        name: "Lesson 1.1: Name of Lesson",
        topics: [
          {
            name: "Topic 1.1.1: Name of Topic",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor...",
          },
          {
            name: "Topic 1.1.2: Name of Topic",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor...",
          },
        ],
      },
      {
        name: "Lesson 1.2: Name of Lesson",
        topics: [
          {
            name: "Topic 1.2.1: Name of Topic",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor...",
          },
          {
            name: "Topic 1.2.2: Name of Topic",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor...",
          },
        ],
      },
    ],
  },
  {
    name: "Module 2: Name of Module",
    lessons: [
      {
        name: "Lesson 2.1: Name of Lesson",
        topics: [
          {
            name: "Topic 2.1.1: Name of Topic",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor...",
          },
          {
            name: "Topic 2.1.2: Name of Topic",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor...",
          },
        ],
      },
    ],
  },
];

const DUMMY_INSTRUCTORS = [
  {
    id: 1,
    name: "Teacher Name",
    avatar: "https://randomuser.me/api/portraits/men/27.jpg",
    location: "Hyderabad, IN",
    years: 7,
    mode: "Online",
    instrument: "Keyboard",
    desc: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.”`,
    selected: true,
  },
  {
    id: 2,
    name: "Teacher Name",
    avatar: "https://randomuser.me/api/portraits/men/29.jpg",
    location: "Nagaram, Hyd, IN",
    years: 7,
    mode: "Offline",
    instrument: "Keyboard",
    desc: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa..."`,
  },
  {
    id: 3,
    name: "Teacher Name",
    avatar: "https://randomuser.me/api/portraits/men/23.jpg",
    location: "Hyderabad, India",
    years: 7,
    mode: "Online",
    instrument: "Keyboard",
    desc: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa..."`,
  },
  // ...more if needed
];

const DUMMY_PLANS = [
  {
    id: 1,
    name: "STANDARD PLAN",
    price: { monthly: "2,500", full: "30,000" },
    features: ["Feature 1", "Feature 2", "Feature 3"],
    isCurrent: true,
  },
  {
    id: 2,
    name: "PREMIUM PLAN",
    price: { monthly: "5,000", full: "50,000" },
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
];

/* =========================================================
   CURRICULUM COMPONENT
=========================================================== */
function CurriculumSection({ curriculum }) {
  const [openModule, setOpenModule] = useState(0);
  const [openLessons, setOpenLessons] = useState({ 0: [0] }); // {moduleIdx: [lessonIdx, ...]}

  // Toggle module accordion
  const handleModuleToggle = (idx) => {
    setOpenModule(idx === openModule ? null : idx);
    // On module open, default all its lessons open, or reset to first lesson
    setOpenLessons((prev) => ({
      ...prev,
      [idx]: [0],
    }));
  };

  // Toggle lesson accordion
  const handleLessonToggle = (modIdx, lessonIdx) => {
    setOpenLessons((prev) => {
      const inModule = prev[modIdx] || [];
      return {
        ...prev,
        [modIdx]: inModule.includes(lessonIdx)
          ? inModule.filter((i) => i !== lessonIdx)
          : [...inModule, lessonIdx],
      };
    });
  };

  return (
    <div className="space-y-7">
      {curriculum.map((module, mi) => (
        <div
          key={mi}
          className="border rounded-2xl bg-white shadow-sm transition-shadow duration-150"
        >
          {/* Module Header */}
          <button
            className="w-full flex items-center gap-2 px-5 py-3 rounded-t-2xl bg-white cursor-pointer border-b select-none focus:outline-none"
            aria-expanded={openModule === mi}
            onClick={() => handleModuleToggle(mi)}
            type="button"
          >
            {/* Module Icon */}
            <span className="rounded-lg bg-[#FEF6D5] flex items-center justify-center p-1 mr-2">
              <svg width="21" height="21" viewBox="0 0 20 20" fill="none">
                <rect width="20" height="20" rx="6" fill="#FEF6D5" />
                <path
                  d="M5.6 7C5.6 6.33726 6.13726 5.8 6.8 5.8H13.2C13.8627 5.8 14.4 6.33726 14.4 7V14.2C14.4 14.8627 13.8627 15.4 13.2 15.4H6.8C6.13726 15.4 5.6 14.8627 5.6 14.2V7Z"
                  stroke="#E0B814"
                  strokeWidth="1.2"
                />
                <rect
                  x="7.6"
                  y="4.6"
                  width="4.8"
                  height="1.2"
                  rx="0.6"
                  fill="#E0B814"
                />
              </svg>
            </span>
            <span className="font-semibold text-black text-base md:text-lg">
              {module.name}
            </span>
            <span className="flex-1" />
          </button>

          {/* Module Content */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openModule === mi ? "max-h-[3000px] py-2" : "max-h-0 py-0"
            }`}
          >
            <div className="flex flex-col gap-5 py-3">
              {module.lessons.map((lesson, li) => (
                <div key={li} className="pl-3 sm:pl-8">
                  {/* Lesson Header */}
                  <button
                    className="w-full flex items-center gap-2 rounded-lg bg-white cursor-pointer select-none text-left mb-1 pr-2 py-2"
                    aria-expanded={(openLessons[mi] || []).includes(li)}
                    onClick={() => handleLessonToggle(mi, li)}
                    type="button"
                  >
                    {/* Lesson Icon */}
                    <span className="rounded-lg bg-[#EBF7FE] flex items-center justify-center p-1 mr-2">
                      <svg
                        width="21"
                        height="21"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <rect width="20" height="20" rx="6" fill="#EBF7FE" />
                        <path
                          d="M8 6.4C8 5.96274 8.36274 5.6 8.8 5.6H12.8C13.2373 5.6 13.6 5.96274 13.6 6.4V13.6C13.6 14.0373 13.2373 14.4 12.8 14.4H8.8C8.36274 14.4 8 14.0373 8 13.6V6.4Z"
                          stroke="#49A6E6"
                          strokeWidth="1.2"
                        />
                        <rect
                          x="9.2"
                          y="7.2"
                          width="2.4"
                          height="0.8"
                          rx="0.4"
                          fill="#49A6E6"
                        />
                      </svg>
                    </span>
                    <span className="font-medium text-black text-[15px] md:text-base">
                      {lesson.name}
                    </span>
                  </button>
                  {/* Lesson Content */}
                  <div
                    className={`pl-5 border-l-2 border-[#E6EAEF] transition-all duration-300 ${
                      (openLessons[mi] || []).includes(li)
                        ? "max-h-[2500px] pt-1 pb-2"
                        : "max-h-0 py-0 overflow-hidden"
                    }`}
                  >
                    {/* Topics */}
                    <ul className="flex flex-col gap-2">
                      {lesson.topics.map((topic, ti) => (
                        <li
                          key={ti}
                          className="flex gap-2 items-start leading-relaxed"
                        >
                          {/* Topic Icon */}
                          <span className="rounded-lg bg-[#F6F6F8] flex items-center justify-center p-1 mt-[2px]">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                            >
                              <rect
                                width="18"
                                height="18"
                                rx="5"
                                fill="#F6F6F8"
                              />
                              <path
                                d="M6.5 6.5H11.5V7.5H6.5V6.5ZM6.5 8.5H10.5V9.5H6.5V8.5ZM6.5 10.5H9.5V11.5H6.5V10.5Z"
                                fill="#898989"
                              />
                            </svg>
                          </span>
                          <div>
                            <div className="font-medium text-gray-900 text-sm md:text-base mb-0.5">
                              {topic.name}
                            </div>
                            {topic.desc && (
                              <div className="text-gray-600 text-xs sm:text-sm">
                                {topic.desc}
                              </div>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* =========================================================
   INSTRUCTORS COMPONENT
=========================================================== */
function InstructorsSection({ instructors, selected, onSelect }) {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg sm:text-xl font-bold">Instructors</h3>
        <button className="text-black/90 px-3 py-1 rounded-xl text-sm border hover:bg-gray-100">
          Change Instructor
        </button>
      </div>
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {instructors.map((t) => {
          const isSelected = selected === t.id;
          return (
            <div
              key={t.id}
              className={`relative rounded-xl bg-[#f8f8fb] border ${
                isSelected ? "border-black" : "border-gray-200"
              } p-5 flex flex-col gap-1 shadow-sm`}
              style={{ minHeight: 195 }}
            >
              <div className="flex items-center mb-1 gap-3">
                {t.avatar && (
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full border"
                  />
                )}
                <div>
                  <div className="flex items-center">
                    <b className="font-semibold text-[15px]">{t.name}</b>
                    {isSelected && (
                      <span className="ml-2 px-2 py-0.5 rounded-full bg-[#d9f7c3] text-green-600 text-xs font-medium">
                        Selected
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-black/40">{t.location}</div>
                </div>
                <input
                  type="radio"
                  className="ml-auto w-5 h-5 accent-black"
                  checked={isSelected}
                  readOnly
                  tabIndex={-1}
                  onClick={() => onSelect(t.id)}
                />
              </div>
              <div className="flex gap-4 text-sm text-gray-700 flex-wrap mt-2">
                <span>
                  <span className="material-icons align-middle text-[16px]">
                    schedule
                  </span>{" "}
                  {t.years} years
                </span>
                <span>
                  <span className="material-icons align-middle text-[16px]">
                    language
                  </span>{" "}
                  {t.mode}
                </span>
                <span>
                  <span className="material-icons align-middle text-[16px]">
                    music_note
                  </span>{" "}
                  {t.instrument}
                </span>
              </div>
              <div className="italic text-xs text-gray-500 mt-2">{t.desc}</div>
              <button className="mt-auto bg-black text-white rounded-full px-4 py-1 text-xs font-semibold hover:bg-gray-900">
                Watch Intro Video
              </button>
              {isSelected && (
                <span className="absolute top-2 left-2 text-xs font-bold text-black">
                  ✓ Currently Selected
                </span>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

/* =========================================================
   FEE STRUCTURE COMPONENT
=========================================================== */
function FeeStructureSection({ plans, selectedPlan, onChoose }) {
  const [period, setPeriod] = useState("monthly");
  return (
    <div>
      <div className="rounded-2xl bg-[#202123] mb-6 p-8 text-white flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-bold mb-2">Choose your Plan</h2>
        <div className="text-base font-light mb-4 opacity-80">
          Simple pricing. No hidden fees. Advanced features for you business.
        </div>
        <div className="flex gap-3 justify-center">
          <button
            className={`px-4 py-2 rounded-full font-semibold ${
              period === "monthly"
                ? "bg-white text-black"
                : "bg-[#202123] border border-white/50 text-white/80"
            }`}
            onClick={() => setPeriod("monthly")}
          >
            Monthly
          </button>
          <button
            className={`px-4 py-2 rounded-full font-semibold ${
              period === "full"
                ? "bg-white text-black"
                : "bg-[#202123] border border-white/50 text-white/80"
            }`}
            onClick={() => setPeriod("full")}
          >
            Full Payment
          </button>
        </div>
      </div>
      <div className="text-sm mb-5 text-gray-500">
        The fees for weekend sessions may vary.
      </div>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
        {plans.map((p) => (
          <div
            key={p.id}
            className={`border rounded-2xl bg-white p-6 relative ${
              selectedPlan === p.id ? "border-black" : "border-gray-200"
            }`}
          >
            <div className="text-lg font-bold mb-1">{p.name}</div>
            <div className="text-2xl font-black mb-3">
              ₹{p.price[period] || p.price}{" "}
              <span className="font-normal text-sm">/month</span>
            </div>
            {selectedPlan === p.id ? (
              <button
                disabled
                className="w-full bg-gray-100 mt-1 rounded-lg py-2 font-semibold text-gray-500 cursor-not-allowed"
              >
                Your Current Plan
              </button>
            ) : (
              <button
                className="w-full bg-black text-white mt-1 rounded-lg py-2 font-semibold hover:bg-gray-900"
                onClick={() => onChoose(p.id)}
              >
                Choose Plan
              </button>
            )}
            <ul className="mt-4 mb-1 space-y-1">
              {p.features.map((f, idx) => (
                <li
                  key={idx}
                  className="flex gap-2 items-center text-sm text-gray-700"
                >
                 <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.14032 4.10969C7.17518 4.14451 7.20284 4.18587 7.22171 4.2314C7.24058 4.27692 7.2503 4.32572 7.2503 4.375C7.2503 4.42428 7.24058 4.47308 7.22171 4.5186C7.20284 4.56413 7.17518 4.60549 7.14032 4.64031L4.51532 7.26531C4.48049 7.30018 4.43913 7.32784 4.3936 7.34671C4.34808 7.36558 4.29928 7.37529 4.25 7.37529C4.20072 7.37529 4.15192 7.36558 4.1064 7.34671C4.06088 7.32784 4.01952 7.30018 3.98469 7.26531L2.85969 6.14031C2.78932 6.06995 2.74979 5.97451 2.74979 5.875C2.74979 5.77549 2.78932 5.68005 2.85969 5.60969C2.93005 5.53932 3.02549 5.49979 3.125 5.49979C3.22451 5.49979 3.31995 5.53932 3.39031 5.60969L4.25 6.46984L6.60969 4.10969C6.64452 4.07482 6.68588 4.04716 6.7314 4.02829C6.77692 4.00942 6.82572 3.9997 6.875 3.9997C6.92428 3.9997 6.97308 4.00942 7.0186 4.02829C7.06413 4.04716 7.10549 4.07482 7.14032 4.10969ZM9.875 5.5C9.875 6.46418 9.58909 7.40671 9.05342 8.2084C8.51775 9.01009 7.75637 9.63494 6.86558 10.0039C5.97479 10.3729 4.99459 10.4694 4.04894 10.2813C3.10328 10.0932 2.23464 9.62893 1.55286 8.94715C0.871076 8.26536 0.406777 7.39672 0.218674 6.45107C0.030571 5.50541 0.127112 4.52521 0.496089 3.63442C0.865067 2.74363 1.48991 1.98226 2.2916 1.44659C3.09329 0.910914 4.03582 0.625 5 0.625C6.29251 0.626365 7.5317 1.14042 8.44564 2.05436C9.35958 2.96831 9.87364 4.20749 9.875 5.5ZM9.125 5.5C9.125 4.68415 8.88307 3.88663 8.42981 3.20827C7.97655 2.52992 7.33232 2.00121 6.57857 1.689C5.82483 1.37679 4.99543 1.2951 4.19525 1.45426C3.39508 1.61342 2.66008 2.00629 2.08319 2.58318C1.5063 3.16008 1.11343 3.89508 0.954263 4.69525C0.795099 5.49542 0.876788 6.32482 1.189 7.07857C1.50121 7.83231 2.02992 8.47655 2.70827 8.92981C3.38663 9.38307 4.18415 9.625 5 9.625C6.09364 9.62376 7.14213 9.18876 7.91545 8.41545C8.68877 7.64213 9.12376 6.59364 9.125 5.5Z" fill="black"/>
</svg>

                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT: CourseDetail
   - Pass a `course` prop structure as shown, or replace all DUMMY_* with API data.
   - To use API: fetch data with useEffect or SWR/tanstack-query/Redux and replace state setup accordingly.
=========================================================== */
export default function CourseDetail({ course, onBack }) {
  // For live API, replace these with state from useEffect fetch logic!
  // For example:
  // const [curriculum, setCurriculum] = useState([]);
  // useEffect(() => {
  //    fetch('/api/course/curriculum').then(res => res.json()).then(setCurriculum)
  // }, []);
  //
  // Repeat for instructors, plans, etc. and pass those as props.

  const [activeTab, setActiveTab] = useState("Overview");
  const [selectedInstructor, setSelectedInstructor] = useState(
    course?.instructors?.[0]?.id || DUMMY_INSTRUCTORS?.[0]?.id || null
  );
  const [selectedPlan, setSelectedPlan] = useState(
    course?.plans?.find((p) => p.isCurrent)?.id ||
      DUMMY_PLANS?.find((p) => p.isCurrent)?.id ||
      null
  );

  // Use data from course prop or fallback dummy data
  const curriculum = course?.curriculum || DUMMY_CURRICULUM;
  const instructors = course?.instructors || DUMMY_INSTRUCTORS;
  const plans = course?.plans || DUMMY_PLANS;

  if (!course) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl font-bold">Course Not Found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafafb] px-4 sm:px-8 py-6 font-sans flex justify-center">
      <div className="w-full max-w-screen-xl">
        {/* ----- BREADCRUMB & BACK ----- */}
        <div className="flex items-center gap-2 mb-4 text-[14px] sm:text-[15px] text-black/40 flex-wrap">
          <button
            onClick={onBack}
            className="pr-2 text-lg text-black/60 hover:underline focus:outline-none"
            aria-label="Back"
            type="button"
          >
            &lt;
          </button>
          <span className="font-semibold text-black/70">Home</span>
          <span>/</span>
          <span className="font-semibold text-black/60">My Courses</span>
          <span>/</span>
          <span className="font-semibold text-black/90">{course.title}</span>
        </div>
        {/* ----- BANNER IMAGE ----- */}
        <div className="rounded-2xl overflow-hidden mb-6">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-[160px] sm:h-[200px] md:h-[220px] lg:h-[240px] object-cover"
          />
        </div>
        {/* ----- HEADER/UPCOMING ----- */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold leading-tight mb-1">
              {course.title}
            </h1>
            <div className="text-base sm:text-lg text-gray-600">
              By {course.instructor}
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {course.tags.map((t, idx) => (
                <span
                  key={idx}
                  className={`inline-flex items-center font-normal text-xs sm:text-sm h-6 px-2 ${
                    t.bg || ""
                  } ${t.text || ""} rounded`}
                >
                  {t.label}
                </span>
              ))}
            </div>
          </div>
          {/* Upcoming class */}
          {course.upcoming && (
            <div className="flex flex-col items-start bg-gray-50 border rounded-xl p-4 min-w-[210px] shadow-sm">
              <span className="font-medium text-[15px] flex gap-2 items-center mb-1">
                    <div className="flex items-center mb-1 text-[#333333] font-semibold text-base md:text-lg">
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-1 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 bg-[#94E9B8] rounded-lg flex-shrink-0"
      >
        <rect y="0.5" width="24" height="24" rx="8" fill="#94E9B8" />
        <path
          d="M18.875 5.625H5.125C4.79348 5.625 4.47554 5.7567 4.24112 5.99112C4.0067 6.22554 3.875 6.54348 3.875 6.875V18.125C3.875 18.4565 4.0067 18.7745 4.24112 19.0089C4.47554 19.2433 4.79348 19.375 5.125 19.375H6.17109C6.28938 19.375 6.40525 19.3415 6.50524 19.2783C6.60522 19.2151 6.68522 19.1248 6.73594 19.018C7.03986 18.3763 7.5197 17.8341 8.11965 17.4544C8.71959 17.0748 9.415 16.8732 10.125 16.8732C10.835 16.8732 11.5304 17.0748 12.1304 17.4544C12.7303 17.8341 13.2101 18.3763 13.5141 19.018C13.5648 19.1248 13.6448 19.2151 13.7448 19.2783C13.8448 19.3415 13.9606 19.375 14.0789 19.375H18.875C19.2065 19.375 19.5245 19.2433 19.7589 19.0089C19.9933 18.7745 20.125 18.4565 20.125 18.125V6.875C20.125 6.54348 19.9933 6.22554 19.7589 5.99112C19.5245 5.7567 19.2065 5.625 18.875 5.625ZM8.25 13.75C8.25 13.3792 8.35997 13.0166 8.56599 12.7083C8.77202 12.4 9.06486 12.1596 9.40747 12.0177C9.75008 11.8758 10.1271 11.8387 10.4908 11.911C10.8545 11.9834 11.1886 12.162 11.4508 12.4242C11.713 12.6864 11.8916 13.0205 11.964 13.3842C12.0363 13.7479 11.9992 14.1249 11.8573 14.4675C11.7154 14.8101 11.475 15.103 11.1667 15.309C10.8584 15.515 10.4958 15.625 10.125 15.625C9.62772 15.625 9.15081 15.4275 8.79917 15.0758C8.44754 14.7242 8.25 14.2473 8.25 13.75ZM18.875 18.125H14.4555C13.9335 17.2277 13.1468 16.5138 12.2031 16.0812C12.6762 15.66 13.0102 15.1049 13.1606 14.4895C13.311 13.8741 13.2709 13.2276 13.0455 12.6356C12.8202 12.0435 12.4202 11.534 11.8986 11.1744C11.377 10.8149 10.7585 10.6224 10.125 10.6224C9.49151 10.6224 8.87299 10.8149 8.35141 11.1744C7.82984 11.534 7.42985 12.0435 7.20447 12.6356C6.97909 13.2276 6.93896 13.8741 7.0894 14.4895C7.23985 15.1049 7.57376 15.66 8.04688 16.0812C7.10321 16.5138 6.31646 17.2277 5.79453 18.125H5.125V6.875H18.875V18.125ZM6.375 10V8.75C6.375 8.58424 6.44085 8.42527 6.55806 8.30806C6.67527 8.19085 6.83424 8.125 7 8.125H17C17.1658 8.125 17.3247 8.19085 17.4419 8.30806C17.5592 8.42527 17.625 8.58424 17.625 8.75V16.25C17.625 16.4158 17.5592 16.5747 17.4419 16.6919C17.3247 16.8092 17.1658 16.875 17 16.875H15.75C15.5842 16.875 15.4253 16.8092 15.3081 16.6919C15.1908 16.5747 15.125 16.4158 15.125 16.25C15.125 16.0842 15.1908 15.9253 15.3081 15.8081C15.4253 15.6908 15.5842 15.625 15.75 15.625H16.375V9.375H7.625V10C7.625 10.1658 7.55915 10.3247 7.44194 10.4419C7.32473 10.5592 7.16576 10.625 7 10.625C6.83424 10.625 6.67527 10.5592 6.55806 10.4419C6.44085 10.3247 6.375 10.1658 6.375 10Z"
          fill="white"
        />
      </svg>
      <span className="mr-1">Upcoming Class</span>
    </div>
                {course.upcoming.label}
              </span>
              <div className="text-gray-600 text-sm mb-2">
                {course.upcoming.time}
              </div>
              <button className="bg-[#ecdefe] text-[#9548da] font-medium px-4 py-1 rounded-full text-sm shadow hover:bg-[#e2d0fd]">
                {course.upcoming.cta}
              </button>
            </div>
          )}
        </div>
        {/* ----- TAB NAV ----- */}
        <div className="flex items-center gap-4 mt-6 mb-4 border-b overflow-x-auto">
          {["Overview", "Curriculum", "Instructors", "Fee Structure"].map(
            (tab) => (
              <button
                key={tab}
                className={`py-2 border-b-2 ${
                  activeTab === tab
                    ? "border-[#23243C] text-[#23243C] font-semibold"
                    : "border-transparent text-gray-400 font-medium"
                } text-base whitespace-nowrap`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            )
          )}
        </div>
        {/* ----- TABS CONTENT ----- */}
        {activeTab === "Overview" && (
          <div className="mt-6 max-w-2xl">
            <div className="font-bold text-lg mb-2">About the Course</div>
            <p className="text-gray-700 mb-6">{course.description}</p>
            <div className="font-bold text-lg mb-2">Course Rating</div>
            <div className="flex items-center mb-4">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M17.6165 7.15949C17.5384 6.91927 17.3909 6.70756 17.1927 6.55101C16.9944 6.39447 16.7543 6.3001 16.5025 6.2798L11.8931 5.90792L10.1134 1.60402C10.0172 1.3695 9.85335 1.1689 9.6428 1.02772C9.43226 0.886539 9.18448 0.811157 8.93099 0.811157C8.67749 0.811157 8.42971 0.886539 8.21917 1.02772C8.00862 1.1689 7.84481 1.3695 7.74856 1.60402L5.97044 5.90714L1.35872 6.2798C1.10651 6.30113 0.866211 6.39641 0.667918 6.55371C0.469625 6.71101 0.322161 6.92332 0.244001 7.16406C0.165841 7.4048 0.160462 7.66324 0.228536 7.90702C0.296611 8.1508 0.435113 8.36907 0.626688 8.53449L4.14231 11.5681L3.07122 16.104C3.01132 16.3504 3.02598 16.6091 3.11336 16.8472C3.20073 17.0853 3.35688 17.292 3.56197 17.4412C3.76706 17.5904 4.01185 17.6752 4.26526 17.685C4.51868 17.6948 4.76929 17.6291 4.98528 17.4962L8.93059 15.0681L12.8783 17.4962C13.0943 17.6275 13.3444 17.692 13.597 17.6814C13.8497 17.6709 14.0935 17.5859 14.2979 17.437C14.5023 17.2882 14.6581 17.0822 14.7457 16.845C14.8332 16.6078 14.8486 16.35 14.79 16.104L13.715 11.5673L17.2306 8.5337C17.4237 8.36857 17.5635 8.14982 17.6322 7.90519C17.7009 7.66055 17.6954 7.40102 17.6165 7.15949Z"
                  fill="#FFD36E"
                />
              </svg>
              <span className="font-semibold text-base ml-1">
                {course.rating}
              </span>
              <span className="text-gray-500 ml-2 text-sm">
                ({course.ratingCount.toLocaleString()} ratings)
              </span>
            </div>
            <div className="font-bold text-lg my-2">What you will learn</div>
            <ul className="grid gap-2 mb-4">
              {course.willLearn.map((item, i) => (
                <li className="flex items-center text-green-600" key={i}>
                  <svg width="14" height="14" fill="none">
                    <path
                      d="M9.9 5.8a1.55 1.55 0 0 1-.6.7L6.4 9.4a1.5 1.5 0 0 1-2.1 0l-.7-.7c-.5-.5-.5-1.3 0-1.8.5-.5 1.3-.5 1.8 0l.8.8 2.6-2.7a1.3 1.3 0 0 1 1.8 0 .96.96 0 0 1 .1 1.3z"
                      fill="#94E9B8"
                    />
                  </svg>
                  <span className="text-gray-800 ml-2">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {activeTab === "Curriculum" && (
          <div className="mt-6">
            <CurriculumSection curriculum={curriculum} />
          </div>
        )}
        {activeTab === "Instructors" && (
          <div className="mt-6">
            <InstructorsSection
              instructors={instructors}
              selected={selectedInstructor}
              onSelect={setSelectedInstructor}
            />
          </div>
        )}
        {activeTab === "Fee Structure" && (
          <div className="mt-6">
            <FeeStructureSection
              plans={plans}
              selectedPlan={selectedPlan}
              onChoose={setSelectedPlan}
            />
          </div>
        )}
      </div>
    </div>
  );
}

/*
==========================
API INTEGRATION GUIDELINES
==========================
1. Remove DUMMY_* constants when you have actual backend.
2. Use useEffect and useState to fetch and store:
   e.g.
   const [curriculum, setCurriculum] = useState([]);
   useEffect(() => {
     fetch('/api/course/1/curriculum')
       .then(res => res.json())
       .then(setCurriculum);
   }, []);
3. Pass fetched data to relevant subcomponents/props.
4. All props are already set up to accept backend data structure.
==========================
*/
