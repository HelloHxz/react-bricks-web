import {observer} from 'mobx-react'
import React from 'react'

var PageView = (store) =>(WrappedComponent)=> {
	class Wrapper extends React.Component {
      static __role = "pageview"
      onPageResume(){

      }
      hidePopPage(pagekey){
         this.poproot.hide(pagekey);
      }

      onPageBeforeLeave(params){
         if(this.pageInstance.onPageBeforeLeave){
            return this.pageInstance.onPageBeforeLeave(params);
         }
         return true;
      }

      componentDidMount() {
      }

      render() {
         if(this.props.navigation&&this.props.navigation.appConfig&&this.props.navigation.appConfig.onPageRender){
            console.log(this.props)
            const re = this.props.navigation.appConfig.onPageRender({
                  pageKey:this.props.pagename
            });
            console.log(re);
         }
         return (<WrappedComponent {...store} ref={(pageInstance)=>{this.pageInstance = pageInstance;}} {...this.props} />);
      }
   }
   return Wrapper;
}

export default PageView;