'use client'
import {dmSerif, newsreader} from "@/app/ui/fonts";
import Search from "@/app/ui/search";
import Image from "next/image";
import Card from "@/app/ui/Card";
import Lines from "@/app/ui/lines";
import {motion} from "framer-motion";

export default function Page() {
    return (
        <main
            className="relative min-h-screen flex justify-center bg-gradient-to-t from-forestgreen to-cream bg-opacity-10">
            <div className="flex relative flex-col justify-center px-6 py-3 z-40">
                <div className=" mx-auto flex-col px-5 sm:px-10 md:px-10 justify-items-center mt-40 ">
                    <p className={`${dmSerif.className} mx-auto text-green-900 text-center lg:text-6xl md:text-5xl sm:text-4xl text-3xl`}>
                        Common Environmental Practices
                    </p>
                    <p className="text-center py-4 font-extrabold text-green-900 lg:text-2xl md:text-xl sm:text-lg text-md">
                        Here are some ways you can be clean + green at home!
                    </p>
                    <div className="flex flex-col space-y-10 lg:mt-40 md:mt-25 sm:mb-10 mt-20">

                        <Card title={["1. Reducing Energy Usage", "Estimated Cost"]} right={false}
                              description={["A great way to start is by turning off the lights and other electronic devices when you're not using them, as well as switching to energy-efficient appliances.",
                                  "Not only is using less energy great for the environment, but it lowers your electricity bill, saving you money!"]}
                              image={'/practice_images/practices_energyconserve.svg'}
                        />
                        <motion.div
                            whileInView={{scale: 1}}
                            initial={{scale: 0}}>
                            <Card title={["2. Carpooling", "Estimated Cost"]} right={true}
                                  description={["Shared car rides with friends and family can be a clean green way to spend time together. Carpooling or public transportation lowers gas consumption, as well as decreases air pollution!",
                                      "When carpooling, costs can be cut by splitting money for gas among the participants. The cost of public transportation will vary depending on the area."]}
                                  image={'/practice_images/practices_carpool.svg'}
                            />
                        </motion.div>
                        <motion.div
                            whileInView={{scale: 1}}
                            initial={{scale: 0}}>
                            <Card title={["3. Recycling", "Estimated Cost"]} right={false}
                                  description={["REUSE, REDUCE, RECYCLE! Being conscious of your waste is easier than ever with the internet at your fingertips. Here are some helpful sources:",
                                      "Recycling is completely free and paid for by the government!"]}
                                  image={'/practice_images/practices_recycle.svg'}
                            />
                        </motion.div>
                        <motion.div
                            whileInView={{scale: 1}}
                            initial={{scale: 0}}>
                            <Card title={["4. Reducing water usage", "Estimated Cost"]} right={true}
                                  description={["Wasting water is no joke, as a valuable resource it's important that you turn off the faucet and fix leaks in your house as quickly as possible. Another option is to install water efficient appliances.",
                                      "Although the initial investment for new appliances can be expensive, it is often evened out by long-term savings on the water bill."]}
                                  image={'/practice_images/practices_water.svg'}
                            />
                        </motion.div>
                        <motion.div
                            whileInView={{scale: 1}}
                            initial={{scale: 0}}>
                            <Card title={["5. Solar Panels", "Estimated Cost"]} right={false}
                                  description={["Solar panels harness energy from the sun rather than relying on traditional carbon sources.",
                                      "The cost of installation may be a lot, but government incentives are offered many places. Find out more on your state's page!"]}
                                  image={'/practice_images/practices_solar.svg'}
                            />
                        </motion.div>
                        <motion.div
                            whileInView={{scale: 1}}
                            initial={{scale: 0}}>
                            <Card title={["6. Home garden", "Estimated Cost"]} right={true}
                                  description={["A fun and creative way to stay clean and green is by starting a home garden or purchasing produce from local farmers, reducing the energy spent on packaging and transport.",
                                      "A home garden can greatly decrease the amount you spend on groceries at the super market."]}
                                  image={'/practice_images/practices_garden.svg'}
                            />
                        </motion.div>
                        <motion.div
                            whileInView={{scale: 1}}
                            initial={{scale: 0}}>
                            <Card title={["7. Electric car", "Estimated Cost"]} right={false}
                                  description={["Electric cars are run on electricity rather than traditional fuels that contribute to greenhouse gas emissions.",
                                      "Electric cars are more expensive than most traditional cars however there are rebates and long term savings on fuel. Find our more on your state's page!"]}
                                  image={'/practice_images/practices_car.svg'}

                            />
                        </motion.div>
                        <motion.div
                            whileInView={{scale: 1}}
                            initial={{scale: 0}}>
                            <Card title={["8. Thrift/donate clothes", "Estimated Cost"]} right={true}
                                  description={["Rather than buying fast fashion or throwing out old clothes, look into buying from thrift stores, and donating clothes you no longer fit.",
                                      "Thrifting is no only great for the environment, but it also saves you money when shopping for clothes."]}
                                  image={'/practice_images/practices_thrift.svg'}
                            />
                        </motion.div>
                        <motion.div
                            whileInView={{scale: 1}}
                            initial={{scale: 0}}>
                            <Card title={["9. Reusable containers", "Estimated Cost"]} right={false}
                                  description={["Instead of purchasing and throwing away single use plastic containers, reusable solutions such as tupperwear limit waste.",
                                      "The initial cost of purchasing containers is small and gets rid of the need to purchase disposable alternatives."]}
                                  image={'/practice_images/practices_container.svg'}
                            />
                        </motion.div>
                        <motion.div
                            whileInView={{scale: 1}}
                            initial={{scale: 0}}>
                            <Card title={["10. Compost", "Estimated Cost"]} right={true}
                                  description={["Through the process of decomposition, organic waste can be converted back to soil, rather than ending up in a toxic landfill.",
                                      "Composting is very cheap as the only purchase it requires is a bin to contain food waste."]}
                                  image={'/practice_images/practices_compost.svg'}
                            />
                        </motion.div>
                        <motion.div
                            whileInView={{scale: 1}}
                            initial={{scale: 0}}>
                            <Card title={["11. Electronic documents", "Estimated Cost"]} right={false}
                                  description={["A simple way to stay clean and green is to convert your paper files to electronic documents. Opting to receive emails rather than paper saves trees, and reduces energy and resources used for printing.",
                                      "There should be no significant cost to going digital. Selecting an email receipt or  reports rather than mailed/printed are great ways to start."]}
                                  image={'/practice_images/practices_document.svg'}
                            />
                        </motion.div>


                    </div>


                </div>
            </div>
        </main>
    )
}