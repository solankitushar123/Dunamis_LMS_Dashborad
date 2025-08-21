import { Link } from "react-router-dom";
import { useState } from "react";
import { FaFilter, FaSort, FaPlus, FaCopy, FaRegClock } from "react-icons/fa";

const ContentManagement = () => {
  const [courses, setCourses] = useState([
    {
      id: "MUS84943",
      category: "Music",
      title: "Keyboard Fundamentals",
      duration: 12,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatio...",
      avatar: "https://i.pravatar.cc/40?u=a042581f4e29026704d",
    },
    {
      id: "DAN84943",
      category: "Dance",
      title: "Bharatnatyam for Beginners",
      duration: 25,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatio...",
      avatar: "https://i.pravatar.cc/40?u=a042581f4e29026704e",
    },
    {
      id: "MUS94943",
      category: "Music",
      title: "Drums for Everyone",
      duration: 12,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatio...",
      avatar: "https://i.pravatar.cc/40?u=a042581f4e29026704f",
    },
    {
      id: "LAN84943",
      category: "Language",
      title: "Spanish for Business",
      duration: 8,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatio...",
      avatar: "https://i.pravatar.cc/40?u=a042581f4e29026704a",
    },
    {
      id: "MUS84944",
      category: "Music",
      title: "Keyboard Fundamentals",
      duration: 12,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatio...",
      avatar: "https://i.pravatar.cc/40?u=a042581f4e29026704d",
    },
    {
      id: "MUS84945",
      category: "Music",
      title: "Keyboard Fundamentals",
      duration: 12,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatio...",
      avatar: "https://i.pravatar.cc/40?u=a042581f4e29026704d",
    },
    {
      id: "MUS84946",
      category: "Music",
      title: "Keyboard Fundamentals",
      duration: 12,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatio...",
      avatar: "https://i.pravatar.cc/40?u=a042581f4e29026704d",
    },
    {
      id: "MUS84947",
      category: "Music",
      title: "Keyboard Fundamentals",
      duration: 12,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatio...",
      avatar: "https://i.pravatar.cc/40?u=a042581f4e29026704d",
    },
    {
      id: "MUS84948",
      category: "Music",
      title: "Keyboard Fundamentals",
      duration: 12,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatio...",
      avatar: "https://i.pravatar.cc/40?u=a042581f4e29026704d",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("Active");

  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getCategoryStyle = (category) => {
    if (category === "Music")
      return { class: "bg-blue-100 text-blue-800", icon: "♫" };
    if (category === "Dance")
      return { class: "bg-yellow-100 text-yellow-800", icon: "💃" };
    if (category === "Language")
      return { class: "bg-green-100 text-green-800", icon: "文" };
    return { class: "bg-gray-100 text-gray-800", icon: "✦" };
  };

  return (
    <div className="bg-[#F9F9F9] p-4">
      <nav className="flex items-center justify-between py-2">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-96 p-2 border border-gray-300 rounded-md focus:outline-none bg-white"
        />
        <div className="flex items-center gap-4">
          <button className="text-gray-600 text-xl">
            <FaFilter />
          </button>
          <button className="text-gray-600 text-xl">
            <FaSort />
          </button>
          <Link to="/admin/content/create">
            <button className="px-4 py-2 bg-black text-white rounded-md flex items-center gap-2">
              <FaPlus /> Add Content
            </button>
          </Link>
        </div>
      </nav>
      <div className="flex space-x-4 mb-4 mt-4">
        <button
          className={`font-semibold pb-2 ${
            activeTab === "Active"
              ? "text-black border-b-2 border-black"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("Active")}
        >
          Active
        </button>
        <button
          className={`font-semibold pb-2 ${
            activeTab === "Drafts"
              ? "text-black border-b-2 border-black"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("Drafts")}
        >
          Drafts
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => {
          const style = getCategoryStyle(course.category);
          return (
            <Link
              to={`/admin/content/details/${course.id}`}
              key={course.id}
              className="block"
            >
              <div className="bg-white rounded-lg p-4 hover:shadow-xl transition-shadow border border-gray-200 h-full flex flex-col">
                <div className="flex justify-between items-start">
                  <span
                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${style.class}`}
                  >
                    {style.icon} {course.category}
                  </span>
                  <span className="text-gray-500 text-sm flex items-center gap-1">
                    <FaRegClock /> {course.duration}
                  </span>
                </div>
                <h3 className="text-lg font-bold mt-3">{course.title}</h3>
                <p className="text-sm text-gray-600 mt-1 flex-grow">
                  {course.description}
                </p>
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
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
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ContentManagement;
