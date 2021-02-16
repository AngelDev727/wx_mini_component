// pages/form/form_picker/form_picker.js

Page({
  data: {
    array: ['United States', 'China', 'Brazil', 'Japan'],
    objectArray: [
      {
        id: 0,
        name: 'United States'
      },
      {
        id: 1,
        name: 'China'
      },
      {id: 2,name: 'Brazil'},
      {id: 3,name: 'Japan'}
    ],
    index: 0,
    multiArray: [['Invertebrate', 'Vertebrate '], ['Platyhelminth', 'Nemathelminth', 'Annelida', 'Mollusc', 'Arthropod'], ['Taenia solium', 'Blood sucker']],
    objectMultiArray: [
      [
        {id: 0,name: 'Invertebrate'},
        {id: 1,name: 'Vertebrate'}
      ],
      [
        {id: 0,name: 'Platyhelminth'},
        {id: 1,name: 'Nemathelminth'},
        {id: 2,name: 'Annelida'},
        {id: 3,name: 'Mollusc'},
        {id: 3,name: 'Arthropod'}
      ], [
        {id: 0,name: 'Taenia solium'},
        {id: 1,name: 'Blood sucker'}
      ]
    ],
    multiIndex: [0, 0, 0],
    date: '2016-09-01',
    time: '12:01',
    region: ['Guangdong Province', 'Guangzhou', 'Haizhu District'],
    customItem: 'All',
  },
  bindPickerChange: function(e) {
    console.log('pickerA selection change is sent, carrying the value ', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindMultiPickerChange: function (e) {
    console.log('pickerA selection change is sent, carrying the value ', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  bindMultiPickerColumnChange: function (e) {
    console.log('The modified column is ', e.detail.column, ', and the value is ', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = ['Platyhelminth', 'Nemathelminth', 'Annelida', 'Mollusc', 'Arthropod'];
            data.multiArray[2] = ['Arthropod', 'Taenia solium'];
            break;
          case 1:
            data.multiArray[1] = ['Fish', 'Amphibian', 'Reptile'];
            data.multiArray[2] = ['Crucian', 'Hairtail'];
            break;
        }
        data.multiIndex[1] = 0;
        data.multiIndex[2] = 0;
        break;
      case 1:
        switch (data.multiIndex[0]) {
          case 0:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['Arthropod', 'Taenia solium'];
                break;
              case 1:
                data.multiArray[2] = ['Roundworm'];
                break;
              case 2:
                data.multiArray[2] = ['Ant', 'Leech'];
                break;
              case 3:
                data.multiArray[2] = ['Clam', 'Snail', 'Slug'];
                break;
              case 4:
                data.multiArray[2] = ['Insect', 'Crustacean', 'Arachnid', 'Polypod'];
                break;
            }
            break;
          case 1:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['Crucian', 'Hairtail'];
                break;
              case 1:
                data.multiArray[2] = ['Frog', 'Giant salamander'];
                break;
              case 2:
                data.multiArray[2] = ['Lizard', 'Turtle', 'Gecko'];
                break;
            }
            break;
        }
        data.multiIndex[2] = 0;
        break;
    }
    console.log(data.multiIndex);
    this.setData(data);
  },
  bindDateChange: function(e) {
    console.log('pickerA selection change is sent, carrying the value ', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function(e) {
    console.log('pickerA selection change is sent, carrying the value ', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },
  bindRegionChange: function (e) {
    console.log('pickerA selection change is sent, carrying the value ', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  }
})