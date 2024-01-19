'use client'

import {usePathname} from "next/navigation";
import stateInfo from "@/app/ui/learn/stateInfo";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
    const pathname = usePathname();
    const stateName = pathname.substring(pathname.lastIndexOf('/') + 1);
    const state = stateInfo[stateName];

    return (
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
                    <p className="text-4xl font-bold text-center p-5 bg-gradient-to-r from-purple-500 to-red-600 bg-clip-text text-transparent">
                        {stateName.charAt(0).toUpperCase() + stateName.slice(1)} Tax Rebate Information
                    </p>
                    <Image src={state.image} alt={"Picture"} width={100} height={100}/>
                    <div
                        className="flex flex-row p-10 mt-20 max-w-2xl w-full rounded-3xl bg-gradient-to-r from-pink-500 to-blue-600">
                        <p className="font-bold text-3xl text-white">
                            Car Tax Rebates for Everyone
                        </p>
                    </div>
                    <div className="my-2 mb-10 max-w-2xl flex-row flex space-x-2 ">
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