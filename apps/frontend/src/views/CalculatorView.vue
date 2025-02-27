<template>
  <div class="flex flex-col items-center justify-start mt-5 h-screen gap-5">
    <h1 class="text-2xl font-bold text-blue-600">Calculator</h1>
    <div class="flex flex-col gap-3 p-4 border rounded-lg shadow-md w-72">
      <div class="flex flex-col gap-1">
        <BaseTextField
          label="Result"
          :value="display"
          customClass="text-right font-mono text-lg"
          readonly
        />
        <div class="text-sm text-gray-500 h-4 text-right font-mono tracking-wide opacity-75">
          {{ operator || '' }}
        </div>
      </div>
      <div class="grid grid-cols-4 gap-2">
        <BaseButton
          v-for="btn in buttons"
          :key="btn"
          variant="secondary"
          @click="handleButtonClick(btn)"
          customClass="h-12 w-full"
        >
          {{ btn }}
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import BaseButton from '@/components/base/button/button.vue'
import BaseTextField from '@/components/base/text-field/textField.vue'

export default {
  components: {
    BaseButton,
    BaseTextField,
  },
  data() {
    return {
      display: '0',
      firstNumber: null as number | null,
      operator: null as string | null,
      waitingForSecondNumber: false,
      buttons: ['7', '8', '9', '÷', '4', '5', '6', '×', '1', '2', '3', '-', 'C', '0', '=', '+'],
    }
  },
  methods: {
    handleButtonClick(value: string) {
      if (value === 'C') {
        this.clear()
      } else if ('0123456789'.includes(value)) {
        this.inputNumber(value)
      } else if ('÷×+-'.includes(value)) {
        this.inputOperator(value)
      } else if (value === '=') {
        this.calculate()
      }
    },
    clear() {
      this.display = '0'
      this.firstNumber = null
      this.operator = null
      this.waitingForSecondNumber = false
    },
    inputNumber(num: string) {
      if (this.waitingForSecondNumber) {
        this.display = num
        this.waitingForSecondNumber = false
      } else {
        this.display = this.display === '0' ? num : this.display + num
      }
    },
    inputOperator(op: string) {
      if (this.firstNumber === null) {
        this.firstNumber = parseFloat(this.display)
      } else if (!this.waitingForSecondNumber) {
        this.calculate()
      }
      this.operator = op
      this.waitingForSecondNumber = true
    },
    calculate() {
      if (this.operator === null || this.firstNumber === null) return

      const secondNumber = parseFloat(this.display)
      let result: number

      switch (this.operator) {
        case '+':
          result = this.firstNumber + secondNumber
          break
        case '-':
          result = this.firstNumber - secondNumber
          break
        case '×':
          result = this.firstNumber * secondNumber
          break
        case '÷':
          result = secondNumber !== 0 ? this.firstNumber / secondNumber : 0
          break
        default:
          return
      }

      this.display = result.toString()
      this.firstNumber = result
      this.operator = null
    },
  },
}
</script>

<style scoped></style>
