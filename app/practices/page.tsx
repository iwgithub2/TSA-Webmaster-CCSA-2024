import {newsreader} from "@/app/ui/fonts";
import Search from "@/app/ui/search";
import Image from "next/image";

export default function Page() {
    return(
        <main className="flex min-h-screen flex-col">
            <div className="flex flex-col justify-center mt-32 max-h-72 overflow-hidden">
                <Image src={'/nature.webp'} alt={"fix"} width={10000} height={100}/>
            </div>

            <div className="px-20">
                <p>
                    Hello Bitches
                </p>
            </div>
        </main>
    )
}