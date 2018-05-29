Page({
  data:{
    arr:["吴尊","吴彦祖","吴奇隆","吴亦凡","吴三桂"],
    newarr:[],
    index:"0"
  },
  add:function(e){
    var mid =this.data.index;
    var newarrlen = this.data.newarr.length;
    if (newarrlen < this.data.arr.length){
      this.data.newarr.push(this.data.arr[mid]);
      this.setData({
        newarr: this.data.newarr
      })
      mid++;
      this.data.index = mid;
    }
  },
  del:function(e){
    var len = this.data.newarr.length;
    var middel = this.data.index;
    console.log(middel);
    if(len > 0){
        this.data.newarr.splice(len-1, 1);
        this.setData({
          newarr:this.data.newarr
        });
        middel = middel-1;
        this.data.index = middel;
    }else{
         console.log("无东西可删");
    }

  }

})