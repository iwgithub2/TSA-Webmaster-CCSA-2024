import Question from "@/app/ui/calculator/question";
import {QuestionProps} from "@/app/ui/calculator/question";
import Image from "next/image";
import MultipleChoice from "@/app/ui/calculator/MultipleChoice";
const data : QuestionProps[] = [
    {id: "0", forwardLink: "#1", backLink: "#", question: "This is multiple Choice", options: ["yes","no"], type: "multiple-choice" },
    {id: "1", forwardLink: "#2", backLink: "#0", question: "This is check boxes", options: ["yes","no"], type: "check-box" },
    {id: "2", forwardLink: "#3", backLink: "#1", question: "What else do we need?", options: ["yes","no"], type: "yes-no" },

]
export default function Page() {
    return (
        <main className="relative min-h-screen flex justify-center">
            <div className="absolute top-0 h-full flex flex-row justify-evenly w-full max-w-7xl z-0">
                <div className="w-0.5 h-full bg-gray-100"></div>
                <div className="w-0.5 h-full bg-gray-100"></div>
                <div className="w-0.5 h-full bg-gray-100"></div>
                <div className="w-0.5 h-full bg-gray-100"></div>
                <div className="w-0.5 h-full bg-gray-100"></div>
            </div>
            <div className="relative z-40">
                <div className="flex flex-col mt-40">
                    <p className="font-bold text-6xl text-green-400 max-w-4xl text-center">
                        Take Our Quiz to Find Out What Green Energy Solutions Work for You
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
                        {data.map((props) => (
                            <div id={props.id} key={props.forwardLink} className="my-40 " >
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