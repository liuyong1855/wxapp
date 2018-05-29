Page({
	data:{
		markers: [{
	      iconPath: "../resources/kind/map.png",
	      id: 0,
	      title:'title',
	      rotate:0,
	      alpha:0.5,
	      latitude: 39.9060492658,
	      longitude: 116.3980865479,
	      width: 50,
	      height: 50,
	      callout:{
	      	content:'天安门1',
	      	color:'#f00',
	      	fontSize:14,
	      	borderRadius:5,
	      	padding:10,
	      	bgColor:'#0ff',
	      	display:"ALWAYS"
	      },
	      label:{
	      	content:'天安门2',
	      	color:'#f00',
	      	fontSize:12,
	      	x:20,
	      	y:20,
	      	borderWidth:1,
	      	borderColor:'#f00',
	      	borderRadius:5,
	      	bgColor:'#0ff',
	      	padding:5,
	      	textAlign:'center'
	      },
	      anchor:{x:0,y:0}
	    }],
	    polyline: [{
	    	points:[
	    		{latitude: 39.9060492658,longitude: 116.3980865479},
	    		{latitude: 39.9000492658,longitude: 116.3000865479},
	    		{latitude: 39.8060492658,longitude: 116.1980865479}
	    	],
	    	color:'#ff0000AA',
	    	width:5,
	    	dottedLine:true,
	    	borderColor:'#00ffff',
	    	borderWidth:1
	    }],
	    circles:[{
	    	latitude: 39.9060492658,
	      	longitude: 116.3980865479,
	      	color:'#FF0000DD',
	      	fillColor:'#7cb5ec88',
	      	radius:3000,
	      	strokeWidth:2
	    }],
	    controls:[{
	    	id:1,
	    	position:{
	    		left:10,
	    		top:10,
	    		width:30,
	    		height:30
	    	},
	    	clickable:true,
	    	iconPath:'../resources/kind/media.png'
	    }],
		longitude:116.3980865479,
		latitude:39.9060492658,
		scale:12
	},
	schange:function(e){
		this.setData({
			latitude:e.detail.value
		})
	},
	lchange:function(e){
		this.setData({
			longitude:e.detail.value
		})
	},
	achange:function(e){
		this.setData({
			scale:e.detail.value
		})
	},
	tap:function(e){
		console.log(e);
	},
	makertap:function(e){
		console.log('makertap',e)
	},
	calloutap:function(e){
		console.log('calloutap',e)
	},
	controltap:function(e){
		console.log('controltap',e)
	},
	regionchange:function(e){
		console.log('regionchange',e)
	},
	update:function(e){
		console.log('update',e)
	}
})