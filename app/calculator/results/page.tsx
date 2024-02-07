import Lines from "@/app/ui/lines";
import {dmSerif} from "@/app/ui/fonts";
import Image from "next/image";
import DropDown from "@/app/ui/calculator/DropDown";


export default function Page() {


    return (
        <main className="relative min-h-screen flex justify-center">
            <Lines/>
            <div className="relative z-40 w-full">
                <div className="flex flex-col mt-40 items-center">
                    <div className="my-3 border-black border-2 mx-auto px-2 py-1 rounded-full">
                        <p className="text-center text-sm">
                            Cost Calculator
                        </p>
                    </div>
                    <p className={`${dmSerif.className} max-w-5xl font-bold lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-center py-10 px-2 tracking-tight bg-gradient-to-r from-green-500 to-yellow-400 bg-clip-text text-transparent`}>
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
                    </div>
                </div>
            </div>
        </main>
    );
}

//                        <Image src={'/LogoNo_Background.svg'} alt="Percentage Fill Up" width={500} height={500}/>