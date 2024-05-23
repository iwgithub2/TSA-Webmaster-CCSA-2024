'use client'
import Question from "@/app/ui/calculator/question";
import {QuestionProps} from "@/app/ui/calculator/question";
import Image from "next/image";
import {useState} from "react";
import Lines from "@/app/ui/lines";
import {dmSans, dmSerif} from "@/app/ui/fonts";
import Link from "next/link";
import {statesArray} from "@/app/ui/learn/stateInfo";
import {searchParamsToUrlQuery} from "next/dist/shared/lib/router/utils/querystring";
import SubmitGraphic from "@/app/ui/calculator/SubmitGraphic";

export interface Answers {
    state: string;
    rebates: boolean;
    solarOrEV: number;
    numPractices: number;
    energy: number;
    primarySource : string;
}

export default function Page() {
    const [questionIndex, setQuestionIndex] = useState(0);
    const navbarHeight = 50;

    const [answers, setAnswers] = useState<Answers>({
        state: "Florida",
        rebates: true,
        solarOrEV: 0,
        numPractices: 0,
        energy: 0,
        primarySource: ""
    })

    const handleAnswers = (property: "state" | "rebates" | "solarOrEV" | "numPractices" | "energyConsumption" | "primarySource", change: any) => {
        let temp = {...answers};

        switch (property) {
            case "state":
                temp.state = change;
                break;
            case "rebates":
                temp.rebates = change;
                break;
            case "solarOrEV":
                temp.solarOrEV += change;
                break;
            case "numPractices":
                temp.numPractices += change;
                break;
            case "energyConsumption":
                temp.energy += change;
                break;
            case "primarySource":
                temp.primarySource = change;
                console.log(temp.primarySource);
                break;
        }
        setAnswers(temp);
    }


    const handleSelection = (change : number) => {
        if (change == -1 && questionIndex == 0) {
            return;
        }
        setQuestionIndex((prevIndex) => prevIndex + change);
        console.log(questionIndex);

    }

    const data: QuestionProps[] = [
        {
            id: "0",
            forwardLink: "#1",
            backLink: "#",
            question: "What State do you live in?",
            options: statesArray,
            type: "drop-down",
            onSelect: handleSelection,
            onAnswer: handleAnswers
        },

        {
            id:"4-primaryEnergy",
            forwardLink:"#End",
            backLink:"#3",
            question:"What is your home's primary source of energy?",
            options: ["Natural gas", "Electricity", "Renewable"],
            type: "multiple-choice",
            onSelect: handleSelection,
            onAnswer: handleAnswers
        },
        {
            id: "3-numConsiderPractices",
            forwardLink: "#4",
            backLink: "#2",
            question: "Per month what is your estimated electricity bill?",
            options: [],
            type: "type_number",
            onSelect: handleSelection,
            onAnswer: handleAnswers
        },
        {
            id: "2-numPractices",
            forwardLink: "#3",
            backLink: "#1",
            question: "What practices do you do?",
            options: ["Reducing Energy Usage", "Carpooling", "Recycling", "Reducing Water Usage", "Home Garden", "Thrifting", "Reusable Containers", "Compost", "Electric Documents"],
            type: "check-box",
            onSelect: handleSelection,
            onAnswer: handleAnswers
        },
        {
            id: "1-solarOrEV",
            forwardLink: "#2",
            backLink: "#0",
            question: "Are you considering a hybrid vehicle, electric vehicle, or solar panels?",
            options: ["Electric Vehicle", "Hybrid Vehicle", "Solar Panels"],
            type: "check-box",
            onSelect: handleSelection,
            onAnswer: handleAnswers
        },



    ]

    const renderQuestion = () => {
        switch (questionIndex) {
            case 5:
                return <SubmitGraphic answer={answers}/>;
            default:
                return <Question question={data[questionIndex]}/>;
        }
    };

    return (
        <main className="relative min-h-screen flex justify-center bg-gradient-to-t from-forestgreen to-cream bg-opacity-10">
            <div className="relative z-40">
                <div className="flex flex-col mt-40">
                    <p className={`${dmSerif.className} text-green-900 max-w-5xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-center py-10 px-2 tracking-tight`}>
                        Take Our Quiz to Find Out What Green Energy Solutions Work for You
                    </p>
                    <a href="#Start"
                       className="flex items-center scroll-smooth gap-5 self-start rounded-lg  px-3 my-20 py-3 text-xs font-medium mx-auto">
                        <div className={`${dmSans.className} flex flex-col items-center p-2 text-yellow-950`}>
                            <span>
                               Take the Quiz
                            </span>
                            <Image src={"/down.svg"} alt="Down arrow " className="animate-bounce" width={20}
                                   height={20}/>
                        </div>
                    </a>
                    <div id="Start"
                         className="flex flex-col scroll-mt-40 mx-5 md:mx-auto space-y-20 my-40 max-w-3xl">
                        {renderQuestion()}
                    </div>
                </div>

            </div>
        </main>
    )
        ;
}