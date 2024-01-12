import {newsreader} from "@/app/ui/fonts";
import Search from "@/app/ui/search";
import Image from "next/image";

export default function Page() {
    return (
        <main className="relative min-h-screen">
            <div className="absolute top-0 h-full flex flex-row justify-evenly w-1/2 left-1/4 z-0">
                <div className="w-0.5 h-full bg-gray-100"></div>
                <div className="w-0.5 h-full bg-gray-100"></div>
                <div className="w-0.5 h-full bg-gray-100"></div>
                <div className="w-0.5 h-full bg-gray-100"></div>
                <div className="w-0.5 h-full bg-gray-100"></div>
            </div>
            <div className="flex relative flex-col justify-center px-6 py-3 z-40">
                <div className=" mx-auto flex-col px-20 justify-items-center mt-40 ">
                    <p className="text-green-500 text-center font-bold text-6xl mx-40 ">
                        Common Environmental Practices
                    </p>
                    <div className="bg-white my-40 ml-5 shadow-lg flex flex-col w-1/2 p-10 rounded">
                        <div>
                            <p className="text-green-500 text-left font-bold">
                                1. Reducing Energy Usage
                            </p>
                        </div>
                        <p>
                            When your out of the room turn off the lights. Using energy efficient bulbs, heating
                            systems, or even air conditioning can all reduce your impact on the environment.
                        </p>
                    </div>
                    <div className="bg-white my-40 mr-5 shadow-lg flex flex-col w-1/2 ml-auto p-10 rounded">
                        <div>
                            <p className="text-green-500 text-left font-bold">
                                2. Carpooling
                            </p>
                        </div>
                        <p>
                            Save some energy and fuel by carpooling. Or if you ive in a ccity why not try biking or just
                            walking.
                        </p>
                    </div>
                    <div className="bg-white my-40 ml-5 shadow-lg flex flex-col w-1/2 p-10 rounded">
                        <div>
                            <p className="text-green-500 text-left font-bold">
                                3. Recycling
                            </p>
                        </div>
                        <p>
                            Please recycle
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}