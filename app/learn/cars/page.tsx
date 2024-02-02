import Lines from "@/app/ui/lines";
import Card from "@/app/ui/Card";

interface CarInfo {
    model: string;
    description: string;
    image: string;
}

const listOfCars: CarInfo[] = [
    {model: "Audi Q4 e-tron", description: "2023", image: ""},
    {model: "Chevrolet Bolt EUV", description: "2022-2023", image: ""},
    {model: "Chevrolet Bolt EV", description: "2022-2023", image: ""},
    {model: "Fisker Ocean", description: "2023", image: ""},
    {model: "Ford F-150 Lightning", description: "2023", image: ""},
    {model: "Ford Mustang Mach-E", description: "2023", image: ""},
    {model: "Hyundai Kona", description: "2023", image: ""},
    {model: "Hyundai Ioniq 5", description: "2023-2024", image: ""},
    {model: "Hyundai Ioniq 6", description: "2023-2024", image: ""},
    {model: "Kia EV6", description: "2023-2024", image: ""},
    {model: "Kia Niro", description: "2023-2024", image: ""},
    {model: "MINI Cooper SE Electric Hardtop 2 Door", description: "2023", image: ""},
    {model: "Nissan Ariya", description: "2023", image: ""},
    {model: "Nissan LEAF", description: "2023-2024", image: ""},
    {model: "Polestar 2", description: "2023-2024", image: ""},
    {model: "Subaru Solterra", description: "2023", image: ""},
    {model: "Tesla Model 3", description: "2023", image: ""},
    {model: "Tesla Model Y", description: "2023", image: ""},
    {model: "Toyota BZ-4X", description: "2023", image: ""},
    {model: "Volkswagen ID.4", description: "2023", image: ""},
];
const listOfHybrids: CarInfo[] = [
    {model: "BMW 330e", description: "2023", image: ""},
    {model: "Chrysler Pacifica Hybrid", description: "2022-2023", image: ""},
    {model: "Ford Escape", description: "2022-2023", image: ""},
    {model: "Hyundai Santa Fe", description: "2022-2023", image: ""},
    {model: "Hyundai Tucson", description: "2022-2024", image: ""},
    {model: "Jeep Wrangler 4xe", description: "2024", image: ""},
    {model: "Kia Niro", description: "2023-2024", image: ""},
    {model: "Kia Sorento", description: "2023", image: ""},
    {model: "Kia Sportage", description: "2023-2024", image: ""},
    {model: "Mazda CX-90", description: "2024", image: ""},
    {model: "MINI Countryman Plug-In Hybrid", description: "2023", image: ""},
    {model: "Mitsubishi Outlander", description: "2023-2024", image: ""},
    {model: "Subaru Crosstrek Hybrid", description: "2023", image: ""},
    {model: "Toyota Prius Prime", description: "2022-2024", image: ""},
    {model: "Toyota RAV4 Prime", description: "2022-2024", image: ""},

];

export default function Page() {
    return (
        <main className="relative min-h-screen flex justify-center">
            <Lines/>
            <div className=" relative mt-40 z-40 w-full h-screen px-6 ">
                <div className="flex-col px-6 sm:px-10 md:px-20 justify-items-center mt-40 ">
                    <div className="mb-20">
                        <p className="mx-auto text-transparent bg-clip-text bg-gradient-to-r py-2 from-green-500 to-blue-400 text-center font-bold lg:text-6xl md:text-5xl sm:text-4xl text-3xl">
                            List of Eligible EV Cars for Tax Rebates
                        </p>
                        <div className="flex flex-col space-y-10 lg:mt-40 md:mt-25 sm:mb-10 mt-20">
                            {
                                listOfCars.map((car, index) => (
                                    <Card key={index} title={[car.model]} description={[car.description]}
                                          right={index % 2 === 1}/>
                                ))
                            }
                        </div>
                    </div>
                    <div className="pb-20">
                        <p className="mx-auto text-transparent bg-clip-text bg-gradient-to-r py-2 from-green-500 to-blue-400 text-center font-bold lg:text-6xl md:text-5xl sm:text-4xl text-3xl">
                            List of Eligible Hybrid Cars for Tax Rebates
                        </p>
                        <p className="text-center py-4 font-extrabold text-transparent bg-clip-text w-full bg-gradient-to-r from-green-500 to-blue-400 lg:text-2xl md:text-xl sm:text-lg text-md">
                            Keep in mind not all states provide rebates for hybrid vehicles.
                        </p>
                        <div className="flex flex-col space-y-10 lg:mt-40 md:mt-25 sm:mb-10 mt-20">
                            {
                                listOfHybrids.map((car, index) => (
                                    <Card key={index} title={[car.model]} description={[car.description]}
                                          right={index % 2 === 1}/>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}