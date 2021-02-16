// redirect.js navigator.js
Component({
  methods: {
    loginSuccess: function(e) {
      console.log(e.detail.code) // Code of wx.login
      console.log(e.detail.userInfo) // The userInfo of wx.getUserInfo
    }
  }
})