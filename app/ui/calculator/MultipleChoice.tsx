interface MultipleChoiceProps {
    options: string[];
}

export default function MultipleChoice({options}: MultipleChoiceProps) {
    return (
        <div className="space-y-2">
            {options.map((option) => (
                <div className="flex items-center" key={option + "choice"}>
                    <input type="radio" id={option + "choice"} name="size" value="small"/>
                    <label htmlFor={option + "choice"} className="cursor-pointer p-2">
                        {option}
                    </label>
                </div>
            ))}
        </div>
    );
}