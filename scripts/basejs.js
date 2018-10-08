
/**
 * Js中去除数组中重复元素的4种方法
 * @returns {Array}
 */
Array.prototype.repeat = function(){
    var arr=[];    //定义一个临时数组
    for(var i = 0; i < this.length; i++){    //循环遍历当前数组
        //判断当前数组下标为i的元素是否已经保存到临时数组
        //如果已保存，则跳过，否则将此元素保存到临时数组中
        if(arr.indexOf(this[i]) == -1){
            arr.push(this[i]);
        }
    }
    return arr;
};


Array.prototype.repeat2 = function(){
    var h={};    //定义一个临时字典
    var arr=[];  //定义一个临时数组

    for(var i = 0; i < this.length; i++){
        //循环遍历当前数组
        //对元素进行判断，看是否已经存在表中，如果存在则跳过，否则存入临时数组
        if(!h[this[i]]){
            //存入hash表
            h[this[i]] = true;
            //把当前数组元素存入到临时数组中
            arr.push(this[i]);
        }
    }
    return arr;
};


Array.prototype.repeat3 = function(){
    //直接定义结果数组
    var arr=[] ;
    for(var i = 1; i < this.length; i++){
        //从数组第二项开始循环遍历此数组
        //对元素进行判断：
        //如果数组当前元素在此数组中第一次出现的位置不是i
        //那么我们可以判断第i项元素是重复的，否则直接存入结果数组
        if(this.indexOf(this[i]) == i){
            arr.push(this[i]);
        }
    }
    return arr;

};



Array.prototype.repeat4 = function(){
    //将数组进行排序
    this.sort();
    //定义结果数组
    var arr=[];
    for(var i = 1; i < this.length; i++){
        //从数组第二项开始循环遍历数组
        //判断相邻两个元素是否相等，如果相等说明数据重复，否则将元素写入结果数组
        if(this[i] !== arr[arr.length - 1]){
            arr.push(this[i]);
        }
    }
    return arr;

};

a=[1,2,2,'张三',4,4,4,5,6,6,6,7,7,8,9,7,5];
console.log(a[3]);
console.log(a.indexOf('张三'));
console.log(a.repeat4());

