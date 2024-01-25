import Link from "next/link";

interface BubbleDivProps {
    header : string;
    link : string;
    linkText : string;
    gradient: string;
}
export default function BubbleDiv({header, link, linkText, gradient} : BubbleDivProps) {
    return(
        <div className={`p-5 sm:p-7 md:p-10 rounded-3xl bg-gradient-to-r ${gradient} flex-col`}>
            <p className="font-bold text-white lg:text-2xl md:text-xl sm:text-lg text-md">
                {header}
            </p>
            <Link href={link} className="relative inline-block after:duration-1000 ease-out after:block after:h-0.5 after:w-full
                                 after:origin-bottom-right after:scale-x-0 after:bg-white after:transition-transform
                                 after:hover:origin-bottom-left after:hover:scale-x-100">
                                    <span className="mt-5 text-white text-sm">
                                        {linkText}
                                    </span>
            </Link>
        </div>
    );
}