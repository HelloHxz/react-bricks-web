### dockpanel

### Vbox & Hbox
    ```
        <Vbox>
            <Vbox.Top allowResize></Vbox.Top>
            <Vbox.Middle></Vbox.Middle>
            <Vbox.Bottom></Vbox.Bottom>
        </Vbox>
    ```



---

    ```
        <Hbox>
            <Hbox.Left allowResize></Hbox.Left>
            <Hbox.Middle></Hbox.Middle>
            <Hbox.Right></Hbox.Right>
        </Hbox>
    ```

---
    

    ```
    <!DOCTYPE html>
    <html style="width:100%;height: 100%;margin:0;padding: 0">
    <head>
        <title></title>
    </head>
    <body style="width:100%;height: 100%;margin:0;padding: 0">
    <div style="position: relative;width:100%;height: 100%">
        <div style="width: 100px;background-color: red;height: 100%;float: left;">2</div>
        <div style="width: 100px;background-color: green;height: 100%;float: right;">3</div>
        <div style="background-color: yellow;height: 100%;position: relative;overflow: hidden;">
            <div id='ye' style="background-color: gray; height: 100%; position: relative;width: 100%; text-align: right">
                <div style="position: absolute;top:0;width:100%;height:100px;background-color: red"></div>
                <div style="position: absolute;top:100px;width:100%;bottom:100px;background-color: yellow"></div>
                <div style="position: absolute;height:100px;width:100%;bottom:0;background-color: #000"></div>
            </div>
        </div>
    </div>
    </body>
    </html>
    ```

### Table