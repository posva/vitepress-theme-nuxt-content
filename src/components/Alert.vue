<template>
  <div class="alert border-l-4 p-4 mb-4 mt-4" :class="`alert-${type}`">
    <div class="flex items-start">
      <div class="flex-shrink-0">
        <component :is="icon" class="alert-icon mt-px w-6 h-6" />
      </div>
      <div class="flex-grow ml-2 overflow-auto alert-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'info',
      validator(value) {
        return ['info', 'success', 'warning', 'danger'].includes(value)
      },
    },
  },
  computed: {
    icon() {
      return {
        info: 'IconInformationCircle',
        success: 'IconCheckCircle',
        warning: 'IconExclamationCircle',
        danger: 'IconXCircle',
      }[this.type]
    },
  },
}
</script>
