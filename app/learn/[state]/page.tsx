'use client'
import {usePathname} from "next/navigation";
import {stateInfo} from "@/app/ui/learn/stateInfo";
import Lines from "@/app/ui/lines";
import Card from "@/app/ui/Card";
import {dmSerif, inter, newsreader} from "@/app/ui/fonts";
import Image from "next/image";
import dynamic from "next/dynamic";
import {ComponentType} from "react";


export default function Page() {
    const pathname = usePathname();
    let stateName = pathname.substring(pathname.lastIndexOf('/') + 1);
    const state = stateInfo[stateName];
    stateName = stateName.charAt(0).toUpperCase() + stateName.slice(1);

    if (stateName.includes('_')) {
        // Split the input string at underscores and capitalize each word
        const words = stateName.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1));

        // Join the capitalized words with a space
        stateName = words.join(' ');
    }

    let eVString: string;
    let hybridString: string;
    let creditString: string = state.solarCredit;
    let taxString: string = "";
    let score: number = 0;

    if (creditString === "") {
        creditString = "Sorry! Your state does not offer tax credits or rebates for solar power. Check out their other incentives!";
    } else {
        creditString = "The state of " + stateName + " has " + state.solarCredit + ".";
        score += 1;
    }

    if (state.eVRebate === 0) {
        eVString = "Sorry! Your State doesn't offer Tax Credit for Electric Vehicles. Try buying a vehicle in another state.";
    } else {
        eVString = "The State of " + stateName + " offers up to $" + state.eVRebate + " in tax credits! Check out your state government's website more information on how to register.";
        score += 1;
    }

    if (state.hybridRebate === 0) {
        hybridString = "Sorry! Your State doesn't offer Tax Credit for Hybrid Vehicles. Try buying a vehicle in another state.";
    } else {
        hybridString = "The State of " + stateName + " offers up to $" + state.hybridRebate + " in tax credits! Check out your state government's website more information on how to register.";
        score += 1;
    }

    if (state.propertyTaxExemption) {
        taxString += "Good News! Your state gives you a property tax exemption. This means you don't have to pay property tax on the added values of solar panels to your property!";
        score += 1;
    }
    if (state.salesTaxExemption) {
        taxString += "Good News! Your state has voided all sales tax you have to pay to buy your solar panels!";
        score += 1;
    }
    if (taxString === "") {
        taxString = "Uh Oh, it looks like there are no tax exemptions for your state. Don't worry you can still use the federal tax credit to receive up to 30% off of your solar panel investments!";
    }

    let stateColor: string;
    switch (score) {
        case 0:
            stateColor = "bg-badscore";
            break;
        case 1:
            stateColor = "bg-mehscore";
            break;
        case 2:
            stateColor = "bg-alrightscore";
            break;
        case 3:
            stateColor = "bg-goodscore";
            break;
        case 4:
            stateColor = "bg-greatscore";
            break;
        case 5:
            stateColor = "bg-greatscore";
            break;
    }

    return (
        <main
            className="relative min-h-screen flex justify-center bg-gradient-to-t from-forestgreen to-cream bg-opacity-10">
            <div className="flex relative flex-col justify-center px-6 py-3 z-40">
                <div className=" mx-auto flex-col px-5 sm:px-10 md:px-10 justify-items-center mt-40 ">
                    <p className={`${dmSerif.className} mx-auto text-green-900 text-center lg:text-6xl md:text-5xl sm:text-4xl text-3xl py-5`}>
                        {stateName} Tax Rebate Information
                    </p>
                    <Image className="mx-auto mt-20 text-red-500" src={state.image} alt={"Picture"} width={300}
                           height={400}/>
                    <div className="flex flex-col mt-20 max-w-5xl mx-auto">
                        {/* until ik wtf im doing lg:grid lg:grid-cols-2 */}
                        <div className="flex flex-col space-y-4 p-10">
                            <Card title={["Car Tax Rebates"]}
                                  description={[]}
                                  maxWidth={true}
                                  right={false}/>
                            <div className="flex flex-col space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 lg:space-x-2">
                                <div>
                                    <Card title={["Electric Vehicles"]}
                                          description={[eVString]}
                                          right={false}/>
                                </div>
                                <div className="">
                                    <Card title={["Hybrid Vehicles"]}
                                          description={[hybridString]}
                                          right={true}/>
                                </div>
                            </div>
                            <Card title={["Solar Panel Incentives"]}
                                  description={[creditString]} right={false}
                                  maxWidth={true}/>
                            <Card title={["Tax Exemptions"]}
                                  description={[taxString]}
                                  right={false}
                                  maxWidth={true}/>
                        </div>
                    </div>
                    <p className={`${dmSerif.className}  sm:mx-10 md:mx-20 lg:text-6xl md:text-5xl sm:text-4xl text-3xl px-2 pt-20 text-center tracking-tight text-green-900`}>
                        Federal Tax Rebate Information
                    </p>
                    <div
                        className="flex flex-col md:flex-row md:space-x-4 md:space-y-0 space-y-4 md:p-10 m-10 max-w-5xl md:items-stretch">
                        <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
                            <div className="col-span-2 w-full">
                                <Card title={["Car Tax Rebates"]} description={[]} right={false}/>
                            </div>
                            <Card title={["Electric Vehicles"]}
                                  description={["The U.S. Federal Government Offers up $7,500 in tax rebates for purchasing or leasing an electric vehicle"]}
                                  right={false}/>
                            <Card title={["Hybrid Vehicles"]}
                                  description={["Some Hybrid Vehicles are eligible for Federal Tax Credits starting from $3,700"]}
                                  right={false}/>
                        </div>
                        <div className="">
                            <Card title={["Solar Panel Incentives"]}
                                  description={["The Federal Tax Credit for Solar Panels can give homeowners up to 30% off the cost of installing their solar system"]}
                                  right={false}/>
                        </div>
                    </div>
                </div>
            </div>
        </main>


    );
}

