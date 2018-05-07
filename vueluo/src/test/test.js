/**
 * Created by yong on 2018/3/6.
 */
var obi={
  addcalss:true,
}
var vm=new Vue({
  el:'#app',
  data:{
    message:'12212'
  },
  render(createElement){
    return createElement(
      'ul',
      {
        class:{
          red:true
        }
      },
      [
        createElement('li','1'),
        createElement('li','2'),
        createElement('li','3')
      ]
    )
  }

});

var list=[
  {title:'aaa',ischeck:false,editoo:''},
  {title:'bbb',ischeck:true,editoo:''},
  {title:'ccc',ischeck:false,editoo:''},
];
var vm2=new Vue({
  el:'.main',
  data:{
    list:list,
    todo:''
  },
  methods:{
    addtodo:function(ev){//添加任务
        this.list.push({
          title:this.todo
        });
      this.todo='';
      },
    del:function(ele){//删除
      var index=this.list.indexOf(ele);
      this.list.splice(index,1)
    },
    edit:function(todo){
      console.log(111)
    }
  }

});
console.log(vm2)
