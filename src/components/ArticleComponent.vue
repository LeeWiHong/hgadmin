<template>
    <div>
        <ArticleItem></ArticleItem>
    </div>
</template>

<script>

import ArticleItem from '../common/ArticleItem'

export default {
    name:'ArticleComponent',
    components:{
        ArticleItem
    },
    data() {
        return {
            data:[]
        }
    },
    methods: {
        getdata(){
            this.$http.get('')
        }
    },

    created() {
        this.getdata()
    },
}
</script>