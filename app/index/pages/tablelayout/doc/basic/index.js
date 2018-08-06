import React from 'react';
import { TableLayout } from 'bricks-web';
import './index.less';

export default class Example extends React.Component{
    render(){
        return <div>
            <TableLayout className='demo-tablelayout' style={{height:100}}>
                <TableLayout.Cell style={{width:150,}}>width:150px</TableLayout.Cell>
                <TableLayout.Cell>auto</TableLayout.Cell>
                <TableLayout.Cell style={{width:100,}}>width:100px</TableLayout.Cell>
                <TableLayout.Cell style={{width:70,}}>width:70px</TableLayout.Cell>
            </TableLayout>
            <br/>
            <TableLayout className='demo-tablelayout'>
                <TableLayout.Cell style={{width:150,}}>width:150px</TableLayout.Cell>
                <TableLayout.Cell>auto</TableLayout.Cell>
                <TableLayout.Cell>auto</TableLayout.Cell>
                <TableLayout.Cell style={{width:70,}}>width:70px</TableLayout.Cell>
            </TableLayout>
        </div>;
    }
}