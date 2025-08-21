// ALL DATA WILL BE FETCHED CONTENT MGMT. USING COURSE CODE
import React, { useState } from 'react';

const CourseInfoForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        code: '',
        description: '',
        category: '',
        subCategory: '',
        mode: '',
        courseType: '',
        level: '',
        certification: '',
        startDate: '',
        endDate: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Course Name */}
            <div>
                <label className="block text-sm font-medium mb-1">Course Name</label>
                <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded-2xl bg-gray-100"
                />
            </div>

            {/* Course Code */}
            <div>
                <label className="block text-sm font-medium mb-1">Course Code</label>
                <input
                    name='code'
                    value={formData.code}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded-2xl bg-gray-100"
                />
            </div>

            {/* Course Description - Centered full width */}
            <div className="col-span-full mt-2">
                <label className="block text-sm font-medium mb-1">Course Description</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded-2xl bg-gray-100 h-28 resize-none text-sm"
                    maxLength={200}
                />
                <p className="text-right text-xs text-gray-400 mt-1">
                    {formData.description.length}/200
                </p>
            </div>

            {/* Category */}
            <div>
                <label className="block text-sm font-medium mb-1">Category</label>
                <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded-2xl bg-gray-100"
                >
                    <option value="">Select a category</option>
                    {/* Dynamic categories */}
                </select>
            </div>

            {/* Sub-category */}
            <div>
                <label className="block text-sm font-medium mb-1">Sub-category</label>
                <select
                    name="subCategory"
                    value={formData.subCategory}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded-2xl bg-gray-100"
                >
                    <option value="">Select a sub-category</option>
                </select>
            </div>

            {/* Mode */}
            <div>
                <label className="block text-sm font-medium mb-1">Mode</label>
                <select
                    name="mode"
                    value={formData.mode}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded-2xl bg-gray-100"
                >
                    <option value="">Select a mode</option>
                    <option value="Online">Online</option>
                    <option value="Offline">Offline</option>
                </select>
            </div>

            {/* Course Type */}
            <div>
                <label className="block text-sm font-medium mb-1">Course Type</label>
                <select
                    name="courseType"
                    value={formData.courseType}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded-2xl bg-gray-100"
                >
                    <option value="">Select type</option>
                    <option value="Fixed">Fixed</option>
                    <option value="Running">Running</option>
                </select>
            </div>

            {/* Level */}
            <div>
                <label className="block text-sm font-medium mb-1">Level</label>
                <select
                    name="level"
                    value={formData.level}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded-2xl bg-gray-100"
                >
                    <option value="">Select a level</option>
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                </select>
            </div>

            {/* Certification */}
            <div>
                <label className="block text-sm font-medium mb-1">Certification</label>
                <select
                    name="certification"
                    value={formData.certification}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded-2xl bg-gray-100"
                >
                    <option value="">Select certification</option>
                    <option value="Certificate">Certificate</option>
                    <option value="None">Non-certificate</option>
                </select>
            </div>

            {/* Start Date */}
            <div>
                <label className="block text-sm font-medium mb-1">Start Date</label>
                <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded-2xl bg-gray-100"
                />
            </div>

            {/* End Date */}
            <div>
                <label className="block text-sm font-medium mb-1">End Date</label>
                <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded-2xl bg-gray-100"
                />
            </div>
        </div>
    );
};

export default CourseInfoForm;
