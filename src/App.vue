<script setup>
</script>

<template>
  <router-view v-slot="{Component}">
    <Transition name="Uscroll">
      <component :is="Component" />
    </Transition>
  </router-view>
</template>
<style scoped>
.Uscroll-enter-active,
.Uscroll-leave-active {
  transition: opacity 0.5s ease;
  /* background-color: #3c2041; */
}

.Uscroll-enter-from,
.Uscroll-leave-to {
  opacity: 1;
}
</style>