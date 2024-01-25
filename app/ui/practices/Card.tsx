interface CardProps {
    title: string;
    description: string;
    estimatedCost: string;
    right: boolean;
}

export default function Card({title, description, estimatedCost, right}: CardProps) {
    return (
        <div className={`bg-white mr-5 shadow-2xl flex flex-col max-w-xl ${right ? "ml-auto" : "ar-auto"} p-10 rounded`}>
            <div className="mb-5">
                <p className="text-green-500 text-left font-bold py-2">
                    {title}
                </p>
                <p className="text-left">
                    {description}
                </p>
            </div>
            <div>
                <p className="text-red-500 text-right font-bold py-2">
                    Approximate Cost
                </p>
                <p className="text-right">
                    {estimatedCost}
                </p>
            </div>
        </div>
    );
}