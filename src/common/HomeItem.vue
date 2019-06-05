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
const data = [
  {
    title: '用户总数',
    number:20
  },
  {
    title: '文章总数',
    number:40
  },
  {
    title: '分类总数',
    number:50
  },
  {
    title: '平台总数',
    number:60
  },
  {
    title: '建议总数',
    number:90
  }
]
export default {
  data () {
    return {
      data,
    }
  },
}
</script>
