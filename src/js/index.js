(function(){
    var provinceNode = document.getElementById('province'),
        cityNode = document.getElementById('city'),
        schoolNode = document.getElementById('school');

        //把省会建立出来
    var provinceStr = '';   
    for(var i = 0; i < province.length; i++ ){
        provinceStr += '<option value = ' + province[i][0] + '>'+ province[i][1] +'</option>'
    }
    provinceNode.innerHTML = provinceStr;

    //把城市创建出来
    // console.log(provinceNode.value);
    var cityArr = city[provinceNode.value];
    var cityStr = '';
    for(var i = 0;i < cityArr.length; i ++ ){
        cityStr += '<option value = ' + cityArr[i][0] + '>' + cityArr[i][1] + '</option>'
    }
    cityNode.innerHTML = cityStr;

    //把学校创建出来
    var schoolArr = allschool[cityNode.value];
    var schoolStr = '';
    for(var i = 0;i < schoolArr.length; i ++ ){
        schoolStr += '<option value = 999 >' + schoolArr[i][2] + '</option>'
    }
    schoolNode.innerHTML = schoolStr;



 


})()