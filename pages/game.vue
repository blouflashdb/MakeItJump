<script lang="ts" setup>
import type { BlockPosition, UseDraggablePosition } from "~/types/Position";

definePageMeta({
  layout: "gamelayout",
});

const blocks = ref<BlockPosition[]>([]);

function addBlock() {
  blocks.value.push({
    x: 0,
    y: 0,
    z: blocks.value.length + 1,
  });
}
</script>

<template>
  <UButton label="Add" color="primary" @click="addBlock" />
  <template v-for="block in blocks" :key="block.z">
    <DraggableBlock
      :initial-x="block.x"
      :initial-y="block.y"
      @move="(position: UseDraggablePosition) => { block.x = position.x; block.y = position.y; }"
    />
  </template>
</template>
