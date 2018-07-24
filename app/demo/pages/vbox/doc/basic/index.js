import React from 'react';
import { VBox,Button } from 'react-bricks-web';
import './index.less';

export default class Example extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          topHeight:100,
          bottomHeight:100,
          topStatus:null,
          bottomStatus:null
        };
    }

    onBackLayerClick(){
        const re = {};
        let seed = 0;
        if(this.state.topStatus==='popshow'){
          re.topStatus = 'pophide';
          seed +=1;
        }
        if(this.state.bottomStatus==='popshow'){
          re.bottomStatus = 'pophide';
          seed +=1;
        }
        if(seed>0){
          this.setState(re);
        }
    }
    changeTopHeight(height){
        if(this.state.topHeight===height){
          return;
        }
        this.setState({
          topHeight:height
        });
      }
    
    changeBottomHeight(height){
        if(this.state.bottomHeight===height){
            return;
        }
        this.setState({
            bottomHeight:height
        });
    }

    changeTopStatus(status){
        if(this.state.topStatus===status){
            return;
        }
        this.setState({
            topStatus:status
        });
    }

    changeBottomStatus(status){
        if(this.state.bottomStatus===status){
            return;
        }
        this.setState({
            bottomStatus:status
        });
    }
    
    render(){
        return <div>
            <div style={{marginTop:10,marginBottom:5}}>top:</div>
            <Button type='primary' onClick={this.changeTopHeight.bind(this,160)} style={{marginRight:10}}>height:160</Button>
            <Button type='primary' onClick={this.changeTopHeight.bind(this,100)} style={{marginRight:10}}>height:100</Button>
            <Button type='primary' onClick={this.changeTopStatus.bind(this,'popshow')} style={{marginRight:10}}>popShow</Button>
            <Button type='primary' onClick={this.changeTopStatus.bind(this,'pophide')} style={{marginRight:10}}>popHide</Button>
            <Button type='primary' onClick={this.changeTopStatus.bind(this,'slideshow')} style={{marginRight:10}}>slideShow</Button>
            <Button type='primary' onClick={this.changeTopStatus.bind(this,'slidehide')} style={{marginRight:10}}>slideHide</Button>
        
            <VBox onBackLayerClick={this.onBackLayerClick.bind(this)} className='demoVBox' style={{height:460}}>
                <VBox.Panel status={this.state.topStatus} style={{height:this.state.topHeight,backgroundColor:'#7dbcea'}}>1</VBox.Panel>
                <VBox.Panel style={{backgroundColor:'rgba(16, 142, 233, 1)'}}>2</VBox.Panel>
                <VBox.Panel status={this.state.bottomStatus} style={{height:this.state.bottomHeight,backgroundColor:'#7dbcea'}}>3</VBox.Panel>
            </VBox>
       
            <div style={{marginTop:10,marginBottom:5}}>bottom:</div>
            <Button type='primary' onClick={this.changeBottomHeight.bind(this,200)} style={{marginRight:10}}>height:200</Button>
            <Button type='primary' onClick={this.changeBottomHeight.bind(this,100)} style={{marginRight:10}}>height:100</Button>
            <Button type='primary' onClick={this.changeBottomStatus.bind(this,'popshow')} style={{marginRight:10}}>popShow</Button>
            <Button type='primary' onClick={this.changeBottomStatus.bind(this,'pophide')} style={{marginRight:10}}>popHide</Button>
            <Button type='primary' onClick={this.changeBottomStatus.bind(this,'slideshow')} style={{marginRight:10}}>slideShow</Button>
            <Button type='primary' onClick={this.changeBottomStatus.bind(this,'slidehide')} style={{marginRight:10}}>slideHide</Button>
        
        </div>;
    }
}