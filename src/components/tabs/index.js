import React from 'react';
import Theme from '../theme';
import './index.less';
import observer from '../observer';
import Animate from '../animate';

//https://github.com/mobxjs/mobx/issues/101
/*
    type: card|primary|default
*/

@observer
class ConatinerItem extends React.Component {
    constructor(props){
        super(props);
    }
    componentWillReceiveProps(){
    }
    render(){
        return <React.Fragment>{this.props.renderItem(this.props.pkey)}</React.Fragment>
    }
}

const getSelectedKey = (selectedKey,data) => {
    return selectedKey;
}

@observer
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
        this.dict[selectedKey] = true;
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
      var className = ["xz-tabs-container-default"];
      if(this.props.className){
        className.push(this.props.className);
      }else{
        className.push("xz-tabs-container");
      }
      if(this.props.cache===true){
        for(var key in this.dict){
          if(key===this.state.selectedKey){
            re.push(<div key={key+"_containerwrapper"}><ConatinerItem pkey={key} {...this.props} container={this}/></div>);
          }else{
            re.push(<div key={key+"_containerwrapper"} style={{display:"none"}}><ConatinerItem pkey={key} {...this.props} container={this}/></div>);
          }
        }
      }else{
        re = <ConatinerItem pkey={this.state.selectedKey} {...this.props} container={this}/>;
      }
      return (<div className={className.join(" ")}>{re}</div>);
    }
  }

