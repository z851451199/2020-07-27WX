// pages/setting/setting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    HomeDisplay: 'none',
    HomeNum:0, 
    trademark:'',
    trades: [    
      {id: '1', name: '销售',status:'0'},
      {id: '2', name: '正能量',status:'0'},
      {id: '3', name: '健康养生',status:'0'},
      {id: '4', name: '美妆护肤',status:'0'},
      {id: '5', name: '母婴',status:'0'},
    ],
    tradesDeatil:[
      {id: '1', name: '装修风格',status:'0'},
      {id: '2', name: '设计案例',status:'0'},
      {id: '3', name: '装修风水',status:'0'},
      {id: '4', name: '装修知识',status:'0'},
      {id: '5', name: '全屋定制',status:'0'},
      {id: '6', name: '省钱攻略',status:'0'},
    ]
  },
  m_btns1:function(e){
    var that = this
    var Index = e.currentTarget.dataset.index;
    // data中获取列表   
    var tradesArr = this.data.trades;
    for (let i in tradesArr) {
      if (i == Index) {
        //根据下标找到目标,改变状态  
        if (tradesArr[i].status == 0) {
          tradesArr[i].status = parseInt(tradesArr[i].status) + 1
        }
        else{
          tradesArr[i].status = parseInt(tradesArr[i].status) - 1
        }
      }
    }
    //设置当前样式
    that.setData({
      trades:tradesArr
    })
  },
  m_btns2:function(e){
    var that = this
    var Index = e.currentTarget.dataset.index;
    var HomeNums = this.data.HomeNum
    // data中获取列表   
    var tradesArr = this.data.tradesDeatil;
    for (let i in tradesArr) {
      if (i == Index) {
        //根据下标找到目标,改变状态  
        if (tradesArr[i].status == 0) {
          tradesArr[i].status = parseInt(tradesArr[i].status) + 1
          HomeNums = HomeNums+1
        }
        else{
          tradesArr[i].status = parseInt(tradesArr[i].status) - 1
          HomeNums = HomeNums-1
        }
      }
    }
    //设置当前样式
    that.setData({
      tradesDeatil:tradesArr,
      HomeNum:HomeNums
    })
  },
  // 
  m_show:function(){
    var that = this
    var m_style = this.data.HomeDisplay;
    if(m_style=='none'){
      m_style='block'
    }else{
      m_style='none'
    }
    that.setData({
      HomeDisplay:m_style
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  // 获取modify页面返回数据
  onLoad: function (options) {
    var Trademark = options.trademark
    if(Trademark){
      Trademark = Trademark.split(",")
    }else{
      Trademark=[]
    }
    this.setData({
      trademark:Trademark
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})