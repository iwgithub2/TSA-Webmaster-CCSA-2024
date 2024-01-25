import Link from 'next/link';
import {newsreader} from "@/app/ui/fonts";
import ImageFrame from "@/app/ui/imageframe";
import BigImageAndText from "@/app/ui/bigimageandtext";
import Card from "@/app/ui/Card";

export default function Page() {
    return (

        <main className="relative min-h-screen flex justify-center">
            <div className="absolute top-0 h-full flex flex-row justify-evenly w-full max-w-7xl z-0">
                <div className="w-0.5 h-full bg-gray-100"></div>
                <div className="w-0.5 h-full bg-gray-100"></div>
                <div className="w-0.5 h-full bg-gray-100"></div>
                <div className="w-0.5 h-full bg-gray-100"></div>
                <div className="w-0.5 h-full bg-gray-100"></div>
            </div>
            <div className="flex relative flex-col justify-center px-6 py-3 mt-40 z-40">
                <p className={`font-bold lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-center py-10 px-2 tracking-tighter bg-gradient-to-r from-green-500 to-blue-400 bg-clip-text text-transparent`}>
                    Where clean energy becomes <em>cheap</em> <br/>and <em>accessible</em>.
                </p>
                <Link href="/learn"
                      className="flex items-center gap-5 self-start rounded-lg bg-darkgreen px-3 my-10 md:my-20 py-3 text-xs font-medium text-white transition-colors hover:bg-green-400  mx-auto">
                    <span className="tracking-tighter">
                        Learn what we can do for you.
                    </span>
                </Link>
                <p className="text-center max-w-xl mx-auto my-20 text-2xl">
                     At Recycle Pro 2.0 We believe everyone should have access to clean energy. We have solutions for
                    everyone from everywhere
                </p>
                <div className=" w-full px-10 flex-col space-y-10 md:space-y-20 my-10">
                    <Card title={["50 States"]} description={["We have pulled information across 50 states, making this site the hub for all renewable energy."]} right={false}/>
                    <Card title={["More Cool Stuff"]} description={["Duis aute irure dolor in reprehenderit in\n" +
                    "                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n" +
                    "                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]} right={true}/>
                </div>

            </div>


        </main>
    );
}
//can do tracking-[custom value em]
//<BigImageAndText swapOrder={false}
//                                  imgSrc='/TempPortrait.jpg'
//                                  headerTxt="01 I'm the best lmao"
//                                  bigTxt="Maya make sick graphics"
//                                  smallTxt="Learn about cool environment shit. TAX REBATES!!!!!"
//                                  colorTxt='text-darkgreen'
//                                  colorBorder='border-darkgreen'/>
//                 <BigImageAndText swapOrder={true}
//                                  imgSrc='/TempPortrait.jpg'
//                                  headerTxt="02 Maya please we need to talk abt this website"
//                                  bigTxt="YOU NEED TO RESEARCH"
//                                  smallTxt="Cuz no way im learning about the environment. even tho im doing scientific research on biochar :/"
//                                  colorTxt='text-red-500'
//                                  colorBorder='border-red-500'/>
//                 <BigImageAndText swapOrder={false}
//                                  imgSrc='/TempPortrait.jpg'
//                                  headerTxt="03 Maya your also gonna have to take pics"
//                                  bigTxt="Cuz i dont know how to use a camera"
//                                  smallTxt="Good luck"
//                                  colorTxt='text-blue-500'
//                                  colorBorder='border-blue-500'/>