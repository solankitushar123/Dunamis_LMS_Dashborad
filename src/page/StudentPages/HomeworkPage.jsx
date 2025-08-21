// src/page/StudentPages/HomeworkPage.jsx
import React from "react";

const homeworkList = [
  {
    id: 1,
    course: "Keyboard Fundamentals",
    sessionDate: "2025-06-10",
    feedback: "Great progress, keep practicing finger placement.",
  },
  {
    id: 2,
    course: "Bharatnatyam for Beginners",
    sessionDate: "2025-06-08",
    feedback: "Focus on posture and rhythm.",
  },
];

export default function HomeworkPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Homework & Feedback</h1>
      <div className="space-y-4">
        {homeworkList.map((hw) => (
          <div
            key={hw.id}
            className="bg-white p-4 rounded shadow flex flex-col space-y-2"
          >
            <p className="font-semibold">{hw.course}</p>
            <p className="text-sm text-gray-600">
              Session Date: {hw.sessionDate}
            </p>
            <p className="text-gray-700">{hw.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
