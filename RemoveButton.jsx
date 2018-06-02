import React, { Component } from 'react';
import { MosaicWindowContext } from 'react-mosaic-component';
import 'font-awesome/css/font-awesome.min.css'
class RemoveButton extends React.PureComponent {
    static contextTypes = MosaicWindowContext;
    remove = () => this.context.mosaicActions.remove(this.context.mosaicWindowActions.getPath());
    render() {
      return <button className="customHeaderCloseButton" onClick={this.remove} > <i className="fa fa-close"></i></button>;
    }
   
    
  }

  export default RemoveButton;