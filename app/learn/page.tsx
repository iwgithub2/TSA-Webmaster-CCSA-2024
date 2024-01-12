'use client'
import Link from "next/link";
import {newsreader} from "@/app/ui/fonts";
import Search from "@/app/ui/search";
import State from "@/app/ui/learn/state";
import Map from "@/app/ui/learn/map";
import {ComposableMap, Geographies, Geography} from "react-simple-maps";

export default function Page() {
    // @ts-ignore
    return (
        <main className="flex min-h-screen flex-col p-6">
            <div className={"flex flex-col justify-center mt-40"}>
                <p className={`${newsreader.className} text-6xl md-text-xl text-center py-10 tracking-tighter`}>
                    Tell us where you are so we can<br/> find the information for you.
                </p>
                <Search placeholder={'State...'}/>
                <ComposableMap width={10000} height={10000} projection={"geoAlbers"}>
                    <Geographies geography="/states.json">
                        {({geographies}) =>
                            geographies.map((geo) => (
                                <Geography key={geo.rsmKey} geography={geo}/>
                            ))
                        }
                    </Geographies>
                </ComposableMap>
            </div>
        </main>
    );
}