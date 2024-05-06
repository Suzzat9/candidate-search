import React, { useState } from 'react'
import {TextFilter, SelectOption} from './Filters'

const FilterBar = () => {

    const [val, setVal] = useState('');

    const handleChange = (event) => {
        setVal(event.target.value);
    };

    const options = [
        { value: 1, label: '1' },
        { value: 2, label: '2' },
        { value: 3, label: '3' },
        { value: 4, label: '4' },
        { value: 5, label: '5' },
        { value: 6, label: '6' },
        { value: 7, label: '7' },
        { value: 8, label: '8' },
        { value: 9, label: '9' },
        { value: 10, label: '10' },
    ];

    return (
        <div className="filter-bar">
            <TextFilter className="text-box" filterKey="company" label="Enter company name"/>
            <SelectOption filterKey="experience" label="Experience" value={val} options={options} onChange={handleChange}/>
        </div>
    )
}

export default FilterBar;