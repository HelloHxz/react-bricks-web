import React from 'react';
import { Row } from 'react-bricks-web';
import CodeItem from './codeItem';

export default class CodeList extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        const firstColumnChildren = [];
        const secondColumnChildren=[];
        const span20Column = [];
        let seed = 0;
        for(let i = 0,j=this.props.data.length;i<j;i++){
            const MDArr = this.props.data[i].MDText.split('-分割线-');
            let MDConfig={title:'读取失败'};
            try{
                MDConfig = JSON.parse(MDArr[0]);
            }catch(e){
                console.log(e);
                console.error("在md中记得将描述JSON的Key用\"\"包裹起来,不能用单引号");
                console.error(MDArr[0]);
            }
            this.props.data[i].MDText = MDArr[1];
            this.props.data[i].MDConfig = MDConfig;
           const child  = <CodeItem key={i} data={this.props.data[i]}/>;
           if(MDConfig.span){
            span20Column.push(child);
           }else{
                seed+=1;
                if(seed%2===0){
                firstColumnChildren.push(child);
                }else{
                secondColumnChildren.push(child);
                }
           }
         
        }
        return (
            <div>
                <Row gutter={12}>
                    <Row.Col span={{sm:24,md:12}}>
                    {firstColumnChildren}
                    </Row.Col>
                    <Row.Col span={{sm:24,md:12}}>
                    {secondColumnChildren}
                    </Row.Col>
                </Row>
                {span20Column.length>0?<div>{span20Column}</div>:null}
            </div>);
    }
}