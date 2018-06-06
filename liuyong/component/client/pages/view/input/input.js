Page({
	input:function(e){
		wx.showToast({
		  title: 'input'+e.detail.value,
		  icon: 'success',
		  duration: 2000
		})
		console.log(e);
	},
	focus:function(e){
		wx.showToast({
		  title: 'focus'+e.detail.value,
		  icon: 'success',
		  duration: 2000
		})
		console.log(e);
	},
	blur:function(e){
		wx.showToast({
		  title: 'blur'+e.detail.value,
		  icon: 'success',
		  duration: 2000
		})
		console.log(e);
	},
	confirm:function(e){
		wx.showToast({
		  title: 'confirm'+e.detail.value,
		  icon: 'success',
		  duration: 2000
		})
		console.log(e);
	}
})