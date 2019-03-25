import React from 'react';
import Select from 'react-select';
import Button from '@material-ui/core/Button';

export const CountriesSearchField = (props) => {
    console.log(props)
    return (
        <div>
        <Select 
            setValue={props.value} 
            options={props.options} 
            onChange={props.onChange} 
            isClearable
        />

        <Button onClick={props.onClick} variant='contained' color='primary'>Get</Button>
        </div>
    )
}