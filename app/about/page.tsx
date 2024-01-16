export default function Page() {
    return(
        <main className="relative min-h-screen flex justify-center">
            <div className="absolute top-0 h-full flex flex-row justify-evenly w-full max-w-7xl z-0">
                <div className="w-0.5 h-full bg-gray-100"></div>
                <div className="w-0.5 h-full bg-gray-100"></div>
                <div className="w-0.5 h-full bg-gray-100"></div>
                <div className="w-0.5 h-full bg-gray-100"></div>
                <div className="w-0.5 h-full bg-gray-100"></div>
            </div>
            <div className="relative z-40">
                <div className="flex flex-col mt-40">
                    <p>
                        Hi
                    </p>
                </div>
            </div>
        </main>
    );
}