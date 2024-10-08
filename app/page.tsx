import Link from 'next/link';
import Lines from "@/app/ui/lines";
import Card from "@/app/ui/Card";
import {dmSans, dmSerif, inter, newsreader} from "@/app/ui/fonts";

import Image from "next/image";
import HeroParallax from "@/app/ui/HeroParallax";


export default function Page() {


    return (
        <main
            className="relative min-h-screen flex justify-center bg-gradient-to-t from-forestgreen to-cream ">
            <div className="flex flex-col w-full">
                <HeroParallax/>
                <div className={`flex relative flex-col justify-center px-6 z-40 bg-gradient-to-t from-forestgreen to-greenBlackTrees`}>
                    <p className={`${dmSans.className} text-center text-darkcream drop-shadow-xl md:max-w-xl mx-auto my-20 text-md sm:text-lg md:text-xl lg:text-2xl leading-loose`}>
                        Welcome to HomeGrown:<br/> Where sustainability meets
                        affordability. Explore a diverse list of clean energy
                        solutions tailored for just you. Join us in the effort to
                        reach a greener more economical future for all.
                    </p>
                    <div className="mx-40 px-10 flex-col space-y-10 md:space-y-20 my-10 max-w-5xl mx-auto">
                        <div>
                            <Link href={'/learn'}>
                                <Card title={["Explore State Specific Policies"]}
                                      description={["Learn more about the incentives offered in your state!"]}
                                      right={false}
                                      image={'/practice_images/home_states.svg'}
                                      color="green-900"/>
                            </Link>
                        </div>
                        <div>
                            <Link href={'/practices'}>
                                <Card title={["What Can You Do At Your Home?"]}
                                      description={["Here are some ways to get started with clean energy form the comfort of your own home!"]}
                                      right={true}
                                      image={'/practice_images/home_practices.svg'}
                                      color="green-900"/>
                            </Link>
                        </div>
                        <div>
                            <Link href={'/calculator'}>
                                <Card title={["Calculate Your Cost and Impact"]}
                                      description={["Take our  quiz to find out the impact you can have."]}
                                      right={false}

                                      color="green-900"
                                />
                            </Link>
                        </div>
                        <div>
                            <Link href={'/about'}>
                                <Card title={["Learn More About HomeGrown"]}
                                      description={["Who are we? Meet the team behind this website and discover who we are."]}
                                      right={true}
                                      image={'/Asset 3.svg'}
                                      color="green-900"/>
                            </Link>
                        </div>

                    </div>

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