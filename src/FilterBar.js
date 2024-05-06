import React from 'react'
import {TextFilter, SelectOption} from './Filters'
import { useSelector } from 'react-redux';


const FilterBar = () => {

    const filters = useSelector((state) => state.filters); // getting filter vars from redux

    const optionsExp = [
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

    const optionsWorkMode = [
        { value: 'remote', label: 'Remote'},
        { value: '', label: 'On-Site'}
    ]

    const optionsTech = [
        { value: 'ios', label: 'IOS'},
        { value: 'flutter', label: 'Flutter'},
        { value: 'react', label: 'React Native'},
        { value: 'android', label: 'Android'},

    ]

    const optionsRole = [
        { value: 'backend', label: 'Backend'},
        { value: 'frontend', label: 'Frontend'},
        { value: 'fullstack', label: 'Fullstack'}
    ]

    const optionsPay = [
        { value: 0, label: '0'},
        { value: 10, label: '10'},
        { value: 20, label: '20'},
        { value: 30, label: '30'},
        { value: 40, label: '40'},
        { value: 50, label: '50'},
        { value: 60, label: '60'},
        { value: 61, label: '61'},
    ]

    return (
        <div className="filter-bar">
            <TextFilter className="text-box" filterKey="companyName" label="Enter company name"/>
            <TextFilter className="text-box" filterKey="location" label="Enter city name"/>
            <SelectOption filterKey="jobRole" label="Job Role" value={filters.jobRole} options={optionsRole}/>
            <SelectOption filterKey="techStack" label="Tech Stack" value={filters.techStack} options={optionsTech}/>
            <SelectOption filterKey="minExp" label="Minimum Experience" value={filters.minExp} options={optionsExp}/>
            <SelectOption filterKey="workMode" label="Remote/On-site" value={filters.workMode} options={optionsWorkMode}/>
            <SelectOption filterKey="minJdSalary" label="Min Base Pay" value={filters.minJdSalary} options={optionsPay}/>
        </div>
    )
}

export default FilterBar;