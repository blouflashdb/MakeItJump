<script lang="ts" setup>
defineSlots<{
  default: {
    x: number;
    y: number;
  };
  test: {
    test: number;
  };
}>();

const x = ref(0);
const y = ref(0);
const test = ref(100);

function update(e: MouseEvent) {
  x.value = e.pageX;
  y.value = e.pageY;
};

onMounted(() => window.addEventListener("mousemove", update));
onUnmounted(() => window.removeEventListener("mousemove", update));
</script>

<template>
  <slot name="test" :test="test"></slot>
  <slot :x="x" :y="y"></slot>
</template>
