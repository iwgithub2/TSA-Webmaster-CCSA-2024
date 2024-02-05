'use client'
import Lines from "@/app/ui/lines";
import React, { useState, useEffect } from 'react';
import BubbleDiv from "@/app/ui/learn/BubbleDiv";
import AnimatedLine from "@/app/ui/learn/animatedLine";


const events = [

];

export default function Page() {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const pivotPoints = [0, 300, 600, 900];

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
                    <AnimatedLine scrollPosition={scrollPosition} pivotPoints={pivotPoints} />
                    <div className="p-40">
he
                    </div>
                    <div className="p-40">
                        he
                    </div>
                    <div className="p-40">
                        he
                    </div>
                    <div className="p-40">
                        he
                    </div><div className="p-40">
                    he
                </div><div className="p-40">
                    he
                </div><div className="p-40">
                    he
                </div><div className="p-40">
                    he
                </div><div className="p-40">
                    he
                </div>
                    <div className="p-40">
                        he
                    </div><div className="p-40">
                    he
                </div><div className="p-40">
                    he
                </div><div className="p-40">
                    he
                </div>










                </div>
            </div>
        </main>
    );
}