import Link from "next/link";

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
            <div className="relative z-40">
                <div className="flex flex-col mt-40">
                    <p className="font-bold text-4xl text-green-400 max-w-4xl text-center">
                        Take Our Quiz to Find Out What Green Energy Solutions Work for You
                    </p>
                    <Link href="/learn"
                          className="flex items-center gap-5 self-start rounded-lg bg-darkgreen px-3 my-20 py-3 text-xs font-medium text-white transition-colors hover:bg-green-400  mx-auto">
                    <span className="tracking-tighter">
                        Take the Quiz
                    </span>
                    </Link>
                </div>
            </div>
        </main>
    );
}