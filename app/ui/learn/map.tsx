import State from "@/app/ui/learn/state"

export default function Map() {
    const stateData = [
        //{name: 'Alabama', link: '/alabama', position: {x: 90, y: 30}, size: {w: 100, h:100}},
        //{name: 'Alaska', link: '/alaska', position: {x: 10, y: 40}, size: {w: 100, h:100}},
        //{name: 'Arizona', link: '/arizona', position: {x: 10, y: 20}, size: {w: 100, h:100}},
        //{name: 'Arkansas', link: '/arkansas', position: {x: 10, y: 20}, size: {w: 100, h:100}},
        //{name: 'California', link: '/california', position: {x: 10, y: 20}, size: {w: 100, h:100}},
        //{name: 'Colorado', link: '/colorado', position: {x: 10, y: 20}, size: {w: 100, h:100}},
        //{name: 'Connecticut', link: '/connecticut', position: {x: 10, y: 20}, size: {w: 100, h:100}},
        //{name: 'Delaware', link: '/delaware', position: {x: 10, y: 20}, size: {w: 100, h:100}},
        //{name: 'Florida', link: '/florida', position: {x: 10, y: 20}, size: {w: 100, h:100}},
        //{name: 'Georgia', link: '/georgia', position: {x: 10, y: 20}, size: {w: 100, h:100}},
        //{name: 'Hawaii', link: '/hawaii', position: {x: 90, y: 30}, size: {w: 100, h:100}},
        //{name: 'Idaho', link: '/idaho', position: {x: 10, y: 40}, size: {w: 100, h:100}},
        //{name: 'Illinois', link: '/illinois', position: {x: 10, y: 20}, size: {w: 100, h:100}},
        //{name: 'Indiana', link: '/indiana', position: {x: 10, y: 20}, size: {w: 100, h:100}},
        //{name: 'Iowa', link: '/iowa', position: {x: 10, y: 20}, size: {w: 100, h:100}},
        //{name: 'Kansas', link: '/kansas', position: {x: 10, y: 20}, size: {w: 100, h:100}},
        //{name: 'Kentucky', link: '/kentucky', position: {x: 10, y: 20}, size: {w: 100, h:100}},
        //{name: 'Louisiana', link: '/louisiana', position: {x: 10, y: 20}, size: {w: 100, h:100}},
        {name: 'Maine', link: '/maine', position: {x: 90, y: 5}, size: {w: 100, h:100}},
        //{name: 'Maryland', link: '/maryland', position: {x: 10, y: 20}, size: {w: 100, h:100}},
        //{name: 'Massachusetts', link: '/massachusetts', position: {x: 10, y: 40}, size: {w: 100, h:100}},
        //{name: 'Michigan', link: '/michigan', position: {x: 10, y: 20}, size: {w: 100, h:100}},
        //{name: 'Minnesota', link: '/minnesota', position: {x: 10, y: 20}, size: {w: 100, h:100}},
        //{name: 'Mississippi', link: '/mississippi', position: {x: 10, y: 20}, size: {w: 100, h:100}},
        //{name: 'Missouri', link: '/missouri', position: {x: 10, y: 20}, size: {w: 100, h:100}},
        //{name: 'Montana', link: '/montana', position: {x: 10, y: 20}, size: {w: 100, h:100}},
        //{name: 'Nebraska', link: '/nebraska', position: {x: 10, y: 20}, size: {w: 100, h:100}},
        //{name: 'Nevada', link: '/nevada', position: {x: 10, y: 20}, size: {w: 100, h:100}},
        //{name: 'New Hampshire', link: '/new hampshire', position: {x: 87.5, y: 14}, size: {w: 110, h:110}},
        //{name: 'New Jersey', link: '/new jersey', position: {x: 10, y: 40}, size: {w: 100, h:100}},
        //{name: 'New Mexico', link: '/new mexico', position: {x: 10, y: 20}, size: {w: 100, h:100}},
        //{name: 'New York', link: '/new york', position: {x: 10, y: 20}, size: {w: 100, h:100}},
        //{name: 'North Carolina', link: '/north carolina', position: {x: 10, y: 20}, size: {w: 100, h:100}},
        //{name: 'North Dakota', link: '/north dakota', position: {x: 10, y: 20}, size: {w: 100, h:100}},
        //{name: 'Ohio', link: '/ohio', position: {x: 10, y: 20}, size: {w: 100, h:100}},
        //{name: 'Oklahoma', link: '/oklahoma', position: {x: 10, y: 20}, size: {w: 100, h:100}},
        //{name: 'Oregon', link: '/oregon', position: {x: 10, y: 20}, size: {w: 100, h:100}},
        //{name: 'Pennsylvania', link: '/pennsylvania', position: {x: 10, y: 20}, size: {w: 100, h:100}},
        //{name: 'Rhode Island', link: '/rhode island', position: {x: 10, y: 40}, size: {w: 100, h:100}},
        //{name: 'South Carolina', link: '/south carolina', position: {x: 10, y: 20}, size: {w: 100, h:100}},
        //{name: 'South Dakota', link: '/south dakota', position: {x: 10, y: 20}, size: {w: 100, h:100}},
        //{name: 'Tennessee', link: '/tennessee', position: {x: 10, y: 20}, size: {w: 100, h:100}},
        //{name: 'Texas', link: '/texas', position: {x: 10, y: 20}, size: {w: 100, h:100}},
        //{name: 'Utah', link: '/utah', position: {x: 10, y: 20}, size: {w: 100, h:100}},
        //{name: 'Vermont', link: '/vermont', position: {x: 86, y: 10}, size: {w: 100, h:100}},
        //{name: 'Virginia', link: '/virginia', position: {x: 10, y: 20}, size: {w: 100, h:100}},
        //{name: 'Washington', link: '/washington', position: {x: 10, y: 20}, size: {w: 100, h:100}},
        //{name: 'West Virginia', link: '/west virginia', position: {x: 10, y: 20}, size: {w: 100, h:100}},
        //{name: 'Wisconsin', link: '/wisconsin', position: {x: 10, y: 20}, size: {w: 100, h:100}},
        //{name: 'Wyoming', link: '/wyoming', position: {x: 10, y: 20}, size: {w: 100, h:100}},
    ];

    return (
        <div className="relative">
            {stateData.map((state, index) => (
                <State key={index} {...state}/>
            ))}
        </div>
    );
}