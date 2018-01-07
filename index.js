import React from "react";
import {render} from "react-dom";


// pull in the ag-grid styles we're interested in
import "../node_modules/ag-grid/dist/styles/ag-grid.css";
import "../node_modules/ag-grid/dist/styles/ag-theme-fresh.css";

// only necessary if you're using ag-Grid-Enterprise features
// import "ag-grid-enterprise";

// our application
import SimpleGridExample from "./SimpleGridExample";

document.addEventListener('DOMContentLoaded', () => {
    render(
        <SimpleGridExample/>,
        document.querySelector('#root')
    );
});

