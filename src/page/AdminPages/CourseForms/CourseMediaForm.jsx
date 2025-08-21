import React, { useState } from 'react';
import { FaTimes, FaCloudUploadAlt, FaImage } from 'react-icons/fa';

const CourseMediaForm = () => {
    const [files, setFiles] = useState([]);

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        setFiles((prev) => [...prev, ...selectedFiles]);
    };

    const handleRemoveFile = (index) => {
        setFiles((prev) => prev.filter((_, i) => i !== index));
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const droppedFiles = Array.from(e.dataTransfer.files);
        setFiles((prev) => [...prev, ...droppedFiles]);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    return (
        <div className="max-w-5xl mx-auto p-6 space-y-6">
            {/* Upload Section */}
            <div
                className="border-2 border-dashed border-gray-300 rounded-2xl bg-gray-50 p-6 flex flex-col items-center justify-center text-gray-500 cursor-pointer"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
            >
                <FaImage size={36} className="mb-2" />
                <p className="text-sm">Drag and drop images or videos here, or click to browse</p>
                <label className="mt-3 inline-flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-sm px-4 py-1.5 rounded-full cursor-pointer transition">
                    <FaCloudUploadAlt />
                    Upload
                    <input
                        type="file"
                        multiple
                        accept="image/*,video/*"
                        onChange={handleFileChange}
                        className="hidden"
                    />
                </label>
            </div>

            {/* File Previews */}
            {files.length > 0 && (
                <div className="flex flex-wrap gap-4">
                    {files.map((file, index) => (
                        <div
                            key={index}
                            className="relative flex items-center border border-gray-200 px-4 py-2 rounded-full bg-white text-sm text-gray-700"
                        >
                            <span className="truncate max-w-[120px]">{file.name}</span>
                            <button
                                onClick={() => handleRemoveFile(index)}
                                className="ml-2 text-gray-400 hover:text-red-500"
                            >
                                <FaTimes size={12} />
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CourseMediaForm;
