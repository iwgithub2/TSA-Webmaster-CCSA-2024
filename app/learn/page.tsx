'use client'

import {newsreader} from "@/app/ui/fonts";
import Search from "@/app/ui/search";
import {ComposableMap, Geographies, Geography} from "react-simple-maps";
import { useRouter} from "next/navigation";

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
                </div>
            </div>
        </main>
    );
}
//router.push({pathname: '/learn/[state]', query: { state: geo.properties.NAME.toLowerCase()})
//router.push(`/learn/${geo.properties.NAME.toLowerCase()}`)