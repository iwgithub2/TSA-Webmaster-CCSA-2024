interface MultipleChoiceProps {
    options: string[];
}

export default function Checkbox({options}: MultipleChoiceProps) {
    return (
        <div className="space-y-2">
            {options.map((option) => (
                <div className="flex items-center" key={option}>
                    <input type="checkbox" id={option} name="size" value="small"/>
                    <label htmlFor={option} className="cursor-pointer p-2">
                        {option}
                    </label>
                </div>
            ))}
        </div>
    );
}