import { useParams, Link } from "react-router-dom";
import { FaEdit, FaRegClock, FaCopy, FaChevronDown } from "react-icons/fa";

const ContentDetails = () => {
  const { id } = useParams();

  const course = {
    id: "MUS84943",
    category: "Music",
    subcategory: "Keyboard",
    title: "Keyboard Fundamentals",
    duration: 12,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    avatar: "https://i.pravatar.cc/40?u=a042581f4e29026704d",
    curriculum: [
      {
        duration: "2w",
        moduleName: "Module 1: Name of Module",
        lessons: [
          {
            lessonName: "Lesson 1.1: Name of Lesson",
            topics: [
              {
                topicName: "Topic 1.1.1: Name of Topic",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor...",
              },
              {
                topicName: "Topic 1.1.2: Name of Topic",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor...",
              },
            ],
          },
          {
            lessonName: "Lesson 1.2: Name of Lesson",
            topics: [
              {
                topicName: "Topic 1.2.1: Name of Topic",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor...",
              },
            ],
          },
        ],
      },
      {
        duration: "2w",
        moduleName: "Module 2: Name of Module",
        lessons: [
          {
            lessonName: "Lesson 2.1: Name of Lesson",
            topics: [
              {
                topicName: "Topic 2.1.1: Name of Topic",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor...",
              },
            ],
          },
        ],
      },
    ],
  };

  if (!course) return <div>Course not found</div>;

  const getCategoryStyle = (category) => {
    if (category === "Music")
      return { class: "bg-blue-100 text-blue-800", icon: "♫" };
    return { class: "bg-gray-100 text-gray-800", icon: "✦" };
  };

  const style = getCategoryStyle(course.category);

  return (
    <div className="bg-[#F9F9F9] p-0">
      <div className="flex justify-end mb-4">
        <Link to={`/admin/content/edit/${course.id}`}>
          <button className="px-4 py-2 bg-black text-white rounded-md flex items-center gap-2">
            <FaEdit /> Edit Content
          </button>
        </Link>
      </div>
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-2">
          <span
            className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${style.class}`}
          >
            {style.icon} {course.category}
          </span>
          <h1 className="text-xl font-semibold">{course.title}</h1>
          <span className="text-gray-500 text-sm flex items-center gap-1">
            <FaRegClock /> {course.duration}
          </span>
        </div>
        <div className="flex justify-between items-center mb-6">
          <img
            src={course.avatar}
            alt="avatar"
            className="w-8 h-8 rounded-full"
          />
          <div className="flex items-center gap-2">
            <span className="text-gray-500 text-sm">{course.id}</span>
            <FaCopy className="text-gray-500 cursor-pointer" />
          </div>
        </div>
        <p className="text-sm text-gray-600 mb-6">{course.description}</p>

        <div className="space-y-2">
          {course.curriculum.map((module, mIdx) => (
            <details key={mIdx} className="bg-gray-50 rounded-lg border" close>
              <summary className="p-3 flex items-center cursor-pointer list-none">
                <FaChevronDown className="text-gray-500 mr-2" />
                <span className="text-gray-500 text-sm mr-4">
                  <FaRegClock className="inline-block mr-1" />
                  {module.duration}
                </span>
                <span className="font-semibold flex-1">
                  {module.moduleName}
                </span>
              </summary>

              <div className="p-4 border-t border-gray-200 space-y-2">
                {module.lessons.map((lesson, lIdx) => (
                  <details key={lIdx} className="" close>
                    <summary className="p-3 flex items-center cursor-pointer list-none">
                      <FaChevronDown className="text-gray-500 mr-2" />
                      <span className="font-medium flex-1">
                        {lesson.lessonName}
                      </span>
                    </summary>

                    <div className="p-3 border-t border-gray-200 space-y-2">
                      {lesson.topics.map((topic, tIdx) => (
                        <div key={tIdx} className="bg-gray-50 rounded-md p-3">
                          <span className="text-sm font-semibold block">
                            {topic.topicName}
                          </span>
                          <p className="text-sm text-gray-600 mt-1">
                            {topic.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentDetails;
