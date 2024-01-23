import Link from "next/link";
import MultipleChoice from "@/app/ui/calculator/MultipleChoice";
import Checkbox from "@/app/ui/calculator/Checkbox";
export interface QuestionProps {
    id: string;
    forwardLink: string;
    backLink: string;
    question: string;
    options: string[];
    type: "multiple-choice" | "yes-no" | "check-box";
}

export default function Question({question}: { question: QuestionProps }) {
    let componentToRender;

    switch(question.type) {
        case "check-box":
            componentToRender = <Checkbox options={question.options}/>
            break;
        case "multiple-choice":
            componentToRender = <MultipleChoice options={question.options}/>
            break;
        case "yes-no":
            componentToRender = <MultipleChoice options={question.options}/>
    }

    return (
        <div
            className="flex flex-col bg-gradient-to-r from-red-400 to-yellow-300 rounded-2xl w-full  py-5 px-10 items-center">
            <p className="font-bold text-white text-3xl my-4">
                {question.question}
            </p>
            {componentToRender}
            <div className="flex flex-row space-x-2 w-full mt-10">
                <a href={question.backLink} className="bg-green-600 p-2 rounded w-1/2 text-center hover:animate-pulse">
                    <span className="text-white font-medium text-sm ">
                        Previous
                    </span>
                </a>
                <a href={question.forwardLink} className="bg-green-600 p-2 rounded w-1/2 text-center hover:animate-pulse">
                    <span className="text-white font-medium text-sm ">
                        Next
                    </span>
                </a>
            </div>
        </div>
    );
}