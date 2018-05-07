/**
 * Created by yong on 2018/3/7.
 */
Vue.component('vue-model',{
  props:{
    title:{//弹框标题
        type:String,
        default:'这是一个标题'
      },
    content:{//弹框提示内容
      type:String,
      default:''
    },
  },
  template:`
     <div class="canclecon tccon">
        <h2>{{title}}</h2>
        <slot name="modelcontent"><p>{{content}}</p></slot>
        <div class="threeDIVbtn">
            <slot name="conbtn">
              <input class="cancle" @click="cancleFun" type="button" value="取消"/>
              <input id="sureDelete" @click="sureFun" class="sureUpdataPassword" type="button" value="确定"/>
            </slot>

        </div>
      </div>
  `,
  methods:{
    cancleFun(){
      this.$emit('close-pop');
    },
    sureFun(){
      this.$emit('next-fun');
    }
  }
});
var vm=new Vue({
  el:'#tsmodel',
  methods:{
    closeFun(){
      console.log(this);
      this.$el.style.display='none'
    },
    nextFun(){
        alert('点击了确定')
    }

  }
});
console.log(vm)

