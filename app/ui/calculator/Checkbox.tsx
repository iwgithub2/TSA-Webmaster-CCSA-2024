import {inter} from "@/app/ui/fonts";

interface MultipleChoiceProps {
    idNum : number;
    options: string[];
}

export default function Checkbox({options, idNum}: MultipleChoiceProps) {
    return (
        <div className="space-y-2 mr-auto px-10">
            {options.map((option) => (
                <div className="flex items-center" key={option}>
                    <input type="checkbox" id={option + "_" + idNum} name="size" value="small"/>
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