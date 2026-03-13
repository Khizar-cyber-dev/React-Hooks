import React, { useState } from 'react';
import '../Accordin.css'

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const onItemClick = (index) => {
        // Agar same item click kiya to close karo, nahi to open karo
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="accordion">
            {items.map((item, index) => (
                <div key={index} className="accordion-item">
                    {/* Header */}
                    <div 
                        className={`accordion-header ${
                            activeIndex === index ? 'active' : ''
                        }`}
                        onClick={() => onItemClick(index)}
                    >
                        <h3>{item.title}</h3>
                        <span className="icon">
                            {activeIndex === index ? '−' : '+'}
                        </span>
                    </div>

                    {/* Content - conditional rendering */}
                    {activeIndex === index && (
                        <div className="accordion-content">
                            <p>{item.content}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordion;