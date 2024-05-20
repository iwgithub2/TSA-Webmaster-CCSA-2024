interface MultipleChoiceProps {
    idNum: string;
    options: string[];
    onAnswer: (property : "state" | "rebates" | "solarOrEV" | "numPractices" | "energyConsumption" | "primarySource", change : any) => void;
}

export default function MultipleChoice({options, idNum, onAnswer}: MultipleChoiceProps) {
    const handleOptionSelect = (option: string) => {
        onAnswer("primarySource", option);
    };

    return (
        <div className="space-y-2 mr-auto px-10">
            {options.map((option) => (
                <div className="flex items-center" key={option + "choice"}>
                    <input type="radio" id={option + "_" + idNum} name="size" value="small" onChange={() => handleOptionSelect(option)} />
                    <label htmlFor={option + "_" + idNum} className="cursor-pointer p-2">
                        {option}
                    </label>
                </div>
            ))}
        </div>
    );
}