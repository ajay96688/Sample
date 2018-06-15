
import React, { Component } from 'react';
import { Mosaic, MosaicWindow } from 'react-mosaic-component';
import Grid1 from './Grid1'
import Grid2 from './Grid2'
import Grid3 from './Grid3'
import Grid4 from './Grid4'
import 'react-mosaic-component/react-mosaic-component.css'
import './mosaic.css';
import RemoveButton from "./RemoveButton"
 
// Make type alias for generic checking in TSX until https://github.com/Microsoft/TypeScript/issues/6395 is fixed
 
const ViewIdMosaic = Mosaic;
const ViewIdMosaicWindow = MosaicWindow;
const toolbarControls  = React.Children.toArray([<RemoveButton/>]);


class MosaicTiles extends Component {

  constructor(){
    super();
    this.childA = React.createRef();
    this.childB = React.createRef();
    this.childC = React.createRef();
    this.childD = React.createRef();
    this.state={
      currentNode :{
        direction: 'row',
        first: {
          direction: 'column',
          first: 'A',
          second: 'D',
        },
        second: {
          direction: 'column',
          first: 'B',
          second: 'C',
        }
      }
     
     
    }

  }

 
  
  onChange =(currentNode) =>{ 
    this.setState({currentNode}) 
    this.childA.current.sizeToFit();
    this.childB.current.sizeToFit();
    this.childC.current.sizeToFit();
    this.childD.current.sizeToFit();

  }
    render() {
      const TITLE_MAP=  {
        A: <Grid1 ref={this.childA}/>,
        B: <Grid2 ref={this.childB}/>,
        C: <Grid3 ref={this.childC}/>,
        D: <Grid4 ref={this.childD}/>
      };
      return (

        <ViewIdMosaic
    renderTile={(id, path) => (
      <ViewIdMosaicWindow path={path}   >
      {TITLE_MAP[id]}
      </ViewIdMosaicWindow>
    )}
    value={this.state.currentNode}
    onChange={this.onChange}
    className=''
    
  />

      );
    }
  }
  
  export default MosaicTiles;