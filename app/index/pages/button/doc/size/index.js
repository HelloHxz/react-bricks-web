import React from 'react';
import { Button,Icon } from 'react-bricks-web';

export default class Example extends React.Component{
    render(){
        return <div>
           <Button type='primary'>Primary</Button>
           <Button size='sm' type='primary'>Primary</Button>
           <Button size='lg' type='primary'>Primary</Button>
        </div>;
    }
}