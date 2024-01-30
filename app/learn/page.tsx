'use client'

import {newsreader} from "@/app/ui/fonts";
import Search from "@/app/ui/search";
import {ComposableMap, Geographies, Geography} from "react-simple-maps";
import {useRouter} from "next/navigation";
import BubbleDiv from "@/app/ui/learn/BubbleDiv";
import Lines from "@/app/ui/lines";
export default function Page() {
    const router = useRouter();

    const redirect = (name: string) => {
        if (name.includes(' ')) {
            name = name.replace(' ', '_');
        }
        console.log(name);
        router.push(`/learn/${name}`);
    };

    return (
        <main className="relative min-h-screen flex justify-center">
            <Lines/>
            <div className="relative z-40 mx-5">
                <div className={"flex flex-col justify-center w-full mt-40"}>
                    <p className={`mx-5 sm:mx-10 md:mx-20 font-bold lg:text-6xl md:text-5xl sm:text-4xl text-3xl px-2 text-center text-transparent bg-gradient-to-r from-pink-500 to-yellow-600 bg-clip-text`}>
                        Tell us where you are so we can find the information for you.
                    </p>
                    <p className="font-bold text-center mb-5 lg:text-2xl md:text-xl sm:text-lg text-md my-5 mx-10 text-transparent bg-gradient-to-r from-pink-500 to-yellow-600 bg-clip-text">
                        Or Just Scroll Below to find Federal Information
                    </p>
                    {/* add search later for nats
                                <Search placeholder={'State...'}/>
                */}<div className="pb-10">
                    <ComposableMap width={800} height={500} projection={"geoAlbersUsa"}>
                        <Geographies geography="/states.json">
                            {({geographies}) =>
                                geographies.map((geo) => (
                                    <Geography key={geo.rsmKey}
                                               geography={geo}
                                               style={{
                                                   default: {
                                                       fill: "#000",
                                                       stroke: "#FFF",
                                                       strokeWidth: 1.5,
                                                       outline: "none",
                                                   },
                                                   hover: {
                                                       fill: "#56784D",
                                                       stroke: "#FFF",
                                                       strokeWidth: 1.5,
                                                       outline: "none",
                                                   },
                                                   pressed: {
                                                       outline: "none",
                                                   }
                                               }}
                                               onClick={() => redirect(geo.properties.NAME.toLowerCase())}/>
                                ))
                            }
                        </Geographies>
                    </ComposableMap>
                </div>
                    <p className={`mx-5 sm:mx-10 md:mx-20 font-bold lg:text-6xl md:text-5xl sm:text-4xl text-3xl px-2 text-center text-transparent bg-gradient-to-r from-pink-500 to-yellow-600 bg-clip-text`}>
                        Federal Information
                    </p>
                    <div className="my-10 max-w-2xl mx-auto flex-row flex space-x-2 ">
                        <BubbleDiv header={"$2,500 for Fully Electric Vehicles"} link={'/car'}
                                   linkText={"Check out the List"} gradient={"from-blue-500 to-green-300"}/>
                        <BubbleDiv header={"$1,500 for Hybrid Vehicles"} link={'/car'} linkText={"Check out the List"}
                                   gradient={"from-red-950 to-orange-800"}/>
                    </div>
                </div>
            </div>

        </main>
    );
}
//router.push({pathname: '/learn/[state]', query: { state: geo.properties.NAME.toLowerCase()})
//router.push(`/learn/${geo.properties.NAME.toLowerCase()}`)