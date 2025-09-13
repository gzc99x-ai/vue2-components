<template>
  <div class="area">
  <div class="textarea-box" @click="selectInput">
      <span class="item" v-for="(item, index) in itemList" :key="index">
        {{item}}
        <i class="el-icon-close" @click="removeItem(index)"></i>
      </span>
      <div contenteditable="true" 
        @input="handleInput" @focus="handleClearBtnVisible" @blur="handleClearBtnVisible"
        class="input-box" id="inputBox"></div>

      <i class="el-icon-close" id="clearAll" @click="clearAllData"></i>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  props: {
  },
  data(){
    return {
      itemList: [],
    }
  },
  methods: {
    hasVal(){
      if( this.itemList.length > 0  || $('#inputBox').text() != ''){
        return true
      }
      return false
    },
    handleClearBtnVisible(){
      if( this.hasVal() ){
        this.showClearBtn()
      }else{
        this.hiddenClearBtn()
      }
    },
    showClearBtn(){
      $('#clearAll').css('display', 'block')
    },
    hiddenClearBtn(){
      $('#clearAll').css('display', 'none')
    },
    clearAllData(){
      if( $('#inputBox').text() == '' && this.itemList.length == 0){
        return
      }
      this.itemList = []
      $('#inputBox').text('')
      $('#inputBox').focus()
    },
    removeItem(index){
      this.itemList.splice(index, 1)
    },
    handleInput(e){
      const text = e.target.innerText
      if( text.endsWith('\n') && text.length == 2){
        e.target.innerText = ''
        if( this.itemList.length == 0){
          this.hiddenClearBtn()
        }
        return
      }
      if(text.endsWith('\n') && text.trim() === ''){
        if( this.itemList.length == 0){
          this.hiddenClearBtn()
        }
        return
      }
      if(text.endsWith('\n')){
        this.itemList.push(text.trim())
        e.target.innerText = ''
      }
      this.showClearBtn()
    },
    selectInput() {
      document.getElementById('inputBox').focus();
    },
  },
}
</script>

<style scoped lang="scss">
.area{
  .textarea-box{
    width: 300px;
    min-height: 200px;
    border: 1px solid #ccc;
    padding: 10px;
    font-size: 14px;
    text-align: left;
    outline: none;
    position: relative;
    margin:0 auto;
    .input-box{
      display: inline-block; min-width: 20px; outline: none;
      padding-top: 4px;
    }
    #clearAll{
      position: absolute;
      right: 4px;
      top: 50%;
      transform: translateY(-50%);
      display: none;
    }
    .item{
      display: inline-block;
      background: #f0f0f0;
      padding: 5px 10px;
      border-radius: 4px;
      margin-right: 5px;
      margin-bottom: 4px;
      box-sizing: border-box;
      line-height: 16px;
      .el-icon-close{
        margin-left: 5px;
        cursor: pointer;
      }
    }
  }
}
</style>
