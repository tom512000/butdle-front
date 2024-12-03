import React from "react";
import PropTypes from "prop-types";

export default function ButtonCard({ link, icon, title, description }) {
    return (
        <a
            href={link}
            aria-label="main-game"
            className="w-[400px] h-[100px] flex border border-gray-600 bg-gray-800 rounded-[6px] mt-2 opacity-75 hover:opacity-100 touch-manipulation transition-all duration-200 hover:scale-[1.020]"
        >
            <div className="w-[100px] min-w-[100px] h-[100px] min-h-[100px] flex justify-center items-center">
                {icon}
            </div>
            <div className="h-full w-full flex flex-col justify-center ml-2">
                <p className="text-xl text-white font-medium font-parkinsans">
                    {title}
                </p>
                <p className="text-gray-500 font-semibold font-inter">
                    {description}
                </p>
            </div>
        </a>
    );
}

ButtonCard.propTypes = {
    link: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};
