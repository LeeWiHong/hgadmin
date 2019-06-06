<template>
    <div>
         <PublishHeader></PublishHeader>
        <PublishItem></PublishItem>
    </div>
</template>

<script>
import PublishItem from '../common/PublishItem'
import PublishHeader from '../common/PublishHeader'
export default {
    name:'PublishComponent',
    components:{
        PublishItem,
        PublishHeader
    }
}
</script>