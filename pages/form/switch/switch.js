// pages/form/switch/switch.js
Page({
  data: {
    checkboxItems: [
      {name: 'USA', value: 'United States'},
      {name: 'CHN', value: 'China', checked: 'true'},
      {name: 'BRA', value: 'Brazil'},
      {name: 'JPN', value: 'Japan', checked: 'true'},
      {name: 'ENG', value: 'United Kingdom'},
      {name: 'TUR', value: 'France'},
    ],
    radioItems: [
      {name: 'USA', value: 'United States'},
      {name: 'CHN', value: 'China', checked: 'true'},
      {name: 'BRA', value: 'Brazil'},
      {name: 'JPN', value: 'Japan'},
      {name: 'ENG', value: 'United Kingdom'},
      {name: 'TUR', value: 'France'},
    ],
    hidden: false
  },
  /**
   * Page initial data
   */
  switch1Change: function (e){
    console.log('switch1  triggers a  change  event that carries the value of ', e.detail.value)
  },
  switch2Change: function (e){
    console.log('switch2  triggers a  change  event that carries the value of ', e.detail.value)
  },
  checkboxChange: function(e) {
    var checked = e.detail.value
    var changed = {}
    for (var i = 0; i < this.data.checkboxItems.length; i ++) {
      if (checked.indexOf(this.data.checkboxItems[i].name) !== -1) {
        changed['checkboxItems['+i+'].checked'] = true
      } else {
        changed['checkboxItems['+i+'].checked'] = false
      }
    }
    this.setData(changed)
  },
  radioChange: function(e) {
    var checked = e.detail.value
    var changed = {}
    for (var i = 0; i < this.data.radioItems.length; i ++) {
      if (checked.indexOf(this.data.radioItems[i].name) !== -1) {
        changed['radioItems['+i+'].checked'] = true
      } else {
        changed['radioItems['+i+'].checked'] = false
      }
    }
    this.setData(changed)
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})