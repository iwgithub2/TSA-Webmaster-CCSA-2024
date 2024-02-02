'use client'

import {usePathname} from "next/navigation";
import stateInfo from "@/app/ui/learn/stateInfo";
import {useEffect, useState} from "react";
import {useDebounce} from "use-debounce";
import Lines from "@/app/ui/lines";
//import { Parallax, ParallaxLayer } from '@react-spring';

export default function Page() {
    const pathname = usePathname();
    const stateName = pathname.substring(pathname.lastIndexOf('/') + 1);
    const state = stateInfo[stateName];

    const [scrollPercent, setScrollPercentage] = useState(0);
    const [debouncedScroll] = useDebounce(handleScroll, 200);
    useEffect(() => {
        window.addEventListener('scroll', debouncedScroll);

        return () => {
            window.removeEventListener('scroll', debouncedScroll);
        };
    }, [debouncedScroll]);

    function handleScroll() {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;
        const percentage = (scrolled / scrollHeight) * 100;
        setScrollPercentage(percentage);
    }

    return (
        <main className="relative min-h-screen flex justify-center">
            <Lines/>
            <div className=" relative mt-40 z-40 w-full h-screen ">
                <p className="font-bold lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-center p-5 bg-gradient-to-r from-purple-500 to-red-600 bg-clip-text text-transparent">
                    {stateName.charAt(0).toUpperCase() + stateName.slice(1)} Tax Rebate Information (Page not ready for critque cuz ima bum, but just imagine like a vertical animated timeline stuff)
                </p>
                <p className="text-center font-bold bg-gradient-to-r from-green-500 to-purple-400 bg-clip-text text-transparent text-md sm:text-lg md:text-xl lg:text-2xl">
                    Being clean and green is hard. So let us do the work for you
                </p>
            </div>
        </main>
    );
}
//<div className="flex justify-center mt-10 sm:mt-20 md:mt-30 px-5 py-10">
//                     <div className="bg-red-400 mx-auto">
//                         <Image src={state.image} alt={"Picture"} width={300} height={400}/>
//                     </div>
//                     <div className="ml-1/2 overflow-y-auto w-1/2 max-h-screen bg-red-400">
//                         <div
//                             className="flex flex-col p-10 mt-20 max-w-2xl w-full rounded-3xl bg-gradient-to-r from-pink-500 to-blue-600">
//                             <p className="font-bold text-3xl text-white">
//                                 Car Tax Rebates for Everyone
//                             </p>
//
//                         </div>
//                         <div className="my-2 mb-10 max-w-2xl flex-row flex space-x-2">
//                             <BubbleDiv header={`${state.eVRebate} for Fully Electric Vehicles`} link={'/car'} linkText={"Check out the List"} gradient={"from-blue-500 to-green-300"}/>
//                             <BubbleDiv header={`${state.hybridRebate} for Hybrid Vehicles`} link={'/car'} linkText={"Check out the List"} gradient={"from-red-950 to-orange-800"}/>
//                         </div>
//                         <div className="my-2 mb-10 max-w-2xl flex-row flex space-x-2">
//                             <BubbleDiv header={`${state.eVRebate} for Fully Electric Vehicles`} link={'/car'} linkText={"Check out the List"} gradient={"from-blue-500 to-green-300"}/>
//                             <BubbleDiv header={`${state.hybridRebate} for Hybrid Vehicles`} link={'/car'} linkText={"Check out the List"} gradient={"from-red-950 to-orange-800"}/>
//                         </div>
//                         <div className="my-2 mb-10 max-w-2xl flex-row flex space-x-2">
//                             <BubbleDiv header={`${state.eVRebate} for Fully Electric Vehicles`} link={'/car'} linkText={"Check out the List"} gradient={"from-blue-500 to-green-300"}/>
//                             <BubbleDiv header={`${state.hybridRebate} for Hybrid Vehicles`} link={'/car'} linkText={"Check out the List"} gradient={"from-red-950 to-orange-800"}/>
//                         </div>
//                         <div className="my-2 mb-10 max-w-2xl flex-row flex space-x-2">
//                             <BubbleDiv header={`${state.eVRebate} for Fully Electric Vehicles`} link={'/car'} linkText={"Check out the List"} gradient={"from-blue-500 to-green-300"}/>
//                             <BubbleDiv header={`${state.hybridRebate} for Hybrid Vehicles`} link={'/car'} linkText={"Check out the List"} gradient={"from-red-950 to-orange-800"}/>
//                         </div>
//                     </div>
//                 </div>