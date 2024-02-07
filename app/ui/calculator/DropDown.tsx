'use client'
import {useState} from "react";

interface DropDownProps {
    options: string[];
}

export default function DropDown({options}: DropDownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option : string) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block text-left w-1/2">
            <div>
                <button
                    type="button"
                    className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium border-gray-700 border-2 rounded-md focus:outline-none focus-visible:ring focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-gray-800"
                    id="options-menu"
                    onClick={toggleDropdown}
                >
                    {selectedOption || 'Select an option'}
                </button>
            </div>

            {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {options.map((option) => (
                            <button
                                key={option}
                                onClick={() => handleOptionClick(option)}
                                className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}