import {useState, useRef, useEffect} from "react";
import {motion} from "framer-motion";

interface DropDownProps {
    options: string[];
    onAnswer: (property: "state" | "rebates" | "solarOrEV" | "numPractices" | "numConsiderPractices", change: any) => void;
}

export default function DropDown({options, onAnswer}: DropDownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");
    const dropdownRef = useRef<HTMLDivElement>(null);

    const variants = {
        open: {
            opacity: 1,
            y: 0,
            transition: {type: "spring", stiffness: 300, damping: 24}
        },
        closed: {opacity: 0, y: 20, transition: {duration: 0.2}},
    }

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        if (option.includes(' ')) {
            option = option.replace(' ', '_');
        }
        onAnswer("state", option.toLowerCase());
        setIsOpen(false);
    };

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);

        // Unbind the event listener on cleanup
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <motion.nav
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
            className="w-full max-h-8 ">
            <motion.button
                whileTap={{scale: 0.97}}
                onClick={() => setIsOpen(!isOpen)}
                className="bg-yellow-950 w-full px-10 py-2 flex flex-row justify-between rounded text-darkcream">
                {selectedOption || 'Select an option'}

                <motion.div
                    variants={{
                        open: {rotate: 180},
                        closed: {rotate: 0}
                    }}
                    transition={{duration: 0.2}}
                    style={{originY: 0.55}}
                    className="my-auto"
                >
                    <svg width="15" height="15" viewBox="0 0 20 20" className="fill-cream">
                        <path d="M0 7 L 20 7 L 10 16"/>
                    </svg>
                </motion.div>
            </motion.button>
            <motion.ul
                variants={{
                    open: {
                        clipPath: "inset(0% 0% 0% 0% round 10px)",
                        transition: {
                            type: "spring",
                            bounce: 0,
                            duration: 0.7,
                            delayChildren: 0.3,
                            staggerChildren: 0.05
                        }
                    }
                }}
            className={`overflow-y-auto max-h-40 ${isOpen ? "visible" : "collapse"}`}>
                {options.map((option) => (
                    <motion.li variants={variants} key={option} >
                        <button
                            key={option}
                            onClick={() => handleOptionClick(option)}
                            className="block w-full px-4 py-2 text-sm text-darkcream bg-yellow-950 hover:bg-gray-100 hover:text-gray-900"
                        >
                            {option}
                        </button>
                    </motion.li>
                ))}

            </motion.ul>
        </motion.nav>
    );
}
