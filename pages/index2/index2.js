Page({
    data: {
        objectArray: [
            { id: 2, unique: "苹果", checked: false },
            { id: 1, unique: "梨子", checked: false },
            { id: 0, unique: "荔枝", checked: true }
        ]
    },

    switch: function() {
        const length = this.data.objectArray.length;
        for (let i = 0; i < length; ++i) {
            const x = Math.floor(Math.random() * length); // 随机产生一个 [0..length-1] 的数
            const y = Math.floor(Math.random() * length); // 随机产生一个 [0..length-1] 的数
            // 以下三行代码功能：下标为 x 的数组元素和下标为 y 的数组元素交换
            const temp = this.data.objectArray[x];
            this.data.objectArray[x] = this.data.objectArray[y];
            this.data.objectArray[y] = temp;
        }
        this.setData({
            objectArray: this.data.objectArray
        });
    },

    addToFront: function() {
        const length = this.data.objectArray.length;
        // 添加数组
        this.data.objectArray = [{ id: length, unique: "新项 " + length, checked: false }].concat(this.data.objectArray);
        this.setData({
            objectArray: this.data.objectArray
        });
    },
    goToNextPage() {
        wx.redirectTo({
          url: '/pages/index3/index3',
        });
    },
});