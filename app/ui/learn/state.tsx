import Link from 'next/link';
import Image from "next/image";

interface StateProps {
    name: string;
    link: string;
    position: { x: number, y: number };
    size: {w: number, h:number};
}

export default function State({ name, link, position, size }: StateProps) {
    return (
        <Link href={link} className="flex w-full h-full">
            <object type="image/svg+xml" data={`/States/${link}.svg`} width="10%" height="10%">
            </object>
        </Link>
    );
}
//                <Image src={`/States/${link}.svg`} alt={name} layout="fill" objectFit="contain"></Image>