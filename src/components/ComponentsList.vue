<template>
  <div class="hello">
    
    <h3>表单组件</h3>
    <ul>
      <li>
       <span data-path='/form/moreInput' @click="goto">多行输入</span>
      </li>
    </ul>
    
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  methods: {
    goto( e){
      const path = e.target.getAttribute('data-path')
      this.$router.push({path: path, })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  span{
    cursor: pointer;
    color: red;
  }
}
a {
  color: #42b983;
}
</style>
