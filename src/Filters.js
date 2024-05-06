import * as React from 'react'
import {Box, TextField, Select, InputLabel, MenuItem, FormControl} from '@mui/material';

export function TextFilter({ filterKey, label }) {

    return (
        <TextField id = {filterKey} label = {label} labelId="text-box"/>
    )
}

export function SelectOption({ filterKey, label, value, options, onChange }) {
    
    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select
                labelId="text-box"
                id={ filterKey }
                value={value}
                label={label}
                onChange={onChange}>
            {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
            ))}
            </Select>
        </FormControl>
        </Box>
    );

}