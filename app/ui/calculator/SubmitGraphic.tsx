import Image from "next/image";
import {dmSerif} from "@/app/ui/fonts";
import Link from "next/link";
import {Answers} from "@/app/calculator/page";
import {motion} from "framer-motion";

interface SubmitGraphicProps {
    answer: Answers;
}

export default function SubmitGraphic({answer}: SubmitGraphicProps) {
    return (
        <motion.div
            whileInView={{scale: 1}}
            initial={{scale: 0}}
            >
            <div id="End" className="flex flex-col py-40 my-20 items-center">
                <Image src={'/Asset 3.svg'} alt={"Our logo"} height={100} width={500}/>
                <p className={`${dmSerif.className} max-w-5xl font-bold lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-center py-10 px-2 tracking-tight text-green-900`}>
                    All done! Ready to see your Results?
                </p>
                <Link href={{
                    pathname: "/calculator/results",
                    query: {
                        data: JSON.stringify(answer)
                    }
                }}
                      className="flex items-center gap-5 self-start rounded-lg bg-darkgreen px-3 my-2 md:my-5 py-3 text-xs font-medium text-white transition-colors hover:bg-green-400  mx-auto">
                            <span className="tracking-tighter">
                            See Results
                            </span>
                </Link>
            </div>
        </motion.div>
    );
}