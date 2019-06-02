<template>
    <div>
        <div v-for="(item, index) in itemnames" :key="index">
            <MenuSideItem :itemname = 'item.itemname' :itemindex='index' @routertocomponent= "routertocomponent"></MenuSideItem>
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
            itemnames:[
                {itemname:'主页管理'},
                {itemname:'用户管理'},
                {itemname:'文章管理'},
                {itemname:'分类管理'},
                {itemname:'平台管理'},
                {itemname:'建议管理'},
            ]
        }
    },
    methods: {
        routertocomponent(itemindex){
            console.log(itemindex+'ffdfadfff')
            this.$emit('sideitemclick',itemindex)
        }
    },
}
</script>