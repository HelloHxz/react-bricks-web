import React from 'react';
import myMarked from 'marked';
import 'prismjs/themes/prism.css';
import Prism from 'prismjs';
export default class MD extends React.Component{
    constructor(props){
        super(props);
    }
    getHtml(){
        const language =  this.props.language||'javascript';
        myMarked.setOptions({
            renderer: new myMarked.Renderer(),
            highlight: function(code) {
                return Prism.highlight(code,language==='less'? Prism.languages.css : Prism.languages.javascript,language);
            },
            pedantic: false,
            gfm: true,
            tables: true,
            breaks: false,
            sanitize: false,
            smartLists: true,
            smartypants: false,
            xhtml: false
        });
        return myMarked(this.props.source);
    }
    render(){
        return (
        <div className='xz-doc-md' dangerouslySetInnerHTML={{__html:this.getHtml()}} />);
    }
}