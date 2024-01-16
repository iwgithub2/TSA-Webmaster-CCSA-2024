import {newsreader} from "@/app/ui/fonts";
import Search from "@/app/ui/search";
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
            <div className="flex relative flex-col justify-center px-6 py-3 z-40">
                <div className=" mx-auto flex-col px-20 justify-items-center mt-40 ">
                    <p className="text-green-500 text-center font-bold text-6xl mx-40 ">
                        Common Environmental Practices
                    </p>
                    <p className="text-center py-4 text-2xl">
                        Here are some ways you can be clean + green at home!
                    </p>
                    <div className="bg-white my-40 ml-5 shadow-lg flex flex-col max-w-xl p-5 rounded">
                        <p className="text-green-500 text-left font-bold mb-1">
                            1. Reducing Energy Usage
                        </p>
                        <div className="text-wrap">
                            <Image src={'/nature.webp'} alt={"Nature"} height={500} width={100}
                                   className="float-right"/>
                            <p>
                                When your out of the room turn off the lights. Using energy efficient bulbs, heating
                                systems, or even air conditioning can all reduce your impact on the
                                environment. I realized that I needed to type words. Spaces is the key iykyk.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white my-40 mr-5 shadow-lg flex flex-col max-w-xl ml-auto p-10 rounded">
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