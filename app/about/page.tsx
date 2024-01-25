import Image from "next/image";

export default function Page() {
    return (
        <main className="flex-col min-h-screen flex  bg-gradient-radial from-purple-500 to-black">
            <div className="flex p-10 flex-col mt-40 text-center">
                <p className=" text-white font-bold text-5xl text-center mx-auto">
                    About Us
                </p>
                <p className="text-white">
                    We are Cab Calloway School of the Arts Technology Student Association Team
                </p>
                <p className="text-white font-bold text-4xl my-10">
                    Sources
                </p>
            </div>
        </main>
);
}