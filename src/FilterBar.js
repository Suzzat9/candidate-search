import React from 'react'
import {TextFilter, SelectOption} from './Filters'
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from './actions';


const FilterBar = () => {

    const filters = useSelector((state) => state.filters); // getting filter vars from redux

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
            <TextFilter className="text-box" filterKey="companyName" label="Enter company name"/>
            <SelectOption filterKey="minExp" label="Experience" value={filters.minExp} options={options}/>
        </div>
    )
}

export default FilterBar;