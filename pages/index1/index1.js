Page({
    data: {
        btnText: '按钮文字',
        id: 'aa',
        condition: true,
        content: '哦无聊',
        result: false,
        a: 1,
        b: 4,
        c: 6,
        length: 4,
        name: 'Tommy',
        object: { key1: "Hello", key2: "Hi" },
        array: ['Tommy', 'Henry', 'Saray'],
        y: 3
    },
    btnClick: function() {
        // 按钮点击事件处理逻辑
    },
    // goToNextPage() {
        // 这样写比较好看
    // },
    goToNextPage() {
        wx.redirectTo({
          url: '/pages/index2/index2',
        });
    },
});