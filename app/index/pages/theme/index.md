
# Theme 样式

提供运行时自定义样式切换

## 第一步

## 第二步

```css

// 系统的默认变量
@import '../../../src/components/theme/index.less';
// 很重要 定义当前样式的名称
@theme-namespace:a_theme;

// 在这里定义覆盖系统的组件变量 以及一些覆盖样式


// 所有组件的样式
@import '../../../src/components/theme/all.less';


```

## 第三步

使用import()引入样式并且切换主题名称


```javascript
```