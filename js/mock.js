//生成随机商品信息
let goods = Mock.mock({
    "data|54": [ //生成54条数据 数组
        {
            "Id|+1": 1, //生成商品id，自增1
            "Name": "@cname", //生成商品名 ， 都是中国人的名字
            "Star|1-5": "★", //随机生成1-5个星星
            "Price|30-1000": 30, //随机生成商品价格 在30-1000之间
        }
    ]
})

//生成随机商品图片
let imgArr = []
for (let i = 0; i < 54; i++) {
    // 利用mockjs的Random随机生成数字并转成十六进制，拼接。
    const a = '#' + Mock.Random.integer(180, 255).toString(16) +
        Mock.Random.integer(140, 255).toString(16) +
        Mock.Random.integer(120, 220).toString(16);
    imgArr.push({
        image: Mock.Random.image('350x200', a, ' IMAGE '),
    })
}
console.log(imgArr[0].image)