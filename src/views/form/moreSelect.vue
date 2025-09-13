<template>
  <div class="area">

    <div class="tab-wrapper">
      <div class="tab-list">
        <div class="tab-title">

          <div class="tab" :class="{ actTab: activeName === 'online' }" @click="activeHandler('online')">
            在线
          </div>
          <div class="tab" :class="{ actTab: activeName === 'offline' }" @click="activeHandler('offline')">
            离线
          </div>

          <input type="text" v-model="searchText" placeholder="搜索" class="search-ipt" />
        </div>
        <div class="tab-box">
          <el-tree v-if="activeName === 'online'" :data="userListOnline" show-checkbox node-key="id" 
            ref="onlineTree" 
            :default-expand-all="true"
            :check-strictly="false"
            @check-change="handleCheckChange"
            :props="defaultProps">
          </el-tree>

          <el-tree v-if="activeName === 'offline'" :data="userListOffline" show-checkbox node-key="id" 
            ref="offlineTree" 
            :default-expand-all="true"
            :check-strictly="false"
            @check-change="handleCheckChange"
            :props="defaultProps">
          </el-tree>

        </div>
      </div>
      <div class="selected-list">
        <div class="selected-title">
          已选：{{ activedItem.length }}项 
          <span class="clear-all" @click="clearAllActived">清空</span>
        </div>
        <div class="selected-box">
          <span class="selected-item" v-for="(value, index) in activedItem" :key="'act-itm' + index">
            {{ value.label }}<i class="el-icon-close" @click="removeActivedItem(index)"></i>
          </span>
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
      searchText: '',
      activeName: 'online',
      tabs: [
        { value: 'online', label: '在线' },
        { value: 'offline', label: '离线' },
      ],

      userListOnline: [{
        id: 1,
        label: '人事部',
        children: [{
          id: 4,
          label: 'HRM',
          children: [{
            id: 9,
            label: '张三'
          }, {
            id: 10,
            label: '李四'
          }]
        }, {
          id: 2,
          label: 'HRBP',
          children: [{
            id: 5,
            label: '王五'
          }, {
            id: 6,
            label: '赵六'
          }]
        }]
      }, {
        id: 3,
        label: '技术部',
        children: [{
          id: 7,
          label: '李七'
        }, {
          id: 8,
          label: '罗八'
        }]
      }],

      userListOffline: [{
        id: 11,
        label: '运营部',
        children: [{
          id: 14,
          label: '运营1部',
          children: [{
            id: 19,
            label: '张三'
          }, {
            id: 110,
            label: '李四'
          }]
        }, {
          id: 12,
          label: '运营2部',
          children: [{
            id: 15,
            label: '王五'
          }, {
            id: 16,
            label: '赵六'
          }]
        }]
      }, {
        id: 13,
        label: '技术部',
        children: [{
          id: 17,
          label: '李七七'
        }, {
          id: 18,
          label: '罗八八'
        }]
      }],

      defaultProps: {
        children: 'children',
        label: 'label'
      },
      activedItem: [],
    }
  },
  methods: {
    getTree(){
      let ref = null
      if( this.activeName == 'online'){
        ref = this.$refs.onlineTree
      }else{
        ref = this.$refs.offlineTree
      }
      return ref
    },
    setCheckedNodes( e) {
      let that = this
      this.$nextTick( () => {
        that.getTree().setCheckedNodes( e);
      })
      
    },
    handleCheckChange(data, checked) {
      if( Object.keys( data).includes('children')){
        return
      }
      if( checked){
        this.activedItem.push(data)
      }else{
        this.activedItem = this.activedItem.filter(item => item.id !== data.id)
      }
      this.setCheckedNodes(this.activedItem);
    },
    activeHandler(val) {
      this.activeName = val;
      this.activedItem = [];
      this.setCheckedNodes(this.activedItem);
    },
    clearAllActived() {
      this.activedItem = [];
      this.setCheckedNodes(this.activedItem);
    },
    removeActivedItem( index){
      this.activedItem.splice(index, 1)
      this.setCheckedNodes(this.activedItem);
    },
  },
}
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}

$border-line: 1px solid #ccc;
$base-color: #2d6aff;

.area {
  .tab-wrapper {
    display: flex;
    border: $border-line;
    margin: 0 auto;
    width: 600px;
    border-radius: 4px;
    .selected-list,
    .tab-list {
      display: inline-block;
      box-sizing: border-box;
    }

    .selected-title,
    .tab-title {
      padding: 10px;
      height: 45px;
      box-sizing: border-box;
    }

    .tab-box,
    .selected-box {
      height: 300px;
    }

    .tab-list {
      width: 65%;
      border-right: $border-line;

      .tab-title {
        border-bottom: $border-line;
        padding-bottom: 0px;
        text-align: left;
        position: relative;
        padding-left: 15px;

        .tab {
          display: inline-block;
          margin-right: 10px;
          padding: 0 10px;
          height: 100%;
          margin-top: -2px;
          cursor: pointer;
        }

        .tab:hover {
          color: $base-color;
        }

        .actTab {
          border-bottom: 4px solid $base-color;
          color: $base-color;
        }

        .search-ipt {
          padding: 8px;
          border-radius: 4px;
          border: $border-line;
          position: absolute;
          top: 50%;
          right: 10px;
          transform: translateY(-50%);
          outline: none;
        }
      }

      .tab-box {
        padding: 8px 15px;
        overflow-y: scroll;

        ::v-deep {

          .el-checkbox__input.is-checked .el-checkbox__inner,
          .el-checkbox__input.is-indeterminate .el-checkbox__inner {
            background-color: $base-color;
            border-color: $base-color;
          }
        }
      }
    }

    .selected-list {
      width: 35%;

      .selected-title {
        border-bottom: $border-line;
        text-align: left;

        .clear-all {
          color: $base-color;
          cursor: pointer;
        }
      }

      .selected-box {
        padding-top: 10px;
        padding-left: 10px;
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;

        .selected-item {
          min-width: 62px;
          display: inline-block;
          padding: 2px 4px;
          margin-right: 10px;
          opacity: .8;
          background-color: aliceblue;
          margin-bottom: 10px;
          height: 24px;
          box-sizing: border-box;
          line-height: 24px;
          border-radius: 4px;

          i {
            cursor: pointer;
          }
        }
      }
    }

  }
}
</style>
