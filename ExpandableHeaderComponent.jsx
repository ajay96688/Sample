import React from "react";
import * as PropTypes from "prop-types";

export default class ExpandableHeaderComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: null
        }
    }

    render() {
        let arrowClassName = "customExpandButton " + (this.state.expanded ? " expanded" : " collapsed");
        return <div>
                    <div className = "customHeaderLabel" > { this.props.displayName } </div>
                        <div onClick = { this.expandOrCollapse.bind(this) } className = {arrowClassName}>
                            <i className = "fa fa-arrow-right"/> 
                    </div > 
               </div>
    }

    expandOrCollapse() {
        if(!this.state.expanded){
            this.props.columnApi.setColumnVisible('country', true)
        }else{
            this.props.columnApi.setColumnVisible('country', false) 
        }      
        this.setState({expanded : !this.state.expanded})
    }
}

ExpandableHeaderComponent.propTypes = {
    params: PropTypes.object
};
