import React, { useState } from "react";
import Pagination from "./Pagination";

const DataTable = ({ data, columns, itemsPerPage = 10, emptyMessage, onDeleteSelected, onCopyDetails }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedRows, setSelectedRows] = useState([]);

    // Pagination logic
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = data.slice(startIndex, startIndex + itemsPerPage);

    const onPageChange = (page) => {
        setCurrentPage(page);
    };

    const handleRowSelection = (id) => {
        setSelectedRows((prevSelected) => {
            if (prevSelected.includes(id)) {
                return prevSelected.filter((selectedId) => selectedId !== id); // Deselect
            }
            return [...prevSelected, id]; // Select
        });
    };

    const handleSelectAll = () => {
        if (selectedRows.length === currentData.length) {
            setSelectedRows([]); // Deselect all
        } else {
            setSelectedRows(currentData.map((row) => row.id)); // Select all on the current page
        }
    };

    const isRowSelected = (id) => selectedRows.includes(id);
    const isAllSelected = currentData.length === selectedRows.length;

    return (
        <div className="w-full">
            {/* Table */}
            <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                <table className="w-full border-collapse text-sm">
                    <thead className="bg-gray-100 text-left">
                        <tr>
                            <th className="px-4 py-3">
                                {/* Select All Checkbox */}
                                <input
                                    type="checkbox"
                                    checked={isAllSelected}
                                    onChange={handleSelectAll}
                                    className="w-5 h-5"
                                />
                            </th>
                            {columns.map((col) => (
                                <th key={col.key} className="px-4 py-3 font-medium text-gray-700">
                                    {col.header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {currentData.length > 0 ? (
                            currentData.map((row, rowIndex) => (
                                <tr
                                    key={row.id || rowIndex}
                                    className={`border-t hover:bg-gray-50 ${isRowSelected(row.id) ? 'bg-gray-200' : ''}`}
                                >
                                    {/* Checkbox for selecting individual row */}
                                    <td className="px-4 py-3">
                                        <input
                                            type="checkbox"
                                            checked={isRowSelected(row.id)}
                                            onChange={() => handleRowSelection(row.id)}
                                            className="w-5 h-5"
                                        />
                                    </td>
                                    {columns.map((col) => (
                                        <td key={col.key} className="px-4 py-3 text-gray-600">
                                            {col.render ? col.render(row[col.key], row) : row[col.key]}
                                        </td>
                                    ))}
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan={columns.length + 1}
                                    className="text-center py-6 text-gray-500"
                                >
                                    {emptyMessage || "No data available."}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center mt-4">
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={onPageChange}
                />
            </div>
            {/* Action buttons */}
            {selectedRows.length > 0 && (
                <div className="flex gap-2">
                    <button
                        onClick={() => onDeleteSelected(selectedRows)}
                        className="flex items-center gap-2 px-4 py-2 rounded-2xl border border-gray-300 bg-white text-sm hover:bg-gray-100"
                    >
                        Delete Selected
                    </button>
                    <button
                        onClick={() => onCopyDetails(selectedRows)}
                        className="flex items-center gap-2 px-4 py-2 rounded-2xl border border-gray-300 bg-white text-sm hover:bg-gray-100">
                        Copy Details
                    </button>
                </div>
            )}            
        </div>
    );
};

export default DataTable;
