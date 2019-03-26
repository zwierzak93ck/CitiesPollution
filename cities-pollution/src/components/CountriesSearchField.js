import React from 'react';
import Select from 'react-select';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { FormControl, TextField, CardActionArea, CardActions, Button } from '@material-ui/core';

export const CountriesSearchField = (props) => {
    console.log(props)
    return (
                    <Card className="flex-container">
            <CardContent className="card-content">
            <Select 
            value={props.setValue} 
            options={props.options} 
            onChange={props.onChange} 
            isClearable
        />
            </CardContent>
                <CardActions className="card-actions">
                <Button onClick={props.onClick} variant='contained' color='primary'>Get</Button>
                </CardActions>
        </Card>
    )
}