// components/CourseCard.jsx
import React from 'react';
import { FaUsers, FaHeart, FaRupeeSign, FaMap, FaMapPin, FaLocationArrow } from 'react-icons/fa';
import { FaLocationDot, FaLocationPin, FaLocationPinLock } from 'react-icons/fa6';

const CourseCard = ({
    image,
    category,
    level,
    title,
    status,
    description,
    students,
    locations,
    price,
    avatars,
}) => {
    return (
        <div className="bg-white rounded-xl shadow-sm border p-4 w-full max-w-sm">
            <img src={image} alt={title} className="rounded-md w-full h-40 object-cover mb-3" />

            <div className="flex gap-2 mb-2">
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">{category}</span>
                <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full">{level}</span>
                <span
                    className={`text-xs ${status === 'Online'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-200 text-gray-700'
                        } px-2 py-0.5 rounded-full`}
                >
                    {status}
                </span>
            </div>

            <h3 className="font-semibold text-md mb-1">{title}</h3>
            <p className="text-sm text-gray-500 line-clamp-2">{description}</p>

            <div className="flex items-center justify-between text-sm mt-3">
                <div className="flex -space-x-2">
                    {avatars.map((avatar, idx) => (
                        <img
                            key={idx}
                            src={avatar}
                            className="w-6 h-6 rounded-full border-2 border-white"
                            alt="user"
                        />
                    ))}
                </div>
                <div className="flex gap-3 text-gray-600 items-center">
                    <span className="flex items-center gap-1">
                        <FaUsers className="text-xs text-blue-500" /> {students}
                    </span>
                    <span className="flex items-center gap-1">
                        <FaLocationDot className="text-xs text-red-500" /> {locations}
                    </span>
                    <span className="flex items-center gap-1">
                        <FaRupeeSign className="text-xs text-green-500" /> {price}/mo
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
