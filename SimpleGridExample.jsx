import React, {Component} from "react";
import {AgGridReact} from "ag-grid-react";
import "ag-grid-enterprise";


export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            columnDefs:  [{headerName:'Trader',field: 'name', cellRenderer:'agGroupCellRenderer'}],
            rowData,
            masterDetail : true,
            detailCellRendererParams: {
                detailGridOptions:  {
                                        columnDefs: [
                                                    {field: 'callId'},
                                                    {field: 'duration', valueFormatter: "x.toLocaleString() + 's'"}
                                                    ],
                                        onGridReady: function(params) {
                                        params.api.sizeColumnsToFit();
                                    }
                    },
                getDetailRowData: function(params) {
                                    params.successCallback(params.data.callRecords);
                                  }
            },
        }
    }

    onGridReady(params) {
        this.gridApi = params.api;
        this.columnApi = params.columnApi;
        this.gridApi.forEachNode(function (node) {
            node.setExpanded(node.id === "0");
        });
        this.gridApi.sizeColumnsToFit();
    }

 

    render() {


        return (
            <div style={{
            boxSizing: "border-box",
            height: "100%",
            width: "100%"
          }}

          className="ag-theme-fresh">
                <AgGridReact
                    // properties
                    columnDefs={this.state.columnDefs}
                    rowData={this.state.rowData}
                    masterDetail= {this.state.masterDetail}
                    detailCellRendererParams = {this.state.detailCellRendererParams}
                    // events
                    onGridReady={this.onGridReady}>
                </AgGridReact>
            </div>
        )
    }
};
