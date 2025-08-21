import React, { useState } from "react";

// --- COURSE DATA using icon components instead of emojis ---

const dummyCourses = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=facearea&w=640&h=360",
    tags: [
      {
        label: (
          <>
            <img
              src="./assets/music.png"
              alt="Music"
              className="mr-1 align-text-bottom"
              style={{ width: "16px", height: "16px" }}
            />
            Music
          </>
        ),
        bg: "bg-[#E3F0FF]",
        text: "text-[#469AFF]",
      },
      {
        label: "Beginner",
        bg: "bg-[#C9E9FA]",
        text: "text-[#43A2DC]",
      },
    ],
    title: "Keyboard Fundamentals",
    instructor: "Ramya Veda",
    progress: 50,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=640&h=360",
    tags: [
      {
        label: (
          <>
            <img
              src="./assets/language.png"
              alt="Language"
              className="mr-1 align-text-bottom"
              style={{ width: "16px", height: "16px" }}
            />
            Language
          </>
        ),
        bg: "bg-[#D1FADF]",
        text: "text-[#39B66A]",
      },
      {
        label: "Advanced",
        bg: "bg-[#FDF7F7]",
        text: "text-[#F26565]",
      },
    ],
    title: "Spanish For Business",
    instructor: "Pedro Avenz",
    progress: 60,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=640&h=360",
    tags: [
      {
        label: (
          <>
            <img
              src="./assets/dance.png"
              alt="Dance"
              className="mr-1 align-text-bottom"
              style={{ width: "16px", height: "16px" }}
            />
            Dance
          </>
        ),
        bg: "bg-[#FDECCC]",
        text: "text-[#FBBF24]",
      },
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
];

// --- COURSE CARD COMPONENT ---

function CourseCard({
  image,
  tags,
  title,
  instructor,
  progress,
  onViewDetails,
}) {
  return (
    <div className="flex bg-white rounded-2xl border border-[#ece9fc] shadow-sm w-full min-h-[135px] max-w-[650px]">
      {/* Only left corners rounded */}
      <div className="flex-none h-[135px] w-[185px] rounded-l-2xl rounded-r-none overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
          style={{
            borderTopLeftRadius: "16px",
            borderBottomLeftRadius: "16px",
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
          }}
        />
      </div>
      <div className="flex flex-1 flex-col justify-between py-5 pl-5 pr-6">
        <div>
          {/* Tags, Figma style */}
          <div className="flex flex-wrap gap-x-2 gap-y-1 mb-1">
            {tags.map((t, idx) => (
              <span
                key={idx}
                className={`inline-flex items-center font-normal text-[12px] h-[20px] px-2 ${t.bg} ${t.text} rounded`}
                style={{ lineHeight: 1 }}
              >
                {t.label}
              </span>
            ))}
          </div>
          <div className="text-lg font-bold mb-0.5 leading-tight">{title}</div>
          <div className="text-base text-black/70 font-normal mb-3 leading-snug">
            by {instructor}
          </div>
          {/* Progress, Figma proportions */}
          <div className="flex items-center">
            <div className="relative flex-1 mr-2">
              <div className="h-[2px] bg-[#E1E2E9] rounded-full w-11/12"></div>
              <div
                className="absolute top-0 left-0 h-[2px] bg-[#23243C] rounded-full"
                style={{ width: `calc(${(progress * 11) / 12}% )` }}
              />
            </div>
            <span className="text-xs font-semibold text-black/40 select-none w-8 text-right">
              {progress}%
            </span>
          </div>
        </div>
        {/* BUTTON */}
        <div className="mt-5">
          <button
            onClick={onViewDetails}
            className="border border-[#e2e8f0] hover:border-[#23243C] text-base px-6 py-1.5 rounded-full font-semibold flex items-center gap-2 transition-all shadow-sm"
          >
            View Details <span className="text-xl">&#8594;</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// --- MAIN (PAGE) COMPONENT ---

export default function CoursePage() {
  const [courses] = useState(dummyCourses);

  return (
    <div className="min-h-screen bg-[#fafafb] px-8 py-6 font-sans">
      <nav className="flex items-center text-[15px] text-black/40 mb-4 gap-2">
        <span className="font-semibold text-black/70">Home</span>
        <span>/</span>
        <span className="font-semibold text-black/60">My Courses</span>
      </nav>
      <h2 className="text-2xl font-bold mb-6">My Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-7 w-full max-w-screen-xl">
        {courses.map((course) => (
          <CourseCard key={course.id} {...course} onViewDetails={() => {}} />
        ))}
      </div>
    </div>
  );
}
