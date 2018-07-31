import React from 'react';
// require('../../../src/components/button/index.less');


export default class ThemeOne extends React.Component{

    constructor(props){
        super(props);
        const pagePathsList = require.context('../../../src/components', true, /index\.less$/).keys();
        //./icon/index.less
        for(let i=0,j=pagePathsList.length;i<j;i+=1){
            const item = pagePathsList[i];
            // console.log('../../../src/components'+item.substring(1,item.length))
            // require('../../../src/components'+item.substring(1,item.length))
        }
    }

    render(){
        return null;
    }

}