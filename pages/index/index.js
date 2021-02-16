//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        motto: 'Hello',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo')
    },
    //事件处理函数
    bindViewTapProfile: function() {
        wx.navigateTo({
            url: '../profile/profile'
        })
    },
    bindViewTapScroll: function() {
        wx.navigateTo({
            url: '../scroll/scroll'
        })
    },
    bindViewTapSwiper: function() {
        wx.navigateTo({
            url: '../swiper/swiper'
        })
    },
    bindViewTapIcon: function() {
        wx.navigateTo({
            url: '../icons/icons'
        })
    },
    bindViewTapText: function() {
        wx.navigateTo({
            url: '../text/text'
        })
    },

    bindViewProgress: function() {
        wx.navigateTo({
            url: '../progress/progress'
        })
    },

    bindViewForm: function() {
        wx.navigateTo({
            url: '../form/index/index'
        })
    },
    bindViewFormPicker: function() {
        wx.navigateTo({
            url: '../form/form_picker/form_picker'
        })
    },
    bindViewFormPicker2: function() {
        wx.navigateTo({
            url: '../form/form_picker2/form_picker2'
        })
    },
    bindViewFormSwitch: function () {
        wx.navigateTo({
            url: '../form/switch/switch'
        })
    },
    
    bindViewFormFunctionalNavigator: function () {
        wx.navigateTo({
            url: '../navigator/functional-navigator/functional-navigator'
        })
    },
    bindViewFormFunctionalNavigatorAll: function () {
        wx.navigateTo({
            url: '../navigator/navigator/navigator'
        })
    },

    bindViewMediaAudio: function () {
        wx.navigateTo({
            url: '../media/m_audio/m_audio'
        })
    },

    bindViewMediaImage: function () {
        wx.navigateTo({
            url: '../media/m_image/m_image'
        })
    },

    bindViewMediaCamera: function () {
        wx.navigateTo({
            url: '../media/m_camera/m_camera'
        })
    },
    
    bindViewMediaVideo: function () {
        wx.navigateTo({
            url: '../media/m_video/m_video'
        })
    },
    bindViewMap: function () {
        wx.navigateTo({
            url: '../map_view/map_view'
        })
    },
    
    bindViewCanvas: function () {
        wx.navigateTo({
            url: '../canvas/canvas'
        })
    },

    bindViewWebview: function () {
        wx.navigateTo({
            url: '../web-view/web-view'
        })
    },

    onLoad: function () {
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                motto: this.data.motto + ", " + res.userInfo.nickName,
                hasUserInfo: true
            })
        } else if (this.data.canIUse){
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res.userInfo,
                    motto: this.data.motto + ", " + res.userInfo.nickName,
                    hasUserInfo: true
                })
            }
        } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            wx.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo
                    this.setData({
                        userInfo: res.userInfo,
                        motto: this.data.motto + ", " + res.userInfo.nickName,
                        hasUserInfo: true
                    })
                }
            })
        }
    },
    getUserInfo: function(e) {
        console.log(e)
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    }
})
