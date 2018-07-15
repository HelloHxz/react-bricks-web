import  React from 'react';
import PopView from '../../popview';
import './index.less';

class PopMenu extends React.Component {
    onShow(){

    }
    onHide(){
        
    }

    _createChildren(data,children,context){
        for(let i = 0,j=data.length;i<j;i+=1){
            const item = data[i];
            if(item.children && item.children.length>0){
                children.push(<PopMenu {...this.props} parentPopview={this.root} key={item.key||i} data={item.children}>
                    <div className='xz-popmenu-header'>{item.label} <i key='icon' className={`xz-popmenu-right xz-icon xz-icon-right`}/></div>
                </PopMenu>);
            }else if(item.group){
                this._createChildren(item.group,children,context);
            }else{
                children.push(<MenuItem context={context} {...this.props} key={item.key||i} data={item} />);
            }
        }
    }

    renderPopView(context){
        const data = this.props.data || [];
        const children = [];
        this._createChildren(data,children,context);
        return <div className='xz-popmenu-section'>{children}</div>
    }
    render(){
        return (
            <PopView 
                mode={this.props.mode||'hover'}
                positionMode='absolute'
                popLayerClassName='xz-popmenu-poplayer'
                parentPopview={this.props.parentPopview}
                ref={(instance)=>{this.root = instance;}}
                placement={this.props.placement||'rightbottom'}
                onShow = {this.onShow.bind(this)}
                onHide = {this.onHide.bind(this)}
                offset = {{x: 2}}
                renderContent={this.renderPopView.bind(this)}
            >
                {this.props.children}
            </PopView>);
    }
}

class MenuItem extends React.Component{
    onItemClick(){
        this.props.menu.onItemClick({
            itemData:this.props.data,
            instance:this
        });
        this.props.context.instance.hide(80);
    }
    render(){
        let icon = null;
        const { data } = this.props;
        const className=["xz-popmenu-item"];
        if(data.icon){
            icon = <i className={`${data.icon} xz-popmenu-icon`}/>
        }
        if(this.props.menu.popItemIsSelected(data.key)){
            className.push('xz-popmenu-item-selected');
        }
        return <div onClick={this.onItemClick.bind(this)} className={className.join(' ')}>{icon}{data.label}</div>
    }
}
export default PopMenu;
