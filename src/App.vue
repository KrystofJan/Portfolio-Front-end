<script>
export default{
  methods: {
    oOp(comp){
      console.log(comp)
    }
  }
}
</script>

<template>
  <!--TODO: Add route-link arrow  -->
  <router-view v-slot="{Component}">
    <Transition name="Uscroll">
      <component :is="Component" />
    </Transition>
  </router-view>
</template>
<style scoped>
/* .Uscroll-enter-active,
.Uscroll-leave-active {
  transition: opacity 2s ease;
}

.Uscroll-enter-from,
.Uscroll-leave-to {
  opacity: 1;
} */
</style>