import React, { useState } from 'react';

export default function PaginationComponent() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;

    const handlePrevious = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    const handleNext = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    const handlePageClick = (page) => {
        setCurrentPage(page);
    };

    const getPageNumbers = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
        return pages;
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <button onClick={handlePrevious} disabled={currentPage === 1}>
                Previous
            </button>

            <div style={{ margin: '10px 0' }}>
                {getPageNumbers().map((page) => (
                    <button
                        key={page}
                        onClick={() => handlePageClick(page)}
                        style={{
                            margin: '0 5px',
                            padding: '5px 10px',
                            backgroundColor: currentPage === page ? '#007bff' : '#f0f0f0',
                            color: currentPage === page ? 'white' : 'black',
                            border: '1px solid #ddd',
                            cursor: 'pointer',
                        }}
                    >
                        {page}
                    </button>
                ))}
            </div>

            <button onClick={handleNext} disabled={currentPage === totalPages}>
                Next
            </button>

            <p>Page {currentPage} of {totalPages}</p>
        </div>
    );
}