//<div className="bg-green-400 items-center">
//                                 <div
//                                     className={`bg-white mr-5 shadow-2xl flex flex-col  w-full  p-10 rounded`}>
//                                     <div className="flex flex-col space-y-5">
//                                         <p className={`${newsreader.className} font-semibold text-green-500 text-md sm:text-lg md:text-xl lg:text-2xl text-left py-2`}>
//                                             {["Car Tax Rebates"]}
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>

//<div className="flex flex-col space-y-4 w-1/2 p-10 m-10 ml-auto">
//                     <div className="grid grid-cols-2 gap-4">
//                         <div className="col-span-2">
//                             <Card title={["Car Tax Rebates"]} description={[]} right={false}/>
//                         </div>
//                         <Card title={["Electric Vehicles"]} description={["The U.S. Federal Government Offers up $7,500 in tax rebates for purchasing or leasing an electric vehicle"]} right={false}/>
//                         <Card title={["Hybrid Vehicles"]} description={["Some Hybrid Vehicles are eligible for Federal Tax Credits starting from $3,700"]} right={false}/>
//                     </div>
//                     <Card title={["Solar Panel Incentives"]} description={["Learn more about the incentives offered in your state!"]} right={false}/>
//                     <Card title={["Solar Panel Incentives"]} description={["Learn more about the incentives offered in your state!"]} right={false}/>
//                 </div>


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


//<div className="max-w-5xl">
//
//             <Parallax pages={2}>
//                 <Lines/>
//                 <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
//                 <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />
//                 <ParallaxLayer className="z-40" offset={0.2} speed={1}>
//                     <div>
//                         <p className={`${dmSerif.className}  lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-center p-5 bg-gradient-to-r from-purple-500 to-red-600 bg-clip-text text-transparent`}>
//                             {stateName.charAt(0).toUpperCase() + stateName.slice(1)} Tax Rebate Information
//                         </p>
//                         <p className="text-center font-bold bg-gradient-to-r from-green-500 to-purple-400 bg-clip-text text-transparent text-md sm:text-lg md:text-xl lg:text-2xl">
//                             Being clean and green is hard. So let us do the work for you
//                         </p>
//                     </div>
//                 </ParallaxLayer>
//                 <div className="flex flex-row space-evenly">
//                     <ParallaxLayer offset={0.8} speed={2} factor={2}>
//                             <img src={state.image} alt={"state"} style={{marginLeft: '20%'}}/>
//                     </ParallaxLayer>
//                     <ParallaxLayer offset={1} speed={1}>
//                         <div style={{marginLeft: '30%'}}>
//                             <div className="flex flex-col space-y-4 p-10 m-10">
//                                 <div className="grid grid-cols-2 gap-4">
//                                     <div className="col-span-2">
//                                         <Card title={["Car Tax Rebates"]} description={[]} right={false}/>
//                                     </div>
//                                     <Card title={["Electric Vehicles"]} description={["The U.S. Federal Government Offers up $7,500 in tax rebates for purchasing or leasing an electric vehicle"]} right={false}/>
//                                     <Card title={["Hybrid Vehicles"]} description={["Some Hybrid Vehicles are eligible for Federal Tax Credits starting from $3,700"]} right={false}/>
//                                 </div>
//                                 <Card title={["Solar Panel Incentives"]} description={["Learn more about the incentives offered in your state!"]} right={false}/>
//
//                             </div>
//                         </div>
//                     </ParallaxLayer>
//                 </div>
//             </Parallax>
//             </div>