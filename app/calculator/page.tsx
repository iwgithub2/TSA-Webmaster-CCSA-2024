'use client'
import Question from "@/app/ui/calculator/question";
import {QuestionProps} from "@/app/ui/calculator/question";
import Image from "next/image";
import {useState} from "react";
import Lines from "@/app/ui/lines";

const data : QuestionProps[] = [
    {id: "0", forwardLink: "#1", backLink: "#", question: "This is multiple Choice", options: ["yes","no"], type: "multiple-choice" },
    {id: "1", forwardLink: "#2", backLink: "#0", question: "This is check boxes", options: ["yes","no"], type: "check-box" },
    {id: "2", forwardLink: "#3", backLink: "#1", question: "What else do we need?", options: ["yes","no"], type: "yes-no" },

]
export default function Page() {
    const [questionIndex, setQuestionIndex] = useState(0);

    const handleSelection =  () => {
        setQuestionIndex((prevIndex) => prevIndex + 1);

        const nextQuestionElement = document.getElementById(`question-${questionIndex + 1}`);
        if (nextQuestionElement) {
            nextQuestionElement.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <main className="relative min-h-screen flex justify-center">
            <Lines/>
            <div className="relative z-40">
                <div className="flex flex-col mt-40">
                    <p className="font-bold text-6xl text-green-400 max-w-4xl text-center">
                        Take Our Quiz to Find Out What Green Energy Solutions Work for You (Also not done 🫢🫢 my bad) also I broke the page so the scroll isnt working rn
                    </p>
                    <a href="#0"
                       className="flex items-center scroll-smooth gap-5 self-start rounded-lg  px-3 my-20 py-3 text-xs font-medium mx-auto">
                        <div className="flex flex-col items-center">
                            <span>
                               Take the Quiz
                            </span>
                            <Image src={"/down.svg"} alt="Down arrow " className="animate-bounce" width={20} height={20}/>
                        </div>
                    </a>
                    <div className="flex flex-col items-center">
                        {data.map((props, index) => (
                            <div id={`question-${index}`} key={index} className="my-40 " >
                                <Question question={props}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
        ;
}