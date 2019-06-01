<template>
    <div>
        <div v-for="(item, index) in itemnames" :key="index">
            <MenuSideItem :itemname = 'item'></MenuSideItem>
        </div>
       
    </div>
</template>

<script>
import MenuSideItem from '../common/MenuSideItem'

export default {
    name:'Menu',
    components:{
        MenuSideItem
    },
    data() {
        return {
            itemnames:['主页管理','用户管理','文章管理','分类管理','平台管理','建议管理']
        }
    },
}
</script>