@observer
export default class Tabs extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            indicatorStyle:{},
            selectedKey: getSelectedKey(props.selectedKey||props.defaultSelectedKey,props.data)
        };
        this.itemsDict = {};
        this.renderIndicatorTimeout = null;
    }
    componentWillUnmount(){
        this._clearTimeout();
    }

    _clearTimeout(){
        if(this.renderIndicatorTimeout){
            window.clearTimeout(this.renderIndicatorTimeout);
            this.renderIndicatorTimeout = null;
        }
    }
    checkOverflow(){
        if(!this.pre||!this.next){return;}
        let configKeys;
        if(this.isVertical()){
            configKeys = {
                rangeKey:'scrollHeight',
                sizeKey:'offsetHeight',
                display:'block'
            };
        }else{
            configKeys = {
                rangeKey:'scrollWidth',
                sizeKey:'offsetWidth',
                display:'table-cell'
            };
        }
        if(this.scroll[configKeys.rangeKey]>this.scroll[configKeys.sizeKey]){
            this.pre.style["display"]=configKeys.display;
            this.next.style["display"]=configKeys.display;
            this.pre.style["visibility"]='visible';
            this.next.style["visibility"]='visible';
        }else{
            this.pre.style["display"]='none';
            this.pre.style["display"]='none';
        }
    }

    onScroll(){
        
    }
    componentDidMount(){
        // this.pre.parentNode.removeChild(this.pre);
        this.checkOverflow();
    }
    componentDidUpdate(){
      
    }
    componentWillReceiveProps(nextProps){
        var curKey = getSelectedKey(nextProps.selectedKey||nextProps.defaultSelectedKey,nextProps.data)
        if(curKey!==this.state.selectedKey){
            this.setState({
                selectedKey: curKey
            },()=>{
                this._renderIndicator();
            });
        }
    }
    registerTab(key,Instance){
        this.itemsDict[key] = Instance;
    }

    unRegisterTab(key){
        delete this.itemsDict[key];
    }

    renderIndicator(){
        if(!this.isRenderIndicator()){
            return;
        }
        this._clearTimeout();
        this.renderIndicatorTimeout = window.setTimeout(()=>{
            this._renderIndicator();
        },80);
    }
    _getIndicatorStyle(selectedKey){
        if(!this.isRenderIndicator()){
            return null; 
        }
        const curTabInstance = this.itemsDict[selectedKey];
        if(!curTabInstance){
            return null; 
        }
        const dom = curTabInstance.root;
        const rect = dom.getBoundingClientRect();
        let indicatorStyle = {};
        if(this.isVertical()){
            indicatorStyle = {
                height:rect.height,
                width:2,
                right:0,
                top:dom.offsetTop,
            }
        }else{
            indicatorStyle = {
                width:rect.width,
                height:2,
                left:dom.offsetLeft,
                bottom:0
            }

        }
        return indicatorStyle;
    }
    _renderIndicator(){
        const indicatorStyle = this._getIndicatorStyle(this.state.selectedKey);
        if(indicatorStyle){
            this.setState({
                indicatorStyle
            });
        }
    }
    isRenderIndicator(){
        return (this.props.indicator===undefined || !!this.props.indicator ) && this.props.type !=='card';
    }
    itemClick(data,tabItem){
        if(!('selectedKey' in this.props)){
            const indicatorStyle = this._getIndicatorStyle(data.key);
            this.setState({
                selectedKey:data.key,
                indicatorStyle
            });
        }
        if(this.props.onChange){
            this.props.onChange(data,{
                tabsInstance:this,
                tabItemInstance:tabItem
            });
        }
    }
    scrollByKey(key){
        const curTabInstance = this.itemsDict[key];
        if(!curTabInstance){
            return null; 
        }
        const dom = curTabInstance.root;

    }

    isVertical(){
        const {tabPosition} = this.props;
        return tabPosition==='left'||tabPosition==='right';
    }
    autoScroll(next_or_pre){
        let configKeys;
        if(!this.isVertical()){
            configKeys={
                scrollKey:'scrollLeft',
                sizeKey:'offsetWidth',
                rangeKey:'scrollWidth'
            }
        }else{
            configKeys={
                scrollKey:'scrollTop',
                sizeKey:'offsetHeight',
                rangeKey:'scrollHeight'
            }
        }

        if(!this.animateScroll){
            var sl = this.scroll[configKeys.scrollKey];
            this.animateScroll = Animate.createInstance({
                startValue:sl,
                value:next_or_pre==='next'?this.scroll[configKeys.sizeKey]-50:50-this.scroll[configKeys.sizeKey],
                duration:400
            });
            this.animateScroll.start({
                callback:(val)=>{
                    this.scroll[configKeys.scrollKey] = val;
                    if(next_or_pre==='next'){
                        if(val>=(this.scroll[configKeys.rangeKey]-this.scroll[configKeys.sizeKey])){
                            this.animateScroll.stop();
                            this.animateScroll = null;
                        }
                    }else{
                        if(val<=0){
                            this.animateScroll.stop();
                            this.animateScroll = null;
                        }
                    }
                },
                end:()=>{
                    this.animateScroll = null;
                }
            },);
        }

    }
    nextClick(){
        this.autoScroll('next');
    }
    preClick(){
        this.autoScroll('pre');
    }
    render(){
        const tabPosition = this.props.tabPosition||'top';
        const propsStyle = this.props.style||{};
        if(this.props.renderItem){
            const wrapperStyle ={};
            const wrapperClassName = ['xz-tabs-wrapper',`xz-tabs-wrapper-size-${Theme.getConfig('size',this.props)}`,`xz-tabs-${tabPosition}`,];
            let isFixedHeight = false;
            if(!propsStyle.height||propsStyle.height==='auto'){
                wrapperClassName.push('xz-tabs-wrapper-auto-height');
                propsStyle.height = 'auto';
            }else{
                wrapperClassName.push('xz-tabs-wrapper-fixed-height');
                isFixedHeight = true;
            }
            if(!propsStyle.width||propsStyle.width==='auto'){
                wrapperClassName.push('xz-tabs-wrapper-auto-width');
                wrapperStyle.width = '100%';
            }else{
                wrapperClassName.push('xz-tabs-wrapper-fixed-width');
            }
            return <div style={{
                ...propsStyle,
                ...wrapperStyle
            }} className={wrapperClassName.join(' ')}>
                <div className='xz-tabs-wrapper-inner'>
                    {this.renderTabs({tabPosition,isFixedHeight})}
                    <div className='xz-tabs-wrapper-content'>
                        <Container 
                            cache={true} 
                            renderItem={this.props.renderItem.bind(this)} 
                            selectedKey={this.state.selectedKey||this.props.defaultSelectedKey} 
                            data={this.props.data}/>
                    </div>
                </div>
            </div>
        }
        return this.renderTabs({
            tabPosition,
        });
    }
    renderTabs(config){
        const data = this.props.data||[];
        const tabsProperty = {className:[`xz-tabs xz-tabs-${this.props.type||'default'} xz-tabs-size-${Theme.getConfig('size',this.props)}`]};
        const selectedItemClassName = this.props.selectedItemClassName || `xz-tabs-item-selected xz-tabs-item-selected-${this.props.type||'1'}`;

        const tabs = [];
        for(let i=0,j=data.length;i<j;i+=1){
            const itemdata = data[i];
            const p = {className:null};
            if(itemdata.key === this.state.selectedKey){
                p.className = selectedItemClassName;
            }
            tabs.push(<TabsItem key={itemdata.key} {...this.props}  {...p} tabs={this} data={itemdata}/>);
        }
        if(this.props.tabClassName){
            tabsProperty.className.push(this.props.tabClassName);
        }
        if(this.isVertical()){
            tabsProperty.className.push('xz-tabs-vertical');
        }else{
            tabsProperty.className.push('xz-tabs-horizontal');
        }
        if(this.props.tabStyle){
            tabsProperty.style = this.props.tabStyle;
        }
        tabsProperty.className = tabsProperty.className.join(' ');
        if(this.isVertical()){
            return (<div {...tabsProperty}>
            <div className='xz-tabs-scroll-extra-wrapper'>
                <div className='xz-tabs-scroll-wrapper'>
                    {config.isFixedHeight?(<div onClick={this.preClick.bind(this)} ref={(pre)=>{this.pre = pre;}}  className='xz-tabs-pre'>
                        <i className='xz-icon xz-icon-up'></i>
                    </div>):null}
                        <div 
                        onScroll={this.onScroll.bind(this)}
                        ref={(scroll)=>{this.scroll = scroll;
                        }} className='xz-tabs-scroll'>
                            {tabs}
                            { this.isRenderIndicator() ? <div style={this.state.indicatorStyle} className='xz-tabs-indicator' />:null }
                        </div>
                    {config.isFixedHeight?(<div onClick={this.nextClick.bind(this)} ref={(next)=>{this.next = next;}} className='xz-tabs-next'>
                        <i className='xz-icon xz-icon-down'></i> </div>):null}
                </div>
            </div>
        </div>);
        }
        return (<div {...tabsProperty}>
                <div onClick={this.preClick.bind(this)} ref={(pre)=>{this.pre = pre;}}  className='xz-tabs-cell xz-tabs-pre'>
                    <i className='xz-icon xz-icon-left'></i>
                </div>
                <div className='xz-tabs-cell xz-tabs-content'>
                        <div ref={(scroll)=>{this.scroll = scroll;
                        }} 
                        onScroll={this.onScroll.bind(this)}
                        className='xz-tabs-scroll'>
                            {tabs}
                            { this.isRenderIndicator() ? <div style={this.state.indicatorStyle} className='xz-tabs-indicator' />:null }
                        </div>
                    </div>
                <div onClick={this.nextClick.bind(this)} ref={(next)=>{this.next = next;}} className='xz-tabs-cell xz-tabs-next'>
                    <i className='xz-icon xz-icon-right'></i>
                </div>
        </div>)
    }
}

@observer
class TabsItem extends React.Component{
    itemClick(data){
        this.props.tabs.itemClick(data,this);
    }
    componentDidMount(){
        this.props.tabs.registerTab(this.props.data.key,this);
        this.props.tabs.renderIndicator();
    }
    componentWillUnmount(){
        this.props.tabs.unRegisterTab(this.props.data.key);
    }
    
    render(){
        const { data } = this.props;
        const p = {};
        const className = ['xz-tabs-item'];
        const isCard = this.props.type==='card';
        if(isCard==='card'){
            className.push("xz-tabs-item-card");
        }
        if(this.props.className){
            className.push(this.props.className);
        }
        if(data.disabled === true || data.disabled === 'disabled'){
            className.push("xz-tabs-item-disabled");
        }else{
            p.onClick = this.itemClick.bind(this,data);
        }

        p.className = className.join(' ');
        return (<div {...p} ref={(root)=>{ this.root = root; }}>
            <span className='xz-tabs-label'>{data.label||''}</span>
        </div>)
    }
}

Tabs.Container = Container;
