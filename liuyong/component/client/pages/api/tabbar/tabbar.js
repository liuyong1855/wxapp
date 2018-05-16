Page({
	set:function(){
		console.log('设置tabbar文本')
		wx.setTabBarBadge({
			index:2,
			text:'文本1113',
			success:function(d){
				console.log('设置成功',d)
			}
		})
	},
	remove:function(){
		console.log('移除设置文本')
		wx.removeTabBarBadge({
			index:2,
			success:function(d){
				console.log('移除成功',d)
			}
		})
	},
	show:function(){
		console.log('显示设置红点')
		wx.showTabBarRedDot({
			index:2,
			success:function(d){
				console.log('显示成功',d)
			}
		})
	},
	hide:function(){
		console.log('隐藏设置红点')
		wx.hideTabBarRedDot({
			index:2,
			success:function(d){
				console.log('隐藏成功',d)
			}
		})
	},
	showbar:function(){
		console.log('显示tabbar')
		wx.showTabBar({
			animation:true,
			success:function(d){
				console.log('显示成功',d)
			}
		})
	},
	hidebar:function(){
		console.log('隐藏tabbar')
		wx.hideTabBar({
			animation:true,
			success:function(d){
				console.log('隐藏成功',d)
			}
		})
	},
	setbar:function(){
		console.log('设置tabbar样式')
		wx.setTabBarStyle({
			color:'#ff0000',
			selectedColor: '#00FF00',
		})
	},
	setitem:function(){
		console.log('设置tabbar项样式')
		wx.setTabBarItem({
			index:2,
			text:'text',
			success:function(d){
				console.log(d)
			}
		})
	}
})