import {observer} from 'mobx-react'
import React from 'react'

var PageView = (WrappedComponent) => {
	class Wrapper extends React.Component {
      static __role = "pageview"
      static connectStore(){
         if(!WrappedComponent.connectStore){
            return {};
         }
         return WrappedComponent.connectStore();
      }
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
         return (<WrappedComponent ref={(pageInstance)=>{this.pageInstance = pageInstance;}} {...this.props} />);
      }
   }
   return Wrapper;
}

export default PageView;