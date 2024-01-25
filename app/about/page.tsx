import Image from "next/image";

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
            <div className="flex relative flex-col px-6 py-3 z-40">
                <div className="flex flex-col mt-40 text-center">
                    <p className="font-bold lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-400 text-center mx-auto">
                        About Us
                    </p>
                    <p className="py-5 lg:text-2xl md:text-xl sm:text-lg text-md text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-400 ">
                        We are Cab Calloway School of the Arts Technology Student Association
                    </p>
                    <p className="font-bold lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-400 my-10 mx-auto">
                        Sources
                    </p>
                </div>
            </div>
        </main>
    );
}

//