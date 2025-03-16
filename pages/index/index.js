Page({
  data: {
    num1: null, // 第一个数
    num2: null, // 第二个数
    result: '', // 比较结果
  },
  // 监听第一个输入框的输入事件
  onInputNum1(e) {
    this.setData({
      num1: parseFloat(e.detail.value), // 将输入的值转换为数字
    });
  },
  // 监听第二个输入框的输入事件
  onInputNum2(e) {
    this.setData({
      num2: parseFloat(e.detail.value), // 将输入的值转换为数字
    });
  },
  // 比较两个数的大小
  compare: function (e) {
    const { num1, num2 } = this.data;
                                                                                                                                                
    if (num1 === null || num2 === null) {
      this.setData({
        result: '请输入两个数',
      });
      return;
    }

    if (num1 > num2) {
      this.setData({
        result: `${num1} 大于 ${num2}`,
      });
    } else if (num1 < num2) {
      this.setData({
        result: `${num1} 小于 ${num2}`,
      });
    } else {
      this.setData({
        result: `${num1} 等于 ${num2}`,
      });
    }
  },
  goToNextPage() {
      console.log("diaji");
      wx.redirectTo({
        url: '/pages/index1/index1',
      });
  },
});