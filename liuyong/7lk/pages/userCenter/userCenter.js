var API = require('../../utils/config');
Page({
    data: {
        gender: ['男', '女'],
        birthday: '',
        citys: '',
        index: 0,
        userInfo: '',
        area:542,
        city:55,
        province:4,
        rangeIndex:[],
        cityData:[],
        rangeData:[],
        rangeText:''
    },
    onLoad: function() {
        this.getUserInfo();
        this.cityData();
    },
    getUserInfo: function() {
        wx.showLoading({
            title: '加载中',
        })
        wx.request({
            url: API.userInfo,
            success: d => {
                wx.hideLoading();
                console.log(d.data.data[0]);
                if (d.data.data[0].gender == 1) {
                    this.setData({
                        userInfo: d.data.data[0],
                        index: 0
                    })
                } else {
                    this.setData({
                        userInfo: d.data.data[0],
                        index: 1
                    })
                }
            }
        })
    },
    changgender: function(e) {
        console.log(e);
        this.setData({
            index: e.detail.value
        })
    },
    changedate: function(e) {
        console.log(e);
        this.setData({
            birthday: e.detail.value
        })
    },
    changecity: function(e) {
        console.log(e);
        this.setData({
            citys: e.detail.value
        })
    },
    changedata: function(e){
        console.log(e.detail.value,this.data.rangeData[0][e.detail.value[0]].name,this.data.rangeData[0][e.detail.value[0]].id,this.data.rangeData[1][e.detail.value[1]].name,this.data.rangeData[1][e.detail.value[1]].id,this.data.rangeData[2][e.detail.value[2]].name,this.data.rangeData[2][e.detail.value[2]].id)
    },
    changemul: function(e) {
        this.changeColumn(e.detail,this.data.rangeData[e.detail.column][e.detail.value].id);
    },
    cityData: function(e){
        wx.request({
            url: API.cityList,
            success: d => {
                // console.log(d.data.data);
                this.setData({
                    cityData:d.data.data
                })
                this.changeRange();
            }
        })
    },
    changeRange:function(d){
        if(d&&d.column==0){
            var province = this.data.rangeData[0];
            var city = [];
            var area = [];
            var provinceIndex = d.value;
            var cityIndex = 0;
            var areaIndex = 0;
        }else if(d&&d.column==1){
            var province = this.data.rangeData[0];
            var city = this.data.rangeData[1];
            var area = [];
            var provinceIndex = this.data.rangeIndex[0];
            var cityIndex = d.value;
            var areaIndex = 0;
        }else if(d&&d.column==2){
            var province = this.data.rangeData[0];
            var city = this.data.rangeData[1];
            var area = this.data.rangeData[2];
            var provinceIndex = this.data.rangeIndex[0];
            var cityIndex = this.data.rangeIndex[1];
            var areaIndex = d.value;
        }else{
            var province = [];
            var city = [];
            var area = [];
            var provinceIndex = 0;
            var cityIndex = 0;
            var areaIndex = 0;
        }
        if(d&&d.column==0){
            for(var i=0;i<this.data.cityData.length;i++){
                if(this.data.cityData[i].id==this.data.province){
                    for(var j=0;j<this.data.cityData[i].childs.length;j++){
                        var cityData = {};
                        cityData.id = this.data.cityData[i].childs[j].id;
                        cityData.name = this.data.cityData[i].childs[j].name;
                        city.push(cityData)
                        if(j==0){
                            for(var k=0;k<this.data.cityData[i].childs[j].childs.length;k++){
                                var areaData = {};
                                areaData.id = this.data.cityData[i].childs[j].childs[k].id;
                                areaData.name = this.data.cityData[i].childs[j].childs[k].name;
                                area.push(areaData)
                            }
                        }
                    }
                }
            }
        }else if(d&&d.column==1){
            for(var i=0;i<this.data.cityData.length;i++){
                if(this.data.cityData[i].id==this.data.province){
                    for(var j=0;j<this.data.cityData[i].childs.length;j++){
                        if(this.data.cityData[i].childs[j].id==this.data.city){
                            for(var k=0;k<this.data.cityData[i].childs[j].childs.length;k++){
                                var areaData = {};
                                areaData.id = this.data.cityData[i].childs[j].childs[k].id;
                                areaData.name = this.data.cityData[i].childs[j].childs[k].name;
                                area.push(areaData)
                            }
                        }
                    }
                }
            }
        }else if(d&&d.column==2){
            areaIndex = d.value;
        }else{
            for(var i=0;i<this.data.cityData.length;i++){
                var provinceData = {};
                provinceData.id = this.data.cityData[i].id;
                provinceData.name = this.data.cityData[i].name;
                province.push(provinceData)
                if(this.data.cityData[i].id==this.data.province){
                    provinceIndex = i;
                    for(var j=0;j<this.data.cityData[i].childs.length;j++){
                        var cityData = {};
                        cityData.id = this.data.cityData[i].childs[j].id;
                        cityData.name = this.data.cityData[i].childs[j].name;
                        city.push(cityData)
                        if(this.data.cityData[i].childs[j].id==this.data.city){
                            cityIndex = j;
                            for(var k=0;k<this.data.cityData[i].childs[j].childs.length;k++){
                                var areaData = {};
                                areaData.id = this.data.cityData[i].childs[j].childs[k].id;
                                areaData.name = this.data.cityData[i].childs[j].childs[k].name;
                                area.push(areaData)
                                if(this.data.cityData[i].childs[j].childs[k].id==this.data.area){
                                    areaIndex = k;
                                }
                            }
                        }
                    }
                }
            }
        }
        this.setData({
            rangeData:[province,city,area],
            rangeIndex:[provinceIndex,cityIndex,areaIndex]
        })
    },
    changeColumn:function(d,cityid){
        switch(d.column){
            case 0:
                this.setData({
                    province:cityid
                })
                break;
            case 1:
                this.setData({
                    city:cityid
                })
                break;
            default:
                this.setData({
                    area:cityid
                })
                break;
        }
        this.changeRange(d);
    }
})