<template>
    <div class="menuside">
        <!-- <a >{{itemname}}</a> -->
        <button type="primary" @click="sideclick(itemindex)">{{itemname}}--{{itemindex}}</button>
    </div>
</template>

<script>

import { Button } from 'ant-design-vue';

export default {
    name:'MenuSideItem',
    props:['itemname','itemindex'],
    components:{
        Button
    },
    methods: {
        sideclick(itemindex){
            this.$emit('routertocomponent',itemindex)
        }
    },
}
</script>

<style scoped>
.menuside{
    background-color: cadetblue;
    height: 40px;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    margin-bottom: 1px;
}
</style>
