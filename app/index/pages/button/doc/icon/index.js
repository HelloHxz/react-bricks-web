import React from 'react';
import { Button,Icon } from 'bricks-web';

export default class Example extends React.Component{
    render(){
        return <div>
           <Button>
                <Icon type='questioncircleo' text='图标'/>
            </Button>
            <Button type='primary'>
                <Icon type='questioncircleo' text='图标'/>
            </Button>
            <Button>
        <Icon type='questioncircleo'/>
      </Button>
            <Button type='primary'>
                <Icon type='down' text='图标' textPlacement='left'/>
            </Button>
        </div>;
    }
}