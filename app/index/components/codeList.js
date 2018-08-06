import React from 'react';
import { Row } from 'bricks-web';
import CodeItem from './codeItem';

export default class CodeList extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        const firstColumnChildren = [];
        const secondColumnChildren=[];
        const pre_span20Column = [];
        const after_span20Column = [];
        let seed = 0;
        for(let i = 0,j=this.props.data.length;i<j;i++){
            const NameArr = this.props.data[i].name.split("_");
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
            let order = 1000;
            if(NameArr.length>=2){
                if(!isNaN(NameArr[1])){
                    order = parseFloat(NameArr[1]);
                }
            }
            this.props.data[i].order = order;
        }
        this.props.data.sort((a,b)=>{
            return a.order>b.order;
        });

        let pushToAfter = false;
        for(let i=0,j=this.props.data.length;i<j;i+=1){
            const itemData = this.props.data[i];
            const child  = <CodeItem key={i} data={itemData}/>;
            if(itemData.MDConfig.span){
                if(pushToAfter){
                    after_span20Column.push(child);
                }else{
                    pre_span20Column.push(child);
                }
            }else{
                pushToAfter = true;
                if(seed%2===0){
                  firstColumnChildren.push(child);
                }else{
                  secondColumnChildren.push(child);
                }
                seed+=1;
            }
        }
        return (
            <div>
                {pre_span20Column.length>0?<div>{pre_span20Column}</div>:null}
                <Row gutter={12}>
                    <Row.Col span={{sm:24,md:12}}>
                    {firstColumnChildren}
                    </Row.Col>
                    <Row.Col span={{sm:24,md:12}}>
                    {secondColumnChildren}
                    </Row.Col>
                </Row>
                {after_span20Column.length>0?<div>{after_span20Column}</div>:null}
            </div>);
    }
}