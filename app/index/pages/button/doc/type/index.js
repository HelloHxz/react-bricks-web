import React from 'react';
import { Button,Icon } from 'bricks-web';

export default class Example extends React.Component{
    render(){
        return <div>
            <Button size='lg' type='hover'>Primary</Button>
            <Button type='hover'>
                <Icon type='questioncircleo'/>
            </Button>
            <Button size='sm' type='hover'><Icon text='Primary' customIcon='iconfont icon-desktop'/></Button>
        </div>;
    }
}