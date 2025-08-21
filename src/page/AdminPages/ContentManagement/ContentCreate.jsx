import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaTrash, FaBars, FaEdit } from "react-icons/fa";

const ContentCreate = ({ isEdit = false, initialCourse = null }) => {
  const navigate = useNavigate();
  const [courseName, setCourseName] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [curriculum, setCurriculum] = useState([
    {
      moduleName: "Module 1",
      lessons: [
        {
          lessonName: "Lesson 1.1",
          topics: [{ topicName: "Topic 1.1.1", desc: "" }],
        },
      ],
    },
  ]);

  useEffect(() => {
    if (isEdit && initialCourse) {
      setCourseName(initialCourse.title || "");
      setCourseCode(initialCourse.id || "");
      setDescription(initialCourse.description || "");
      setCategory(initialCourse.category || "");
      setSubCategory(initialCourse.subcategory || "");
      setCurriculum(
        initialCourse.curriculum.length > 0 ? initialCourse.curriculum : []
      );
      setCurriculum(
        initialCourse.curriculum.length > 0
          ? initialCourse.curriculum.map((mod) => ({
              ...mod,
              duration: mod.duration || "",
            }))
          : []
      );
    }
  }, [isEdit, initialCourse]);

  const addModule = () => {
    setCurriculum([
      ...curriculum,
      {
        moduleName: `Module ${curriculum.length + 1}`,
        duration: "",
        lessons: [],
      },
    ]);
  };

  const addLesson = (moduleIdx) => {
    const newCurriculum = [...curriculum];
    newCurriculum[moduleIdx].lessons.push({
      lessonName: `Lesson ${moduleIdx + 1}.${
        newCurriculum[moduleIdx].lessons.length + 1
      }`,
      topics: [],
    });
    setCurriculum(newCurriculum);
  };

  const addTopic = (moduleIdx, lessonIdx) => {
    const newCurriculum = [...curriculum];
    newCurriculum[moduleIdx].lessons[lessonIdx].topics.push({
      topicName: `Topic ${moduleIdx + 1}.${lessonIdx + 1}.${
        newCurriculum[moduleIdx].lessons[lessonIdx].topics.length + 1
      }`,
      desc: "",
    });
    setCurriculum(newCurriculum);
  };

  const handleSave = () => {
    console.log("Saving course...");
    navigate("/admin/content-management");
  };

  const title = isEdit ? "Content Details" : "Create New Content";

  return (
    <div className="bg-[#F9F9F9] p-6">
      <div className="bg-gray-200/50 p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-6">{title}</h2>

        {/* Course Details Section */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded-md bg-gray-50"
            placeholder="Course Name"
          />
          <input
            type="text"
            value={courseCode}
            onChange={(e) => setCourseCode(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded-md bg-gray-50"
            placeholder="Course Code"
          />
        </div>
        <div className="mb-4 relative">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded-md bg-gray-50 h-24"
            placeholder="Course Description"
            maxLength="200"
          />
          <span className="absolute bottom-2 right-2 text-xs text-gray-400">
            {description.length}/200
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded-md bg-gray-50"
          >
            <option>Select a category</option>
            <option>Music</option>
            <option>Dance</option>
            <option>Language</option>
          </select>
          <select
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded-md bg-gray-50"
          >
            <option>Select a sub-category</option>
            <option>Keyboard</option>
            <option>Bharatanatyam</option>
          </select>
        </div>
      </div>
      <div className="bg-gray-200/50 p-6 rounded-lg shadow-sm mt-5">
        <h3 className="text-lg font-semibold">Curriculum</h3>

        {curriculum.map((module, mIdx) => (
          <div key={mIdx} className="bg-gray-100 rounded-lg p-3 mb-4">
            <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
              <div className="flex items-center gap-2 w-full md:w-1/3">
                <FaBars className="text-gray-400 cursor-grab" />
                <input
                  type="text"
                  value={module.duration}
                  onChange={(e) => {
                    const updated = [...curriculum];
                    updated[mIdx].duration = e.target.value;
                    setCurriculum(updated);
                  }}
                  className="p-2 border border-gray-300 rounded-md w-full"
                  placeholder="Duration (e.g., 2w)"
                />
              </div>
              <div className="flex items-center gap-2 w-full md:flex-1">
                <input
                  type="text"
                  value={module.moduleName}
                  onChange={(e) => {
                    const updated = [...curriculum];
                    updated[mIdx].moduleName = e.target.value;
                    setCurriculum(updated);
                  }}
                  className="flex-1 p-2 border border-gray-300 rounded-md"
                  placeholder="Module Name"
                />
                <FaEdit className="text-gray-500 cursor-pointer" title="Edit" />
                <button
                  className="text-gray-500"
                  onClick={() => {
                    const updated = curriculum.filter((_, i) => i !== mIdx);
                    setCurriculum(updated);
                  }}
                >
                  <FaTrash />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-2">
              <FaBars className="text-gray-400 cursor-grab" />
              <input
                type="text"
                value={module.moduleName}
                className="flex-1 p-2 border border-gray-300 rounded-md"
                placeholder="Module Name"
              />
              <button className="text-gray-500">
                <FaTrash />
              </button>
            </div>
            {module.lessons.map((lesson, lIdx) => (
              <div
                key={lIdx}
                className="ml-6 bg-gray-200/50 rounded-lg p-3 my-2"
              >
                <div className="flex items-center gap-2 mb-2">
                  <FaBars className="text-gray-400 cursor-grab" />
                  <input
                    type="text"
                    value={lesson.lessonName}
                    className="flex-1 p-2 border border-gray-300 rounded-md"
                    placeholder="Lesson Name"
                  />
                  <button className="text-gray-500">
                    <FaTrash />
                  </button>
                </div>
                {lesson.topics.map((topic, tIdx) => (
                  <div key={tIdx} className="ml-6 bg-white rounded-lg p-3 my-2">
                    <div className="flex items-start gap-2">
                      <FaBars className="text-gray-400 mt-3 cursor-grab" />
                      <div className="flex-1">
                        <input
                          type="text"
                          value={topic.topicName}
                          className="block w-full p-2 border border-gray-300 rounded-md mb-2"
                          placeholder="Topic Name"
                        />
                        <textarea
                          value={topic.desc}
                          className="block w-full p-2 border border-gray-300 rounded-md h-16"
                          placeholder="Description"
                        />
                      </div>
                      <button className="text-gray-500 mt-1">
                        <FaTrash />
                      </button>
                    </div>
                    <button
                      onClick={() => addTopic(mIdx, lIdx)}
                      className="ml-6 mt-2 text-sm text-blue-600 font-semibold flex items-center gap-1"
                    >
                      <FaPlus /> Add Topic
                    </button>
                  </div>
                ))}

                <button
                  onClick={() => addLesson(mIdx)}
                  className="ml-6 mt-2 text-sm text-blue-600 font-semibold flex items-center gap-1"
                >
                  <FaPlus /> Add Lesson
                </button>
              </div>
            ))}
          </div>
        ))}

        <button
          onClick={addModule}
          className="mt-4 text-sm text-blue-600 font-semibold flex items-center gap-1"
        >
          <FaPlus /> Add Module
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-3 mt-8">
        <button
          onClick={() => navigate("/admin/content-management")}
          className="px-6 py-2 text-gray-800 bg-white border border-gray-300 rounded-lg font-semibold"
        >
          Cancel
        </button>
        <button className="px-6 py-2 text-gray-800 bg-gray-200 rounded-lg font-semibold">
          Save Draft
        </button>
        <button
          onClick={handleSave}
          className="px-6 py-2 text-white bg-black rounded-lg font-semibold"
        >
          Save Content
        </button>
      </div>
    </div>
  );
};

export default ContentCreate;
