interface MultipleChoiceProps {
    idNum: number;
    options: string[];
}

export default function MultipleChoice({options, idNum}: MultipleChoiceProps) {
    return (
        <div className="space-y-2">
            {options.map((option) => (
                <div className="flex items-center" key={option + "choice"} >
                    <input type="radio" id={option + "_" + idNum} name="size" value="small" />
                    <label htmlFor={option + "_" + idNum} className="cursor-pointer p-2">
                        {option}
                    </label>
                </div>
            ))}
        </div>
    );
}