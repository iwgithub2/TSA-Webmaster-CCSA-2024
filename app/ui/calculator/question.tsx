import {useRouter} from "next/navigation";
import MultipleChoice from "@/app/ui/calculator/MultipleChoice";
import Checkbox from "@/app/ui/calculator/Checkbox";
import DropDown from "@/app/ui/calculator/DropDown";
import {motion} from "framer-motion";
import TypeNum from "@/app/ui/calculator/TypeNum";

export interface QuestionProps {
    id: string;
    forwardLink: string;
    backLink: string;
    question: string;
    options: string[];
    type: "multiple-choice" | "drop-down" | "check-box" | "type_number";
    onSelect: (change : number) => void;
    onAnswer: (property: "state" | "rebates" | "solarOrEV" | "numPractices" | "energyConsumption" | "primarySource", change: any) => void;
}

export default function Question({question}: { question: QuestionProps }) {

    let componentToRender;

    switch (question.type) {
        case "check-box":
            componentToRender = <Checkbox options={question.options} idNum={question.id} onAnswer={question.onAnswer}/>
            break;
        case "multiple-choice":
            componentToRender =
                <MultipleChoice options={question.options} idNum={question.id} onAnswer={question.onAnswer}/>
            break;
        case "drop-down":
            componentToRender = <DropDown options={question.options} onAnswer={question.onAnswer}/>
            break;
        case "type_number":
            componentToRender = <TypeNum onAnswer={question.onAnswer}/>
            break;
    }

    return (
        <motion.div
        whileInView={{scale: 1}}
        initial={{scale : 0}}
        key={question.id}>
            <div
                className="flex flex-col bg-darkcream rounded-2xl w-full py-5 px-10 items-center">
                <p className="font-bold text-center text-3xl my-4 text-yellow-950">
                    {question.question}
                </p>
                {componentToRender}
                <div className="flex flex-row mx-auto mt-5 space-x-2 justify-evenly w-full">
                    <button onClick={() => question.onSelect(-1)}
                       className="border-yellow-950 border-2 p-2 rounded w-1/2 text-center hover:animate-pulse">
                                     <span className="font-medium text-sm ">
                         Previous
                     </span>
                    </button>
                    <button onClick={() => question.onSelect(1)}
                       className="border-yellow-950 border-2 p-2 rounded w-1/2 text-center hover:animate-pulse">
                                     <span className="font-medium text-sm ">
                       Next
                     </span>
                    </button>
                </div>
            </div>
        </motion.div>

    );
}
//