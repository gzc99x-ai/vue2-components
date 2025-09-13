<template>
  <div class="hello">
    
    <h3>表单组件</h3>
    <ul>
      <li class="item">
        <div @click.stop="goto( '/form/moreInput')">
          <span class="tit">多行输入</span>
          <span class="desc">输入框中按回车，生成一个list</span>
        </div>
      </li>
    </ul>
    
  </div>
</template>

<script>
export default {
  props: {
  },
  methods: {
    goto( path){
      this.$router.push({path: path, })
    }
  }
}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li.item {
  display: inline-block;
  margin: 0 10px;
  .tit{
    cursor: pointer;
    color: red;
  }
  .desc{
    color: #999;
    font-size: 12px;
    opacity: .7;
  }
}
a {
  color: #42b983;
}
</style>
