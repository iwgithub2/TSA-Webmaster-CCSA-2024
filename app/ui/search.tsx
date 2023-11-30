'use client';

import {useSearchParams, useRouter, usePathname} from "next/navigation";
//use debouce not really crucial for states cuz local, but when use databases its useful to reduce queries
import { useDebouncedCallback} from 'use-debounce';
import Image from "next/image";


const allStates = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri',
    'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina',
    'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
    'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
];
export default function Search({placeholder}: { placeholder: string }) {
    const searchParams = useSearchParams();
    const pathName  = usePathname();
    const { replace } = useRouter();
    const handleSearch = useDebouncedCallback((term) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', '1');
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathName}?${params.toString()}`);
    }, 300);

    return (
        <div className="relative flex flex-1 flex-shrink-0 justify-center">
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <input
                className="peer w-1/2 rounded-full border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                placeholder={placeholder}
                onChange={(e) => {
                    handleSearch(e.target.value);
                }}
                defaultValue={searchParams.get('query')?.toString()}
            />
            <Image src={'/search.svg'}
                   alt={'hello'}
                   width={18}
                   height={18}
                   className="absolute left-[calc(25%+0.75rem)] top-1/2 -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
        </div>
    );
}
//absolute left-[calc(25%+0.75rem)] some sneaky stuff hehe im so smart

