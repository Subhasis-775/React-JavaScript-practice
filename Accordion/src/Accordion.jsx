import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; 
import './styles.css'

function Accordion({ items }) {
    const [activeIndex, setAtiveIndex] = useState(null);
    if (!Array.isArray(items) || items.length === 0) {
        return <p>No items available</p>;
    }
    const checkIndex = (index) => {
        setAtiveIndex(activeIndex === index ? null : index);
    }
    return (
        <div className="accordion">
            {items.map((item, index) => (
                <div key={index} className="accordion-item">
                    <div className="accordion-title" onClick={()=>checkIndex(index)}>
                        <h3>{item.title}</h3>
                    {activeIndex===index ? <FaChevronUp/>:<FaChevronDown/>}
                    </div>
                    {activeIndex === index && (
                        <p className="accordion-content">{item.content}</p>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Accordion;