function fontSize() {
    var deviceWidth = document.documentElement.clientWidth > 760 ? 760 : document.documentElement.clientWidth;
    document.documentElement.style.fontSize = (deviceWidth / 76) + "px";
}
fontSize();

//展示购物车商品
let SCtindex = 0;
let SCgood1 = new Vue({
    el: '#SCgood1',
    data: {
        SCindex: SCtindex,
        imgArray: imgArr,
        Stars: goods.data,
        Prices: goods.data,
    }
})
let SCgood2 = new Vue({
    el: '#SCgood2',
    data: {
        SCindex: SCtindex + 1,
        imgArray: imgArr,
        Stars: goods.data,
        Prices: goods.data,
    }
})
let SCgood3 = new Vue({
    el: '#SCgood3',
    data: {
        SCindex: SCtindex + 2,
        imgArray: imgArr,
        Stars: goods.data,
        Prices: goods.data,
    }
})

let SCshowPg = new Vue({
    el: '#SCshowPg',
    methods: {
        SCshowPgPre: function () {
            if (SCtindex >= 3) {
                SCtindex = SCtindex - 3;
                SCgood1.SCindex = SCtindex;
                SCgood2.SCindex = SCtindex + 1;
                SCgood3.SCindex = SCtindex + 2;
            } else {
                alert("已经是第一页啦")
            }
        },
        SCshowPg1: function () {
            SCtindex = 0;
            SCgood1.SCindex = SCtindex;
            SCgood2.SCindex = SCtindex + 1;
            SCgood3.SCindex = SCtindex + 2;
        },
        SCshowPg2: function () {
            SCtindex = 3;
            SCgood1.SCindex = SCtindex;
            SCgood2.SCindex = SCtindex + 1;
            SCgood3.SCindex = SCtindex + 2;
        },
        SCshowPg3: function () {
            SCtindex = 6;
            SCgood1.SCindex = SCtindex;
            SCgood2.SCindex = SCtindex + 1;
            SCgood3.SCindex = SCtindex + 2;
        },
        SCshowPg4: function () {
            SCtindex = 9;
            SCgood1.SCindex = SCtindex;
            SCgood2.SCindex = SCtindex + 1;
            SCgood3.SCindex = SCtindex + 2;
        },
        SCshowPgNext: function () {
            if (SCtindex <= 6) {
                SCtindex = SCtindex + 6;
                SCgood1.SCindex = SCtindex;
                SCgood2.SCindex = SCtindex + 1;
                SCgood3.SCindex = SCtindex + 2;
            } else {
                alert("已经是最后一页啦！")
            }
        }
    }
})