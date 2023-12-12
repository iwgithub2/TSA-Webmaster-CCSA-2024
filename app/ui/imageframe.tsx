import Image from "next/image";

interface ImageFrameProps {
    imgSrc: string;
    altText: string;
    width: number;
    height: number;
}
export default function ImageFrame({imgSrc, altText, width, height}: ImageFrameProps) {
    return(
        <div className="relative inline-block overflow-hidden">
            <div className="relative">
            <Image src={imgSrc}
                   alt={altText}
                    width={width}
                    height={height}/>
            <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border-4 border-blue-500"/>
            </div>
        </div>
    );
}