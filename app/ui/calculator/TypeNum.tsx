'use client'
import {useState} from "react";

interface TypeNumProps {
    onAnswer: (property: "state" | "rebates" | "solarOrEV" | "numPractices" | "energyConsumption", change: any) => void;
}


export default function TypeNum({onAnswer}: TypeNumProps) {
    const [kWh, setWh] = useState(0);
    const handleNumSelection = (event: any) => {
        const enteredValue = event.target.value;

        if (isNaN(enteredValue)) {
            // Handle invalid input (e.g., display an error message)
            console.error('Please enter a valid number.');
            return;
        }

        onAnswer("energyConsumption", parseFloat(enteredValue));
        console.log(enteredValue);
    }

    return (
        <form className="w-full">
            <label htmlFor="number-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Amount of Energy in kWh:
            </label>
            <input type="number"
                   id="number-input"
                   aria-describedby="helper-text-explanation"
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   placeholder="kWh"
                   required
                   onChange={handleNumSelection}/>
        </form>
    );
}