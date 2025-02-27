<template>
  <button
    :type="type as 'button' | 'submit' | 'reset'"
    :class="[
      'px-4 py-2 rounded-md transition-colors duration-200',
      variant === 'primary' ? 'bg-blue-500 hover:bg-blue-600 text-white' : '',
      variant === 'secondary' ? 'bg-gray-200 hover:bg-gray-300 text-gray-800' : '',
      disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
      customClass,
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <div class="flex items-center gap-2">
      <slot name="leftIcon"></slot>
      <slot>Default Button</slot>
    </div>
  </button>
</template>

<script lang="ts">
export default {
  name: 'BaseButton',
  props: {
    type: {
      type: String,
      default: 'button',
      validator: (value: string) => ['button', 'submit', 'reset'].includes(value),
    },
    variant: {
      type: String,
      default: 'primary',
      validator: (value: string) => ['primary', 'secondary'].includes(value),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    customClass: {
      type: String,
      default: '',
    },
  },
  emits: ['click'],
  methods: {
    handleClick(event: MouseEvent) {
      if (!this.disabled) {
        this.$emit('click', event)
      }
    },
  },
}
</script>
