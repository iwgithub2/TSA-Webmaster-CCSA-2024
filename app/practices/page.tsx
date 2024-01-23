import {newsreader} from "@/app/ui/fonts";
import Search from "@/app/ui/search";
import Image from "next/image";
import Card from "@/app/ui/practices/Card";

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
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-400 text-center font-bold text-6xl mx-40 ">
                        Common Environmental Practices
                    </p>
                    <p className="text-center py-4 text-2xl">
                        Here are some ways you can be clean + green at home!
                    </p>
                    <Card title={"1. Reducing Energy Usage"} text={"When your out of the room turn off the lights. Using energy efficient bulbs, heating\n" +
                        "                                systems, or even air conditioning can all reduce your impact on the\n" +
                        "                                environment. I realized that I needed to type words. Spaces is the key iykyk."}/>
                    <Card title={"3. Recycling"} text={"Please recycle"}/>
                    <Card title={"2. Carpooling"} text={"Save some energy and fuel by carpooling. Or if you live in a city why not try biking or just walking."}/>
                </div>
            </div>
        </main>
    )
}