<template>
    <span class="icon">

        <svg class="icon__inner" viewBox="0 0 24 24" width="24px" height="24px"><path :d="d" :fill="colorIcon"/></svg>

        <v-smooth :roundness="roundness"  :color="color" ></v-smooth>
    </span>
</template>

<script>
import smooth from './smooth'
export default {
    props : ['roundness','color','colorIcon','d'],
    components : {
        'v-smooth' : smooth
    }
}
</script>

<style lang="scss" scoped>

</style>