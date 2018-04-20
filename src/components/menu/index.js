import  React from 'react';
import { Menu as MiniMenu } from '../popmenu';
import './index.less';



var data = [
    {
    label:'1',
    key:'xxxxx',
},
{
    label:"2",
    key:"xxxxxxxx",
    children:[
        {label:"2.1",key:'xxxxxxx'},
        {label:"2.2",key:'xxxxxxx',children:[
            {label:'2.2.1',key:'xxxxxxxx'},
            {label:'2.2.2',key:'xxxxxxxx'}
        ]},
    ]
},
{
    label:'3',
    key:'xxxxx',
},
{
    label:'4',
    key:'frfrf',children:[
        {label:"4.1",key:'xxxxxxx'},
        {label:"4.2",key:'xxxxxxx',children:[
            {label:'4.2.1',key:'xxxxxxxx'},
            {label:'4.2.2',key:'xxxxxxxx'}
        ]},
    ]
},

];

class Menu extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:data
        }
    }
    render(){
        var children = [];
        for(var i=0,j=this.state.data.length;i<j;i++){
            var itemData = this.state.data[i];
            if(itemData.children){
                children.push(<MenuSection level={0} key={i} data={itemData}/>);
            }else{
                children.push(<MenuSectionItem level={0} key={i} data={itemData}/>);
            }
        }
        return <div className='xz-menu'>
            {children}
        </div>;
    }
}

class MenuSection extends React.Component{
    constructor(props){
        super(props); 
        this.state={
            data:props.data,
            open:false,
        }
    }
    headerClick(){
        if(this.timeid||this.timeid2){
            return;
        }
        if(this.state.open){
            this.groupouter.style.height =  this.groupinner.offsetHeight+"px";
        }
        this.timeid = setTimeout(()=>{
            this.timeid = null;
            this.setState({
                open:!this.state.open
            },()=>{
                if(this.state.open){
                      this.timeid2 = setTimeout(()=>{
                        this.timeid2 = null;
                        this.groupouter.style.height = "auto";
                      },210)
                }else{
                    this.groupouter.style.height = "0px";
                }
            });
        },50);
    }
    outerLoad(groupouter){
        this.groupouter = groupouter;
    }
    innerLoad(groupinner){
        this.groupinner = groupinner;
    }
    render(){
        var children = [];
        var outerStyle ={};
        if(this.state.open){
            if(this.groupinner){
                outerStyle.height = this.groupinner.offsetHeight;
            }
        }else{
            outerStyle.height = 0;
        }
        for(var i=0,j=this.state.data.children.length;i<j;i++){
            var itemData = this.state.data.children[i];
            if(itemData.children){
                children.push(<MenuSection level={this.props.level+1} key={i} data={itemData}/>);
            }else{
                children.push(<MenuSectionItem level={this.props.level+1} key={i} data={itemData}/>);
            }
        }
        return (<div>
            <MenuSectionHeader onClick={this.headerClick.bind(this)} level={this.props.level} data={this.state.data}/>
            <div className='xz-menu-section' ref={this.outerLoad.bind(this)} style={outerStyle}>
              <div ref={this.innerLoad.bind(this)}>
                {children}
              </div>
            </div>
        </div>);
    }
}

class MenuSectionItem extends React.Component{
    constructor(props){
        super(props); 
        this.state={
            data:props.data
        }
    }
    render(){
        var paddingLeft = 0;
        if(this.props.level>0){
            paddingLeft = (this.props.level)*20;
        }
        return (<div style={{paddingLeft:paddingLeft}}>{this.state.data.label}</div>);
    }
}

class MenuSectionHeader extends React.Component{
    constructor(props){
        super(props); 
        this.state={
            data:props.data
        }
    }
    click(){
        this.props.onClick();
    }
    render(){
        return <div onClick={this.click.bind(this)} style={{backgroundColor:'red',paddingLeft:(this.props.level)*20}}>{this.state.data.label}</div>;
    }
}

export default Menu;
