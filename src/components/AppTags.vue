<template>
<span v-for="types in machineTypes.data" :key="types.id">
    <span v-for="tags in types.tags" :key="tags">
        <span v-if="machId === types.id"> {{tags}} </span>
    </span> 
</span>
     
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    props: ['machId'],
    computed: {
        ...mapGetters(['machineTypes'])
    }
}
</script>

<style>

</style>
