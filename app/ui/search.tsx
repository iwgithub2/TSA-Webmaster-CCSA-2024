'use client';

import {useSearchParams, useRouter, usePathname} from "next/navigation";
//use debouce not really crucial for states cuz local, but when use databases its useful to reduce queries
import {useDebouncedCallback} from 'use-debounce';
import Image from "next/image";
import {useState} from "react";
import SearchResults from "@/app/ui/searchResults";
import stateInfo from "@/app/ui/learn/stateInfo";
import FuzzySearch from "@/app/ui/fuzzySearch";


const allStates = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri',
    'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina',
    'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
    'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
];

interface rank {
    distance: number;
    name: string;
}

export default function Search({placeholder}: { placeholder: string }) {

    const [searchValue, setSearchValue] = useState<string>('');
    const [searchResults, setSearchResults] = useState<string[]>([]);

    const searchParams = useSearchParams();
    const pathName = usePathname();
    const {replace} = useRouter();
    const handleSearch = () => {
        const params = new URLSearchParams(searchParams);
        if (searchValue) {
            params.set('query', searchValue);
        } else {
            params.delete('query');
        }
        replace(`${pathName}?${params.toString()}`);
    };

    const handleType = useDebouncedCallback((value: string, threshold: number) => {
        setSearchValue(value);
        /*const results : rank[] = allStates.map((state : string) => {
            return {FuzzySearch(state.toLowerCase(), value.toLowerCase()), state};
        })
        //setSearchResults();
        console.log(results);*/
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
                    handleType(e.target.value, 2);
                }}
                defaultValue={searchParams.get('query')?.toString()}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleSearch();
                    }
                }}
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

