'use client'
import Lines from "@/app/ui/lines";
import React, { useState, useEffect } from 'react';
import BubbleDiv from "@/app/ui/learn/BubbleDiv";


const events = [

];

export default function Page() {
    const [fillHeight, setFillHeight] = useState(0);

    const handleScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;
        const percentage = (scrolled / scrollHeight) * 100;
        setFillHeight(percentage);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <main className="relative min-h-screen flex justify-center">
            <Lines/>
            <div className="relative z-40 w-full">
                <div className="flex flex-col mt-40 justify-center">
                    <div className="bg-red-400 mx-auto">
                        <div className="my-3 border-black border-2 mx-auto px-1 rounded-full">
                            <p className="text-center text-sm">
                                Cost Calculator
                            </p>
                        </div>
                        <p className="font-bold text-gray-900 text-4xl text-center">
                            Are you Ready to Change<br/> the World?
                        </p>
                    </div>
                    <div className="bg-blue-400">

                    </div>
                </div>
            </div>
        </main>
    );
}