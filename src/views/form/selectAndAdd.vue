<template>
  <div class="area">
    <div class="select-area">
      <div class="select-box">
        <input type="text" placeholder="请选择内容" v-model="textValue" class="select-input">
        <span class="clear-btn btn" v-if="!emptyValue" @click="clearValue">x</span>
        <span class="empty-btn btn" v-if="emptyValue"></span>
      </div>
      <div class="more-select">
        <ul class="select-list">
          <li class="select-item" v-for="(item, index) in selectList" :key="index" @click="textValue = item.name">
            {{ item.name }}
          </li>
        </ul>
        <div class="add">添加 ></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
  },
  computed: {
    emptyValue() {
      return this.textValue === ''
    }
  },
  data() {
    return {
      textValue: '',
      selectList: [
        { name: '选项1' },
        { name: '选项2' },
        { name: '选项3' },
        { name: '选项4' },
        { name: '选项5' },
        { name: '选项6' },
        { name: '选项7' },
        { name: '选项8' },
        { name: '选项9' },
        { name: '选项10' },
      ]
    }
  },
  methods: {
    clearValue(){
      this.textValue = '';
    }
  },
}
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}

$border-line: 1px solid #cccccc61;
$base-color: #2d6aff;
$base-width: 200px;
.area {

  .select-area {
    margin: 0 auto;
    width: $base-width;
    position: relative;
    text-align: left;

    .select-box {
      position: relative;
      .select-input {
        padding: 6px 7px;
        border-radius: 4px;
        border: $border-line;
        outline: none;
        width: 100%;
        box-sizing: border-box;
      }

      .select-input:focus {
        border-color: $base-color
      }
      .btn{
        position: absolute;
        right: 6px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
      }
      .empty-btn{
        display: inline-block;
        height: 10px;
        width: 10px;
        background: url('~@/assets/img/form/down.svg');
        background-repeat: no-repeat;
      }
      .clear-btn {
        
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #938a8a;
        font-size: 11px;
        color: white;
        text-align: center;
        line-height: 9px;
        padding: 2px;
      }
    }

    .more-select {
      border: $border-line;
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
      border-top: none;
      margin-top: 6px;
      position: fixed;
      width: $base-width;
    }

    .select-list {
      max-height: $base-width;
      overflow-y: auto;

    }

    .select-item {
      cursor: pointer;
      list-style: none;
      padding: 4px 10px;
      font-size: 14px;
      color: RGB(var(--skin-css-var-M1, 14, 17, 20))
    }

    .select-item:hover {
      background-color: #eee;
    }

    .add {
      border-top: 1px solid rgb(var(--skin-css-var-M7, 240, 242, 245));
      cursor: pointer;
      color: $base-color;
      padding: 4px 10px;
      font-size: 14px;
    }
  }

}
</style>
