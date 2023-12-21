import Link from 'next/link';

interface StateProps {
    name: string;
    link: string;
    positions: { x: number, y: number };
}

export default function State({name, link, positions} : StateProps) {
    return(
        <Link href={link}>
            <svg>

            </svg>
        </Link>
    );
}