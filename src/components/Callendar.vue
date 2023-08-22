<template>
    <div class="month-wrap">
        <div class="cal"><span class="month">{{this.month}}</span>
        <div class="week"></div>
        <div class="week"></div>
        <div class="week"></div>
        <div class="week"></div>
        <div class="week"></div>
        </div>
    </div>
</template>

<script>
    export default{
        props:{
            month: {
            type: String,
            default: "bibi"
            }
        }
    }
</script>
