import React, { useState } from "react";
import CourseDetails from "./CourseDetails";

const dummyCourses = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=facearea&w=640&h=360",
    tags: [
      {
        label: (
          <>
            <span className="inline-flex items-center gap-2 bg-[#DDF4FA] text-black text-xs sm:text-sm md:text-base rounded-full px-3 sm:px-4 py-0.5 sm:py-1 w-fit font-normal">
              <svg
                width="13"
                height="14"
                viewBox="0 0 13 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.3075 0.105595C12.2476 0.0589259 12.1779 0.0265108 12.1036 0.0108085C12.0293 -0.00489374 11.9524 -0.00347069 11.8788 0.0149697L3.87875 2.01497C3.77058 2.04201 3.67455 2.10443 3.60593 2.1923C3.5373 2.28018 3.50002 2.38847 3.5 2.49997V9.37997C3.0829 9.10128 2.58462 8.96997 2.08434 9.0069C1.58407 9.04384 1.11048 9.2469 0.73882 9.58382C0.367164 9.92074 0.118759 10.3722 0.0330711 10.8665C-0.0526166 11.3607 0.0293278 11.8695 0.265885 12.3118C0.502443 12.7542 0.880044 13.1048 1.3387 13.308C1.79735 13.5112 2.31075 13.5552 2.79732 13.4332C3.28389 13.3112 3.71573 13.0301 4.02423 12.6345C4.33273 12.2389 4.50019 11.7516 4.5 11.25V2.89059L11.5 1.14059V7.37997C11.0829 7.10128 10.5846 6.96997 10.0843 7.0069C9.58407 7.04384 9.11048 7.2469 8.73882 7.58382C8.36716 7.92074 8.11876 8.3722 8.03307 8.86646C7.94738 9.36073 8.02933 9.86946 8.26589 10.3118C8.50244 10.7542 8.88004 11.1048 9.3387 11.308C9.79735 11.5112 10.3107 11.5552 10.7973 11.4332C11.2839 11.3112 11.7157 11.0301 12.0242 10.6345C12.3327 10.2389 12.5002 9.75161 12.5 9.24997V0.49997C12.5 0.423923 12.4827 0.348874 12.4493 0.280534C12.416 0.212194 12.3675 0.152364 12.3075 0.105595ZM2.25 12.5C2.00278 12.5 1.7611 12.4267 1.55554 12.2893C1.34998 12.152 1.18976 11.9567 1.09515 11.7283C1.00054 11.4999 0.97579 11.2486 1.02402 11.0061C1.07225 10.7636 1.1913 10.5409 1.36612 10.3661C1.54094 10.1913 1.76366 10.0722 2.00614 10.024C2.24862 9.97576 2.49995 10.0005 2.72836 10.0951C2.95676 10.1897 3.15199 10.3499 3.28934 10.5555C3.42669 10.7611 3.5 11.0027 3.5 11.25C3.5 11.5815 3.36831 11.8994 3.13389 12.1339C2.89947 12.3683 2.58152 12.5 2.25 12.5ZM10.25 10.5C10.0028 10.5 9.7611 10.4267 9.55554 10.2893C9.34998 10.152 9.18976 9.95673 9.09515 9.72832C9.00054 9.49992 8.97579 9.24858 9.02402 9.00611C9.07225 8.76363 9.1913 8.5409 9.36612 8.36609C9.54093 8.19127 9.76366 8.07222 10.0061 8.02399C10.2486 7.97576 10.4999 8.00051 10.7284 8.09512C10.9568 8.18973 11.152 8.34995 11.2893 8.55551C11.4267 8.76107 11.5 9.00274 11.5 9.24997C11.5 9.58149 11.3683 9.89943 11.1339 10.1339C10.8995 10.3683 10.5815 10.5 10.25 10.5Z"
                  fill="black"
                />
              </svg>
              Music
            </span>
          </>
        ),
      },
      { label: "Beginner", bg: "bg-[#C9E9FA]", text: "text-[#43A2DC]" },
    ],
    title: "Keyboard Fundamentals",
    instructor: "Ramya Veda",
    progress: 50,
    description:
      "Learn keyboard fundamentals including chord progressions, melody playing, and basic music production. This offline course is perfect for beginners wanting to explore electronic music.",
    rating: 4.6,
    ratingCount: 12485,
    willLearn: [
      "Basic to intermediate keyboard skills",
      "Chord progressions and harmony",
      "Music production basics",
      "Popular song arrangements",
      "Digital audio workstation introduction",
    ],
    upcoming: {
      label: "Upcoming Class",
      time: "5:00 PM, Today",
      cta: "Join Class",
    },
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=640&h=360",
    tags: [
      {
        label: (
          <>
            <span className="inline-flex items-center gap-2 bg-[#94E9B880] text-black text-xs sm:text-sm md:text-base rounded-full px-3 sm:px-4 py-0.5 sm:py-1 w-fit font-normal">
              <svg
                width="11"
                height="10"
                viewBox="0 0 11 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5852 8.95719L7.96016 3.70719C7.92901 3.64491 7.88113 3.59253 7.8219 3.55593C7.76266 3.51932 7.6944 3.49993 7.62477 3.49993C7.55513 3.49993 7.48687 3.51932 7.42764 3.55593C7.3684 3.59253 7.32052 3.64491 7.28937 3.70719L6.27172 5.74297C5.47404 5.69811 4.70656 5.42258 4.0625 4.94984C4.81817 4.14287 5.27602 3.10232 5.36047 2H6.5C6.59946 2 6.69484 1.96049 6.76517 1.89016C6.83549 1.81984 6.875 1.72446 6.875 1.625C6.875 1.52554 6.83549 1.43016 6.76517 1.35984C6.69484 1.28951 6.59946 1.25 6.5 1.25H3.875V0.5C3.875 0.400544 3.83549 0.305161 3.76516 0.234835C3.69484 0.164509 3.59946 0.125 3.5 0.125C3.40054 0.125 3.30516 0.164509 3.23484 0.234835C3.16451 0.305161 3.125 0.400544 3.125 0.5V1.25H0.5C0.400544 1.25 0.305161 1.28951 0.234835 1.35984C0.164509 1.43016 0.125 1.52554 0.125 1.625C0.125 1.72446 0.164509 1.81984 0.234835 1.89016C0.305161 1.96049 0.400544 2 0.5 2H4.60766C4.52413 2.91905 4.13401 3.78333 3.5 4.45391C3.10492 4.03703 2.80153 3.54203 2.60938 3.00078C2.59357 2.95356 2.56853 2.90995 2.53569 2.87252C2.50286 2.83508 2.4629 2.80455 2.41814 2.78272C2.37339 2.76089 2.32473 2.74819 2.27502 2.74537C2.2253 2.74255 2.17552 2.74965 2.12858 2.76628C2.08164 2.7829 2.03848 2.8087 2.00162 2.84218C1.96476 2.87567 1.93493 2.91615 1.91389 2.96128C1.89284 3.00641 1.881 3.05529 1.87904 3.10504C1.87709 3.1548 1.88506 3.20445 1.9025 3.25109C2.12622 3.88384 2.47863 4.46337 2.9375 4.95312C2.23098 5.47231 1.37676 5.75157 0.5 5.75C0.400544 5.75 0.305161 5.78951 0.234835 5.85983C0.164509 5.93016 0.125 6.02554 0.125 6.125C0.125 6.22446 0.164509 6.31984 0.234835 6.39017C0.305161 6.46049 0.400544 6.5 0.5 6.5C1.58778 6.50121 2.64437 6.13668 3.5 5.465C4.19824 6.01056 5.03176 6.35587 5.91125 6.46391L4.66437 8.95719C4.64234 9.00123 4.62919 9.04919 4.62569 9.09831C4.62218 9.14744 4.62839 9.19677 4.64395 9.2435C4.67537 9.33786 4.743 9.41588 4.83195 9.46039C4.9209 9.5049 5.02389 9.51225 5.11826 9.48082C5.21263 9.44939 5.29065 9.38176 5.33516 9.29281L5.98156 8H9.26797L9.91438 9.29281C9.94555 9.35511 9.99347 9.4075 10.0527 9.4441C10.112 9.48069 10.1803 9.50005 10.25 9.5C10.3139 9.49997 10.3768 9.4836 10.4326 9.45245C10.4884 9.42129 10.5353 9.3764 10.5689 9.32201C10.6025 9.26763 10.6216 9.20557 10.6244 9.14172C10.6273 9.07786 10.6138 9.01435 10.5852 8.95719ZM6.35656 7.25L7.625 4.71359L8.89297 7.25H6.35656Z"
                  fill="black"
                />
              </svg>
              Language
            </span>
          </>
        ),
      },
      { label: "Advanced", bg: "bg-[#FF6F614D]", text: "text-[black]" },
    ],
    title: "Spanish For Business",
    instructor: "Pedro Avenz",
    progress: 60,
    description: "Master Spanish for business communication and negotiations.",
    rating: 4.8,
    ratingCount: 9987,
    willLearn: [
      "Professional Spanish communication",
      "Business vocabulary",
      "Real-world simulations",
    ],
    upcoming: {
      label: "Upcoming Class",
      time: "3:00 PM, Today",
      cta: "Join Class",
    },
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=640&h=360",
    tags: [
      {
        label: (
          <>
            <span className="inline-flex items-center gap-2 bg-[#FFD36E80] text-black text-xs sm:text-sm md:text-base rounded-full px-3 sm:px-4 py-0.5 sm:py-1 w-fit font-normal">
              <svg
                width="9"
                height="11"
                viewBox="0 0 9 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.99988 3.125C4.29655 3.125 4.58656 3.03703 4.83323 2.87221C5.07991 2.70738 5.27217 2.47312 5.3857 2.19903C5.49923 1.92494 5.52893 1.62334 5.47106 1.33237C5.41318 1.04139 5.27032 0.774119 5.06054 0.56434C4.85076 0.354562 4.58349 0.211701 4.29251 0.153823C4.00154 0.0959449 3.69994 0.12565 3.42585 0.239181C3.15176 0.352713 2.9175 0.544972 2.75267 0.791645C2.58785 1.03832 2.49988 1.32833 2.49988 1.625C2.49988 2.02283 2.65791 2.40436 2.93922 2.68566C3.22052 2.96697 3.60205 3.125 3.99988 3.125ZM3.99988 0.875001C4.14821 0.875001 4.29322 0.918988 4.41656 1.0014C4.53989 1.08381 4.63602 1.20094 4.69279 1.33799C4.74955 1.47503 4.76441 1.62583 4.73547 1.77132C4.70653 1.9168 4.6351 2.05044 4.53021 2.15533C4.42532 2.26022 4.29168 2.33165 4.1462 2.36059C4.00071 2.38953 3.84991 2.37468 3.71287 2.31791C3.57582 2.26114 3.45869 2.16502 3.37628 2.04168C3.29387 1.91834 3.24988 1.77334 3.24988 1.625C3.24988 1.42609 3.3289 1.23532 3.46955 1.09467C3.6102 0.954018 3.80097 0.875001 3.99988 0.875001ZM8.41738 4.18484C8.35533 4.26252 8.26497 4.31238 8.16617 4.32345C8.06737 4.33453 7.96821 4.30592 7.8905 4.24391C7.8366 4.20219 6.7791 3.41422 5.10988 4.2725C5.09675 4.74945 5.04976 5.22487 4.96925 5.69516L6.48941 6.96078C6.54741 7.00907 6.58949 7.07374 6.61015 7.14634C6.63081 7.21893 6.62908 7.29606 6.60519 7.36766L5.85519 9.61766C5.82374 9.71202 5.75609 9.79002 5.66713 9.8345C5.57816 9.87898 5.47518 9.8863 5.38082 9.85485C5.28646 9.82339 5.20846 9.75574 5.16398 9.66678C5.11949 9.57782 5.11218 9.47483 5.14363 9.38047L5.81253 7.37328L4.77753 6.51078C4.70992 6.7388 4.63012 6.96303 4.53847 7.1825C3.89394 8.71719 2.73941 9.74328 1.10722 10.2331C1.01278 10.2591 0.911922 10.2471 0.826212 10.1997C0.740502 10.1523 0.676746 10.0732 0.648578 9.97941C0.620409 9.88559 0.630065 9.78448 0.675479 9.6977C0.720894 9.61091 0.798463 9.54534 0.891597 9.515C3.73597 8.66141 4.22628 6.12969 4.33316 4.75016C3.06238 5.55688 2.05785 5.75 1.39175 5.75C1.07798 5.75106 0.766275 5.69924 0.469722 5.59672C0.390397 5.56206 0.325507 5.50102 0.286062 5.42396C0.246618 5.3469 0.23505 5.25857 0.253321 5.17395C0.271591 5.08933 0.318575 5.01364 0.386299 4.95972C0.454024 4.9058 0.538318 4.87697 0.624879 4.87813C0.678477 4.87805 0.73144 4.88973 0.780035 4.91234C0.780035 4.91234 2.03441 5.41297 4.16394 3.96547C6.61504 2.29953 8.28894 3.60125 8.35972 3.6575C8.39815 3.68833 8.43012 3.72643 8.45381 3.76962C8.47751 3.81282 8.49246 3.86026 8.49781 3.90923C8.50317 3.9582 8.49882 4.00775 8.48502 4.05504C8.47122 4.10233 8.44823 4.14644 8.41738 4.18484Z"
                  fill="black"
                />
              </svg>
              Dance
            </span>
          </>
        ),
      },
      { label: "Intermediate", bg: "bg-[#FFD36E80]", text: "text-[black]" },
    ],
    title: "Bharatnatyam for Beginners",
    instructor: "Keerthi Ramakrishnan",
    progress: 20,
    description: "Start your classical dance journey with Bharatnatyam basics.",
    rating: 4.7,
    ratingCount: 4344,
    willLearn: ["Fundamentals of Bharatnatyam", "Basic mudras and postures"],
    upcoming: {
      label: "Upcoming Class",
      time: "6:30 PM, Today",
      cta: "Join Class",
    },
  },
];

