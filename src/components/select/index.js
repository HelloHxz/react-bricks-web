import React from 'react';
import PopView from '../popview';
import Theme from '../theme';
import Icon from '../icon';
import './index.less';
import FormItemWrapper from '../formComponentWrapper';


class SelectItem extends React.Component {
    onClick(){
        this.props.select.root.preventHide();
        this.props.select.onChange({
            instance:this,
            data:this.props.data
        });
        this.props.select.root.hide();
    }
    render(){
        const {data,level} = this.props;
        const classArr = [`xz-select-item xz-select-item-${level} xz-select-item-size-default`];
        if(this.props.select.state.selectedData.value === data.value){
            classArr.push('xz-select-item-selected');
        }
        //
        return (<div onClick={this.onClick.bind(this)} className={classArr.join(' ')}>
         {data.label}
       </div>);
    }
}

class OverLayer extends React.Component{

    createOptions(optionsArr,data,level){
        for(let i = 0,j=data.length;i<j;i+=1){
            const itemData =data[i];
            if(!itemData.group){
                optionsArr.push(<SelectItem level={level} select={this.props.select} key={itemData.value} data={itemData}/>);
            }else{
                this.hasGroup = true;
                optionsArr.push(<div className='xz-select-groupheader' key={'optionheader_'+i}>{itemData.label}</div>);
                this.createOptions(optionsArr,itemData.group||[],level+1);
            }
        }
    }
    render(){
        const className = `xz-select-dropdown ${this.props.dropdownClassName||''}`;
        const dropDownStyle = {
            ...{ width:'100%',maxHeight:250 },
            ...(this.props.dropdownStyle||{}),
        };
        let children = [];
        this.hasGroup = false;
        if(!this.props.data || this.props.data.length === 0){
            children = <React.Fragment>
                {this.props.nodata?this.props.nodata:(<div className='xz-select-nodata'>无数据</div>) }
            </React.Fragment>;
        }else {
            this.createOptions(children,this.props.data,1);
        }
        return (
            <div className={className} style={dropDownStyle}>
                {children}
            </div>
        );
    }
}

// tabindex 才能是div获取onKeyDown事件
/*
 data={[
         {label:'xx4',value:'xxxxx3'},
         {label:'xxx5',group:[
           {label:'xxx6',value:'xxxx4'}
         ]}
       ]}
*/
export default class Select extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selectedData:this._getSelectedDataByValue(props.value,props.data),
            show:false
        };
    }
    renderPopView(){
        return <OverLayer select={this} {...this.props}/>;
    }
    componentWillReceiveProps(nextProps){
        const selectedData = this._getSelectedDataByValue(nextProps.value,nextProps.data,true);
        this.setState({
            selectedData:selectedData,
        });
    }
    _findLabelByValue(data,value){
        var re = null;
        for(let i = 0,j=data.length;i<j;i+=1){
            const item = data[i];
            if(item.group){
                re = this._findLabelByValue(item.group,value);
                if(re){
                    break;
                }
            }else{
                if(item.value===value){
                    re = item.label;
                    break;
                }
            }
        }
        return re;
    }
    _getLabelByValue(value){
        if(!value&&value!==0){
            return null;
        }
       return this._findLabelByValue(this.props.data,value);
    }
    _getSelectedDataByValue(value,data,fromReceiveProps){
        const label = this._getLabelByValue(value);
        if(this.props.exact === true){
            // 如果是精准模式的话 不存在的就移除
        }
        const curValue = label===null?null:value;
        return {label,value:curValue};
    }
    onChange(params){
        if(this.props.onChange){
            if(this.state.selectedData.value === params.data.value){
                return;
            }
            this.props.onChange(params.data.value,{
                instance:this,
                record:params.data
            });
        }
    }
    onShow(){
        this.setState({
            show:true
        })
    }
    onHide(){
        this.setState({
            show:false
        })
    }
    render(){
        let style = {};
        if(this.props.style){
            style = {
                style:this.props.style
            };
        }
        const { selectedData } = this.state;
      
        return <FormItemWrapper {...this.props}>
            <PopView 
                    {...this.props}
                    mode='click' 
                    placement='bottomright'
                    popWrapperClassName='xz-select-warpper'
                    positionMode={this.props.positionMode||'absolute'}
                    ref={(instance)=>{this.root = instance;}}
                    hideMode={this.props.hideMode||'blur'}
                    onShow = {this.onShow.bind(this)}
                    onHide = {this.onHide.bind(this)}
                    showDelay={this.props.showDelay||50}
                    hideDelay={this.props.hideDelay||50}
                    offset = {{y: 2}}
                    initOverLayerWidth={true}
                    renderContent={this.renderPopView.bind(this)}
                >
                    <div {...style} className={`xz-select ${this.state.show?'xz-select-open':''} xz-select-size-${Theme.getConfig('size',this.props)} ${this.props.className||''}`}>
                        {selectedData.value?<span className='xz-select-value'>{selectedData.label}</span>:
                            (<span className='placeholder'>{this.props.placeholder}</span>)}
                         <Icon className={`xz-select-arrow xz-select-arrow-${this.state.show?'down':'up'}`} type={'up'}/>
                    </div>
                </PopView>
        </FormItemWrapper>
    }
}