import  React from 'react';
import PopMenu from '../popmenu';
import ToolTip from '../tooltip';
import XZ from '../xz';
import './index.less';
import observer from '../observer';

@observer
class Menu extends React.Component{
    constructor(props){
        super(props);
        this.itemOffsetLeft = props.itemOffsetLeft||24;
        this.minMenuTitleMode = props.minMenuTitleMode || 'bottom';
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
            const isSelected =  itemData.key===this.state.selectedKey ||this.selectedOpenKeyArray.indexOf(itemData.key)>=0;
            let clickEvent = {};
            if(!itemData.children){
                clickEvent = {
                    onClick:this.onItemClick.bind(this,{
                            itemData,
                            itemInstance:this
                    })
                };
            }
            let iconWrapper = (
                <div {...clickEvent} className={`xz-menu-root-item ${isSelected?'xz-menu-item-selected':''}`} key={i}>
                    <i className={`${itemData.icon} xz-root-item-icon`}/>
                </div>
            );
            if(this.minMenuTitleMode==='bottom'){
                iconWrapper = (
                    <div {...clickEvent} className={`xz-menu-root-labelitem ${isSelected?'xz-menu-item-selected':''}`} key={i}>
                        <div><i className={`${itemData.icon} xz-root-item-icon`}/></div>
                        <div className='xz-root-item-label'>{itemData.label}</div>
                    </div>
                );
            }
            if(itemData.children){
                children.push(<PopMenu level={0} key={i} data={itemData.children}>
                    {iconWrapper}
                </PopMenu>);
            }else{
                if(this.minMenuTitleMode!=='bottom'){
                    children.push(<ToolTip key={i} title={itemData.label} placement='right'>{iconWrapper}</ToolTip>);
                }else{
                    children.push(iconWrapper);
                }
            }
        }
        return children; 
    }
    _getVerticalItems = (data)=>{
        var children = [];
        const p={level:0,data:{children:data},menu:this};
        return <MenuSection noheader={true} {...p} onItemClick={this.onItemClick.bind(this)} />; 
    }
    _processData(data,parentKey){
        for(let i=0,j=data.length;i<j;i+=1){
            const itemData = data[i];
            if(itemData.children){
                const clone = JSON.parse(JSON.stringify(parentKey));
                clone.push(itemData.key);
                this._processData(itemData.children,clone);
            }else if(itemData.group){
                this._processData(itemData.group,parentKey);
            }else{
                
            }
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
            p.className = 'xz-menu xz-menu-mini';
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
                    if(this.groupouter){
                        this.groupouter.style.height = "auto"
                    }
                },210);
            }
        }
    }
    innerLoad(groupinner){
        this.groupinner = groupinner;
    }
    render(){
        var children = [];
        for(var i=0,j=this.props.data.children.length;i<j;i++){
            var itemData = this.props.data.children[i];
            if(itemData.children){
                const p={level:this.props.level+1,key:i,data:itemData,menu:this.props.menu};
                if(this.props.menu.selectedOpenKeyArray.indexOf(itemData.key)>=0){
                    p.open = true;
                }
                children.push(<MenuSection onItemClick={this.props.onItemClick} {...p}/>);
            } else if(itemData.group){
                const p={level:this.props.level,key:i,data:{children:itemData.group},menu:this.props.menu,noheader:true};
                children.push(<div className='xz-menu-group-title' key={(itemData.key||i)+'_header'} style={{paddingLeft:(this.props.level*this.props.menu.itemOffsetLeft)+10}}>{itemData.label}</div>);
                children.push(<MenuSection onItemClick={this.props.onItemClick} {...p}/>);
            }else{
                children.push(<MenuSectionItem menu={this.props.menu} onItemClick={this.props.onItemClick} level={this.props.level+1} key={i} data={itemData}/>);
            }
        }
        if(this.props.noheader){
            return <React.Fragment>{children}</React.Fragment>
        }
        var outerStyle ={};
        if(this.state.open){
            if(this.groupinner){
                outerStyle.height = this.groupinner.offsetHeight;
            }
        }else{
            outerStyle.height = 0;
        }
        return (<div className="xz-menu-section">
            <MenuSectionHeader menu={this.props.menu} open={this.state.open} onClick={this.headerClick.bind(this)} level={this.props.level} data={this.props.data}/>
            <div className="xz-menu-section-items-wrapper" ref={this.outerLoad.bind(this)} style={outerStyle}>
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
            paddingLeft = (this.props.level)*(this.props.menu.itemOffsetLeft);
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
                if(!this.root.scrollIntoViewIfNeeded){
                    this.root.scrollIntoView();
                }else{
                    this.root.scrollIntoViewIfNeeded();
                }
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
        
    }
    click(){
        this.props.onClick();
    }
    render(){
        var className = ["xz-menu-section-header",this.props.open?"xz-menu-section-header-open":"xz-menu-section-header-close"];
        let icon = null;
        if(this.props.data.icon){
            icon = <i className={`${this.props.data.icon} xz-menu-icon`}/>
        }
        return <div className={className.join(' ')} onClick={this.click.bind(this)} style={{paddingLeft:(this.props.level)*(this.props.menu.itemOffsetLeft)}}>
            {icon}
            {this.props.data.label}
            <i className='xz-menu-submenu-arrow'></i>
        </div>;
    }
}

export default Menu;
