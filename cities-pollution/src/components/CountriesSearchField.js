import React from 'react';
import Select from 'react-select';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { CardActions, Button, TextField } from '@material-ui/core';

export const CountriesSearchField = (props) => {
    return (
        <Card className="flex-container search-form">
            <CardContent className="card-content">
                <Select
                    value={props.country}
                    options={props.options}
                    onChange={props.onChange}
                    isClearable
                />
                <TextField 
                    value={props.limit}
                    type="number"
                    placeholder="Number of cities"
                    onChange={props.onChange}
                />
            </CardContent>
            <CardActions className="card-actions">
                <Button className="button" onClick={props.onClick} variant='contained' color='primary' disabled={!props.validate}>Get Data</Button>
            </CardActions>
        </Card>
    )
}