import * as React from 'react'
import {Box, TextField, Select, InputLabel, MenuItem, FormControl, IconButton} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from './actions';
import CloseIcon from '@mui/icons-material/Close';

export function TextFilter({ filterKey, label}) {

    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch(setFilter({ [filterKey]: event.target.value }));
    };

    return (
        <TextField id = {filterKey} label = {label} className="text-box" onChange={handleChange}/>
    )
}

export function SelectOption({ filterKey, label, value, options }) {

    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch(setFilter({ [filterKey]: event.target.value }));
    };

    const handleClear = () => {
        dispatch(setFilter({ [filterKey]: '' }));
    };
    
    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel className="text-box">{label}</InputLabel>
                <Select
                className="text-box"
                id={ filterKey }
                value={value}
                label={label}
                onChange={handleChange}>
            {options.map((option) => (
            <MenuItem className="text-box" key={option.value} value={option.value}>{option.label}</MenuItem>
            ))}
            </Select>
        </FormControl>
        {value && (  // Render close button only if value is not empty
            <IconButton onClick={handleClear} aria-label="clear" sx={{ marginLeft: -5 }}>
                <CloseIcon className="text-box"/>
            </IconButton>
        )}
        </Box>
    );

}