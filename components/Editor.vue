<script lang="ts" setup>
import * as Monaco from "monaco-editor";

interface Emits {
  (event: "update:modelValue", value: string): void;
}

const props = defineProps<{
  modelValue: string;
}>();

const emit = defineEmits<Emits>();

let editor: Monaco.editor.IStandaloneCodeEditor;
const editorElement = ref<HTMLElement>();

onMounted(async () => {
  editor = Monaco.editor.create(editorElement.value!, {
    language: "powershell",
    value: props.modelValue,
  });

  editor.onDidChangeModelContent(() => {
    emit("update:modelValue", editor.getValue());
  });
});

onUnmounted(() => {
  editor?.dispose();
});
</script>

<template>
  <div ref="editorElement" class="editor">
  </div>
</template>

<style>
.editor {
  @apply w-screen h-screen
}
</style>
