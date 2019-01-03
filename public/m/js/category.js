$(function () {
    /* 如果两个初始化一样可以只写一个 */
    mui('.mui-scroll-wrapper').scroll({
        indicators: false, //是否显示滚动条
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });   
    $.ajax({
        url:"/category/queryTopCategory",
        success: function (data){
            // console.log(data);
            var html = template("tpl-left",data);
            console.log(html);
            $('.content-left ul').html(html)
        }
    })
    $.ajax({
        url:"/category/querySecondCategory",
        success: function (data){
            console.log(data);
            var html = template("tpl-right",data);
            console.log(html);
            $('.mui-row').html(html)
        }
    })
})