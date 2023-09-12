<template>
  <slot></slot>
</template>

<style lang="css">
body {
  @apply h-screen w-screen;
  --c: 25;
  background:
  repeating-linear-gradient(#0002 0 0.5px, #0000 0 calc(100vh / var(--c) - 0.5px), #0002 0 calc(100vh / var(--c))),
  repeating-linear-gradient(to right, #0002 0 0.5px, #0000 0 calc(100vw / var(--c) - 0.5px), #0002 0 calc(100vw / var(--c)));
}
</style>
