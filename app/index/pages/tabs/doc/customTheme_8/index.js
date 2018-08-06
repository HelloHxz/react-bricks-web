import React from 'react';
import { Tabs } from 'bricks-web';
import './index.less';

export default class Example extends React.Component{
    renderItem = (key)=>{
        return <div>{key}</div>
    }
    render(){
        return <div>
            <Tabs 
                renderItem={this.renderItem.bind(this)} 
                tabClassName='custome-tab' 
                type='card' 
                size='lg' 
                defaultSelectedKey='home' 
                data={[
                {label:"首页",key:'home',allowClose:true},
                {label:"邮箱",key:'email',allowClose:true},
                {label:"动态",key:'info',allowClose:true},
            ]} />
           <br/>
           <Tabs 
            tabClassName='custome-tab1' 
            renderItem={this.renderItem.bind(this)} 
            type='card' 
            defaultSelectedKey='home' 
            data={[
               {label:"首页",key:'home',allowClose:true},
               {label:"邮箱",key:'email',allowClose:true},
              {label:"动态",key:'info',allowClose:true},
          ]} />
         <br/>
         <br/>
          <Tabs tabClassName='custome-tab2' 
            renderItem={this.renderItem.bind(this)} 
            indicator={null} size='sm' 
            defaultSelectedKey='home' 
            data={[
                {label:"首页",key:'home',allowClose:true},
                {label:"邮箱",key:'email',allowClose:true},
                {label:"动态",key:'info',allowClose:true},
            ]} />
            <br/>
        <br/>
          <Tabs 
            tabStyle={{borderBottom:'2px solid #1890ff'}}
            tabClassName='custome-tab3' 
            indicator={null} 
            defaultSelectedKey='home'
            data={[
              {label:"首页",key:'home',allowClose:true},
              {label:"邮箱",key:'email',allowClose:true},
              {label:"动态",key:'info',allowClose:true},
          ]} />
        <br/>
        <br/>
          <Tabs tabClassName='custome-tab4'
            renderItem={this.renderItem.bind(this)} 
            indicator={null} size='sm' defaultSelectedKey='home'
            data={[
               {label:"首页",key:'home',allowClose:true},
               {label:"邮箱",key:'email',allowClose:true},
               {label:"动态",key:'info',allowClose:true},
          ]} />
        <br/>
        </div>;
    }
}