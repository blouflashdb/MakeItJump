<script lang="ts" setup>
const value = ref("");
</script>

<template>
  <div>
    <input v-model="value">
    <p>{{ value }}</p>
  </div>
</template>
