import {newsreader} from "@/app/ui/fonts";
import Search from "@/app/ui/search";
import Image from "next/image";

export default function Page() {
    return(
        <main className="flex min-h-screen flex-col">
            <div className="flex flex-col justify-center mt-40">
                <Image src={'/CAC_Cover_Photo.png'} alt={"fix"} layout="responsive" width={100} height={100}/>
            </div>
        </main>
    )
}