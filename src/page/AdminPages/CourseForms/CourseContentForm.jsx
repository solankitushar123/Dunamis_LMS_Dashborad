import React, { useState } from 'react';
import {
    FaChevronDown,
    FaChevronUp,
    FaFolder,
    FaFileAlt,
    FaRegEdit,
} from 'react-icons/fa';

const CourseContentForm = () => {
    const [objective, setObjective] = useState('');
    const [objectives, setObjectives] = useState([]);
    const [isCurriculumOpen, setIsCurriculumOpen] = useState(true);

    const handleAddObjective = () => {
        if (objective.trim() !== '') {
            setObjectives([...objectives, objective.trim()]);
            setObjective('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleAddObjective();
        }
    };

    return (
        <div className="grid grid-cols-1 gap-6 max-w-5xl mx-auto">
            {/* Learning Objectives */}
            <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">Learning Objectives</label>
                <div className="relative">
                    <input
                        type="text"
                        value={objective}
                        onChange={(e) => setObjective(e.target.value)}
                        onKeyPress={handleKeyPress}
                        maxLength={200}
                        className="w-full border px-3 py-2 rounded-2xl bg-gray-100"
                    />
                    <span className="absolute bottom-2 right-3 text-xs text-gray-400">
                        {objective.length}/200
                    </span>
                </div>
                <button
                    onClick={handleAddObjective}
                    className="mt-2 text-sm bg-gray-200 px-4 py-1 rounded-full hover:bg-gray-300 transition"
                >
                    Add
                </button>

                {/* Displayed Objectives */}
                <div className="space-y-2 mt-3">
                    {objectives.map((obj, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 text-sm px-4 py-2 rounded-2xl text-gray-700"
                        >
                            {obj}
                        </div>
                    ))}
                </div>
            </div>

            {/* Curriculum Section */}
            <div className="space-y-3">
                <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => setIsCurriculumOpen(!isCurriculumOpen)}
                >
                    <label className="text-sm font-medium text-gray-700">Curriculum</label>
                    {isCurriculumOpen ? <FaChevronUp size={16} /> : <FaChevronDown size={16} />}
                </div>

                {isCurriculumOpen && (
                    <div className="space-y-6 border border-gray-200 rounded-2xl bg-white p-4">
                        {/* Module 1 */}
                        <div>
                            <div className="flex items-center gap-2 text-yellow-600 font-medium text-sm mb-2">
                                <FaFolder />
                                <span>Module 1: Name of Module</span>
                            </div>

                            {/* Lesson 1.1 */}
                            <div className="ml-6 mt-3 space-y-1">
                                <div className="flex items-center gap-2 text-green-600 font-medium text-sm">
                                    <FaFileAlt />
                                    <span>Lesson 1.1: Name of Lesson</span>
                                </div>

                                {/* Topics */}
                                <div className="ml-6 mt-1 text-sm text-gray-600 space-y-3">
                                    <div>
                                        <div className="flex items-center gap-2 font-medium text-gray-700">
                                            <FaRegEdit />
                                            <span>Topic 1.1.1: Name of Topic</span>
                                        </div>
                                        <p className="text-gray-500 ml-5 text-sm">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor...
                                        </p>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 font-medium text-gray-700">
                                            <FaRegEdit />
                                            <span>Topic 1.1.2: Name of Topic</span>
                                        </div>
                                        <p className="text-gray-500 ml-5 text-sm">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor...
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Lesson 1.2 */}
                            <div className="ml-6 mt-6 space-y-1">
                                <div className="flex items-center gap-2 text-green-600 font-medium text-sm">
                                    <FaFileAlt />
                                    <span>Lesson 1.2: Name of Lesson</span>
                                </div>

                                {/* Topics */}
                                <div className="ml-6 mt-1 text-sm text-gray-600 space-y-3">
                                    <div>
                                        <div className="flex items-center gap-2 font-medium text-gray-700">
                                            <FaRegEdit />
                                            <span>Topic 1.2.1: Name of Topic</span>
                                        </div>
                                        <p className="text-gray-500 ml-5 text-sm">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor...
                                        </p>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 font-medium text-gray-700">
                                            <FaRegEdit />
                                            <span>Topic 1.2.2: Name of Topic</span>
                                        </div>
                                        <p className="text-gray-500 ml-5 text-sm">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor...
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CourseContentForm;
