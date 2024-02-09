import {inter} from "@/app/ui/fonts";

interface MultipleChoiceProps {
    idNum : string;
    options: string[];
    onAnswer: (property : "state" | "rebates" | "solarOrEV" | "numPractices" | "numConsiderPractices", change : any) => void;
}

export default function Checkbox({options, idNum, onAnswer}: MultipleChoiceProps) {

    const handleCheckboxChange = (option: string, event: React.ChangeEvent<HTMLInputElement>) => {
        let temp : number = 0;
        if (event.target.checked) {
            temp++;
        } else {
            temp--;
        }
        // @ts-ignore
        onAnswer(idNum.slice(idNum.indexOf("-") + 1), temp);
    };

    return (
        <div className="space-y-2 mr-auto px-10">
            {options.map((option) => (
                <div className="flex items-center" key={option}>
                    <input type="checkbox" id={option + "_" + idNum} name="size" value="small" onChange={(event) => handleCheckboxChange(option, event)}/>
                    <label htmlFor={option + "_" + idNum} className="cursor-pointer p-2">
                        <p className={`${inter.className} text-sm sm:text-md md:text-lg lg:text-xl`}>
                            {option}
                        </p>
                    </label>
                </div>
            ))}
        </div>
    );
}