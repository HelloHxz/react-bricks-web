import  React from 'react';
import PopMenu from '../popmenu';
import XZ from '../xz';
import './index.less';
import observer from '../observer';

@observer
class Menu extends React.Component{
    constructor(props){
        super(props);
        let selectedKey;
        if(props.withURLChange){
            this.hashChangeID = XZ.router.listenerHashChangeEvent((params)=>{
                this.urlChangeSetSelectedKey(params.path);
            });
            const urlInfo = XZ.router.getUrlInfo();
            selectedKey = urlInfo.path;
        }
        this.selectedOpenKeyArray = [];
        this.state={
            selectedKey:selectedKey||props.selectedKey
        }
    }

    urlChangeSetSelectedKey(selectedKey){
        this.setState({selectedKey});
    }
    componentWillUnmount(){
        if(this.hashChangeID){
            XZ.router.removeHashChangeListener(this.hashChangeID);
        }
    }

    onItemClick(params){
        if(this.props.onItemClick){
            this.props.onItemClick(params);
        }
    }
    componentWillReceiveProps(nextPros){
       
    }
    _getMiniVerticalItems = (data)=>{
        var children = [];
        for(var i=0,j=data.length;i<j;i++){
            var itemData = data[i];
            if(itemData.children){
                children.push(<PopMenu level={0} key={i} data={itemData.children}>{
                    <div>{itemData.label}</div>
                }</PopMenu>);
            }else{
                children.push(<div key={i}>{itemData.label}</div>);
            }
        }
        return children; 
    }
    _getVerticalItems = (data)=>{
        var children = [];
        for(var i=0,j=data.length;i<j;i++){
            var itemData = data[i];
            if(itemData.children){
                const p={level:0,key:i,data:itemData,menu:this};
                if(this.selectedOpenKeyArray.indexOf(itemData.key)>=0){
                    p.open = true;
                }
                children.push(<MenuSection {...p} onItemClick={this.onItemClick.bind(this)} />);
            }else{
                children.push(<MenuSectionItem menu={this} onItemClick={this.onItemClick.bind(this)} level={0} key={i} data={itemData}/>);
            }
        }
        return children; 
    }
    _processData(data,parentKey){
        for(let i=0,j=data.length;i<j;i+=1){
            const itemData = data[i];
            if(itemData.children){
                const clone = JSON.parse(JSON.stringify(parentKey));
                clone.push(itemData.key);
                this._processData(itemData.children,clone);
            }else{
                
            }
            // itemData.__parentKey = parentKey;
            if(itemData.key===this.state.selectedKey){
                this.selectedOpenKeyArray = parentKey;
            }
        }
    }
    render(){
        let children = [];
        const p = {};
        
        this._processData(this.props.data,[]);
        if(this.props.collapsed === true){
            children = this._getMiniVerticalItems(this.props.data);
            p.className = 'xz-menu xz-menu-vertical-mini';
        }else {
            children = this._getVerticalItems(this.props.data);
            p.className = 'xz-menu xz-menu-vertical';
        }
        if(this.props.style){
            p.style = this.props.style;
        }
        return <div {...p}>
            {children}
        </div>;
    }
}

@observer
class MenuSection extends React.Component{
    constructor(props){
        super(props); 
        this.state={
            data:props.data,
            open:props.open,
        }
    }
    componentDidMount(){
    }
    headerClick(){
        if(this.timeid||this.timeid2){
            return;
        }
        let openState = !this.state.open;
        if(!openState){
            //关闭的时候 从auto变成固定的高度 才有动画
            this.groupouter.style.height =  this.groupinner.offsetHeight+"px";
        }
        this.timeid = setTimeout(()=>{
            this.timeid = null;
            this.setState({
                open:openState
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
        if(this.groupouter){
            if(this.state.open){
                // 初始化的时候 保证高度不被固定
                setTimeout(()=>{
                    this.groupouter.style.height = "auto"
                },210);
            }
        }
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
                const p={level:this.props.level+1,key:i,data:itemData,menu:this.props.menu};
                if(this.props.menu.selectedOpenKeyArray.indexOf(itemData.key)>=0){
                    p.open = true;
                }
                children.push(<MenuSection onItemClick={this.props.onItemClick} {...p}/>);
            }else{
                children.push(<MenuSectionItem menu={this.props.menu} onItemClick={this.props.onItemClick} level={this.props.level+1} key={i} data={itemData}/>);
            }
        }
        return (<div className="xz-menu-group">
            <MenuSectionHeader open={this.state.open} onClick={this.headerClick.bind(this)} level={this.props.level} data={this.state.data}/>
            <div className="xz-menu-section" ref={this.outerLoad.bind(this)} style={outerStyle}>
              <div ref={this.innerLoad.bind(this)}>
                {children}
              </div>
            </div>
        </div>);
    }
}

@observer
class MenuSectionItem extends React.Component{
    constructor(props){
        super(props); 
       
    }
    itemClick(){
        this.props.onItemClick({
            itemData:this.props.data,
            itemInstance:this
        });
    }
    render(){
        var paddingLeft = 0;
        if(this.props.level>0){
            paddingLeft = (this.props.level)*20;
        }
        const className= ['xz-menu-item'];
        let icon = null;
        if(this.props.data.icon){
            icon = <i className={`${this.props.data.icon} xz-menu-icon`}/>
        }
        const isSelected = this.props.menu.state.selectedKey===this.props.data.key;
        if(isSelected){
            className.push('xz-menu-item-selected');
        }
        return (<div ref={(root)=>{this.root = root;
            if(root&&isSelected){
                this.root.scrollIntoViewIfNeeded();
            }
        }} onClick={this.itemClick.bind(this)} className={className.join(' ')} style={{paddingLeft:paddingLeft}}>
            {icon}
            {this.props.data.label}
        </div>);
    }
}

@observer
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
        var className = ["xz-menu-group-header"];
        if(this.props.open){
            className.push("xz-menu-group-header-open");
        }else{
            className.push("xz-menu-group-header-close");
        }
        let icon = null;
        if(this.state.data.icon){
            icon = <i className={`${this.state.data.icon} xz-menu-icon`}/>
        }
        return <div className={className.join(' ')} onClick={this.click.bind(this)} style={{paddingLeft:(this.props.level)*20}}>
            {icon}
            {this.state.data.label}
            <i className='xz-menu-submenu-arrow'></i>
        </div>;
    }
}

export default Menu;
