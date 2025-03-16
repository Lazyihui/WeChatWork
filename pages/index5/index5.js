Page({
    data: {
        width: 0, // 窗口宽度
        height: 0, // 窗口高度
        timer: null // 定时器
    },

    onLoad: function () {
        const res = wx.getSystemInfoSync();
        this.setData({
            width: res.windowWidth,
            height: res.windowHeight
        });
    },

    onReady: function () {
       
        const D30 = 30 * Math.PI / 180; // 30度对应的弧度
        const D90 = 90 * Math.PI / 180; // 90度对应的弧度

        const ctx = wx.createCanvasContext('myCanvas');
        const width = this.data.width;
        const height = this.data.height;
        const radius = width / 2 - 30; // 表盘半径，留出30px外边距

        const draw = () => {
            ctx.clearRect(0, 0, width, height);
            ctx.translate(width / 2, height / 2);
            drawClock(ctx, radius);
            drawHand(ctx, radius);
            ctx.draw();
        };

        const drawClock = (ctx, radius) => {
            // 绘制大刻度盘
            ctx.setLineWidth(2);
            ctx.beginPath();
            ctx.arc(0, 0, radius, 0, 2 * Math.PI, true);
            ctx.stroke();

            // 绘制大刻度
            ctx.setLineWidth(3);
            for (let i = 0; i < 12; i++) {
                ctx.rotate(D30);
                ctx.beginPath();
                ctx.moveTo(radius, 0);
                ctx.lineTo(radius - 15, 0);
                ctx.stroke();
            }

            // 绘制小刻度
            ctx.setLineWidth(1);
            for (let i = 0; i < 60; i++) {
                if (i % 5 !== 0) {
                    ctx.rotate(6 * Math.PI / 180);
                    ctx.beginPath();
                    ctx.moveTo(radius, 0);
                    ctx.lineTo(radius - 10, 0);
                    ctx.stroke();
                }
            }

            // 绘制文本
            ctx.setFontSize(20);
            ctx.textBaseline = 'middle';
            const r = radius - 30;
            for (let i = 1; i <= 12; i++) {
                const x = r * Math.cos(D30 * i - D90);
                const y = r * Math.sin(D30 * i - D90);
                if (i > 9) {
                    ctx.fillText(i, x - 12, y);
                } else {
                    ctx.fillText(i, x - 6, y);
                }
            }
        };

        const drawHand = (ctx, radius) => {
            const t = new Date();
            let h = t.getHours();
            const m = t.getMinutes();
            const s = t.getSeconds();
            h = h > 12 ? h - 12 : h;

            // 绘制时针
            ctx.save();
            ctx.rotate(D30 * (h + m / 60 + s / 3600));
            ctx.setLineWidth(6);
            ctx.beginPath();
            ctx.moveTo(-20, 0);
            ctx.lineTo(radius / 2.6, 0);
            ctx.stroke();
            ctx.restore();

            // 绘制分针
            ctx.save();
            ctx.rotate(D30 * (m / 5 + s / 300));
            ctx.setLineWidth(4);
            ctx.beginPath();
            ctx.moveTo(-20, 0);
            ctx.lineTo(radius / 1.8, 0);
            ctx.stroke();
            ctx.restore();

            // 绘制秒针
            ctx.save();
            ctx.rotate(D30 * (s / 5));
            ctx.setLineWidth(2);
            ctx.beginPath();
            ctx.moveTo(-20, 0);
            ctx.lineTo(radius / 1.6, 0);
            ctx.stroke();
            ctx.restore();
        };

        this.timer = setInterval(draw, 1000);
        draw();
    },

    onUnload: function () {
        clearInterval(this.timer);
    }
});