/***
 * @this js is for city 2016/11/08
 * @authoer huangzhao
 */



(function () {
    'use strict';
    var $city =[],
        $startingList = [],
        $goCity='';

    var $groupTitle = document.getElementById('list_group_title'),
        $destlistCatalogues = document.getElementsByClassName('destlist-catalogues')[0],
        $ul = document.getElementsByClassName('list')[0],
            
        $startingList = [{

            'class': 'B',

            'id': '1',

            'city': 'bj',

            'txt': '北京'

        }, {

            'class': 'C',

            'id': '165',

            'city': 'cd',

            'txt': '成都'

        }, {

            'class': 'C',

            'id': '257',

            'city': 'cc',

            'txt': '长春'

        }, {

            'class': 'C',

            'id': '190',

            'city': 'cs',

            'txt': '长沙'

        }, {

            'class': 'C',

            'id': '68',

            'city': 'cz',

            'txt': '常州'

        }, {

            'class': 'C',

            'id': '4',

            'city': 'cq',

            'txt': '重庆'

        }, {

            'class': 'D',

            'id': '31',

            'city': 'dl',

            'txt': '大连'

        }, {

            'class': 'H',

            'id': '19',

            'city': 'hz',

            'txt': '杭州'

        }, {

            'class': 'H',

            'id': '238',

            'city': 'hf',

            'txt': '合肥'

        }, {

            'class': 'H',

            'id': '125',

            'city': 'heb',

            'txt': '哈尔滨'

        }, {

            'class': 'J',

            'id': '115',

            'city': 'jn',

            'txt': '济南'

        }, {

            'class': 'N',

            'id': '57',

            'city': 'nj',

            'txt': '南京'

        }, {

            'class': 'N',

            'id': '22',

            'city': 'nb',

            'txt': '宁波'

        }, {

            'class': 'N',

            'id': '83',

            'city': 'nc',

            'txt': '南昌'

        }, {

            'class': 'Q',

            'id': '116',

            'city': 'qd',

            'txt': '青岛'

        }, {

            'class': 'S',

            'id': '2',

            'city': 'sh',

            'txt': '上海'

        }, {

            'class': 'S',

            'id': '29',

            'city': 'sy',

            'txt': '沈阳'

        }, {

            'class': 'S',

            'id': '8',

            'city': 'sjz',

            'txt': '石家庄'

        }, {

            'class': 'S',

            'id': '60',

            'city': 'szh',

            'txt': '苏州'

        }, {

            'class': 'T',

            'id': '3',

            'city': 'tj',

            'txt': '天津'

        }, {

            'class': 'T',

            'id': '94',

            'city': 'ty',

            'txt': '太原'

        }, {

            'class': 'T',

            'id': '12',

            'city': 'ts',

            'txt': '唐山'

        }, {

            'class': 'W',

            'id': '43',

            'city': 'wh',

            'txt': '武汉'

        }, {

            'class': 'W',

            'id': '58',

            'city': 'wx',

            'txt': '无锡'

        }, {

            'class': 'X',

            'id': '135',

            'city': 'xm',

            'txt': '厦门'

        }, {

            'class': 'X',

            'id': '286',

            'city': 'xa',

            'txt': '西安'

        }, {

            'class': 'Z',

            'id': '204',

            'city': 'zz',

            'txt': '郑州'

        }];

    var $letter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    /**
     * @printHtml 渲染城市列表
     */
    function printHtml(){
        var _li = $ul.getElementsByTagName('li');

        for(var i=0,len =$letter.length;i<len;i++){
            for(var x = 0;x<$startingList.length;x++){
                //判断是否一样
                if($startingList[x].class == $letter[i]){
                    for(var j=0;j<_li.length;j++){
                        if(_li[j].dataset.flag == $startingList[x].class){
                            // _li[j].appendChild("<div class='item' data-city='" + $startingList[x].city + "' data-id='" + $startingList[x].id + "' >" + $startingList[x].txt + "</div>");
                            var _item = document.createElement('div');
                            _item.className = 'item';
                            _item.setAttribute('data-city',$startingList[x].city);
                            _item.setAttribute('data-id',$startingList[x].id);
                            _item.innerHTML = $startingList[x].txt;
                            _li[j].appendChild(_item);
                        }
                    }
                }
            }
        }

        for(var i=0,len=_li.length;i<len;i++){
            if(_li[i].getElementsByClassName('item').length < 1){
                _li[i].classList.add('zHide');
                // _li[i].parentNode.removeChild(_li[i]);
                // console.log(_li[i].parentNode,333);
            }  
        }

        var _item = document.getElementsByClassName('item');
        for(var i=0,len=_item.length;i<len;i++){
            var _txt = _item[i].innerHTML,
                _id = _item[i].dataset.id,
                _citytxt = _item[i].dataset.city;
            $city.push(_txt + '-' + _id +'-' + _citytxt);
        }
        console.log($city);
    }
    printHtml();

    //生成右侧
    function createNav(){
        $destlistCatalogues.innerHTML ='';
        var _li = $ul.getElementsByTagName('li');
        for(var i=0,len=_li.length;i<len;i++){
            if(!_li[i].classList.contains('zHide')){
                if(_li[i].getElementsByClassName('title')[0].innerHTML != ''){
                    var _b = document.createElement('b');
                    _b.setAttribute('data-page',i);
                    _b.innerHTML = _li[i].getElementsByClassName('title')[0].innerHTML;
                    $destlistCatalogues.appendChild(_b);
                }
            }

        }
    }
    createNav();

    //搜索城市
    var $destlist = document.getElementById('destlist'),
        $input = document.getElementById('inputs');

    $input.addEventListener('focus', function () {
        filter_time();
        $destlist.onscroll = function(){
            $groupTitle.classList.add('zHide');
        };
    }, false);
    var _str = '', _now = '';
    var filter_time = function () {
        var _time = setInterval(filter_staff_from_exist, 100);
        $input.addEventListener('blur', function () {
            clearInterval(_time);
        }, false);
    };
    var filter_staff_from_exist = function () {
        _now = trim($input.value.toLowerCase());
        if (_now != '' && _now != _str) {
            // search(trim($input.value.toLowerCase()));
            throttle(queryData,null,100,_now,50);
        }
        if (_now === '') {
            cityListShow();
        } else {
            cityListHide();
        }
        _str = _now;
    };

    function queryData(text){
        console.log('搜索'+text);
        search(trim(text.toLowerCase()));
    }

    // function throttle(fn,context,delay,text){
    //     clearTimeout(fn.timeoutId);
    //     fn.timeoutId = setTimeout(function(){
    //         fn.call(context,text);

    //     },delay);
    // }
    function throttle(fn,context,delay,text,mustApplyTime){
        clearTimeout(fn.timer); //首先清除计时器
        fn._cur = Date.now();   //纪录当前时间
        if(!fn._start){ //若函数不是第一次调用，则直接设置_start，即开始时间,为_cur，即此刻的时间；
            fn._start = fn._cur;
        }
        if(fn._start - fn._cur > mustApplyTime){    //当前时间与上一次函数执行的时间做差，与mustApplyTime做比较，若大于必须执行一次函数，若小于则重新计算计时器
            fn.call(context,text);  //改变this对象，获取参数
            fn._start = fn._cur;
        }else{
            fn.timer = setTimeout(function(){
                fn.call(context,text);  //同上
            },delay);
        }
    }





    function search(val){
        if(val){
            $input.value = $input.value.toLowerCase();
            var _searchA = [];
            for(var i=0,len=$city.length;i<len;i++){
                var _item = $city[i];
                if(_item.indexOf(val) > -1){
                    _searchA.push(_item);
                }else{

                }
            }
            var _searchB = [];
            for(var i=0,len = _searchA.length;i<len;i++){
                var _item = _searchA[i];
                // var _div = document.createElement('div');
                // _div.className = 'item';
                // _div.setAttribute('data-city',_item.split('-')[2]);
                // _div.setAttribute('data-id',_item.split('-')[1]);
                // _div.innerHTML = _item.split('-')[0];
                _searchB.push("<div class=\"item\" data-city='" + _item.split('-')[2] + "' data-id='" + _item.split('-')[1] + "' >" + _item.split('-')[0] + "</div>");
            }
            console.log(_searchB);
            if(_searchB.length > 0){

                if(document.getElementsByClassName('list-group-search')[0]){
                    document.getElementsByClassName('list-group-search')[0].parentNode.removeChild(document.getElementsByClassName('list-group-search')[0]);
                }
                // if(document.getElementsByClassName('list-group-search-error')[0]){
                //     document.getElementsByClassName('list-group-search-error')[0].parentNode.removeChild(document.getElementsByClassName('list-group-search-error'))[0];
                // }
                document.getElementsByClassName('list-group-search-error')[0].classList.add('zHide');

                var _div = document.createElement('div');
                _div.className = 'list-group list-group-search';
                _div.innerHTML = _searchB.join('');
                document.body.appendChild(_div);
            }else{
                // to do 删除 list-group-search
                if(document.getElementsByClassName('list-group-search')[0]){
                    document.getElementsByClassName('list-group-search')[0].parentNode.removeChild(document.getElementsByClassName('list-group-search')[0]);
                }
                // if(document.getElementsByClassName('list-group-search-error')[0]){
                //     document.getElementsByClassName('list-group-search-error')[0].parentNode.removeChild(document.getElementsByClassName('list-group-search-error'))[0];
                // }

                // var _div = document.createElement('div');
                // _div.className = 'list-group list-group-search-error';
                // _div.innerHTML ='亲，真的没有了～';
                // document.body.appendChild(_div);

                document.getElementsByClassName('list-group-search-error')[0].classList.remove('zHide');

            }
        }else{
            //  to do
            cityListShow();
        }
    }

    function cityListHide(){
        $groupTitle.classList.add('zHide');
        $destlistCatalogues.classList.add('zHide');
        $destlist.classList.add('zHide');
    }
    function cityListShow(){
        // var _listSearch = document.getElementsByClassName('list-group-search')[0];
        // _listSearch.classList.add('zHide');
        $groupTitle.classList.add('zHide');
        $destlistCatalogues.classList.remove('zHide');
        $destlist.classList.remove('zHide');
    }

    
    function itemClick(){
        var _item = document.getElementsByClassName('item'),_len = _item.length;
        for(var i=0;i<_len;i++){
            !(function(i){
                _item[i].onclick = function(){
                    $goCity = this.innerHTML;
                    $input.value = $goCity;
                };
            })(i);
        }
    }
    itemClick();

    function trim(str){  //删除左右两端的空格
        return str.replace(/(^\s*)|(\s*$)/g, '');
    }
    



})(window);





