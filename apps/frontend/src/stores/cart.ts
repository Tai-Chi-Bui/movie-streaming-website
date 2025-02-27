import { defineStore } from 'pinia'

interface CartItem {
  id: number
  name: string
  price: number
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[],
    total: 0,
  }),
  getters: {
    itemCount: (state) => state.items.length,
    cartTotal: (state) => state.items.reduce((total, item: any) => total + item.price, 0),
  },
  actions: {
    addItem(item: CartItem) {
      this.items.push(item)
      this.total += item.price
    },
    removeItem(item: CartItem) {
      this.items = this.items.filter((i: CartItem) => i !== item)
      this.total -= item.price
    },
  },
})

// how to use the store
// const cartStore = useCartStore()
// cartStore.addItem({ id: 1, name: 'Product 1', price: 100 })
// console.log(cartStore.itemCount)
// console.log(cartStore.cartTotal)
