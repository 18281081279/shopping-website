function fontSize() {
    var deviceWidth = document.documentElement.clientWidth > 760 ? 760 : document.documentElement.clientWidth;
    document.documentElement.style.fontSize = (deviceWidth / 76) + "px";
}
fontSize();

console.log(goods.data[0]);
console.log(goods.data[1]);

//展示商品
let tindex = 0;
let good1 = new Vue({
    el: '#good1',
    data: {
        index: tindex,
        imgArray: imgArr,
        Stars: goods.data,
        Prices: goods.data,
    }
})
let good2 = new Vue({
    el: '#good2',
    data: {
        index: tindex + 1,
        imgArray: imgArr,
        Stars: goods.data,
        Prices: goods.data,
    }
})
let good3 = new Vue({
    el: '#good3',
    data: {
        index: tindex + 2,
        imgArray: imgArr,
        Stars: goods.data,
        Prices: goods.data,
    }
})
let good4 = new Vue({
    el: '#good4',
    data: {
        index: tindex + 3,
        imgArray: imgArr,
        Stars: goods.data,
        Prices: goods.data,
    }
})
let good5 = new Vue({
    el: '#good5',
    data: {
        index: tindex + 4,
        imgArray: imgArr,
        Stars: goods.data,
        Prices: goods.data,
    }
})
let good6 = new Vue({
    el: '#good6',
    data: {
        index: tindex + 5,
        imgArray: imgArr,
        Stars: goods.data,
        Prices: goods.data,
    }
})
let good7 = new Vue({
    el: '#good7',
    data: {
        index: tindex + 6,
        imgArray: imgArr,
        Stars: goods.data,
        Prices: goods.data,
    }
})
let good8 = new Vue({
    el: '#good8',
    data: {
        index: tindex + 7,
        imgArray: imgArr,
        Stars: goods.data,
        Prices: goods.data,
    }
})
let good9 = new Vue({
    el: '#good9',
    data: {
        index: tindex + 8,
        imgArray: imgArr,
        Stars: goods.data,
        Prices: goods.data,
    }
})

let showPg = new Vue({
    el: '#showPg',
    methods: {
        showPgPre: function () {
            if (tindex >= 9) {
                tindex = tindex - 9;
                good1.index = tindex;
                good2.index = tindex+1;
                good3.index = tindex+2;
                good4.index = tindex+3;
                good5.index = tindex+4;
                good6.index = tindex+5;
                good7.index = tindex+6;
                good8.index = tindex+7;
                good9.index = tindex+8;
            } else {
                alert("已经是第一页啦")
            }
        },
        showPg1: function () {
            tindex = 0;
            good1.index = tindex;
            good2.index = tindex+1;
            good3.index = tindex+2;
            good4.index = tindex+3;
            good5.index = tindex+4;
            good6.index = tindex+5;
            good7.index = tindex+6;
            good8.index = tindex+7;
            good9.index = tindex+8;
        },
        showPg2: function () {
            tindex=9;
            good1.index = tindex;
            good2.index = tindex+1;
            good3.index = tindex+2;
            good4.index = tindex+3;
            good5.index = tindex+4;
            good6.index = tindex+5;
            good7.index = tindex+6;
            good8.index = tindex+7;
            good9.index = tindex+8;
        },
        showPg3: function () {
            tindex = 18;
            good1.index = tindex;
            good2.index = tindex+1;
            good3.index = tindex+2;
            good4.index = tindex+3;
            good5.index = tindex+4;
            good6.index = tindex+5;
            good7.index = tindex+6;
            good8.index = tindex+7;
            good9.index = tindex+8;
        },
        showPg4: function () {
            tindex = 27;
            good1.index = tindex;
            good2.index = tindex+1;
            good3.index = tindex+2;
            good4.index = tindex+3;
            good5.index = tindex+4;
            good6.index = tindex+5;
            good7.index = tindex+6;
            good8.index = tindex+7;
            good9.index = tindex+8;
        },
        showPg5: function () {
            tindex = 36;
            good1.index = tindex;
            good2.index = tindex+1;
            good3.index = tindex+2;
            good4.index = tindex+3;
            good5.index = tindex+4;
            good6.index = tindex+5;
            good7.index = tindex+6;
            good8.index = tindex+7;
            good9.index = tindex+8;
        },
        showPg6: function () {
            tindex = 45;
            good1.index = tindex;
            good2.index = tindex+1;
            good3.index = tindex+2;
            good4.index = tindex+3;
            good5.index = tindex+4;
            good6.index = tindex+5;
            good7.index = tindex+6;
            good8.index = tindex+7;
            good9.index = tindex+8;
        },
        showPgNext: function () {
            if (tindex <= 36) {
                tindex = tindex + 9;
                good1.index = tindex;
                good2.index = tindex+1;
                good3.index = tindex+2;
                good4.index = tindex+3;
                good5.index = tindex+4;
                good6.index = tindex+5;
                good7.index = tindex+6;
                good8.index = tindex+7;
                good9.index = tindex+8;
            } else {
                alert("已经是最后一页啦！")
            }
        }
    }
})