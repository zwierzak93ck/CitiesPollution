import React from 'react';
import Select from 'react-select';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { CardActions, Button } from '@material-ui/core';

export const CountriesSearchField = (props) => {
    return (
        <Card className="flex-container search-form">
            <CardContent className="card-content">
                <Select
                    value={props.setValue}
                    options={props.options}
                    onChange={props.onChange}
                    isClearable
                />
            </CardContent>
            <CardActions className="card-actions">
                <Button className="button" onClick={props.onClick} variant='contained' color='primary' disabled={props.validate}>Get Data</Button>
            </CardActions>
        </Card>
    )
}