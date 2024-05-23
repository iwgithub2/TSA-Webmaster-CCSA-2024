import Lines from "@/app/ui/lines";
import {dmSans, dmSerif, inter} from "@/app/ui/fonts";
import Image from "next/image";

export default function Page() {
    return (
        <main className="relative min-h-screen flex justify-center bg-gradient-to-t from-forestgreen to-cream bg-opacity-10">
            <div className="flex relative flex-col px-6 py-3 z-40">
                <div className="flex flex-col mt-40 text-center">
                    <p className={`${dmSerif.className}  lg:text-6xl md:text-5xl p-2 sm:text-4xl text-3xl text-green-900 text-center mx-auto`}>
                        Who are we at <em>HomeGrown</em>
                    </p>
                    <div className={`flex flex-col lg:flex-row mt-20 mx-5`}>
                        <Image className="mx-auto" src={'/Asset 3.svg'} alt={"Percentage Fill Up"} width={500} height={200}/>
                        <p className="py-5 ml-10 lg:text-2xl md:text-xl sm:text-lg text-md max-w-2xl text-yellow-950">
                            Our mission is to make clean green solutions available to everyone. We believe that saving th
                            environment does not have to be expensive. That is why we make cheaper alternatives easy and
                            accessible to homeowners across the country. A clean Earth starts with YOU. Thank you for your
                            contribution to the future of this planet and your dedication to its people.
                        </p>
                    </div>

                    <p className={`${dmSerif.className} my-20 lg:text-6xl md:text-5xl p-2 sm:text-4xl text-3xl text-green-900 text-center mx-auto`}>
                        References and Works Cited
                    </p>
                    <p className={`${dmSans.className} py-5 lg:text-2xl md:text-xl sm:text-lg text-md text-yellow-950 max-w-4xl mx-auto `}>
                        “Electricity Rates (Updated May 2024).” Electric Choice, Eisenbach Consulting, May 2024, www.electricchoice.com/electricity-prices-by-state/.<br/>
                        “Electric Vehicles: EV Taxes by State: Details & Analysis.” Tax Foundation, 20 September 2023, https://taxfoundation.org/data/all/state/electric-vehicles-ev-taxes-state/. Accessed 7 February 2024.<br/>
                        Grant, Tara. “Which States Have Solar Incentives & Rebates? [Top 6 FAQs].” ADT Solar, 23 February 2022, https://www.adtsolar.com/blog/state-solar-incentives/. Accessed 7 February 2024.<br/>
                        “Natural Gas.” Average Commercial Price, U.S. Energy Administration Information, 30 Apr. 2024, www.eia.gov/dnav/ng/ng_pri_sum_a_EPG0_PCS_DMcf_a.htm.<br/>
                        “Solar Investment Tax Credit (ITC) | SEIA.” Solar Energy Industries Association, https://www.seia.org/initiatives/solar-investment-tax-credit-itc. Accessed 7 February 2024.<br/>
                        Underhill, Diane. “Average Monthly Electric Bill with Solar Panels.” Nature’s Generator, Nature’s Generator, 21 Jan. 2024, naturesgenerator.com/blogs/news/average-monthly-electric-bill-with-solar-panels.<br/>
                        Wark, Ciaran. “40 Ways to Be More Eco Friendly in 2024.” GreenMatch, 27 November 2023, https://www.greenmatch.co.uk/blog/how-to-be-more-eco-friendly. Accessed 7 February 2024.
                    </p>
                    <div className="flex flex-col space-x-0 space-y-10 md:flex-row mx-auto md:space-y-0 md:space-x-4 mt-20 md:my-auto md:mt-20">
                        <a href="https://drive.google.com/file/d/10djhE0odOB-HVM_DKksp8ob0EmW2BUtu/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <span className={`lg:text-2xl md:text-xl sm:text-lg text-md bg-cream p-4 rounded shadow-xl ${inter.className} text-yellow-950`}>
                              Student Copyright Checklist
                        </span>
                        </a>
                        <a href="https://drive.google.com/file/d/10PixtVZ32xAUd4pixh-F1eca9gbP7EsE/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <span className={`lg:text-2xl md:text-xl sm:text-lg text-md bg-cream p-4 rounded shadow-xl ${inter.className} text-yellow-950 w-full`}>
                            Plan of Work Log
                        </span>
                        </a>
                    </div>
                    <p className={`${dmSerif.className} my-20 lg:text-6xl md:text-5xl p-2 sm:text-4xl text-3xl text-green-900 text-center mx-auto`}>
                        WEBHS-21457-1
                    </p>
                </div>
            </div>
        </main>
    );
}

//