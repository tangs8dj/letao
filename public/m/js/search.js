$(function (){
    $('.btn-search').on('tap',function (){
        
        // 去掉空格
        var val = $('.search-input').val().trim();
        console.log(val);
        // 判断用户输入是否为空
        if(val == ''){
            mui.toast('请输入搜索内容',{ duration:'long', type:'div' })
            return;
        }
        //判断历史数据中有没有,有就删除,重新添加
        var arr = [];
        // if(!localStorage.getItem('historyData1')){
        //     arr.push(val)
        //     arr = JSON.stringify(arr);
        //     console.log(arr);
            
        //     localStorage.setItem('historyData1',arr);
        //     searchLocalStorageHistory()
        //     return
        // }
            //获取数据
        
        arr = localStorage.getItem('historyData1');
        console.log(arr);
        
        arr = JSON.parse(arr)  || [];
            //判断
        
        if(arr.indexOf(val) != -1) arr.splice(arr.indexOf(val),1);
        //添加到数组
        arr.unshift(val);
        
        //添加到本地storage
        arr = JSON.stringify(arr);
        localStorage.setItem('historyData1',arr);
        
        //清空输入框
        $('.search-input').val('');

        searchLocalStorageHistory()

        location='product.html?'+'key='+val;

    })

    $('.mui-table-view').on('tap','i',function (){
        var index= this.dataset['index'];
        var arr = JSON.parse(localStorage.getItem('historyData1'));
        arr.splice(index,1);

        //添加到本地storage
        arr = JSON.stringify(arr);
        localStorage.setItem('historyData1',arr);
        searchLocalStorageHistory()
        
    })

    $('.clear').on('tap',function (){
        localStorage.clear('historyData1');
        searchLocalStorageHistory()
    })



    searchLocalStorageHistory()
    //获取历史数据
    function searchLocalStorageHistory(){
        var value = localStorage.getItem('historyData1');
        if (value == '') {
            return;
        }
        value = JSON.parse(value) || [];
        var html = template('tpl-History',{list:value})
        $('.mui-table-view').html(html);
    }
})