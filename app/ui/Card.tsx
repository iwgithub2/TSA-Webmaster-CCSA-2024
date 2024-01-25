interface CardProps {
    title: string[];
    description: string[];
    right: boolean;
    color?: string[];
}

export default function Card({title, description, right, color}: CardProps) {
    return (
        <div className={`bg-white mr-5 shadow-2xl flex flex-col lg:max-w-xl sm:max-w-2xl w-full ${right ? "ml-auto" : "ar-auto"} p-10 rounded`}>
            <div className="flex flex-col space-y-5">
                {title.map((titles, index) => (
                    <div key={index}>
                        <p className={`text-green-500 text-left font-bold py-2`}>
                            {titles}
                        </p>
                        <p className="text-left">
                            {description[index]}
                        </p>
                    </div>
            ))}
            </div>
        </div>
    );
}