import ImageFrame from "@/app/ui/imageframe";
import Link from "next/link";

interface BigImageAndTextProps {
    swapOrder: boolean;
    imgSrc: string;
    headerTxt: string;
    bigTxt: string;
    smallTxt: string;
    color: string;
}

export default function BigImageAndText({ swapOrder, imgSrc, headerTxt, bigTxt, smallTxt, color} : BigImageAndTextProps) {
    return (
        <div className={`flex justify-center space-x-2 mx-10 my-20 ${swapOrder ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className="w-1/2 p-4">
                {/* Header */}
                <div className={`border-b-2 border-${color}`}>
                    <p className={`font-bold text-lg text-${color} pb-4`}>
                        {headerTxt}
                    </p>
                </div>
                <p className={`text-8xl text-${color} my-10`}>
                    {bigTxt}
                </p>
                <p className="text-2xl">
                    {smallTxt}
                </p>
                <Link href='/learn' className="bg-red-600">
                    <span>
                        See Programs
                    </span>
                </Link>
            </div>
            <ImageFrame imgSrc={imgSrc} altText="hey" width={570} height={20} color={color}/>
        </div>
    );
}