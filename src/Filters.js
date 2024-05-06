import * as React from 'react'
import {Box, TextField, Select, InputLabel, MenuItem, FormControl} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from './actions';

export function TextFilter({ filterKey, label}) {

    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch(setFilter({ [filterKey]: event.target.value }));
    };

    return (
        <TextField id = {filterKey} label = {label} labelId="text-box" onChange={handleChange}/>
    )
}

export function SelectOption({ filterKey, label, value, options }) {

    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch(setFilter({ [filterKey]: event.target.value }));
    };
    
    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select
                labelId="text-box"
                id={ filterKey }
                value={value}
                label={label}
                onChange={handleChange}>
            {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
            ))}
            </Select>
        </FormControl>
        </Box>
    );

}