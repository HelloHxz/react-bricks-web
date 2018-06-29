### 1.dockpanel

> 看是否集成到vbox和hbox

### 2.Vbox & Hbox

 > 1. 增加resize，dock，隐藏功能

### 3.TableLayout

```
    <TableLayout>
        <TableLayout.Cell>
        </TableLayout.Cell>
        <TableLayout.Cell style={{width:60}}>
        </TableLayout.Cell>
        <TableLayout.Cell style={{width:60}}>
        </TableLayout.Cell>
    </TableLayout>
```

### Row Gutter

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

#### From/RadioBox

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

> selectedKeys

### 9.Tree


### 10.Icon

```
    <Icon type='' text='xx' textPlacement='bottom'></Icon>
    <Icon type='' text={()=>{}} textPlacement='bottom'></Icon>


    .fa-spin {
    animation: a 2s infinite linear
}

.fa-pulse {
    animation: a 1s infinite steps(8)
}

@keyframes a {
    0% {
        transform: rotate(0deg)
    }

    to {
        transform: rotate(1turn)
    }
}
```

### 11.Image

> 按需加载

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

### 完善路由

> 阻止离开

> 参数 修改参数



20186030  

需完成 Menu 以及 和URL集合 selectedKey,展开互斥，Memu ICON，完善HBox，VBox  完善router 





