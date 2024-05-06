import * as React from 'react'
import {Box, TextField, Select} from '@mui/material';

const TextFilter = ({ filterKey, label }) => {

    return (
        <TextField id = {filterKey} label = {label} variant="outlined"/>
    )
}

export default TextFilter;