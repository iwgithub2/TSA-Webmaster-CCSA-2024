import Lines from "@/app/ui/lines";
export default function Page() {
    return (
        <main className="relative min-h-screen flex justify-center">
            <Lines/>
            <div className="flex relative flex-col px-6 py-3 z-40">
                <div className="flex flex-col mt-40 text-center">
                    <p className="font-bold lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-400 text-center mx-auto">
                        About Us
                    </p>
                    <p className="py-5 lg:text-2xl md:text-xl sm:text-lg text-md text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-400 ">
                        We are Cab Calloway School of the Arts Technology Student Association. Hey maya... fix this
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