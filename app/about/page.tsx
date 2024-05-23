import Lines from "@/app/ui/lines";
import {dmSans, dmSerif, inter} from "@/app/ui/fonts";
import Image from "next/image";

export default function Page() {
    return (
        <main className="relative flex min-h-screen justify-center bg-gradient-to-t from-forestgreen to-cream bg-opacity-10">
            <div className="flex relative flex-col py-3 z-40 px-5 sm:px-10 md:px-10">
                <div className="flex flex-col mt-40 text-center ">
                    <p className={`${dmSerif.className}  lg:text-6xl md:text-5xl p-2 sm:text-4xl text-3xl text-green-900 text-center mx-auto`}>
                        Who are we at <em>HomeGrown</em>
                    </p>
                    <div className={`flex flex-col lg:flex-row mt-20 lg:mx-5`}>
                        <Image className="mx-auto" src={'/Asset 3.svg'} alt={"Percentage Fill Up"} width={500} height={200}/>
                        <p className="py-5 lg:text-2xl md:text-xl sm:text-lg text-md max-w-2xl text-yellow-950 text-center ">
                            Our mission is to make clean green solutions available to everyone. We believe that saving th
                            environment does not have to be expensive. That is why we make cheaper alternatives easy and
                            accessible to homeowners across the country. A clean Earth starts with YOU. Thank you for your
                            contribution to the future of this planet and your dedication to its people.
                        </p>
                    </div>

                    <p className={`${dmSerif.className} my-20 lg:text-6xl md:text-5xl p-2 sm:text-4xl text-3xl text-green-900 text-center mx-auto`}>
                        References and Works Cited
                    </p>
                    <a href="https://drive.google.com/file/d/1wtoIErwIB-q9M3QC2gKgXno9qEKIA365/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <span className={`lg:text-2xl md:text-xl sm:text-lg text-md bg-cream p-4 rounded shadow-xl ${inter.className} text-yellow-950`}>
                              Click Here
                        </span>
                    </a>
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