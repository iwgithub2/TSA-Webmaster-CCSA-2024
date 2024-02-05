import {useRouter} from "next/navigation";
import MultipleChoice from "@/app/ui/calculator/MultipleChoice";
import Checkbox from "@/app/ui/calculator/Checkbox";

export interface QuestionProps {
    id: number;
    forwardLink: string;
    backLink: string;
    question: string;
    options: string[];
    type: "multiple-choice" | "yes-no" | "check-box";
    onSelect: () => void;
}

export default function Question({question}: { question: QuestionProps }) {
    const router = useRouter();
    const onSelect = () => {
        router.push(question.forwardLink)
    };

    let componentToRender;

    switch (question.type) {
        case "check-box":
            componentToRender = <Checkbox options={question.options} idNum={question.id}/>
            break;
        case "multiple-choice":
            componentToRender = <MultipleChoice options={question.options} idNum={question.id}/>
            break;
        case "yes-no":
            componentToRender = <MultipleChoice options={question.options} idNum={question.id}/>
    }

    return (
        <div
            className="flex flex-col shadow-2xl bg-white rounded-2xl w-full  py-5 px-10 items-center">
            <p className="font-bold text-3xl my-4">
                {question.question}
            </p>
            {componentToRender}
            <div className="flex flex-row space-x-2 w-full mt-10">
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