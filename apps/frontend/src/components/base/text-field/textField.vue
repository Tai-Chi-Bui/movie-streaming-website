<template>
  <div class="flex flex-col gap-1">
    <label v-if="label" class="text-sm font-medium text-gray-700">{{ label }}</label>
    <input
      type="text"
      :value="value"
      :placeholder="placeholder"
      :class="[
        'px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors duration-200',
        variant === 'primary' ? 'border-gray-300 focus:border-blue-500 focus:ring-blue-500/20' : '',
        variant === 'secondary'
          ? 'border-gray-200 focus:border-gray-500 focus:ring-gray-500/20'
          : '',
        error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : '',
        customClass,
      ]"
      :readonly="readonly"
      @input="handleInput"
    />
    <span v-if="error" class="text-sm text-red-500">{{ error }}</span>
  </div>
</template>

<script lang="ts">
export default {
  name: 'BaseTextField',
  props: {
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    error: {
      type: String,
      default: '',
    },
    variant: {
      type: String,
      default: 'primary',
      validator: (value: string) => ['primary', 'secondary'].includes(value),
    },
    customClass: {
      type: String,
      default: '',
    },
    readonly: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:value'],
  methods: {
    handleInput(event: Event) {
      this.$emit('update:value', (event.target as HTMLInputElement).value)
    },
  },
}
</script>
