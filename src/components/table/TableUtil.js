export default class TableUtil {
    // 获取表头层次深度也就是表头行数 
    static _getLevel = (columns,_level) => {
        let curLevel = 1;
        if(_level){
            curLevel = _level;
        }
        const levelRe = [];
        for(let i = 0,j=columns.length;i<j;i+=1){
            const colItem = columns[i];
            colItem.__level = curLevel;
            colItem.__colspan = TableUtil._getRootCellCountOfColumn(colItem);
            if(colItem.children){
                levelRe[i] = TableUtil._getLevel(colItem.children,curLevel+1);
            }else{
                levelRe[i] = curLevel;
            }
        }
        return TableUtil._maxOfArr(levelRe);
    }

    static _setRowSpan = (columns,level) => {
        for(let i = 0,j=columns.length;i<j;i+=1){
            const colItem = columns[i];
            if(colItem.children){
                colItem.__rowspan = 1;
                TableUtil._setRowSpan(colItem.children,level-1);
            }else{
                colItem.__rowspan = level;
            }
        }
    }
    
    static _maxOfArr = (arr) => {
        let re = 0;
        for(let i = 0,j=arr.length;i<j;i+=1){
            if(re<arr[i]){
                re = arr[i];
            }
        }
        return re;
    }
    // 获取到根Cell的个数
    static _getRootCellCountOfColumn = (column)=>{
        let re = 0;
        const children = column.children;
        if(!children){
            return 1;
        }
        for(let i = 0,j=children.length;i<j;i+=1){
            const colItem = children[i];
            if(colItem.children){
                re += TableUtil._getRootCellCountOfColumn(colItem);
            }else{
                re += 1;
            }
        }
        return re;
    }

    static _getRootCellArr = (columns,outArr,parentGroupIndex) => {
        for(let i=0,j=columns.length;i<j;i+=1){
            const colItem = columns[i];
            const p = (!parentGroupIndex&&parentGroupIndex!==0)?i:parentGroupIndex;
            if(colItem.children){
                TableUtil._getRootCellArr(colItem.children,outArr,p);
            }else{
                colItem.__isRootCell = true;
                colItem.__groupIndex = p;
                outArr.push(colItem);
            }
        }
    }
}