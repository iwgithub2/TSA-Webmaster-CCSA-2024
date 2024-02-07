import Lines from "@/app/ui/lines";
import {dmSerif} from "@/app/ui/fonts";
export default function Page() {
    return (
        <main className="relative min-h-screen flex justify-center">
            <Lines/>
            <div className="flex relative flex-col px-6 py-3 z-40">
                <div className="flex flex-col mt-40 text-center">
                    <p className={`${dmSerif.className} font-bold lg:text-6xl md:text-5xl p-2 sm:text-4xl text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-blue-400 text-center mx-auto`}>
                        Who are we at <em>HomeGrown</em>
                    </p>
                    <p className="py-5 lg:text-2xl md:text-xl sm:text-lg text-md text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-400 max-w-5xly
                     ">
                        Our mission is to make clean green solutions available to everyone. We believe that saving th environment does not have to be expensive. That is why we make cheaper alternatives easy and accessible to homeowners across the country. A clean Earth starts with YOU. Thank you for your contribution to the future of this planet and your dedication to its people.
                    </p>
                    <p className="font-bold lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-400 my-10 mx-auto">
                        Sources
                    </p>
                    <p className="py-5 lg:text-2xl md:text-xl sm:text-lg text-md text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-400 ">
                        and this too....
                    </p>
                </div>
            </div>
        </main>
    );
}

//