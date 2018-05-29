Page({
	data:{
		dis:true,
		value:[1987,4,24],
		valueindex:[1,1,1],
		colunm1:[1984,1985,1986,1987,1988],
		colunm2:[3,4,5,6,7],
		colunm3:[21,22,23,24,25]
	},
	onReady:function(){
		for(var i=0;i<this.data.value.length;i++){
			switch(i){
				case 0:
					this.data.valueindex[0] = this.data.colunm1.indexOf(this.data.value[0]);
					break;
				case 1:
					this.data.valueindex[1] = this.data.colunm2.indexOf(this.data.value[1]);
					break;
				case 2:
					this.data.valueindex[2] = this.data.colunm3.indexOf(this.data.value[2]);
					break;
			}
		}
		this.setData({
			valueindex:this.data.valueindex
		})
	},
	showpicker:function(){
		this.setData({
			dis:!this.data.dis
		})
	},
	changeview:function(e){
		console.log(e.detail);
		this.setData({
			valueindex:e.detail.value,
			value:[this.data.colunm1[e.detail.value[0]],this.data.colunm2[e.detail.value[1]],this.data.colunm3[e.detail.value[2]]]
		})
	}
})