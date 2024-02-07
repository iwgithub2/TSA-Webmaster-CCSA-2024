interface StateInfo {
    image: string;
    eVRebate: number;
    hybridRebate: number;
    salesTaxExemption: boolean;
    propertyTaxExemption: boolean;
    homeValueIncrease: boolean;
    solarCredit: string;
    netMetering: boolean;
}

const stateInfo: Record<string, StateInfo> = {
    "alabama": {
        image: '/States/alabama.svg',
        eVRebate: 0,
        hybridRebate: 0,
        salesTaxExemption: false,
        propertyTaxExemption: false,
        homeValueIncrease: false,
        solarCredit: "",
        netMetering: false
    },
    "alaska": {
        image: '/States/alaska.svg',
        eVRebate: 1000,
        hybridRebate: 0,
        salesTaxExemption: false,
        propertyTaxExemption: false,
        homeValueIncrease: false,
        solarCredit: "",
        netMetering: false
    },
    "arizona": {
        image: '/States/arizona.svg',
        eVRebate: 0,
        hybridRebate: 0,
        salesTaxExemption: true,
        propertyTaxExemption: true,
        homeValueIncrease: true,
        solarCredit: "up to $1000 or 25% of purchase price",
        netMetering: true
    },
    "arkansas": {
        image: '/States/arkansas.svg',
        eVRebate: 0,
        hybridRebate: 0,
        salesTaxExemption: false,
        propertyTaxExemption: false,
        homeValueIncrease: true,
        solarCredit: "",
        netMetering: true
    },
    "california": {
        image: '/States/california.svg',
        eVRebate: 7500,
        hybridRebate: 0,
        salesTaxExemption: false,
        propertyTaxExemption: true,
        homeValueIncrease: false,
        solarCredit: "the SGIP and DAC-SASH program offers rebates and credits for people of all incomes",
        netMetering: true
    },
    "colorado": {
        image: '/States/colorado.svg',
        eVRebate: 5000,
        hybridRebate: 5000,
        salesTaxExemption: false,
        propertyTaxExemption: true,
        homeValueIncrease: false,
        solarCredit: "there are possible solar tax rebates from your power company",
        netMetering: true
    },
    "connecticut": {
        image: '/States/connecticut.svg',
        eVRebate: 7500,
        hybridRebate: 7500,
        salesTaxExemption: false,
        propertyTaxExemption: false,
        homeValueIncrease: false,
        solarCredit: "",
        netMetering: false
    },
    "delaware": {
        image: '/States/delaware.svg',
        eVRebate: 2500,
        hybridRebate: 1500,
        salesTaxExemption: false,
        propertyTaxExemption: false,
        homeValueIncrease: false,
        solarCredit: "",
        netMetering: false
    },
    "florida": {
        image: '/States/florida.svg',
        eVRebate: 0,
        hybridRebate: 0,
        salesTaxExemption: true,
        propertyTaxExemption: true,
        homeValueIncrease: false,
        solarCredit: "there are tax credits from $2,000 to $4,000 depending on where you live",
        netMetering: true
    },
    "georgia": {
        image: '/States/georgia.svg',
        eVRebate: 0,
        hybridRebate: 0,
        salesTaxExemption: false,
        propertyTaxExemption: false,
        homeValueIncrease: false,
        solarCredit: "",
        netMetering: true
    },
    "hawaii": {
        image: '/States/hawaii.svg',
        eVRebate: 0,
        hybridRebate: 0,
        salesTaxExemption: false,
        propertyTaxExemption: false,
        homeValueIncrease: false,
        solarCredit: "",
        netMetering: false
    },
    "idaho": {
        image: '/States/idaho.svg',
        eVRebate: 0,
        hybridRebate: 0,
        salesTaxExemption: false,
        propertyTaxExemption: false,
        homeValueIncrease: false,
        solarCredit: "",
        netMetering: false
    },
    "illinois": {
        image: '/States/illinois.svg',
        eVRebate: 4000,
        hybridRebate: 0, salesTaxExemption: false,
        propertyTaxExemption: false,
        homeValueIncrease: false,
        solarCredit: "",
        netMetering: true
    },
    "indiana": {
        image: '/States/indiana.svg',
        eVRebate: 0,
        hybridRebate: 0,
        salesTaxExemption: false,
        propertyTaxExemption: false,
        homeValueIncrease: false,
        solarCredit: "",
        netMetering: false
    },
    "iowa": {
        image: '/States/iowa.svg',
        eVRebate: 0,
        hybridRebate: 0,
        salesTaxExemption: true,
        propertyTaxExemption: true,
        homeValueIncrease: false,
        solarCredit: "",
        netMetering: true
    },
    "kansas": {
        image: '/States/kansas.svg',
        eVRebate: 2400,
        hybridRebate: 0,
        salesTaxExemption: false,
        propertyTaxExemption: true,
        homeValueIncrease: true,
        solarCredit: "",
        netMetering: true
    },
    "kentucky": {
        image: '/States/kentucky.svg',
        eVRebate: 0,
        hybridRebate: 0,
        salesTaxExemption: false,
        propertyTaxExemption: false,
        homeValueIncrease: false,
        solarCredit: "",
        netMetering: false
    },
    "louisiana": {
        image: '/States/louisiana.svg',
        eVRebate: 0,
        hybridRebate: 0,
        salesTaxExemption: false,
        propertyTaxExemption: false,
        homeValueIncrease: true,
        solarCredit: "",
        netMetering: false
    },
    "maine": {
        image: '/States/maine.svg',
        eVRebate: 7500,
        hybridRebate: 0,
        salesTaxExemption: false,
        propertyTaxExemption: false,
        homeValueIncrease: false,
        solarCredit: "",
        netMetering: false
    },
    "maryland": {
        image: '/States/maryland.svg',
        eVRebate: 3000,
        hybridRebate: 0,
        salesTaxExemption: true,
        propertyTaxExemption: true,
        homeValueIncrease: false,
        solarCredit: "$1000 for a solar rebate, 30% or up to $5000 for a backup battery, certificate programs, and a clean energy grant for $1000",
        netMetering: true
    },
    "massachusetts": {
        image: '/States/massachusetts.svg',
        eVRebate: 6000,
        hybridRebate: 0,
        salesTaxExemption: false,
        propertyTaxExemption: false,
        homeValueIncrease: false,
        solarCredit: "",
        netMetering: false
    },
    "michigan": {
        image: '/States/michigan.svg',
        eVRebate: 0,
        hybridRebate: 0,
        salesTaxExemption: false,
        propertyTaxExemption: false,
        homeValueIncrease: false,
        solarCredit: "",
        netMetering: false
    },
    "minnesota": {
        image: '/States/minnesota.svg',
        eVRebate: 0,
        hybridRebate: 0,
        salesTaxExemption: false,
        propertyTaxExemption: false,
        homeValueIncrease: false,
        solarCredit: "",
        netMetering: false
    },
    "mississippi": {
        image: '/States/mississippi.svg',
        eVRebate: 0,
        hybridRebate: 0,
        salesTaxExemption: false,
        propertyTaxExemption: false,
        homeValueIncrease: false,
        solarCredit: "",
        netMetering: true
    },
    "missouri": {
        image: '/States/missouri.svg',
        eVRebate: 0,
        hybridRebate: 0,
        salesTaxExemption: false,
        propertyTaxExemption: false,
        homeValueIncrease: false,
        solarCredit: "",
        netMetering: false
    },
    "montana": {
        image: '/States/montana.svg',
        eVRebate: 0,
        hybridRebate: 0,
        salesTaxExemption: false,
        propertyTaxExemption: false,
        homeValueIncrease: false,
        solarCredit: "",
        netMetering: false
    },
    "nebraska": {
        image: '/States/nebraska.svg',
        eVRebate: 0,
        hybridRebate: 0,
        salesTaxExemption: false,
        propertyTaxExemption: false,
        homeValueIncrease: false,
        solarCredit: "",
        netMetering: true
    },
    "nevada": {
        image: '/States/nevada.svg',
        eVRebate: 0,
        hybridRebate: 0,
        salesTaxExemption: false,
        propertyTaxExemption: false,
        homeValueIncrease: false,
        solarCredit: "",
        netMetering: true
    },
    "new_hampshire": {
        image: '/States/new_hampshire.svg',
        eVRebate: 0,
        hybridRebate: 0,
        salesTaxExemption: false,
        propertyTaxExemption: false,
        homeValueIncrease: false,
        solarCredit: "",
        netMetering: false
    },
    "new_jersey": {
        image: '/States/new_jersey.svg',
        eVRebate: 4000,
        hybridRebate: 0,
        salesTaxExemption: false,
        propertyTaxExemption: false,
        homeValueIncrease: false,
        solarCredit: "",
        netMetering: false
    },
    "new_mexico": {
        image: '/States/new_mexico.svg',
        eVRebate: 0,
        hybridRebate: 0,
        salesTaxExemption: false,
        propertyTaxExemption: false,
        homeValueIncrease: false,
        solarCredit: "10% of cost up to $6000",
        netMetering: false
    },
    "new_york": {
        image: '/States/new_york.svg',
        eVRebate: 2000,
        hybridRebate: 0,
        salesTaxExemption: false,
        propertyTaxExemption: false,
        homeValueIncrease: false,
        solarCredit: "",
        netMetering: false
    },
    "north_carolina": {
        image: '/States/north_carolina.svg',
        eVRebate: 0,
        hybridRebate: 0,
        salesTaxExemption: false,
        propertyTaxExemption: true,
        homeValueIncrease: false,
        solarCredit: "up to $6000 from generating electricity and low interest loans available",
        netMetering: true
    },
    "north_dakota": {
        image: '/States/north_dakota.svg',
        eVRebate: 0,
        hybridRebate: 0,
        salesTaxExemption: false,
        propertyTaxExemption: false,
        homeValueIncrease: false,
        solarCredit: "",
        netMetering: false
    },
    "ohio": {
        image: '/States/ohio.svg',
        eVRebate: 0,
        hybridRebate: 0,
        salesTaxExemption: false,
        propertyTaxExemption: false,
        homeValueIncrease: false,
        solarCredit: "",
        netMetering: false
    },
    "oklahoma": {
        image: '/States/oklahoma.svg',
        eVRebate: 5500,
        hybridRebate: 0,
        salesTaxExemption: false,
        propertyTaxExemption: false,
        homeValueIncrease: false,
        solarCredit: "",
        netMetering: true
    },
    "oregon": {
        image: '/States/oregon.svg',
        eVRebate: 5000,
        hybridRebate: 0,
        salesTaxExemption: false,
        propertyTaxExemption: false,
        homeValueIncrease: false,
        solarCredit: "",
        netMetering: false
    },
    "pennsylvania": {
        image: '/States/pennsylvania.svg',
        eVRebate: 3000,
        hybridRebate: 0,
        salesTaxExemption: false,
        propertyTaxExemption: false,
        homeValueIncrease: false,
        solarCredit: "",
        netMetering: false
    },
    "rhode_island": {
        image: '/States/rhode_island.svg',
        eVRebate: 2500,
        hybridRebate: 0,
        salesTaxExemption: false,
        propertyTaxExemption: false,
        homeValueIncrease: false,
        solarCredit: "",
        netMetering: false
    },
    "south_carolina": {
        image: '/States/south_carolina.svg',
        eVRebate: 0,
        hybridRebate: 0,
        salesTaxExemption: false,
        propertyTaxExemption: true,
        homeValueIncrease: false,
        solarCredit: "there is a 25% state tax credit along with additional rebates for specific power companies",
        netMetering: true
    },
    "south_dakota": {
        image: '/States/south_dakota.svg',
        eVRebate: 0,
        hybridRebate: 0,
        salesTaxExemption: false,
        propertyTaxExemption: false,
        homeValueIncrease: false,
        solarCredit: "",
        netMetering: false
    },
    "tennessee": {
        image: '/States/tennessee.svg',
        eVRebate: 0,
        hybridRebate: 0,
        salesTaxExemption: true,
        propertyTaxExemption: false,
        homeValueIncrease: true,
        solarCredit: "$20 of value added to your home for every $1 saved",
        netMetering: false
    },
    "texas": {
        image: '/States/texas.svg',
        eVRebate: 0,
        hybridRebate: 0,
        salesTaxExemption: false,
        propertyTaxExemption: true,
        homeValueIncrease: false,
        solarCredit: "there are local rebates, check out your local government's website",
        netMetering: true
    },
    "utah": {
        image: '/States/utah.svg',
        eVRebate: 0,
        hybridRebate: 0,
        salesTaxExemption: false,
        propertyTaxExemption: false,
        homeValueIncrease: false,
        solarCredit: "",
        netMetering: false
    },
    "vermont": {
        image: '/States/vermont.svg',
        eVRebate: 4000,
        hybridRebate: 0,
        salesTaxExemption: false,
        propertyTaxExemption: false,
        homeValueIncrease: false,
        solarCredit: "",
        netMetering: false
    },
    "virginia": {
        image: '/States/virginia.svg',
        eVRebate: 2500,
        hybridRebate: 0,
        salesTaxExemption: false,
        propertyTaxExemption: true,
        homeValueIncrease: false,
        solarCredit: "certificate programs",
        netMetering: true
    },
    "washington": {
        image: '/States/washington.svg',
        eVRebate: 0,
        hybridRebate: 0,
        salesTaxExemption: false,
        propertyTaxExemption: false,
        homeValueIncrease: false,
        solarCredit: "",
        netMetering: false
    },
    "west_virginia": {
        image: '/States/west_virginia.svg',
        eVRebate: 0,
        hybridRebate: 0,
        salesTaxExemption: false,
        propertyTaxExemption: false,
        homeValueIncrease: false,
        solarCredit: "",
        netMetering: false
    },
    "wisconsin": {
        image: '/States/wisconsin.svg',
        eVRebate: 0,
        hybridRebate: 0,
        salesTaxExemption: false,
        propertyTaxExemption: false,
        homeValueIncrease: false,
        solarCredit: "",
        netMetering: false
    },
    "wyoming": {
        image: '/States/wyoming.svg',
        eVRebate: 0,
        hybridRebate: 0,
        salesTaxExemption: false,
        propertyTaxExemption: false,
        homeValueIncrease: false,
        solarCredit: "",
        netMetering: false
    },
};

const statesArray = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
    'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
    'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
    'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
    'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
    'Wisconsin', 'Wyoming'
];
export {stateInfo, statesArray};


