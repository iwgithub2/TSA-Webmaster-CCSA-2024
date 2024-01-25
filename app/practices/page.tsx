import {newsreader} from "@/app/ui/fonts";
import Search from "@/app/ui/search";
import Image from "next/image";
import Card from "@/app/ui/Card";

export default function Page() {
    return (
        <main className="relative min-h-screen flex justify-center">
            <div className="absolute top-0 h-full flex flex-row justify-evenly w-full max-w-7xl z-0">
                <div className="w-0.5 h-full bg-gray-100"></div>
                <div className="w-0.5 h-full bg-gray-100"></div>
                <div className="w-0.5 h-full bg-gray-100"></div>
                <div className="w-0.5 h-full bg-gray-100"></div>
                <div className="w-0.5 h-full bg-gray-100"></div>
            </div>
            <div className="flex relative flex-col justify-center px-6 py-3 z-40">
                <div className=" mx-auto flex-col px-5 sm:px-10 md:px-10 justify-items-center mt-40 ">
                    <p className="mx-auto text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-400 text-center font-bold lg:text-6xl md:text-5xl sm:text-4xl text-3xl">
                        Common Environmental Practices
                    </p>
                    <p className="text-center py-4 font-extrabold text-transparent bg-clip-text w-full bg-gradient-to-r from-green-500 to-blue-400 lg:text-2xl md:text-xl sm:text-lg text-md">
                        Here are some ways you can be clean + green at home!
                    </p>
                    <div className="flex flex-col space-y-10 lg:mt-40 md:mt-25 sm:mb-10 mt-20">
                        <Card title={["1. Reducing Energy Usage", "Estimated Cost"]} right={false}
                              description={["Involves minimizing energy consumption by using energy-efficient appliances, turning off lights and electronics when not in use, and adopting energy-saving practices.",
                                  "Initial costs may include upgrading to energy-efficient appliances or installing smart home devices. Long-term savings on energy bills can offset these costs."]}
                        />
                        <Card title={["2. Carpooling", "Estimated Cost"]} right={true}
                              description={["Reduces individual carbon footprint by sharing rides or using public transportation, leading to fewer vehicles on the road and decreased air pollution.",
                                  "Cost depends on the mode of public transportation used. Carpooling expenses can be shared among participants."]}
                        />
                        <Card title={["3. Recycling", "Estimated Cost"]} right={false}
                              description={["Involves collecting and processing materials like paper, glass, and plastic to create new products, reducing the demand for new raw materials and minimizing waste.",
                                  "Typically, recycling programs are supported by local governments, with costs covered through taxes. Individual costs are minimal."]}
                        />
                        <Card title={["4. Reducing water usage", "Estimated Cost"]} right={true}
                              description={["Includes adopting water-efficient appliances, fixing leaks, and practicing mindful water use to conserve this precious resource.",
                                  "Costs may involve investing in water-efficient appliances or making plumbing repairs. Long-term savings on water bills can offset these costs."]}
                        />
                        <Card title={["5. Solar Panels", "Estimated Cost"]} right={false}
                              description={["Harnesses energy from the sun to generate electricity, reducing reliance on traditional energy sources and lowering carbon emissions.",
                                  "Initial installation costs can be significant, but government incentives and long-term energy savings contribute to cost-effectiveness over time."]}
                        />
                        <Card title={["6. Home garden", "Estimated Cost"]} right={true}
                              description={["Involves growing food at home, reducing the need for transportation and packaging associated with store-bought produce.", "Initial costs for seeds, soil, and gardening tools. Savings on grocery bills over time make it a cost-effective choice."]}
                        />
                        <Card title={["7. Electric car", "Estimated Cost"]} right={false}
                              description={["Runs on electricity rather than traditional fuels, reducing greenhouse gas emissions and dependence on fossil fuels.", "Higher initial purchase cost compared to traditional cars, but potential savings on fuel costs over time."]}
                        />
                        <Card title={["8. Thrift/donate clothes", "Estimated Cost"]} right={true}
                              description={["Extends the life of clothing items, reduces textile waste, and minimizes the environmental impact of new clothing production.", "Can be cost-effective compared to buying new clothes, especially when shopping at thrift stores or participating in clothing swaps."]}
                        />
                        <Card title={["9. Reusable containers", "Estimated Cost"]} right={false}
                              description={["Reduces single-use plastic waste by using reusable containers for food and beverages.", "Initial investment in reusable containers is minimal, and savings accrue over time by avoiding disposable alternatives."]}
                        />
                        <Card title={["10. Compost", "Estimated Cost"]} right={true}
                              description={["Converts organic waste into nutrient-rich compost, reducing the amount of waste sent to landfills.", "Minimal costs for a compost bin or designated composting area. Savings on waste disposal costs."]}
                        />
                        <Card title={["11. Electronic documents", "Estimated Cost"]} right={false}
                              description={["Emphasizes digital documentation to reduce paper usage, saving trees and reducing energy and resources needed for printing.", "Initial investment in digital infrastructure (computers, storage) is required, but long-term savings on paper and printing costs."]}
                        />
                    </div>


                </div>
            </div>
        </main>
    )
}