// --- COURSE CARD COMPONENT ---
function CourseCard({
  id,
  image,
  tags,
  title,
  instructor,
  progress,
  onViewDetails,
}) {
  return (
    <div className="flex flex-col lg:flex-row bg-white rounded-2xl border border-[#ece9fc] shadow-sm w-full min-h-[135px] max-w-[650px]">
      {/* Image section */}
      <div className="flex-none h-[135px] w-full lg:w-[185px] rounded-t-2xl rounded-b-none lg:rounded-l-2xl lg:rounded-tr-none overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none"
        />
      </div>

      {/* Content section */}
      <div className="flex flex-1 flex-col justify-between py-5 px-5 lg:pl-5 lg:pr-6">
        <div>
          {/* Tags */}
          <div className="flex flex-wrap gap-x-2 gap-y-1 mb-1">
            {tags.map((t, idx) => (
              <span
                key={idx}
                className={`inline-flex items-center font-normal text-[10px] sm:text-[12px] md:text-[14px] h-[20px] sm:h-[22px] px-2 ${
                  t.bg || ""
                } ${t.text || ""} rounded`}
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

          {/* Progress bar */}
          <div className="flex items-center">
            <div className="relative flex-1 mr-2">
              <div className="h-[2px] bg-[#E1E2E9] rounded-full w-full"></div>
              <div
                className="absolute top-0 left-0 h-[2px] bg-[#23243C] rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-xs font-semibold text-black/40 select-none w-8 text-right">
              {progress}%
            </span>
          </div>
        </div>

        {/* View Details Button */}
        <div className="mt-5">
          <button
            onClick={() => onViewDetails(id)}
            className="border border-[#e2e8f0] hover:border-[#23243C] text-sm sm:text-base px-5 py-1.5 rounded-full font-semibold flex items-center gap-2 transition-all shadow-sm w-full sm:w-auto justify-center"
          >
            View Details <span className="text-xl">&#8594;</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CoursePage() {
  const [courses] = useState(dummyCourses);
  const [selected, setSelected] = useState(null);

  const handleViewDetails = (id) => {
    setSelected(id);
  };

  const handleBack = () => {
    setSelected(null);
  };

  if (selected) {
    const course = courses.find((c) => c.id === selected);
    return <CourseDetails course={course} onBack={handleBack} />;
  }

  // Course List page
  return (
    <div className="min-h-screen bg-[#fafafb] px-4 sm:px-8 py-6 font-sans flex justify-center">
      <div className="w-full max-w-screen-xl">
        <nav className="flex items-center text-[14px] sm:text-[15px] text-black/40 mb-4 gap-2 flex-wrap">
          <span className="font-semibold text-black/70">Home</span>
          <span>/</span>
          <span className="font-semibold text-black/60">My Courses</span>
        </nav>
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">My Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 md:gap-x-8 gap-y-6 w-full">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              {...course}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
