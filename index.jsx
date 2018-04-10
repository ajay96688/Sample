"use strict";

import React, { Component } from "react";
import { render } from "react-dom";
import { AgGridReact } from "ag-grid-react";

class GridExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columnDefs: [
        {
          headerName: "Make",
          field: "make"
        },
        {
          headerName: "Model",
          field: "model"
        },
        {
          headerName: "Price",
          field: "price"
        }
      ],
      rowData: [
        {
          make: "Toyota",
          model: "Celica",
          price: 35000
        },
        {
          make: "Ford",
          model: "Mondeo",
          price: 32000
        },
        {
          make: "Porsche",
          model: "Boxter",
          price: 72000
        }
      ],
      onGridReady: function(params) {
        params.api.sizeColumnsToFit();
        window.addEventListener("resize", function() {
          setTimeout(function() {
            params.api.sizeColumnsToFit();
          });
        });
      }
    };
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    params.api.sizeColumnsToFit();
    window.addEventListener("resize", function() {
      setTimeout(function() {
        params.api.sizeColumnsToFit();
      });
    });

    params.api.sizeColumnsToFit();
  }

  render() {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ overflow: "hidden", flexGrow: "1" }}>
            <div
              style={{
                boxSizing: "border-box",
                height: "115px",
                width: "100%"
              }}
              className="ag-theme-balham"
            >
              <AgGridReact
                id="myGrid"
                columnDefs={this.state.columnDefs}
                rowData={this.state.rowData}
                onGridReady={this.state.onGridReady}
                onGridReady={this.onGridReady.bind(this)}
              />
            </div>
          </div>

          <div style={{ backgroundColor: "#ccc", padding: "2rem" }}>right side column</div>
        </div>
      </div>
    );
  }
}

render(<GridExample />, document.querySelector("#root"));
