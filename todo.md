### 1.dockpanel

> 看是否集成到vbox和hbox

### 2.Vbox & Hbox

 > 1. 增加resize

### 4.Table

> cell render

> SelectedRows

> 集成pagination

### 5. Pagination

### 6.Form

> initValue resetForm 

#### Form/Select

#### From/MuilSelect

#### From/InputSelect

#### From/Input(text/number/float)

#### From/CheckBox


#### From/CheckGroup

> 增加label的onRender 可以渲染一个组件进去 以支持更多可输入的功能

> CheckGroup 支持customRenderCheckedItem  & customRenderUnCheckedItem

#### From/RadioBox

> RadioGroup 支持customRenderCheckedItem  & customRenderUnCheckedItem

#### From/DatePicker

#### From/DataRange

#### From/TimePicker

#### From/DateTimePicker

#### Form/Cascader 级联选择

#### Form/Validator

#### Form/自定义组价 比如结合弹出框 结合popview


### 7.Tabs

> 结合URL

> 个性化indicator

### 8.Menu

> 互斥关闭

### 9.Tree


### 10.Icon

```
    <Icon type='' text='xx' textPlacement='bottom'></Icon>
    <Icon type='' text={()=>{}} textPlacement='bottom'></Icon>

```

### 11.Image

> 按需加载

> 加载错误处理


### 12 popview

> Header Footer

### ScrollView

> pushLoadMore

> lazyLoadImage

> stickyView

```

<ScrollView
    renderContent={(props)=>{
        return <div>
            <StickView {...props}></StickView>
            asdad
            sadasd
        </div>
    }}
>
</ScrollView>

```

> stickyview


### 12 Spin

```
    <Spin />

    <Spin text='xx' textPlacement='' />

    <Spin
        loading={}
        error={}
        text={()=>{}}
        errorContent={()=>{}}
    >
        <Table/>
    </Spin>

```

### axio


### 完善路由

> 阻止离开

> 参数 修改参数

### Group 组件

> 可以组合Button,Input,等各种Form组件 


### dropdown 组件

https://demos.devexpress.com/rwa/devav/Employees.aspx

https://material-ui.com/customization/themes/

https://demos.devexpress.com/MVCxNavigationAndLayoutDemos/Ribbon/Templates



20186030  

需完成 Menu 以及 和URL集合 selectedKey,展开互斥，Memu ICON，完善HBox，VBox  完善router 





