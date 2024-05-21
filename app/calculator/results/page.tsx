'use client'
import Lines from "@/app/ui/lines";
import {dmSerif} from "@/app/ui/fonts";
import Image from "next/image";
import {useSearchParams} from "next/navigation";
import {Answers} from "@/app/calculator/page";
import {stateInfo} from "@/app/ui/learn/stateInfo";

export default function Page() {

    const searchParams = useSearchParams();
    const data: Answers = JSON.parse(searchParams.get('data')!);
    const stateData = stateInfo;
    const avgSolarElectricityGenerationPerMonth = 886;
    let baseCost: number = 0;
    let score: number = 0;

    if (data.numPractices == 0) {
        score = 0;
    } else if (data.numPractices < 3) {
        score = 1;
    } else if (data.numPractices < 6) {
        score = 2;
    } else if (data.numPractices) {
        score = 3;
    }

    let badge;
    switch (score) {
        case 0:
            badge = <p id="Results" className="mx-auto text-4xl text-white text-center">
                Womp Womp u suck!
            </p>
            break;
        case 1:
            badge = <Image id="Results"  className="mx-auto scroll-mt-40" src={'/OneStar.svg'} alt="stars and stripes" height={200} width={500}/>
            break;
        case 2:
            badge = <Image id="Results"  className="mx-auto scroll-mt-40" src={'/TwoStars.svg'} alt="stars and stripes" height={200} width={500}/>
            break;
        case 3:
            badge = <Image id="Results"  className="mx-auto scroll-mt-40" src={'/ThreeStars.svg'} alt="stars and stripes" height={200} width={500}/>
            break;
    }


    switch (data.primarySource) {
        case "Natural gas":
            baseCost = data.energy / (stateData[data.state].naturalGasPrice2022 * 1000 / 3412) * 12;
            break;
        case "Electricity":
            baseCost = data.energy / stateData[data.state].electricityPrice2024 * 12;
            break;
        case "Renewable":
            baseCost = 0;
            break;
    }


    if (stateInfo[data.state]) {
        if (stateInfo[data.state].eVRebate != null) {
            score += stateInfo[data.state].eVRebate;
        }
        if (stateInfo[data.state].eVRebate != null) {
            score += stateInfo[data.state].eVRebate;
        }
    }
    if (data.rebates) {
        score += 10;
    }
    score += 10 * (data.energy + data.numPractices + data.solarOrEV);

    return (
        <main
            className="relative min-h-screen flex justify-center bg-gradient-to-t from-forestgreen to-cream bg-opacity-10">
            <div className="relative z-40 w-full">
                <div className="flex flex-col mt-40 items-center">
                    <div className="my-3 border-black border-2 mx-auto px-2 py-1 rounded-full">
                        <p className="text-center text-sm">
                            Cost Calculator
                        </p>
                    </div>
                    <p className={`${dmSerif.className} max-w-5xl font-bold lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-center py-10 px-2 tracking-tight text-green-900       `}>
                        Are you Ready to Change<br/> the World?
                    </p>
                    <a href="#Results"
                       className="flex items-center scroll-smooth gap-5 self-start rounded-lg  px-3 my-20 py-3 text-xs font-medium mx-auto">
                        <div className="flex flex-col items-center p-2">
                            <span>
                               See Your Results
                            </span>
                            <Image src={"/down.svg"} alt="Down arrow " className="animate-bounce" width={20}
                                   height={20}/>
                        </div>
                    </a>

                    <div className="my-40">
                        {badge}
                        <p className={`${dmSerif.className} max-w-5xl font-bold lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-center py-10 px-2 tracking-tight bg-gradient-to-r from-green-500 to-yellow-400 bg-clip-text text-transparent`}>
                            Score: {score}!
                        </p>
                        <p className={`${dmSerif.className} max-w-5xl font-bold lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-center py-10 px-2 tracking-tight text-white border-b-2 border-white`}>
                            Breakdown and Tips for Improvement
                        </p>
                        <div className={`${dmSerif.className} flex flex-row justify-between text-white text-3xl py-5`}>
                            <p>
                                Annual Estimated Energy Cost:
                            </p>
                            ${baseCost}
                        </div>
                        <div className={`${dmSerif.className} flex flex-row justify-between text-white text-3xl py-5`}>
                            <p>
                                Possible State Savings:
                            </p>
                            ${baseCost}
                        </div>
                        <div className={`${dmSerif.className} flex flex-row justify-between text-white text-3xl py-5`}>
                            <p>
                                Possible Already Saving:
                            </p>
                            ${baseCost}
                        </div>
                        <p className={`${dmSerif.className} max-w-5xl font-bold lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-center py-10 px-2 tracking-tight text-white border-b-2 border-white`}>
                            Possible Savings
                        </p>
                        <div className={`${dmSerif.className} flex flex-row justify-between text-white text-3xl py-5`}>
                            <p>
                                Electric Vehicle Rebates:
                            </p>
                            ${baseCost}
                        </div>
                        <div className={`${dmSerif.className} flex flex-row justify-between text-white text-3xl py-5`}>
                            <p>
                                Average Solar Panel Savings:
                            </p>
                            {avgSolarElectricityGenerationPerMonth} kWh
                        </div>
                        <p className={`${dmSerif.className} max-w-5xl font-bold lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-center py-10 px-2 tracking-tight text-white border-b-2 border-white`}>
                            Learn More
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}

//                        <Image src={'/LogoNo_Background.svg'} alt="Percentage Fill Up" width={500} height={500}/>