import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';


export const CityInformation = (props) => {
    console.log(props)
    return (
        <Card className="flex-container">
        <CardContent className="card-content">
            <ExpansionPanel
                expanded={props.expanded}
                onChange={props.handleChange}
            >
                <ExpansionPanelSummary>
                    <h2>{props.city}</h2>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div>
                        Lorem ipsum
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </CardContent>
    </Card>
    )
}