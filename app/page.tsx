import Link from 'next/link';
import Lines from "@/app/ui/lines";
import Card from "@/app/ui/Card";
import {dmSerif, inter} from "@/app/ui/fonts";

export default function Page() {
    return (

        <main className="relative min-h-screen flex justify-center">
            <Lines/>
            <div className="flex relative flex-col justify-center px-6 py-3 mt-40 z-40">
                <p className={`${dmSerif.className} font-bold lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-center py-10 px-2 tracking-tight font-serif bg-gradient-to-r from-green-500 to-blue-400 bg-clip-text text-transparent`}>
                    Where clean energy becomes <em>cheap</em> <br/>and <em>accessible</em>.
                </p>
                <Link href="/learn"
                      className="flex items-center gap-5 self-start rounded-lg bg-darkgreen px-3 my-10 md:my-20 py-3 text-xs font-medium text-white transition-colors hover:bg-green-400  mx-auto">
                    <span className="tracking-tighter">
                        Learn what we can do for you.
                    </span>
                </Link>
                <p className={`${inter.className} font-light text-center max-w-xl mx-auto my-20 text-2xl`}>
                    Welcome to HomeGrown: Where sustainability meets
                    affordability. Explore a diverse list of clean energy
                    solutions taylored for just you. Join us in the effort to
                    reach a greener more economical future for all.
                </p>
                <div className=" w-full px-10 flex-col space-y-10 md:space-y-20 my-10">
                    <Card title={["Explore State Specific Policies"]} description={["Learn more about the incentives offered in your state!"]} right={false}/>
                    <Card title={["Calculate Your Cost and Impact"]} description={["Take our  quiz to find out the impact you can have for a price that you can afford:"]} right={true}/>
                    <Card title={["Learn More About HomeGrown"]} description={["Who are we? Meet the team behind this website and discover who we are."]} right={false}/>
                    <Card title={["What Can You Do At Your Home?"]} description={["Here are some ways to get started with clean energy form the comfort of your own home!"]} right={true}/>
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