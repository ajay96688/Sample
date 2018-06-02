
import React, { Component } from 'react';
import { Mosaic, MosaicWindow } from 'react-mosaic-component';
import 'react-mosaic-component/react-mosaic-component.css'
import './mosaic.css';
import RemoveButton from "./RemoveButton"
 
// Make type alias for generic checking in TSX until https://github.com/Microsoft/TypeScript/issues/6395 is fixed
 
const ViewIdMosaic = Mosaic;
const ViewIdMosaicWindow = MosaicWindow;
const toolbarControls  = React.Children.toArray([<RemoveButton />]);
const TITLE_MAP: Record<ViewId, string> = {
  a: 'Top Left Window',
  b: 'Top Right Window',
  c: 'Bottom Right Window',
  d: 'Bottom Left Window',
};
 
class MosaicTiles extends Component {
    render() {
      return (

        <ViewIdMosaic
    renderTile={(id, path) => (
      <ViewIdMosaicWindow path={path}  title={TITLE_MAP[id]} toolbarControls ={toolbarControls}>
        <h1>{TITLE_MAP[id]}</h1>
      </ViewIdMosaicWindow>
    )}
    initialValue={{
      direction: 'row',
      first: {
        direction: 'column',
        first: 'a',
        second: 'd',
      },
      second: {
        direction: 'column',
        first: 'b',
        second: 'c',
      },
    }}
    className=''
    
  />

      );
    }
  }
  
  export default MosaicTiles;