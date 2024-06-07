import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTop = () => {
    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
        if (window.pageYOffset > 300) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            {showButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
                >
                    <FaArrowUp />
                </button>
            )}
        </div>
    );
};

export default BackToTop;
