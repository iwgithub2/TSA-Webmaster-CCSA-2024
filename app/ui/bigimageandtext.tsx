import ImageFrame from "@/app/ui/imageframe";
import Link from "next/link";

interface BigImageAndTextProps {
    swapOrder: boolean;
    imgSrc: string;
    headerTxt: string;
    bigTxt: string;
    smallTxt: string;
    colorTxt: string;
    colorBorder: string;
    //Because im fucking stupid and border-${color} or text-${color doesnt work I gotta do this ugly solution}
}

export default function BigImageAndText({
                                            swapOrder,
                                            imgSrc,
                                            headerTxt,
                                            bigTxt,
                                            smallTxt,
                                            colorTxt,
                                            colorBorder
                                        }: BigImageAndTextProps) {
    return (
        <div className={`flex justify-center space-x-2 mx-10 my-40 ${swapOrder ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className="w-1/2 py-4 px-10 flex-col ">
                {/* Header */}
                <div className={`border-b-2 ${colorBorder}`}>
                    <p className={`font-bold text-lg ${colorTxt} pb-4`}>
                        {headerTxt}
                    </p>
                </div>
                <p className={`text-8xl ${colorTxt} my-10`}>
                    {bigTxt}
                </p>
                <p className="text-2xl mb-20">
                    {smallTxt}
                </p>
                <div className="group relative flex-col w-1/2">
                    <div className="py-8">
                        <Link href='/learn' className={`${colorBorder} border-t-4 border-l-4 w-1/4 py-8 px-14`}>
                        <span className={`text-2xl ${colorTxt}`}>
                            Learn More
                        </span>
                        </Link>
                    </div>
                    <div className={`absolute bottom-0 left-0 w-1/3 border-2 ${colorBorder} transition hover:w-full`}/>
                </div>

            </div>
            <ImageFrame imgSrc={imgSrc} altText="hey" width={570} height={20} color={colorBorder}/>
        </div>
    );
}