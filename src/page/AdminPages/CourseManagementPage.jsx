import React, { useEffect, useState } from 'react';
import CourseCard from '../../components/CourseCard';
import { FaTh, FaList, FaSortAmountDown, FaFilter, FaPlus, FaSearch } from 'react-icons/fa';
import Pagination from '../../components/Pagination';
import { useNavigate } from 'react-router-dom';


const dummyCourses = [
    {
        image: 'https://tse3.mm.bing.net/th/id/OIP.wP9pUL9Zb9ivDYL0o0nrEwAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        category: 'Music',
        level: 'Beginner',
        title: 'Keyboard Fundamentals',
        status: 'Online',
        description: 'Learn the basics of keyboard playing with step-by-step tutorials and exercises.',
        students: 64,
        locations: 3,
        price: '64,082',
        avatars: [
            'https://i.pravatar.cc/30?img=1',
            'https://i.pravatar.cc/30?img=2',
            'https://i.pravatar.cc/30?img=3',
        ],
    },
    {
        image: 'https://tse3.mm.bing.net/th/id/OIP.wP9pUL9Zb9ivDYL0o0nrEwAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        category: 'Language',
        level: 'Intermediate to Advanced',
        title: 'Spanish for Business',
        status: 'Online',
        description: 'Master business Spanish and enhance your communication in professional settings.',
        students: 92,
        locations: 2,
        price: '1,52,545',
        avatars: [
            'https://i.pravatar.cc/30?img=4',
            'https://i.pravatar.cc/30?img=5',
            'https://i.pravatar.cc/30?img=6',
        ],
    },
    {
        image: 'https://tse3.mm.bing.net/th/id/OIP.wP9pUL9Zb9ivDYL0o0nrEwAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        category: 'Dance',
        level: 'Beginner to Intermediate',
        title: 'Bharatanatyam for Beginners',
        status: 'Offline',
        description: 'Dive into the world of classical Indian dance and learn the foundations of Bharatanatyam.',
        students: 61,
        locations: 3,
        price: '83,544',
        avatars: [
            'https://i.pravatar.cc/30?img=7',
            'https://i.pravatar.cc/30?img=8',
            'https://i.pravatar.cc/30?img=9',
        ],
    },
    {
        image: 'https://tse3.mm.bing.net/th/id/OIP.wP9pUL9Zb9ivDYL0o0nrEwAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        category: 'Music',
        level: 'Beginner',
        title: 'Keyboard Fundamentals',
        status: 'Online',
        description: 'Learn the basics of keyboard playing with step-by-step tutorials and exercises.',
        students: 64,
        locations: 3,
        price: '64,082',
        avatars: [
            'https://i.pravatar.cc/30?img=1',
            'https://i.pravatar.cc/30?img=2',
            'https://i.pravatar.cc/30?img=3',
        ],
    },
    {
        image: 'https://tse3.mm.bing.net/th/id/OIP.wP9pUL9Zb9ivDYL0o0nrEwAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        category: 'Language',
        level: 'Intermediate to Advanced',
        title: 'Spanish for Business',
        status: 'Online',
        description: 'Master business Spanish and enhance your communication in professional settings.',
        students: 92,
        locations: 2,
        price: '1,52,545',
        avatars: [
            'https://i.pravatar.cc/30?img=4',
            'https://i.pravatar.cc/30?img=5',
            'https://i.pravatar.cc/30?img=6',
        ],
    },
    {
        image: 'https://tse3.mm.bing.net/th/id/OIP.wP9pUL9Zb9ivDYL0o0nrEwAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        category: 'Dance',
        level: 'Beginner to Intermediate',
        title: 'Bharatanatyam for Beginners',
        status: 'Offline',
        description: 'Dive into the world of classical Indian dance and learn the foundations of Bharatanatyam.',
        students: 61,
        locations: 3,
        price: '83,544',
        avatars: [
            'https://i.pravatar.cc/30?img=7',
            'https://i.pravatar.cc/30?img=8',
            'https://i.pravatar.cc/30?img=9',
        ],
    },
    {
        image: 'https://tse3.mm.bing.net/th/id/OIP.wP9pUL9Zb9ivDYL0o0nrEwAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        category: 'Music',
        level: 'Beginner',
        title: 'Keyboard Fundamentals',
        status: 'Online',
        description: 'Learn the basics of keyboard playing with step-by-step tutorials and exercises.',
        students: 64,
        locations: 3,
        price: '64,082',
        avatars: [
            'https://i.pravatar.cc/30?img=1',
            'https://i.pravatar.cc/30?img=2',
            'https://i.pravatar.cc/30?img=3',
        ],
    },
    {
        image: 'https://tse3.mm.bing.net/th/id/OIP.wP9pUL9Zb9ivDYL0o0nrEwAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        category: 'Language',
        level: 'Intermediate to Advanced',
        title: 'Spanish for Business',
        status: 'Online',
        description: 'Master business Spanish and enhance your communication in professional settings.',
        students: 92,
        locations: 2,
        price: '1,52,545',
        avatars: [
            'https://i.pravatar.cc/30?img=4',
            'https://i.pravatar.cc/30?img=5',
            'https://i.pravatar.cc/30?img=6',
        ],
    },
    {
        image: 'https://tse3.mm.bing.net/th/id/OIP.wP9pUL9Zb9ivDYL0o0nrEwAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        category: 'Dance',
        level: 'Beginner to Intermediate',
        title: 'Bharatanatyam for Beginners',
        status: 'Offline',
        description: 'Dive into the world of classical Indian dance and learn the foundations of Bharatanatyam.',
        students: 61,
        locations: 3,
        price: '83,544',
        avatars: [
            'https://i.pravatar.cc/30?img=7',
            'https://i.pravatar.cc/30?img=8',
            'https://i.pravatar.cc/30?img=9',
        ],
    },
    {
        image: 'https://tse3.mm.bing.net/th/id/OIP.wP9pUL9Zb9ivDYL0o0nrEwAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        category: 'Language',
        level: 'Intermediate to Advanced',
        title: 'Spanish for Business',
        status: 'Online',
        description: 'Master business Spanish and enhance your communication in professional settings.',
        students: 92,
        locations: 2,
        price: '1,52,545',
        avatars: [
            'https://i.pravatar.cc/30?img=4',
            'https://i.pravatar.cc/30?img=5',
            'https://i.pravatar.cc/30?img=6',
        ],
    },
    {
        image: 'https://tse3.mm.bing.net/th/id/OIP.wP9pUL9Zb9ivDYL0o0nrEwAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        category: 'Dance',
        level: 'Beginner to Intermediate',
        title: 'Bharatanatyam for Beginners',
        status: 'Offline',
        description: 'Dive into the world of classical Indian dance and learn the foundations of Bharatanatyam.',
        students: 61,
        locations: 3,
        price: '83,544',
        avatars: [
            'https://i.pravatar.cc/30?img=7',
            'https://i.pravatar.cc/30?img=8',
            'https://i.pravatar.cc/30?img=9',
        ],
    },
    {
        image: 'https://tse3.mm.bing.net/th/id/OIP.wP9pUL9Zb9ivDYL0o0nrEwAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        category: 'Dance',
        level: 'Beginner to Intermediate',
        title: 'Bharatanatyam for Beginners',
        status: 'Offline',
        description: 'Dive into the world of classical Indian dance and learn the foundations of Bharatanatyam.',
        students: 61,
        locations: 3,
        price: '83,544',
        avatars: [
            'https://i.pravatar.cc/30?img=7',
            'https://i.pravatar.cc/30?img=8',
            'https://i.pravatar.cc/30?img=9',
        ],
    },
    {
        image: 'https://tse3.mm.bing.net/th/id/OIP.wP9pUL9Zb9ivDYL0o0nrEwAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        category: 'Dance',
        level: 'Beginner to Intermediate',
        title: 'Bharatanatyam for Beginners',
        status: 'Offline',
        description: 'Dive into the world of classical Indian dance and learn the foundations of Bharatanatyam.',
        students: 61,
        locations: 3,
        price: '83,544',
        avatars: [
            'https://i.pravatar.cc/30?img=7',
            'https://i.pravatar.cc/30?img=8',
            'https://i.pravatar.cc/30?img=9',
        ],
    },
];


