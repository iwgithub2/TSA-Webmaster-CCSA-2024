import Lines from "@/app/ui/lines";
import {dmSerif} from "@/app/ui/fonts";
import Image from "next/image";

export default function Page() {
    return (
        <main className="relative min-h-screen flex justify-center">
            <Lines/>
            <div className="flex relative flex-col px-6 py-3 z-40">
                <div className="flex flex-col mt-40 text-center">
                    <p className={`${dmSerif.className} font-bold lg:text-6xl md:text-5xl p-2 sm:text-4xl text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-blue-400 text-center mx-auto`}>
                        Who are we at <em>HomeGrown</em>
                    </p>
                    <div className={`flex flex-col lg:flex-row mt-20 mx-5 mx-auto`}>
                        <Image className="mr-10" src={'/LogoNo_Background.svg'} alt={"Percentage Fill Up"} width={200} height={200}/>
                        <p className="py-5 lg:text-2xl md:text-xl sm:text-lg text-md text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-400 max-w-2xl">
                            Our mission is to make clean green solutions available to everyone. We believe that saving th
                            environment does not have to be expensive. That is why we make cheaper alternatives easy and
                            accessible to homeowners across the country. A clean Earth starts with YOU. Thank you for your
                            contribution to the future of this planet and your dedication to its people.
                        </p>
                    </div>

                    <p className={`${dmSerif.className} my-20 font-bold lg:text-6xl md:text-5xl p-2 sm:text-4xl text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-blue-400 text-center mx-auto`}>
                        References and Works Cited
                    </p>
                    <p className="py-5 lg:text-2xl md:text-xl sm:text-lg text-md text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-400 max-w-4xl mx-auto ">
                        “Electric Vehicles: EV Taxes by State: Details & Analysis.” Tax Foundation, 20 September 2023, https://taxfoundation.org/data/all/state/electric-vehicles-ev-taxes-state/. Accessed 7 February 2024.<br/>
                        Grant, Tara. “Which States Have Solar Incentives & Rebates? [Top 6 FAQs].” ADT Solar, 23 February 2022, https://www.adtsolar.com/blog/state-solar-incentives/. Accessed 7 February 2024.<br/>
                        “Solar Investment Tax Credit (ITC) | SEIA.” Solar Energy Industries Association, https://www.seia.org/initiatives/solar-investment-tax-credit-itc. Accessed 7 February 2024.<br/>
                        Wark, Ciaran. “40 Ways to Be More Eco Friendly in 2024.” GreenMatch, 27 November 2023, https://www.greenmatch.co.uk/blog/how-to-be-more-eco-friendly. Accessed 7 February 2024.
                    </p>
                    <p className={`${dmSerif.className} my-20 font-bold lg:text-6xl md:text-5xl p-2 sm:text-4xl text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-blue-400 text-center mx-auto`}>
                        Copyright Checklist: (unsigned)
                        Plan of Work Log: (unsigned)
                        WEBHS-21457-1

                    </p>
                </div>
            </div>
        </main>
    );
}

//