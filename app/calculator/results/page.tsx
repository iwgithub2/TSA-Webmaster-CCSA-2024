export default function Page() {
    return (
        <main className="relative min-h-screen flex justify-center">
            <div className="absolute top-0 h-full flex flex-row justify-evenly w-full max-w-7xl z-0">
                <div className="w-0.5 h-full bg-gray-100"></div>
                <div className="w-0.5 h-full bg-gray-100"></div>
                <div className="w-0.5 h-full bg-gray-100"></div>
                <div className="w-0.5 h-full bg-gray-100"></div>
                <div className="w-0.5 h-full bg-gray-100"></div>
            </div>
            <div className="relative z-40 w-full">
                <div className="flex flex-col mt-40 justify-center">
                    <div className="bg-red-400">
                        <div className="my-3 border-black border-2 mx-auto px-1 rounded-full">
                            <p className="text-center text-sm">
                                Cost Calculator
                            </p>
                        </div>
                        <p className="font-bold text-gray-900 text-4xl text-center">
                            Are you Ready to Change<br/> the World?
                        </p>
                    </div>
                    <div className="bg-blue-400">

                    </div>
                </div>
            </div>
        </main>
    );
}