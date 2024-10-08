'use client'
import {newsreader, inter} from "@/app/ui/fonts";
import Image from "next/image";
import { AwaitedReactNode, JSX, ReactNode} from "react";
import {motion} from "framer-motion";

interface CardProps {
    title: string[];
    description: string[];
    right: boolean;
    color?: string;
    maxWidth?: boolean;
    image?: string;
    className?: string;

}

export default function Card({title, description, right, color, maxWidth, image, className}: CardProps) {

    let imageRender: string | number | bigint | boolean | JSX.Element | Iterable<ReactNode> | Promise<AwaitedReactNode> | null | undefined;

    if (image != null) {
        imageRender = <Image className="mx-auto" src={image} alt={"description"} height={400} width={400}/>
    }

    return (
            <div className={`${className} bg-darkcream shadow-2xl flex flex-col h-full w-full ${right ? "ml-auto" : "ar-auto"} pt-10 px-10 rounded`}>
                <div className="flex flex-col space-y-5">
                    {title.map((titles, index) => (
                        <div key={index}>
                            <div className="flex flex-row">
                                <p className={`${newsreader.className} font-semibold text-md sm:text-lg md:text-xl lg:text-2xl ${color ? "text-" + color : "text-green-900"}  text-left py-2`}>
                                    {titles}
                                </p>

                            </div>
                            <p className={`text-left ${inter.className} font-light text-darkbrown`}>
                                {description[index]}
                            </p>
                            <div className="my-10 w-full ">
                                {index === 0 ? imageRender : <></>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    );
}