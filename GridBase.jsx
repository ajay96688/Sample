import React, { Component } from "react";
import { AgGridReact } from "ag-grid-react";
import  'ag-grid/dist/styles/ag-grid.css';
import  'ag-grid/dist/styles/ag-theme-balham.css';


class GridExample extends Component {
  constructor(props) {
    super(props);
  }

  onGridReady(params) {
    console.log('onGridReady ')
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    params.api.sizeColumnsToFit();
    
    window.addEventListener("resize", function() {
      setTimeout(function() {
        params.api.sizeColumnsToFit();
      },100);
    });

    params.api.sizeColumnsToFit();
  }



sizeToFit = ()=>{
  let self = this
  setTimeout(function() {
    self.gridApi.sizeColumnsToFit();
  },500);
}
  render() {
       
    return (


            <div 
              style={{
                boxSizing: "border-box",
                height: "100%",
                width: "100%"
              }}
              className="ag-theme-balham"
            >
              <AgGridReact
                id="myGrid"
                columnDefs={this.props.columnDefs}
                rowData={this.props.rowData}
                onGridReady={this.onGridReady.bind(this)}
              />
            </div>

    );
  }
}

export default GridExample;