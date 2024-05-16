import {useRouter} from "next/navigation";
import MultipleChoice from "@/app/ui/calculator/MultipleChoice";
import Checkbox from "@/app/ui/calculator/Checkbox";
import DropDown from "@/app/ui/calculator/DropDown";

export interface QuestionProps {
    id: string;
    forwardLink: string;
    backLink: string;
    question: string;
    options: string[];
    type: "multiple-choice" | "drop-down" | "check-box";
    onSelect: () => void;
    onAnswer: (property : "state" | "rebates" | "solarOrEV" | "numPractices" | "numConsiderPractices", change : any) => void;
}

export default function Question({question}: { question: QuestionProps }) {
    const router = useRouter();
    const onSelect = () => {
        router.push(question.forwardLink)
    };

    let componentToRender;

    switch (question.type) {
        case "check-box":
            componentToRender = <Checkbox options={question.options} idNum={question.id} onAnswer={question.onAnswer}/>
            break;
        case "multiple-choice":
            componentToRender = <MultipleChoice options={question.options} idNum={question.id} onAnswer={question.onAnswer}/>
            break;
        case "drop-down":
            componentToRender = <DropDown options={question.options} onAnswer={question.onAnswer}/>
    }

    return (
        <div
            className="flex flex-col bg-opacity-70 bg-zinc-100 rounded-2xl w-full  py-5 px-10 items-center">
            <p className="font-bold text-center text-3xl my-4">
                {question.question}
            </p>
            {componentToRender}
            <div className="flex flex-row justify-center w-1/2 mx-auto mt-10 space-x-5">
                <a href={question.backLink}
                   className="border-gray-200 border-2 p-2 rounded w-1/2 text-center hover:animate-pulse">
                                     <span className="font-medium text-sm ">
                         Previous
                     </span>
                </a>
                <a href={question.forwardLink}
                   className="border-gray-200 border-2 p-2 rounded w-1/2 text-center hover:animate-pulse">
                                     <span className="font-medium text-sm ">
                       Next
                     </span>
                </a>
            </div>
        </div>
    );
}
//