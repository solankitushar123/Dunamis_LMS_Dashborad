import React, { useState } from 'react';
import { FaPlus, FaFilter, FaSortAmountDown, FaSearch, FaMusic, FaPersonBooth, FaLanguage } from 'react-icons/fa';
import DataTable from '../../../components/Table'; 
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const TABS = ['Enrolled Students', 'Registered Students', 'Demo Students'];

const StudentManagementPage = () => {
    const [activeTab, setActiveTab] = useState('Enrolled Students');
    const [searchTerm, setSearchTerm] = useState('');
    // const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const handleTabChange = (tab) => setActiveTab(tab);

    // testing dummy student data
    const students = [
        {
            id: 1,
            studentId: "#STU-M-4849",
            name: "Rajesh Sharma",
            avatar: "https://i.pravatar.cc/40?img=12",
            courseCategory: "Music",
            courseCode: "#MUS04849",
            courseName: "Keyboard Fundamentals",
            progress: 29,
            mode: "Online",
            branch: "Nagaram, HYD",
            paymentType: "Installment",
            feeStatus: "Due",
        },
        {
            id: 2,
            studentId: "#STU-D-4849",
            name: "Priyanka M",
            avatar: "https://i.pravatar.cc/40?img=24",
            courseCategory: "Dance",
            courseCode: "#DAN04849",
            courseName: "Bharatnatyam Basics",
            progress: 36,
            mode: "Online",
            branch: "Colaba, BOM",
            paymentType: "Installment",
            feeStatus: "Paid",
        },
        {
            id: 3,
            studentId: "#STU-M-4850",
            name: "Jay Deva",
            avatar: "https://i.pravatar.cc/40?img=5",
            courseCategory: "Music",
            courseCode: "#MUS04849",
            courseName: "Guitar for Beginners",
            progress: 87,
            mode: "Offline",
            branch: "Andheri, BOM",
            paymentType: "Installment",
            feeStatus: "Overdue",
        },
        {
            id: 4,
            studentId: "#STU-D-4851",
            name: "Kusuma Ramya",
            avatar: "https://i.pravatar.cc/40?img=18",
            courseCategory: "Dance",
            courseCode: "#DAN04849",
            courseName: "Zumba for Everyday",
            progress: 4,
            mode: "Offline",
            branch: "Colaba, BOM",
            paymentType: "Full Payment",
            feeStatus: "Paid",
        },
        {
            id: 5,
            studentId: "#STU-D-4852",
            name: "Lasya Reddy",
            avatar: "https://i.pravatar.cc/40?img=34",
            courseCategory: "Dance",
            courseCode: "#DAN04849",
            courseName: "Zumba for Everyday",
            progress: 63,
            mode: "Online",
            branch: "KPHB, HYD",
            paymentType: "Installment",
            feeStatus: "Due",
        },
        {
            id: 6,
            studentId: "#STU-M-4853",
            name: "Sharada Shetty",
            avatar: "https://i.pravatar.cc/40?img=9",
            courseCategory: "Music",
            courseCode: "#MUS04849",
            courseName: "Carnatic Vocals for All",
            progress: 84,
            mode: "Online",
            branch: "Nagaram, HYD",
            paymentType: "Full Payment",
            feeStatus: "Paid",
        },
        {
            id: 7,
            studentId: "#STU-L-4854",
            name: "Jhanavi Patel",
            avatar: "https://i.pravatar.cc/40?img=30",
            courseCategory: "Language",
            courseCode: "#LAN04849",
            courseName: "German for Business",
            progress: 100,
            mode: "Online",
            branch: "Andheri, BOM",
            paymentType: "Full Payment",
            feeStatus: "Paid",
        },
        {
            id: 8,
            studentId: "#STU-M-4855",
            name: "Sameer Kiran",
            avatar: "https://i.pravatar.cc/40?img=42",
            courseCategory: "Music",
            courseCode: "#MUS04849",
            courseName: "Keyboard Fundamentals",
            progress: 65,
            mode: "Online",
            branch: "KPHB, HYD",
            paymentType: "Installment",
            feeStatus: "Paid",
        },
        {
            id: 9,
            studentId: "#STU-M-4856",
            name: "Mannat Bardia",
            avatar: "https://i.pravatar.cc/40?img=7",
            courseCategory: "Music",
            courseCode: "#MUS04849",
            courseName: "Keyboard Fundamentals",
            progress: 10,
            mode: "Online",
            branch: "Colaba, BOM",
            paymentType: "Installment",
            feeStatus: "Paid",
        },
        {
            id: 10,
            studentId: "#STU-L-4857",
            name: "Hardik Garg",
            avatar: "https://i.pravatar.cc/40?img=11",
            courseCategory: "Language",
            courseCode: "#LAN04849",
            courseName: "French Speaking",
            progress: 71,
            mode: "Offline",
            branch: "Andheri, BOM",
            paymentType: "Installment",
            feeStatus: "Paid",
        },
        {
            id: 11,
            studentId: "#STU-D-4858",
            name: "Gokul Krishna",
            avatar: "https://i.pravatar.cc/40?img=16",
            courseCategory: "Dance",
            courseCode: "#DAN04849",
            courseName: "Bharatnatyam Basics",
            progress: 16,
            mode: "Online",
            branch: "Nagaram, HYD",
            paymentType: "Installment",
            feeStatus: "Paid",
        },
        {
            id: 12,
            studentId: "#STU-L-4859",
            name: "Abraham John",
            avatar: "https://i.pravatar.cc/40?img=46",
            courseCategory: "Language",
            courseCode: "#LAN04849",
            courseName: "Hindi in 365 days",
            progress: 55,
            mode: "Online",
            branch: "KPHB, HYD",
            paymentType: "Full Payment",
            feeStatus: "Paid",
        },
        {
            id: 13,
            studentId: "#STU-M-4860",
            name: "Sania Mourya",
            avatar: "https://i.pravatar.cc/40?img=36",
            courseCategory: "Music",
            courseCode: "#MUS04849",
            courseName: "Drums Fundamentals",
            progress: 8,
            mode: "Offline",
            branch: "KPHB, HYD",
            paymentType: "Full Payment",
            feeStatus: "Paid",
        },
        {
            id: 14,
            studentId: "#STU-D-4861",
            name: "Shanica Roy",
            avatar: "https://i.pravatar.cc/40?img=21",
            courseCategory: "Dance",
            courseCode: "#DAN04849",
            courseName: "Kuchipudi Certificate Course",
            progress: 45,
            mode: "Online",
            branch: "Colaba, BOM",
            paymentType: "Installment",
            feeStatus: "Paid",
        },
        {
            id: 15,
            studentId: "#STU-M-4862",
            name: "Akhil Joy",
            avatar: "https://i.pravatar.cc/40?img=8",
            courseCategory: "Music",
            courseCode: "#MUS04849",
            courseName: "Keyboard Fundamentals",
            progress: 30,
            mode: "Online",
            branch: "Andheri, BOM",
            paymentType: "Full Payment",
            feeStatus: "Paid",
        },
        {
            id: 16,
            studentId: "#STU-L-4863",
            name: "Kusumini Rao",
            avatar: "https://i.pravatar.cc/40?img=52",
            courseCategory: "Language",
            courseCode: "#LAN04849",
            courseName: "Business English",
            progress: 52,
            mode: "Online",
            branch: "Nagaram, HYD",
            paymentType: "Installment",
            feeStatus: "Due",
        },
        {
            id: 17,
            studentId: "#STU-M-4864",
            name: "Rohan Mehta",
            avatar: "https://i.pravatar.cc/40?img=27",
            courseCategory: "Music",
            courseCode: "#MUS04849",
            courseName: "Vocal Basics",
            progress: 41,
            mode: "Offline",
            branch: "Andheri, BOM",
            paymentType: "Installment",
            feeStatus: "Paid",
        },
        {
            id: 18,
            studentId: "#STU-D-4865",
            name: "Neelam Verma",
            avatar: "https://i.pravatar.cc/40?img=29",
            courseCategory: "Dance",
            courseCode: "#DAN04849",
            courseName: "Contemporary Dance",
            progress: 22,
            mode: "Offline",
            branch: "KPHB, HYD",
            paymentType: "Full Payment",
            feeStatus: "Paid",
        },
        {
            id: 19,
            studentId: "#STU-L-4866",
            name: "Priyadarshi N",
            avatar: "https://i.pravatar.cc/40?img=43",
            courseCategory: "Language",
            courseCode: "#LAN04849",
            courseName: "Spanish for Business",
            progress: 66,
            mode: "Online",
            branch: "Colaba, BOM",
            paymentType: "Installment",
            feeStatus: "Paid",
        },
        {
            id: 20,
            studentId: "#STU-M-4867",
            name: "Tanya Singh",
            avatar: "https://i.pravatar.cc/40?img=50",
            courseCategory: "Music",
            courseCode: "#MUS04849",
            courseName: "Keyboard Fundamentals",
            progress: 5,
            mode: "Offline",
            branch: "Nagaram, HYD",
            paymentType: "Installment",
            feeStatus: "Due",
        },
        {
            id: 21,
            studentId: "#STU-D-4868",
            name: "Manisha Rao",
            avatar: "https://i.pravatar.cc/40?img=33",
            courseCategory: "Dance",
            courseCode: "#DAN04849",
            courseName: "Bharatnatyam Basics",
            progress: 78,
            mode: "Online",
            branch: "Andheri, BOM",
            paymentType: "Full Payment",
            feeStatus: "Paid",
        },
        {
            id: 22,
            studentId: "#STU-M-4869",
            name: "Vikram Patel",
            avatar: "https://i.pravatar.cc/40?img=3",
            courseCategory: "Music",
            courseCode: "#MUS04849",
            courseName: "Guitar for Beginners",
            progress: 92,
            mode: "Online",
            branch: "Colaba, BOM",
            paymentType: "Installment",
            feeStatus: "Paid",
        },
        {
            id: 23,
            studentId: "#STU-L-4870",
            name: "Ishita Verma",
            avatar: "https://i.pravatar.cc/40?img=2",
            courseCategory: "Language",
            courseCode: "#LAN04849",
            courseName: "Hindi Conversational",
            progress: 19,
            mode: "Offline",
            branch: "KPHB, HYD",
            paymentType: "Installment",
            feeStatus: "Overdue",
        },
        {
            id: 24,
            studentId: "#STU-M-4871",
            name: "Rahul Desai",
            avatar: "https://i.pravatar.cc/40?img=4",
            courseCategory: "Music",
            courseCode: "#MUS04849",
            courseName: "Keyboard Fundamentals",
            progress: 58,
            mode: "Online",
            branch: "Nagaram, HYD",
            paymentType: "Full Payment",
            feeStatus: "Paid",
        },
    ];
    const filteredStudents = students.filter((student) =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.courseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.studentId.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const columns = [
        { key: 'studentId', header: 'Student ID' },
        {
            key: 'name',
            header: 'User',
            render: (value, row) => (
                <div className="flex items-center gap-2">
                    <img
                        src={row.avatar}
                        alt={row.name}
                        className="w-8 h-8 rounded-full object-cover"
                    />
                    <span>{row.name}</span>
                </div>
            ),
        },
        {
            key: 'courseCategory',
            header: 'Course Category',
            render: (value) => {
                const categoryConfig = {
                    Music: {
                        icon: <FaMusic className="text-blue-600 text-xs" />,
                        bg: 'bg-blue-100 text-blue-700',
                    },
                    Dance: {
                        icon: <FaPersonBooth className="text-yellow-600 text-xs" />,
                        bg: 'bg-yellow-100 text-yellow-800',
                    },
                    Language: {
                        icon: <FaLanguage className="text-green-600 text-xs" />,
                        bg: 'bg-green-100 text-green-700',
                    },
                };

                const { icon, bg } = categoryConfig[value] || {
                    icon: <FaMusic />,
                    bg: 'bg-gray-100 text-gray-700',
                };

                return (
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${bg}`}>
                        {icon}
                        {value}
                    </span>
                );
            },
        },

        { key: 'courseCode', header: 'Course Code' },
        { key: 'courseName', header: 'Course Name' },
        { key: 'progress', header: 'Progress' },
        {
            key: 'mode',
            header: 'Mode',
            render: (value) => {
                const isOnline = value === 'Online';
                const bgClass = isOnline ? 'text-green-500' : ' text-blue-500';

                return (
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${bgClass}`}>
                        {value}
                    </span>
                );
            },
        },

        {
            key: 'branch',
            header: 'Branch',
            render: (value, row) => {
                
                return row.mode === 'Online' ? null : value;
            },
        },

        { key: 'paymentType', header: 'Payment Type' },
        {
            key: 'feeStatus',
            header: 'Fee Status',
            render: (value) => {
                let colorClass = '';

                switch (value) {
                    case 'Due':
                        colorClass = 'text-orange-500';
                        break;
                    case 'Overdue':
                        colorClass = 'text-red-500';
                        break;
                    case 'Paid':
                        colorClass = 'text-green-500';
                        break;
                    default:
                        colorClass = 'text-gray-500';
                }

                return (
                    <span className={`font-medium ${colorClass}`}>
                        {value}
                    </span>
                );
            },
        },

    ];

    const handleCopyDetails = (selectedIds) => {
        const selectedStudents = students.filter((student) =>
            selectedIds.includes(student.id)
        );

        const studentDetails = selectedStudents.map(student => {
            return `
            Name: ${student.name}
            Course: ${student.courseName}
            Fee Status: ${student.feeStatus}
            Progress: ${student.progress}%
        `;
        }).join('\n');

        // Copy details to clipboard
        navigator.clipboard.writeText(studentDetails).then(() => {
            toast.success('Student details copied to clipboard!'); // Show success toast
        }).catch(err => {
            console.error('Failed to copy details: ', err);
            toast.error('Failed to copy details!'); // Show error toast
        });
    };
    return (
        <div className="p-6 bg-white min-h-screen">
            {/* Page Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold text-gray-800">Student Management</h1>
            </div>

            {/* Tabs */}
            <div className="flex gap-4 border-b border-gray-300 mb-4">
                {TABS.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => handleTabChange(tab)}
                        className={`pb-2 text-sm font-medium ${activeTab === tab
                            ? 'border-b-2 border-black text-black'
                            : 'text-gray-500 hover:text-black'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Search & Controls */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                {/* Search */}
                <div className="relative w-full md:w-1/3">
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full border rounded-2xl py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-black"
                    />
                    <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                </div>
                
                {/* Sort and Filter */}
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-2xl border border-gray-300 bg-white text-sm hover:bg-gray-100">
                        <FaSortAmountDown /> Sort
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-2xl border border-gray-300 bg-white text-sm hover:bg-gray-100">
                        <FaFilter /> Filter
                    </button>
                </div>
            </div>

            {/* Table */}
            <DataTable
                data={filteredStudents}
                columns={columns}
                itemsPerPage={10}
                emptyMessage="No students found."
                onCopyDetails={handleCopyDetails}
            />
        </div>
    );
};

export default StudentManagementPage;
