'use client'
import Question from "@/app/ui/calculator/question";
import {QuestionProps} from "@/app/ui/calculator/question";
import Image from "next/image";
import {useState} from "react";
import Lines from "@/app/ui/lines";
import {dmSerif} from "@/app/ui/fonts";
import Link from "next/link";
import {statesArray} from "@/app/ui/learn/stateInfo";


export default function Page() {
    const [questionIndex, setQuestionIndex] = useState(0);
    const navbarHeight = 50;

    const handleSelection = () => {
        setQuestionIndex((prevIndex) => prevIndex + 1);

        const nextQuestionElement = document.getElementById(`question-${questionIndex + 1}`);
        if (nextQuestionElement) {
            window.scrollBy(0, -navbarHeight);
            nextQuestionElement.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
        }
    }

    const data: QuestionProps[] = [
        {
            id: 0,
            forwardLink: "#1",
            backLink: "#",
            question: "What State do you live in?",
            options: statesArray,
            type: "drop-down",
            onSelect: handleSelection
        },
        {
            id: 1,
            forwardLink: "#2",
            backLink: "#0",
            question: "Does your State have Tax Rebates for EV?",
            options: ["yes", "no"],
            type: "multiple-choice",
            onSelect: handleSelection
        },
        {
            id: 2,
            forwardLink: "#3",
            backLink: "#1",
            question: "Would you have a hybrid vehicle, electric vehicle, or solar panels?",
            options: ["Electric Vehicle", "Hybrid Vehicle", "Solar Panels"],
            type: "check-box",
            onSelect: handleSelection
        },
        {
            id: 3,
            forwardLink: "#4",
            backLink: "#2",
            question: "What practices do you do?",
            options: ["Reducing Energy Usage", "Carpooling", "Recycling", "Reducing Water Usage", "Home Garden", "Thrifting", "Reusable Containers", "Compost", "Electric Documents"],
            type: "check-box",
            onSelect: handleSelection
        },
        {
            id: 4,
            forwardLink: "#End",
            backLink: "#3",
            question: "What practices would you do?",
            options: ["Reducing Energy Usage", "Carpooling", "Recycling", "Reducing Water Usage", "Home Garden", "Thrifting", "Reusable Containers", "Compost", "Electric Documents"],
            type: "check-box",
            onSelect: handleSelection
        },

    ]

    return (
        <main className="relative min-h-screen flex justify-center">
            <Lines/>
            <div className="relative z-40">
                <div className="flex flex-col mt-40">
                    <p className={`${dmSerif.className} max-w-5xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-center py-10 px-2 tracking-tight bg-gradient-to-r from-green-500 to-yellow-400 bg-clip-text text-transparent`}>
                        Take Our Quiz to Find Out What Green Energy Solutions Work for You
                    </p>
                    <a href="#Start"
                       className="flex items-center scroll-smooth gap-5 self-start rounded-lg  px-3 my-20 py-3 text-xs font-medium mx-auto">
                        <div className="flex flex-col items-center p-2">
                            <span>
                               Take the Quiz
                            </span>
                            <Image src={"/down.svg"} alt="Down arrow " className="animate-bounce" width={20}
                                   height={20}/>
                        </div>
                    </a>
                    <div id="Start" className="flex flex-col     scroll-mt-40 mx-5 md:mx-auto space-y-20 my-40 max-w-3xl">
                        {data.map((props, index) => (
                            <div id={`${index}`} key={index} className="scroll-mt-40">
                                <Question question={props}/>
                            </div>
                        ))}
                    </div>
                    <div id="End" className="flex flex-col py-40 my-20 items-center">
                        <Image src={'/LogoNo_Background.svg'} alt={"Our logo"} height={100} width={100}/>
                        <p className={`${dmSerif.className} max-w-5xl font-bold lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-center py-10 px-2 tracking-tight bg-gradient-to-r from-green-500 to-yellow-400 bg-clip-text text-transparent`}>
                            All done! Ready to see your Results?
                        </p>
                        <Link href="/calculator/results"
                              className="flex items-center gap-5 self-start rounded-lg bg-darkgreen px-3 my-2 md:my-5 py-3 text-xs font-medium text-white transition-colors hover:bg-green-400  mx-auto">
                            <span className="tracking-tighter">
                        See Results
                            </span>
                        </Link>
                    </div>
                </div>

            </div>
        </main>
    )
        ;
}