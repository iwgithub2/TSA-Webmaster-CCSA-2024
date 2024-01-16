export default function SearchResults(results : string[]) {
    return (
        <div className="absolute bg-white border border-gray-300 w-64 mt-1 p-2">
            {results.map((result) => (
                <div key={result} className="cursor-pointer hover:bg-blue-400 px-3 py-1">
                    {result}
                </div>
            ))}
        </div>
    );
}