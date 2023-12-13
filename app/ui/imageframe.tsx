import Image from "next/image";

interface ImageFrameProps {
    imgSrc: string;
    altText: string;
    width: number;
    height: number;
    color : string;
}

export default function ImageFrame({imgSrc, altText, width, height, color}: ImageFrameProps) {
    return (
        <div className="flex flex-col items-center justify-center overflow-hidden">
            <div className="relative">
                <Image src={imgSrc}
                       alt={altText}
                       width={width}
                       height={height}/>
                {/* Very Inelegant solution someone please fix */}
                <div className="absolute w-full top-0 left-0 h-full p-4">
                    <div className={`top-0 left-0 w-full h-full border-4 border-${color}`}/>
                </div>
            </div>

        </div>
    );
}