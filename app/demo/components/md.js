import React from 'react';
import myMarked from 'marked';
import 'prismjs/themes/prism.css';
import Prism from 'prismjs';

export default class MD extends React.Component{
    constructor(props){
        super(props);
        this.state={
            source:''
        };
    }
    componentDidMount(){
        myMarked.setOptions({
            renderer: new myMarked.Renderer(),
            highlight: function(code) {
                return Prism.highlight(code, Prism.languages.javascript, 'javascript');
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
  
        this.setState({
            source:myMarked(this.props.source)
        });
    }
    render(){
        return (<div className='xz-doc-md'>
        <div dangerouslySetInnerHTML={{__html:this.state.source}} /></div>);
    }
}