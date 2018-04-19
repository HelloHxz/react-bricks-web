import  React from 'react';
import { Menu as MiniMenu } from '../popmenu'


var data = [{
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
}
];

class Menu extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:data
        }
        console.log(MiniMenu);
    }
    render(){
        return <MiniMenu data={this.state.data}/>
        var children = [];
        for(var i=0,j=this.state.data.length;i<j;i++){
            var itemData = this.state.data[i];
            if(itemData.children){
                children.push(<MenuSection key={i} data={itemData}/>);
            }else{
                children.push(<MenuSectionItem key={i} data={itemData}/>);
            }
        }
        return <ul>
            {children}
        </ul>;
    }
}
class MenuSection extends React.Component{
    constructor(props){
        super(props); 
        this.state={
            data:props.data
        }
    }
    render(){
        var children = [];
        for(var i=0,j=this.state.data.children.length;i<j;i++){
            var itemData = this.state.data.children[i];
            if(itemData.children){
                children.push(<MenuSection key={i} data={itemData}/>);
            }else{
                children.push(<MenuSectionItem key={i} data={itemData}/>);
            }
        }
        return <ul>
            <MenuSectionHeader data={this.state.data}/>
            {children}
        </ul>;;
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
        return <li>{this.state.data.label}</li>;
    }
}

class MenuSectionHeader extends React.Component{
    constructor(props){
        super(props); 
        this.state={
            data:props.data
        }
    }
    render(){
        return <li style={{backgroundColor:'red'}}>{this.state.data.label}</li>;
    }
}

export default Menu;
