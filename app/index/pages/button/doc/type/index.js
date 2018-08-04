import React from 'react';
import { Button,Icon } from 'bricks-web';

export default class Example extends React.Component{
    render(){
        return <div>
            <Button size='lg' type='primarytext'>Primary</Button>
            <Button type='primarytext'>
                <Icon type='questioncircleo'/>
            </Button>
            <Button size='sm' type='primarytext'><Icon text='Primary' customIcon='iconfont icon-desktop'/></Button>
        </div>;
    }
}