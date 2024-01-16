'use client'

import {usePathname} from "next/navigation";
import stateInfo from "@/app/ui/learn/stateInfo";
import Image from "next/image";

export default function Page() {
    const pathname = usePathname();
    const stateName = pathname.substring(pathname.lastIndexOf('/') + 1);
    const state = stateInfo[stateName];

    return(
        <main className="relative min-h-screen flex justify-center">
            <div className="absolute top-0 h-full flex flex-row justify-evenly w-full max-w-7xl z-0">
                <div className="w-0.5 h-full bg-gray-100"></div>
                <div className="w-0.5 h-full bg-gray-100"></div>
                <div className="w-0.5 h-full bg-gray-100"></div>
                <div className="w-0.5 h-full bg-gray-100"></div>
                <div className="w-0.5 h-full bg-gray-100"></div>
            </div>
            <div className=" relative mt-40 z-40">
                <div className="flex flex-col justify-center  items-center">
                    <p className="text-4xl text-blue-500 font-bold text-center p-5   ">
                        {stateName.charAt(0).toUpperCase() + stateName.slice(1)} Tax Rebate Information
                    </p>
                    <Image src={state.image} alt={"Picture"} width={100} height={100}/>
                </div>

            </div>

        </main>
    );
}