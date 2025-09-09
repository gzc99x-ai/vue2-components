<template>
  <div class="area">
    <div contenteditable class="textarea-box" @input="handleInput">
      <span class="item" v-for="(item, index) in itemList" :key="index">
        {{item}}
        <i class="el-icon-close" @click="removeItem(index)"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
  },
  data(){
    return {
      itemList: [],
    }
  },
  methods: {
    removeItem(index){
      this.itemList.splice(index, 1)
    },
    handleInput(e){
      const text = e.target.innerText
      console.log('text===>',text)
      if(text.endsWith('\n')){
        this.itemList.push(text.trim())
        e.target.innerText = ''
        console.log('itemList===>',this.itemList)
      }
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
    .item{
      display: inline-block;
      background: #f0f0f0;
      padding: 5px 10px;
      border-radius: 4px;
      margin: 5px;
      .el-icon-close{
        margin-left: 5px;
        cursor: pointer;
      }
    }
  }
}
</style>
