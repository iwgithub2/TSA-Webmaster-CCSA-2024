import Link from "next/link";
import {newsreader} from "@/app/ui/fonts";
import Search from "@/app/ui/search";

export default function Page() {
    return(
        <main className="flex min-h-screen flex-col p-6">
            <div className={"flex flex-col justify-center"}>
                <p className={`${newsreader.className} text-6xl md-text-xl text-center py-10 tracking-tighter`}>
                    Tell us where you are so we can<br/> find the information for you.
                </p>
                <Search placeholder={'State...'}/>
            </div>
        </main>
    );
}