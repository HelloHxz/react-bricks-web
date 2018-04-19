import  React from 'react';


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

class PopMenuRoot extends React.Component{
    // 决定弹出方式 hover 还是 右键  延迟加载
    render(){
        <div>{this.props.children}</div>;
    }
}

class Menu extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:props.data||data,
            subData:null
        }
    }
    componentDidMount(){
        if(this.props.isPop&&this.root){
            document.body.appendChild(this.root);
        }
    }
    componentWillUnmount(){
        this._clearTime();
        if(this.props.isPop&&this.root){
            document.body.removeChild(this.root);
        }
    }
    onMouseMove(e){
        if(this.props.parent){
            this.props.parent._clearTime();
        }
        e.stopPropagation();
        console.log(this.state.data);
        this.setState({
            subData:[{label:'xxx',key:'xxx'},{label:'222',key:'xxx'}]
        });
    }
    _clearTime(){
        if(this.timeoutid){
            window.clearTimeout(this.timeoutid);
            this.timeoutid = null;
        }
    }
    onMouseLeave(){
       this.timeoutid =  setTimeout(()=>{
            this.setState({
                subData:null
            });
        },100);
    }

    render(){
        var children = [];
        for(var i=0,j=this.state.data.length;i<j;i++){
            var itemData = this.state.data[i];
            if(itemData.children){
                children.push(<MenuSection key={i} data={itemData}/>);
            }else{
                children.push(<MenuSectionItem key={i} data={itemData}/>);
            }
        }
        var subMenu = null;
        var style={};
        var mouseEvent = {
            onMouseMove:this.onMouseMove.bind(this),
            onMouseLeave:this.onMouseLeave.bind(this)
        };
        if(this.props.isPop){
            style={
                position:"fixed",
                top:"100px",
                left:"100px",
                zIndex:111111
            }
        }
        if(this.state.subData){
            subMenu = <Menu key="1" parent={this} isPop={true} data={this.state.subData} />;
        }
    
        return (<div style={{backgroundColor:"#fff"}}>
                    <ul style={style} ref={(root)=>{this.root = root;}} {...mouseEvent}>
                     {children}
                    </ul>
                    <div>
                 {subMenu}</div>
               </div>);
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
        return <ul>
            <MenuSectionItem data={this.state.data}/>
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


export {PopMenuRoot,Menu};
