import React from 'react';
import Theme from '../theme';
import XZ from '../xz';
import './index.less';


class ConatinerItem extends React.Component {
    render(){
        const realKey = this.props.pkey.split("_")[0];;
        return <div>{this.props.renderItem(realKey)}</div>
    }
}

const getSelectedKey = (selectedKey,data) => {

    return selectedKey;
}

class Container extends React.Component {
    constructor(props) {
      super(props)
      this.dict = {};
      var curSelectedKey = getSelectedKey(props.selectedKey,props.data||[]);
      this.state = {
          selectedKey:curSelectedKey
      };
      this.createItem(curSelectedKey,props.data||[]);
    }

    createItem = (selectedKey,data)=>{
        if(this.props.cache){
            for(var key in this.dict){
                var isExistsInDict = false;
                for(var i=0,j=data.length;i<j;i+=1){
                    if(key === data[i].key){
                        isExistsInDict = true;
                        break;
                    }
                }
                if(!isExistsInDict){
                    delete this.dict[key];
                }
            }
            if(this.dict[selectedKey]){
                return;
            }
        }
        this.dict[selectedKey] = <ConatinerItem pkey={selectedKey} {...this.props} container={this}/>
    }
  
   
    componentWillReceiveProps(nextProps){
      const curSelectedKey = getSelectedKey(nextProps.selectedKey,nextProps.data||[]);
      if(curSelectedKey!==this.state.selectedKey){
        this.createItem(curSelectedKey,nextProps.data||[]);
        this.setState({
            selectedKey:curSelectedKey
        });
      }
      
    }
  
  
    render() {
      var re = [];
      var className = ["xz-tabs_container-default"];
      if(this.props.className){
        className.push(this.props.className);
      }else{
        className.push("xz-tabs-container");
      }
      if(this.props.cache===true){
        for(var key in this.dict){
          if(key===this.state.selectedKey){
            re.push(<div key={key+"_containerwrapper"}>{this.dict[key]}</div>);
          }else{
            re.push(<div key={key+"_containerwrapper"} style={{display:"none"}}>{this.dict[key]}</div>);
          }
        }
      }else{
        re = this.dict[this.state.selectedKey];
      }
      
      return (<div className={className.join(" ")}>{re}</div>);
    }
  }


export default class Tabs extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedKey: getSelectedKey(props.selectedKey,props.data)
        };
    }
    componentWillReceiveProps(nextProps){
        var curKey = getSelectedKey(nextProps.selectedKey,nextProps.data)
        if(curKey!==this.state.selectedKey){
            this.setState({
                selectedKey: curKey
            });
        }
    }
    itemClick(data,tabItem){
        if(this.props.onChange){
            this.props.onChange(data,{
                tabsInstance:this,
                tabItemInstance:tabItem
            });
        }
    }
    render(){
        const data = this.props.data||[];
        const selectedItemClassName = this.props.selectedItemClassName || 'xz-tabs-item-selected';
        const tabs = [];
        for(let i=0,j=data.length;i<j;i+=1){
            const itemdata = data[i];
            const p = {};
            if(itemdata.key === this.state.selectedKey){
                p.className = selectedItemClassName;
            }
            tabs.push(<TabsItem {...p} key={itemdata.key} {...this.props} tabs={this} data={itemdata}/>);
        }
        return (<div className={`xz-tabs xz-tabs-${Theme.getConfig('size',this.props)} xz-tabs-hor`}>
            {tabs}</div>)
    }
}

class TabsItem extends React.Component{
    itemClick(data){
        this.props.tabs.itemClick(data,this);
    }
    render(){
        const { data } = this.props;
        const className = ['xz-tabs-item'];
        if(this.props.className){
            className.push(this.props.className);
        }
        return (<div onClick={this.itemClick.bind(this,data)} className={className.join(' ')}>{data.label||''}</div>)
    }
}

Tabs.Container = Container;
