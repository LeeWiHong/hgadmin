<template>
    <div>
        <a-row type="flex" justify="center" align="buttom">
          <a-col :span="4">
              <a>用户总数</a>
              <a-progress type="circle" :percent="75" :format="percent => `${percent} Days`"/>
          </a-col>
          <a-col :span="4">
              <a>用户总数</a>
              <a-progress type="circle" :percent="75" :format="percent => `${percent} Days`"/>
          </a-col>
          <a-col :span="4">
              <a>用户总数</a>
              <a-progress type="circle" :percent="75" :format="percent => `${percent} Days`"/>
          </a-col>
          <a-col :span="4">
              <a>用户总数</a>
              <a-progress type="circle" :percent="75" :format="percent => `${percent} Days`"/>
          </a-col>
          <a-col :span="4">
              <a>用户总数</a>
              <a-progress type="circle" :percent="75" :format="percent => `${percent} Days`"/>
          </a-col>
          <a-col :span="4">
              <a>用户总数</a>
              <a-progress type="circle" :percent="100" :format="percent => `${percent} Days`"/>
          </a-col>
        </a-row>
    </div>
</template>

<script>
export default {
    name:'HomeItem'
}
</script>

<style scoped>
  div.ant-progress-circle,
  div.ant-progress-line {
    margin-right: 8px;
    margin-bottom: 8px;
  }
</style>