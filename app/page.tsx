import Link from 'next/link';
import {newsreader} from "@/app/ui/fonts";

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col p-6">
            <div className="flex flex-col justify-center px-6 py-10">
                <p className={`${newsreader.className} text-6xl md-text-xl text-center py-10 tracking-tighter`}>
                    Where clean energy becomes <em>cheap</em> <br/>and <em>accessible</em>.
                </p>
                <Link href="/learn"
                className="flex items-center gap-5 self-start rounded-lg bg-darkgreen px-3 py-3 text-xs font-medium text-white transition-colors hover:bg-green-400  mx-auto">
                    <span className="tracking-tighter">
                        Learn what we can do for you.
                    </span>
                </Link>
            </div>
        </main>
    );
}
//can do tracking-[custom value em]
