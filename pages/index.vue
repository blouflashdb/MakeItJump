<script lang="ts" setup>
import { UseDraggable } from "@vueuse/components";

const toast = useToast();
const { t } = useI18n();

function move(position: { x: number; y: number }) {
  if (position.x > 400)
    position.x = 400;
}
</script>

<template>
  <UseDraggable v-slot="{ x, y }" style="position: fixed" :prevent-default="true" @move="(position) => move(position)">
    Drag me! I am at {{ x }}, {{ y }}
    <UButton :label="t('Test')" @click="toast.add({ title: 'Hello world!' })" />
  </UseDraggable>
  <MouseTracker>
    <template #default="{ x, y }">
      Mouse is at: {{ x }}, {{ y }}
    </template>
    <template #test="{ test }">
      Mouse is at: {{ test }}
    </template>
  </MouseTracker>
  <Suspense>
    <template #fallback>
      <div>
        <span>Loading...</span>
      </div>
    </template>
  </Suspense>
</template>
