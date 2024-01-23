'use client'

import {newsreader} from "@/app/ui/fonts";
import Search from "@/app/ui/search";
import {ComposableMap, Geographies, Geography} from "react-simple-maps";
import { useRouter} from "next/navigation";
import Link from "next/link";

export default function Page() {
    const router = useRouter();

    const redirect = (name : string) => {
        if (name.includes(' ')) {
            name = name.replace(' ', '_');
        }
        console.log(name);
        router.push(`/learn/${name}`);
    };

    return (
        <main className="relative min-h-screen flex justify-center">
            <div className="absolute top-0 h-full flex flex-row justify-evenly w-full max-w-7xl z-0">
                <div className="w-0.5 h-full bg-gray-100"></div>
                <div className="w-0.5 h-full bg-gray-100"></div>
                <div className="w-0.5 h-full bg-gray-100"></div>
                <div className="w-0.5 h-full bg-gray-100"></div>
                <div className="w-0.5 h-full bg-gray-100"></div>
            </div>
            <div className={"flex flex-col justify-center w-full mt-40 z-40"}>
                <p className={`${newsreader.className} text-6xl md-text-xl text-center py-10 tracking-tighter z-40`}>
                    Tell us where you are so we can<br/> find the information for you.
                </p>
                <p className="font-boldd text-center mb-5">
                    Or Just Scroll Below to find Federal Information
                </p>
                <Search placeholder={'State...'}/>
                <div className="mx-40 z-40">
                    <ComposableMap width={1200} height={700} projection={"geoAlbersUsa"}>
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
                    <div className="my-10 mb-10 max-w-2xl mx-auto flex-row flex space-x-2 ">
                        <div className="p-10 rounded-3xl bg-gradient-to-r from-blue-500 to-green-300">
                            <p className="font-bold text-2xl text-white">
                                $2,500 for Fully Electric Vehicles
                            </p>
                            <Link href={'/car'} className="relative inline-block after:duration-1000 ease-out after:block after:h-0.5 after:w-full
                                 after:origin-bottom-right after:scale-x-0 after:bg-white after:transition-transform
                                 after:hover:origin-bottom-left after:hover:scale-x-100">
                                    <span className="mt-5 text-white">
                                        Check out the List
                                    </span>
                            </Link>
                        </div>
                        <div className="p-10 rounded-3xl bg-gradient-to-r from-red-950 to-orange-800">
                            <p className="font-bold text-white text-2xl">
                                $1,500 for Hybrid Vehicles
                            </p>
                            <Link href={'/car'} className="relative inline-block after:duration-1000 ease-out after:block after:h-0.5 after:w-full
                                 after:origin-bottom-right after:scale-x-0 after:bg-white after:transition-transform
                                 after:hover:origin-bottom-left after:hover:scale-x-100 mr-auto">
                                    <span className="mt-5 text-white">
                                        Check out the List
                                    </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
//router.push({pathname: '/learn/[state]', query: { state: geo.properties.NAME.toLowerCase()})
//router.push(`/learn/${geo.properties.NAME.toLowerCase()}`)