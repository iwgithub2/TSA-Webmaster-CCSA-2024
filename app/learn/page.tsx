'use client'

import {inter, dmSerif} from "@/app/ui/fonts";
import {ComposableMap, Geographies, Geography} from "react-simple-maps";
import {useRouter} from "next/navigation";
import BubbleDiv from "@/app/ui/learn/BubbleDiv";
import Lines from "@/app/ui/lines";
import Card from "@/app/ui/Card";

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
        <main className="relative min-h-screen flex justify-center bg-gradient-to-t from-forestgreen to-cream bg-opacity-10">
            <div className="relative z-40 mx-5">
                <div className={"flex flex-col justify-center w-full mt-40 max-w-7xl"}>
                    <p className={`${dmSerif.className} mx-5 sm:mx-10 md:mx-20 lg:text-6xl md:text-5xl sm:text-4xl text-3xl px-2 p-2 text-center tracking-tight text-green-900`}>
                        Choose your state to find <em>region-specific</em> information
                    </p>
                    <p className={`${dmSerif.className} font-medium text-center text-darkbrown mb-5 lg:text-2xl md:text-xl sm:text-lg text-md my-5 mx-10 font-serif tracking-tight`}>
                        Or Just Scroll Below to find Federal Information
                    </p>
                    {/* add search later for nats
                                <Search placeholder={'State...'}/>
                */}
                    <div className="pb-10">
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
                    <p className={`${dmSerif.className}  sm:mx-10 md:mx-20 lg:text-6xl md:text-5xl sm:text-4xl text-3xl px-2 pt-20 text-center tracking-tight text-green-900`}>
                        Federal Tax Rebate Information
                    </p>
                    <div className="flex flex-col md:flex-row md:space-x-4 md:space-y-0 space-y-4 md:p-10 m-10">
                        <div className="flex flex-col md:grid md:grid-cols-2 gap-4 ">
                            <div className="col-span-2">
                                <Card className="text-center" title={["Car Tax Rebates"]} description={[]} right={false} color="green-900"/>
                            </div>
                            <Card title={["Electric Vehicles"]} description={["The U.S. Federal Government Offers up $7,500 in tax rebates for purchasing or leasing an electric vehicle"]} right={false} color="green-900"/>
                            <Card title={["Hybrid Vehicles"]} description={["Some Hybrid Vehicles are eligible for Federal Tax Credits starting from $3,700"]} right={false} color="green-900"/>
                        </div>
                        <Card className="h-full" title={["Solar Panel Incentives"]} description={["The Federal Tax Credit for Solar Panels can give homeowners up to 30% off the cost of installing their solar system"]} right={false} color="green-900"/>

                    </div>
                </div>
            </div>

        </main>
    );
}
//router.push({pathname: '/learn/[state]', query: { state: geo.properties.NAME.toLowerCase()})
//router.push(`/learn/${geo.properties.NAME.toLowerCase()}`)