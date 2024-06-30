import React, { useState, useEffect } from 'react';
import './citySearch.css'
import Card from './Card';
const citySearch = ({ data, cityName }) => {
    const [searchTerm, setSearchTerm] = useState("pune");
    const [filteredCampaigns, setFilteredCampaigns] = useState([]);
    console.log(cityName);

    useEffect(() => {
        // Filter campaigns based on the initial cityName
        const filtered = data.filter(campaign =>
            campaign.city.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredCampaigns(filtered);
    }, [searchTerm, data, cityName]);

    return (
        <div className='container'>
            <input
                type="text"
                placeholder="Search by city..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
           
                { filteredCampaigns.map(campaign => {
                   return <Card key={campaign.id} {...campaign}/>
               
})}
           
        </div>
    );
};

export default citySearch;


