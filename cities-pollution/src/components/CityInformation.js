import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


export const CityInformation = (props) => {
    return (
        <ExpansionPanel
            className="expansion-panel"
            expanded={props.expanded}
            onChange={props.handleChange}
        >
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
            >
                <h2 className="title">{props.name} </h2>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <div className="description">
                    {props.description ? props.description : 'Data could not be retrieved from the Wikipedia API'}
                </div>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    )
}