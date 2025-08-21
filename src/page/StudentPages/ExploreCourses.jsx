// src/page/StudentPages/ExploreCourses.jsx
import React from "react";

const courses = [
  {
    id: 1,
    name: "Keyboard Fundamentals",
    level: "Beginner",
    description: "Learn basic keyboard skills and music production.",
  },
  {
    id: 2,
    name: "Bharatnatyam for Beginners",
    level: "Beginner to Intermediate",
    description: "Traditional Indian dance lessons.",
  },
];

export default function ExploreCourses() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Explore Courses</h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-lg shadow p-4 flex flex-col"
          >
            <h2 className="font-semibold text-lg mb-2">{course.name}</h2>
            <p className="text-gray-600 mb-2">{course.description}</p>
            <p className="text-sm text-gray-500 mb-4">Level: {course.level}</p>
            <button className="mt-auto bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
              Enroll
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
