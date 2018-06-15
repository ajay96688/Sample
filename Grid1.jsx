import React, { Component } from "react";
import GridBase from "./GridBase";

class GridExample extends Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
    this.state={
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
     
    }
  }


  sizeToFit=()=>{
      this.child.current.sizeToFit();
  }


  render() {
       
    return (

            <div 
              style={{
                height: "100%",
                width: "100%"
              }}
            >
              <GridBase ref={this.child}
                columnDefs={this.state.columnDefs}
                rowData={this.state.rowData}
              />
            </div>
    );
  }
}

export default GridExample;