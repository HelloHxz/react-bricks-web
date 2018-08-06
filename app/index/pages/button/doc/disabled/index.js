import React from 'react';
import { Button } from 'bricks-web';

export default class Example extends React.Component{
    render(){
        return <div>
            <Button type='primary'>Primary</Button>
            <Button >Primary</Button>
        </div>;
    }
}