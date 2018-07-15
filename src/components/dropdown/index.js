import  React from 'react';
import PopView from '../popview';
import './index.less';

class DropDown extends React.Component {
    onShow(){

    }
    onHide(){
        
    }

    _createChildren(data,children,context){
        for(let i = 0,j=data.length;i<j;i+=1){
            const item = data[i];
            if(item.children && item.children.length>0){
                children.push(<DropDown {...this.props} dropdown={this.props.drowndown||this} placement='rightbottom' parentPopview={this.root} key={item.key||i} data={item.children}>
                    <div className='xz-dropdown-header'>{item.label}<i key='icon' className={`xz-dropdown-right xz-icon xz-icon-right`}/></div>
                </DropDown>);
            }else if(item.group){
                this._createChildren(item.group,children,context);
            }else{
                children.push(<DropDownItem {...this.props} dropdown={this.props.drowndown||this} context={context} key={item.key||i} data={item} />);
            }
        }
    }

    renderPopView(context){
        const data = this.props.data || [];
        const children = [];
        this._createChildren(data,children,context);
        return <div className='xz-dropdown-section'>{children}</div>
    }
    render(){
        return (
            <PopView 
                mode={this.props.mode||'hover'}
                positionMode={this.props.positionMode||'absolute'}
                popLayerClassName='xz-dropdown-poplayer'
                parentPopview={this.props.parentPopview}
                ref={(instance)=>{this.root = instance;}}
                placement={this.props.placement||'bottomright'}
                onShow = {this.onShow.bind(this)}
                onHide = {this.onHide.bind(this)}
                offset = {{x: 1}}
                renderContent={this.renderPopView.bind(this)}
            >
                {this.props.children}
            </PopView>);
    }
}

class DropDownItem extends React.Component{
    onItemClick(){
        let re = true;
        if(this.props.dropdown.props.onItemClick){
            re = this.props.dropdown.props.onItemClick(this.props.data,{
                context:this.props.context
            });
        }
        if(re!==false){
            this.props.context.instance.hide(60);
        }
    }
    render(){
        let icon = null;
        const { data } = this.props;
        const className=["xz-dropdown-item"];
        if(data.icon){
            icon = <i className={`${data.icon} xz-dropdown-icon`}/>
        }
        return <div onClick={this.onItemClick.bind(this)} className={className.join(' ')}>{icon}{data.label}</div>
    }
}
export default DropDown;
