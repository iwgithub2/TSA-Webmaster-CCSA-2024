interface CardProps {
    title : string;
    text : string;
}
export default function Card( {title, text} : CardProps) {
    return(
        <div className="bg-white my-40 mr-5 shadow-lg flex flex-col max-w-xl ml-auto p-10 rounded">
            <div>
                <p className="text-green-500 text-left font-bold">
                    {title}
                </p>
            </div>
            <p>
                {text}
            </p>
        </div>
    );
}