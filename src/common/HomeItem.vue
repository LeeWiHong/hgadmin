<template>
  <a-list
    :grid="{ gutter: 16, column: 4 }"
    :dataSource="data"
  >
    <a-list-item slot="renderItem" slot-scope="item, index">
      <a-card :title="item.title">{{item.number}}</a-card>
    </a-list-item>
  </a-list>
</template>
<script>

export default {
  data () {
    return {
      data:{}
    }
  },
  methods: {
    getsummarydata(){
      this.$http.get('api/allsummary',{headers:{token:localStorage.getItem("token")}}).then(response =>{
            this.data = response.data.data
           }).catch(error =>{
               console.log(error)
           })
    }
  },
  mounted() {
    this.getsummarydata()
  },
}
</script>
