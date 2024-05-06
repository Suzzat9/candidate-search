import * as React from 'react'
import {Box, TextField, Select} from '@mui/material';

const TextFilter = ({ filterKey, label }) => {

    return (
        <TextField id = {filterKey} label = {label} className="text-box"/>
    )
}

export default TextFilter;