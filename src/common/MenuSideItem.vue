<template>
    <div class="menuside">
        <a >{{itemname}}</a>
    </div>
</template>

<script>
export default {
    name:'MenuSideItem',
    props:['itemname']
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
