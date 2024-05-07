import * as React from 'react'
import {Box, TextField, Select, InputLabel, MenuItem, FormControl, IconButton} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from './actions';
import CloseIcon from '@mui/icons-material/Close';


// Defining generic text input filter - will use for location and company name fields
export function TextFilter({ filterKey, label}) {

    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch(setFilter({ [filterKey]: event.target.value })); // call the setFilter function when 
        // there is a change in the field
    };

    return (
        <TextField id = {filterKey} label = {label} className="text-box" onChange={handleChange}/>
    )
}

// Defining generic select option filter
export function SelectOption({ filterKey, label, value, options }) {

    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch(setFilter({ [filterKey]: event.target.value })); // call the setFilter function when the field changes
    };

    const handleClear = () => {
        dispatch(setFilter({ [filterKey]: '' })); // function to clear the inputs - when user clicks "close"
    };
    
    return (
        <Box className="text-box">
            <FormControl fullWidth>
                <InputLabel className="label-text">{label}</InputLabel>
                <Select
                className="label-text"
                id={ filterKey }
                value={value}
                label={label}
                onChange={handleChange}>
            {options.map((option) => (
            <MenuItem className="label-text" key={option.value} value={option.value}>{option.label}</MenuItem>
            ))}
            </Select>
        </FormControl>
        {value && (  // Render close button only if value is not empty
            <IconButton onClick={handleClear} aria-label="clear" sx={{ marginLeft: -8, marginTop: 1.2 }}>
                <CloseIcon className="label-text"/>
            </IconButton>
        )}
        </Box>
    );

}