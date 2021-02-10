<template>
  <span class="inline-flex">
    <button aria-label="Color Mode">
      <client-only> todo </client-only>
    </button>
  </span>
</template>

<script>
import { onMounted } from 'vue'
export default {
  setup() {
    onMounted(() => {
      // TODO: remove hack
      document.body.parentElement.classList.add('dark-mode')
    })
  },
}
</script>