const CourseManagement = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [isGridView, setIsGridView] = useState(() => {
        const savedView = localStorage.getItem('courseView');
        return savedView ? JSON.parse(savedView) : true;
    });

    useEffect(() => {
        localStorage.setItem('courseView', JSON.stringify(isGridView));
    }, [isGridView]);

    const [gridPage, setGridPage] = useState(1);
    const [listPage, setListPage] = useState(1);

    const CARDS_PER_PAGE = 6;
    const ROWS_PER_PAGE = 12;

    const filteredCourses = dummyCourses.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const gridTotalPages = Math.ceil(filteredCourses.length / CARDS_PER_PAGE);
    const listTotalPages = Math.ceil(filteredCourses.length / ROWS_PER_PAGE);

    const paginatedGridCourses = filteredCourses.slice(
        (gridPage - 1) * CARDS_PER_PAGE,
        gridPage * CARDS_PER_PAGE
    );

    const paginatedListCourses = filteredCourses.slice(
        (listPage - 1) * ROWS_PER_PAGE,
        listPage * ROWS_PER_PAGE
    );

    return (
        <div className="p-4 md:p-6 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                {/* Search */}
                <div className="relative w-full md:w-1/3">
                    <input
                        type="text"
                        placeholder="Search courses"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 gap-1 rounded-2xl border focus:outline-none focus:ring-2 focus:ring-black"
                    />
                    <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                </div>

                {/* View toggles & add button */}
                <div className="flex flex-wrap items-center gap-2">
                    <button
                        onClick={() => setIsGridView(true)}
                        className={`p-2 border rounded ${isGridView ? 'bg-gray-200' : ''}`}
                        title="Grid View"
                    >
                        <FaTh />
                    </button>
                    <button
                        onClick={() => setIsGridView(false)}
                        className={`p-2 border rounded ${!isGridView ? 'bg-gray-200' : ''}`}
                        title="List View"
                    >
                        <FaList />
                    </button>
                    <button
                        onClick={() => navigate('/admin/add-course')}
                        className="flex items-center bg-black text-white gap-2 px-4 py-2 rounded-2xl hover:bg-gray-700 transition whitespace-nowrap"
                    >
                        <FaPlus /> Add Course
                    </button>
                </div>
            </div>

            {/* Controls */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4 gap-4">
                <div className="flex gap-2 flex-wrap">
                    <button className="flex items-center gap-1 px-4 py-2 rounded-2xl border border-black text-sm bg-white hover:bg-gray-100 whitespace-nowrap">
                        <FaSortAmountDown />
                        Sort
                    </button>
                    <button className="flex items-center gap-1 px-4 py-2 rounded-2xl border border-black text-sm bg-white hover:bg-gray-100 whitespace-nowrap">
                        <FaFilter />
                        Filter
                    </button>
                </div>
            </div>

            {/* Main Content */}
            {isGridView ? (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {paginatedGridCourses.length > 0 ? (
                            paginatedGridCourses.map((course, idx) => (
                                <CourseCard key={idx} {...course} />
                            ))
                        ) : (
                            <p className="text-center text-gray-500 col-span-full">No courses found.</p>
                        )}
                    </div>

                    {filteredCourses.length > CARDS_PER_PAGE && (
                        <Pagination
                            currentPage={gridPage}
                            totalPages={gridTotalPages}
                            onPageChange={setGridPage}
                        />
                    )}
                </>
            ) : (
                <>
                    <div className="overflow-x-auto bg-white rounded-lg shadow-sm border mt-4">
                        <table className="min-w-full text-sm text-left">
                            <thead className="bg-gray-100 text-gray-700 font-semibold text-sm">
                                <tr>
                                    <th className="px-4 py-3 whitespace-nowrap">Title</th>
                                    <th className="px-4 py-3 whitespace-nowrap">Category</th>
                                    <th className="px-4 py-3 whitespace-nowrap">Level</th>
                                    <th className="px-4 py-3 whitespace-nowrap">Status</th>
                                    <th className="px-4 py-3 whitespace-nowrap">Students</th>
                                    <th className="px-4 py-3 whitespace-nowrap">Locations</th>
                                    <th className="px-4 py-3 whitespace-nowrap">Price (₹/mo)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {paginatedListCourses.length > 0 ? (
                                    paginatedListCourses.map((course, idx) => (
                                        <tr key={idx} className="border-t hover:bg-gray-50">
                                            <td className="px-4 py-3 font-medium text-gray-800 whitespace-nowrap">{course.title}</td>
                                            <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{course.category}</td>
                                            <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{course.level}</td>
                                            <td className="px-4 py-3 whitespace-nowrap">
                                                <span
                                                    className={`px-2 py-0.5 text-xs rounded-full font-medium ${course.status === 'Online'
                                                            ? 'bg-green-100 text-green-700'
                                                            : 'bg-gray-200 text-gray-700'
                                                        }`}
                                                >
                                                    {course.status}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{course.students}</td>
                                            <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{course.locations}</td>
                                            <td className="px-4 py-3 text-gray-600 whitespace-nowrap">₹{course.price}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="7" className="text-center py-4 text-gray-500">
                                            No courses found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {filteredCourses.length > ROWS_PER_PAGE && (
                        <Pagination
                            currentPage={listPage}
                            totalPages={listTotalPages}
                            onPageChange={setListPage}
                        />
                    )}
                </>
            )}
        </div>
    );
};

export default CourseManagement;