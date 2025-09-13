<template>
  <div class="area">

    <div class="tab-wrapper">
      <div class="tab-list">
        <div class="tab-title">
          <div class="tab">在职</div>
          <div class="tab">离职</div>
        </div>
        <div class="tab-box"> 
        </div>
      </div>
      <div class="selected-list">
        <div class="selected-title">已选：3项 <span class="clear-all">清空</span></div>
        <div class="selected-box">
          <span class="selected-item">张三  <i class="el-icon-close"></i> </span>
          <span class="selected-item">张三  <i class="el-icon-close"></i> </span>
          <span class="selected-item">张三  <i class="el-icon-close"></i> </span>
          <span class="selected-item">张三  <i class="el-icon-close"></i> </span>
          <span class="selected-item">张三  <i class="el-icon-close"></i> </span>
          <span class="selected-item">张三  <i class="el-icon-close"></i> </span>
        </div>
        
      </div>
    </div>


  </div>
</template>

<script>

export default {
  props: {
  },
  data() {
    return {
      activeName: 'online',
      tabs: [
        { value: 'online', label: '在线'},
        { value: 'offline', label: '离线'},
      ],
    }
  },
  methods: {
  },
}
</script>

<style scoped lang="scss">
*{
  margin:0;padding:0;
}
$border-line: 1px solid #ccc;
.area {
  .tab-wrapper { 
    display: flex;
    border: $border-line;
    .selected-list, .tab-list{
      display: inline-block;
      box-sizing: border-box;
    }
    .selected-title,.tab-title{
      padding: 10px;
    }
    .tab-box, .selected-box{ 
      height: 300px;
    }
    .tab-list{
      width:65%;
      .tab-title{
        border-bottom: $border-line;
        border-right: $border-line;
        .tab{
          display: inline-block;
          width: 100px;
        }
      }
      
    }
    
    .selected-list{
      width: 35%;
      .selected-title{
        border-bottom: $border-line;
        text-align: left;
        .clear-all{
          color: blue;
          cursor: pointer;
        }
      }

      .selected-box{
        display: flex;
        padding-top: 10px;
        padding-left: 10px;
        .selected-item{
          display: inline-block;
          padding:2px 4px;margin-right: 10px;
          opacity: .8;
          background-color: aliceblue;
          cursor: pointer;
          height: 24px;
          line-height: 24px;
          
        }
      }
    }
    
  }
}
</style>
