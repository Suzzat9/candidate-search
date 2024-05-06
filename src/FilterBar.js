import * as React from 'react'
import TextFilter from './Filters'

const FilterBar = () => {
    return (
        <div>
            <TextFilter className="text-box" filterKey="company" label="Enter company name"/>
        </div>
    )
}

export default FilterBar;