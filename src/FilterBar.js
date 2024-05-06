import * as React from 'react'
import TextFilter from './Filters'

const FilterBar = () => {
    return (
        <div>
            <TextFilter filterKey="company" label="Enter company name"></TextFilter>
        </div>
    )
}

export default FilterBar;