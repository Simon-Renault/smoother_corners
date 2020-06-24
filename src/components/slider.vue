<template>
    <div class="slider">   
        <div class="container" ref="container">
            <div class="end"></div>
            <input  type="range" :min="min" 
                    :max="max" 
                    :step="step" 
                    :value="value" 
                    @input="($event) => $emit('input',$event.target.value)">
            <div class="end"></div>
        </div>
    </div>
</template>

<script>
export default {
    props : ['value','min','max','step'],
}
</script>
