// pages/index4/index4.js
// for (int i = 1; i <= 9; i++)
// {
//     for (int j = 1; j <= i; j++)
//     {
//         Console.Write($"{j}×{i}={i * j}\t");
//     }
//     Console.WriteLine();
// }

Page({
    data: {
        table: [], // 存储九九乘法表的数据 存的数组
    },
    onLoad() {
        this.generateMultiplicationTable();
    },
    // 生成九九乘法表
    generateMultiplicationTable() {
        let table = [];
        for (let i = 1; i <= 9; i++) {
            let row = [];
            for (let j = 1; j <= i; j++) {
                row.push(`${j} × ${i} = ${j * i}`);
            }
            table.push(row);
        }
        // push添加元素
        this.setData({ table });
    },
    goToNextPage() {
        wx.redirectTo({
          url: '/pages/index5/index5',
        });
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})