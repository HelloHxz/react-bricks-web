
    import ThemeWrapper from './themeWrapper';
    export default {
       "b":ThemeWrapper(()=>import(/* webpackChunkName: "b-theme" */ "./custom/b.less")),"index":ThemeWrapper(()=>import(/* webpackChunkName: "index-theme" */ "./custom/index.less")),"theme-2":ThemeWrapper(()=>import(/* webpackChunkName: "theme-2-theme" */ "./custom/theme-2.less"))
    }