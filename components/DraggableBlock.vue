<script lang="ts" setup>
import { UseDraggable } from "@vueuse/components";
import type { UseDraggablePosition } from "~/types/Position";

defineProps<{
  initialX: number;
  initialY: number;
}>();

defineEmits<{
  move: [position: UseDraggablePosition];
}>();
</script>

<template>
  <UseDraggable
    class="fixed select-none cursor-move"
    :initial-value="{ x: initialX, y: initialY }"
    :prevent-default="true"
    @move="(position: UseDraggablePosition) => $emit('move', position)"
  >
    <Block />
  </UseDraggable>
</template>
