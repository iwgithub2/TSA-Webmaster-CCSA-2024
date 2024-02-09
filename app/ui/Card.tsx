import {newsreader, inter} from "@/app/ui/fonts";
import Image from "next/image";
import { JSX, ReactNode, PromiseLikeOfReactNode } from "react";

interface CardProps {
    title: string[];
    description: string[];
    right: boolean;
    color?: string;
    maxWidth?: boolean;
    image?: string;
}

export default function Card({title, description, right, color, maxWidth, image}: CardProps) {

    let imageRender: string | number | boolean | JSX.Element | Iterable<ReactNode> | PromiseLikeOfReactNode | null | undefined;

    if (image != null) {
        imageRender = <Image src={image} alt={"description"} height={50} width={50}/>
    }

    return (
        <div className={`bg-white mr-5 shadow-2xl flex flex-col ${maxWidth ? "" : "lg:max-w-xl sm:max-w-2xl"}  w-full ${right ? "ml-auto" : "ar-auto"} p-10 rounded`}>
            <div className="flex flex-col space-y-5">
                {title.map((titles, index) => (
                    <div key={index}>
                        <div className="flex flex-row">
                            <p className={`${newsreader.className} font-semibold text-md sm:text-lg md:text-xl lg:text-2xl ${color ? "text-" + color : "text-green-500"}  text-left py-2`}>
                                {titles}
                            </p>
                            <div className="ml-auto mb-2">
                                {index === 0 ? imageRender : <></>}
                            </div>
                        </div>
                        <p className={`text-left ${inter.className} font-light`}>
                            {description[index]}
                        </p>
                    </div>
            ))}
            </div>
        </div>
    );
}