'use client'
import Lines from "@/app/ui/lines";
import {dmSerif} from "@/app/ui/fonts";
import Image from "next/image";
import {useSearchParams} from "next/navigation";
import {Answers} from "@/app/calculator/page";
import {stateInfo} from "@/app/ui/learn/stateInfo";

export default function Page() {

    const searchParams = useSearchParams();
    const data : Answers = JSON.parse(searchParams.get('data')!);
    let score : number = 0;
    if (stateInfo[data.state]) {
        if (stateInfo[data.state].eVRebate != null) {
            score += stateInfo[data.state].eVRebate;
        }
        if (stateInfo[data.state].eVRebate != null) {
            score += stateInfo[data.state].eVRebate;
        }
    }    if (data.rebates) {
        score += 10;
    }
    score += 10 * (data.numConsiderPractices + data.numPractices + data.solarOrEV);

    return (
        <main className="relative min-h-screen flex justify-center bg-gradient-to-t from-forestgreen to-cream bg-opacity-10">
            <div className="relative z-40 w-full">
                <div className="flex flex-col mt-40 items-center">
                    <div className="my-3 border-black border-2 mx-auto px-2 py-1 rounded-full">
                        <p className="text-center text-sm">
                            Cost Calculator
                        </p>
                    </div>
                    <p className={`${dmSerif.className} max-w-5xl font-bold lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-center py-10 px-2 tracking-tight text-green-900   `}>
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

                    <div id="Results" className="my-40">
                        <Image className="mx-auto" src={'/LogoNo_Background.svg'} alt="Percentage Fill Up" width={300} height={300}/>
                        <p className={`${dmSerif.className} max-w-5xl font-bold lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-center py-10 px-2 tracking-tight bg-gradient-to-r from-green-500 to-yellow-400 bg-clip-text text-transparent`}>
                            Score: {score}!
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}

//                        <Image src={'/LogoNo_Background.svg'} alt="Percentage Fill Up" width={500} height={500}/>