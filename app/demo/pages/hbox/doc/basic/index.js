import React from 'react';
import { HBox,Button } from 'react-bricks-web';
import './index.less';

export default class Example extends React.Component{
    constructor(props){
        super(props);
        this.state={
            leftPanelStatus:null,
            rightPanelStatus:null,
            leftWidth:100,
            rightWidth:100
        }
    }
    
    onBackLayerClick(){
        const re = {};
        let seed = 0;
        if(this.state.leftPanelStatus==='popshow'){
          re.leftPanelStatus = 'pophide';
          seed +=1;
        }
        if(this.state.rightPanelStatus==='popshow'){
          re.rightPanelStatus = 'pophide';
          seed +=1;
        }
        if(seed>0){
          this.setState(re);
        }
    }
    
    changeLeftWidth(width){
        if(width===this.state.leftWidth){
          return;
        }
        this.setState({
            leftWidth:width
        });
    }
    changeLeftStatus(status){
        if(status===this.state.leftPanelStatus){
          return;
        }
        this.setState({leftPanelStatus:status});
    }
    
    changeRightStatus(status){
        if(status===this.state.rightPanelStatus){
          return;
        }
        this.setState({rightPanelStatus:status});
    }
    
    changeRightWidth(width){
        if(width===this.state.rightWidth){
          return;
        }
        this.setState({
          rightWidth:width
      });
    }
    
    render(){
        return (
        <div>
            <HBox onBackLayerClick={this.onBackLayerClick.bind(this)} className='demoHBox' style={{height:200}}>
                <HBox.Panel status={this.state.leftPanelStatus} style={{width:this.state.leftWidth,backgroundColor:'#7dbcea'}}>1</HBox.Panel>
                <HBox.Panel style={{backgroundColor:'rgba(16, 142, 233, 1)'}}>2</HBox.Panel>
                <HBox.Panel status={this.state.rightPanelStatus} style={{width:this.state.rightWidth,backgroundColor:'#7dbcea'}}>3</HBox.Panel>
            </HBox>
            <div style={{marginTop:10,marginBottom:5}}>left:</div>
            <Button type='primary' onClick={this.changeLeftWidth.bind(this,300)} style={{marginRight:10}}>width:300</Button>
            <Button type='primary' onClick={this.changeLeftWidth.bind(this,100)} style={{marginRight:10}}>width:100</Button>
            <Button type='primary' onClick={this.changeLeftStatus.bind(this,'popshow')} style={{marginRight:10}}>popShow</Button>
            <Button type='primary' onClick={this.changeLeftStatus.bind(this,'pophide')} style={{marginRight:10}}>popHide</Button>
            <Button type='primary' onClick={this.changeLeftStatus.bind(this,'slideshow')} style={{marginRight:10}}>slideShow</Button>
            <Button type='primary' onClick={this.changeLeftStatus.bind(this,'slidehide')} style={{marginRight:10}}>slideHide</Button>
        
            <div style={{marginTop:10,marginBottom:5}}>right:</div>

            <Button type='primary' onClick={this.changeRightWidth.bind(this,200)} style={{marginRight:10}}>width:200</Button>
            <Button type='primary' onClick={this.changeRightWidth.bind(this,100)} style={{marginRight:10}}>width:100</Button>
            <Button type='primary' onClick={this.changeRightStatus.bind(this,'popshow')} style={{marginRight:10}}>popShow</Button>
            <Button type='primary' onClick={this.changeRightStatus.bind(this,'pophide')} style={{marginRight:10}}>popHide</Button>
            <Button type='primary' onClick={this.changeRightStatus.bind(this,'slideshow')} style={{marginRight:10}}>slideShow</Button>
            <Button type='primary' onClick={this.changeRightStatus.bind(this,'slidehide')} style={{marginRight:10}}>slideHide</Button>
        </div>);
    }
}