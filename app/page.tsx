import Link from 'next/link';
import {newsreader} from "@/app/ui/fonts";
import ImageFrame from "@/app/ui/imageframe";
import BigImageAndText from "@/app/ui/bigimageandtext";

export default function Page() {
    return (

        <main className="relative min-h-screen p-6">
            <div className="absolute top-0 h-full flex flex-row justify-evenly w-1/2 left-1/4 z-0">
                <div className="w-0.5 h-full bg-gray-100"></div>
                <div className="w-0.5 h-full bg-gray-100"></div>
                <div className="w-0.5 h-full bg-gray-100"></div>
                <div className="w-0.5 h-full bg-gray-100"></div>
                <div className="w-0.5 h-full bg-gray-100"></div>
            </div>
            <div className="flex relative flex-col justify-center px-6 py-3 mt-40 z-40">
                <p className={`${newsreader.className} text-8xl md-text-xl text-center py-10 tracking-tighter`}>
                    Where clean energy becomes <em>cheap</em> <br/>and <em>accessible</em>.
                </p>
                <Link href="/learn"
                      className="flex items-center gap-5 self-start rounded-lg bg-darkgreen px-3 my-40 py-3 text-xs font-medium text-white transition-colors hover:bg-green-400  mx-auto">
                    <span className="tracking-tighter">
                        Learn what we can do for you.
                    </span>
                </Link>
                <p className="text-center w-1/4 mx-auto my-20 text-2xl">
                    We believe everyone should have access to clean energy. At Recycle Pro 2.0 we have solutions for
                    everyone from everywhere
                </p>
                <div className="w-1/2 mx-auto flex-col">
                    <div className="bg-white my-40 mr-5 shadow-lg flex flex-col w-1/2 ml-auto p-10 rounded">
                        <div>
                            <p className="text-red-500 text-left font-bold">
                                50 States
                            </p>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <div className="bg-white my-40 ml-5 shadow-lg flex flex-col w-1/2 p-10 rounded">
                        <div>
                            <p className="text-red-500 text-left font-bold">
                                More Cool Stuff
                            </p>
                        </div>
                        <p>
                            Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
                <BigImageAndText swapOrder={false}
                                 imgSrc='/TempPortrait.jpg'
                                 headerTxt="01 I'm the best lmao"
                                 bigTxt="Maya make sick graphics"
                                 smallTxt="Learn about cool environment shit. TAX REBATES!!!!!"
                                 colorTxt='text-darkgreen'
                                 colorBorder='border-darkgreen'/>
                <BigImageAndText swapOrder={true}
                                 imgSrc='/TempPortrait.jpg'
                                 headerTxt="02 Maya please we need to talk abt this website"
                                 bigTxt="YOU NEED TO RESEARCH"
                                 smallTxt="Cuz no way im learning about the environment. even tho im doing scientific research on biochar :/"
                                 colorTxt='text-red-500'
                                 colorBorder='border-red-500'/>
                <BigImageAndText swapOrder={false}
                                 imgSrc='/TempPortrait.jpg'
                                 headerTxt="03 Maya your also gonna have to take pics"
                                 bigTxt="Cuz i dont know how to use a camera"
                                 smallTxt="Good luck"
                                 colorTxt='text-blue-500'
                                 colorBorder='border-blue-500'/>
            </div>


        </main>
    );
}
//can do tracking-[custom value em]
