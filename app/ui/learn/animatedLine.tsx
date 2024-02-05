import {animated, useSpring} from "@react-spring/web";
import React from "react";

interface animatedLineProps {
    scrollPosition: number;
    pivotPoints: number[];
}

export default function AnimatedLine({scrollPosition, pivotPoints}: animatedLineProps) {
    const gradientStops = pivotPoints.map(
        (pivot) => `${((pivot - scrollPosition) / window.innerHeight) * 100}%`
    );

    // Animated line height
    const { height } = useSpring({
        from: { height: 0 },
        to: { height: scrollPosition },
    });

    return (
        <div className="relative">
            {/* Vertical line */}
            <div className="absolute h-full border-l-2 border-gray-400 left-1/2"></div>

            {/* Animated filling line */}
            <animated.div
                style={{
                    height,
                    backgroundImage: `linear-gradient(90deg, #4CAF50 ${gradientStops[0]}, transparent ${gradientStops[0]} ${gradientStops[1]}, #4CAF50 ${gradientStops[1]} ${gradientStops[2]}, transparent ${gradientStops[2]} ${gradientStops[3]}, #4CAF50 ${gradientStops[3]} 100%)`,
                }}
                className="absolute h-full left-1/2"
            ></animated.div>

            {/* Pivots and connecting lines */}
            {pivotPoints.map((pivot, index) => (
                <React.Fragment key={index}>
                    {/* Pivot */}
                    <div
                        className={`absolute h-2 w-2 bg-red-500 rounded-full left-1/2 transform -translate-x-1`}
                        style={{ top: `${pivot}px` }}
                    ></div>

                    {/* Connecting line (except for the last pivot) */}
                    {index < pivotPoints.length - 1 && (
                        <div
                            className="absolute bg-red-500 h-full w-1 left-1/2"
                            style={{
                                top: `${pivot}px`,
                                transform: `translateX(-50%)`,
                            }}
                        ></div>
                    )}
                </React.Fragment>
            ))}

            {/* Arrow marker at the last pivot */}
            <div
                className="absolute top-0 left-1/2 w-4 h-4 bg-blue-500 transform -translate-x-2 -translate-y-2 rounded-full"
                style={{ top: `${pivotPoints[pivotPoints.length - 1]}px` }}
            ></div>
        </div>
    );
}