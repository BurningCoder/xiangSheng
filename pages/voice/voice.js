// pages/voice/voice.js
const order = ['demo1', 'demo2', 'demo3']
Page({
  onShareAppMessage() {
    return {
      title: 'scroll-view',
      path: 'page/component/pages/scroll-view/scroll-view'
    }
  },

  data: {
    toView: 'green',
    items: [
      {
        "name": "小明",
        "school": "XX小学",
        "content": "世界很大我想去看看",
        "src": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F7be02f3142521a044184a3fd602e6a64fd32f8fb800c9-Dree8J_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626147439&t=e9fabdc0d66c25792d250fd0d4c80d75"
      },
      {
        "name": "张三",
        "school": "XX小学",
        "content": "我想去看看",
        "src": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F7be02f3142521a044184a3fd602e6a64fd32f8fb800c9-Dree8J_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626147439&t=e9fabdc0d66c25792d250fd0d4c80d75"
      },
      {
        "name": "李四",
        "school": "XX小学",
        "content": "我也想去看看",
        "src": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F7be02f3142521a044184a3fd602e6a64fd32f8fb800c9-Dree8J_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626147439&t=e9fabdc0d66c25792d250fd0d4c80d75"
      },
      {
        "name": "王二",
        "school": "XX小学",
        "content": "不是很想去看看",
        "src": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F7be02f3142521a044184a3fd602e6a64fd32f8fb800c9-Dree8J_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626147439&t=e9fabdc0d66c25792d250fd0d4c80d75"
      },
      {
        "name": "小王",
        "school": "XX小学",
        "content": "一起去吧",
        "src": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F7be02f3142521a044184a3fd602e6a64fd32f8fb800c9-Dree8J_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626147439&t=e9fabdc0d66c25792d250fd0d4c80d75"
      },
    ],
  },

  upper(e) {
    console.log(e)
  },

  lower(e) {
    console.log(e)
  },

  scroll(e) {
    console.log(e)
  },

  scrollToTop() {
    this.setAction({
      scrollTop: 0
    })
  },

  tap() {
    for (let i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1],
          scrollTop: (i + 1) * 200
        })
        break
      }
    }
  },

  tapMove() {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  }
})