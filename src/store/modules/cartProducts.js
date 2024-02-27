import productsList from '@/modules/productsList'

export default ({
  state: {
    CountProductsInBasket: JSON.parse(localStorage.getItem('countProductsInBasket')) || 0,
    AllPricePoductsInBasket: JSON.parse(localStorage.getItem('allPricePoductsInBasket')) || 0,
    Products: productsList,
    BasketProducts: JSON.parse(localStorage.getItem('basket')) || [],
    ItemPageInfo: {}
  },
  getters: {
    getCountProductsInBasket: state => state.CountProductsInBasket,
    getAllPricePoductsInBasket: state => state.AllPricePoductsInBasket,
    getProducts: state => state.Products,
    getBasketProducts: state => state.BasketProducts,
    getItemPageInfo: state => state.ItemPageInfo,
    getIsProductInBasket: (state) => (id) => {
      const findexProduct = state.BasketProducts.find(item => item.id === id)
      return !!findexProduct
    }
    // getSingleProductsById: (state) => (id) => { // роутер
    //   return state.Products.find(item => item.id === Number(id))
    // }
  },
  mutations: {
    SetBasketProducts (state, id) {
      const indexProductInBasket = state.BasketProducts.findIndex((product) => product.id === id)

      if (indexProductInBasket === -1) {
        const currentProduct = state.Products.find((product) => product.id === id)
        currentProduct.basketCount = 1
        state.BasketProducts.push(currentProduct)

        localStorage.setItem('basket', JSON.stringify(currentProduct))
      } else {
        state.BasketProducts[indexProductInBasket].basketCount += 1
      }

      state.CountProductsInBasket = state.BasketProducts.reduce((acc, el) => {
        return (el.basketCount) + acc
      }, 0)

      state.AllPricePoductsInBasket = state.BasketProducts.reduce((acc, el) => {
        return (el.price * el.basketCount) + acc
      }, 0)

      localStorage.setItem('basket', JSON.stringify(state.BasketProducts))
      localStorage.setItem('countProductsInBasket', JSON.stringify(state.CountProductsInBasket))
      localStorage.setItem('allPricePoductsInBasket', JSON.stringify(state.AllPricePoductsInBasket))
    },
    SetRemoveBasketProducts (state, id) {
      state.BasketProducts = state.BasketProducts.filter(item => item.id !== id)

      state.CountProductsInBasket = state.BasketProducts.reduce((acc, el) => {
        return (el.basketCount) + acc
      }, 0)

      state.AllPricePoductsInBasket = state.BasketProducts.reduce((acc, el) => {
        return (el.price * el.basketCount) + acc
      }, 0)

      localStorage.setItem('basket', JSON.stringify(state.BasketProducts))
      localStorage.setItem('countProductsInBasket', JSON.stringify(state.CountProductsInBasket))
      localStorage.setItem('allPricePoductsInBasket', JSON.stringify(state.AllPricePoductsInBasket))
    },

    SetPlusBasketProducts (state, id) {
      state.BasketProducts.forEach((item, ind) => {
        if (item.id === id) {
          state.BasketProducts[ind].basketCount += 1

          state.AllPricePoductsInBasket = state.BasketProducts.reduce((acc, el) => {
            return (el.price * el.basketCount) + acc
          }, 0)

          state.CountProductsInBasket = state.BasketProducts.reduce((acc, el) => {
            return (el.basketCount) + acc
          }, 0)

          localStorage.setItem('basket', JSON.stringify(state.BasketProducts))
          localStorage.setItem('countProductsInBasket', JSON.stringify(state.CountProductsInBasket))
          localStorage.setItem('allPricePoductsInBasket', JSON.stringify(state.AllPricePoductsInBasket))
        }
      })
    },

    SetMinusBasketProducts (state, id) {
      state.BasketProducts.forEach((item, ind) => {
        if (item.id === id) {
          state.BasketProducts[ind].basketCount -= 1

          state.AllPricePoductsInBasket = state.BasketProducts.reduce((acc, el) => {
            return (el.price * el.basketCount) + acc
          }, 0)

          state.CountProductsInBasket = state.BasketProducts.reduce((acc, el) => {
            return (el.basketCount) + acc
          }, 0)

          localStorage.setItem('basket', JSON.stringify(state.BasketProducts))
          localStorage.setItem('countProductsInBasket', JSON.stringify(state.CountProductsInBasket))
          localStorage.setItem('allPricePoductsInBasket', JSON.stringify(state.AllPricePoductsInBasket))
        }
      })
    },
    SetOpenNewItem (state, id) {
      state.ItemPageInfo = state.Products[state.Products.findIndex((product) => product.id === id)]
    },
    SetOpenNewItemInBasket (state, id) {
      state.ItemPageInfo = state.BasketProducts[state.BasketProducts.findIndex((product) => product.id === id)]
    },
    SetItemIsOrdered (state) {
      console.log(state.BasketProducts.length)
      if (state.BasketProducts.length > 0) {
        alert('Ваш заказ успешно осуществлен!')

        state.BasketProducts = []
        state.CountProductsInBasket = 0
        state.AllPricePoductsInBasket = 0

        localStorage.setItem('basket', JSON.stringify(state.BasketProducts))
        localStorage.setItem('countProductsInBasket', JSON.stringify(state.CountProductsInBasket))
        localStorage.setItem('allPricePoductsInBasket', JSON.stringify(state.AllPricePoductsInBasket))
      }
    },
    SetPlusInBasketProductsWithItemPage (state) {
      const indexProductInBasket = state.BasketProducts.findIndex((product) => product.id === state.ItemPageInfo.id)
      console.log(indexProductInBasket)

      if (indexProductInBasket === -1) {
        state.BasketProducts.push(state.ItemPageInfo)
        console.log(state.BasketProducts)
      } else {
        state.BasketProducts[indexProductInBasket].basketCount += 1
        console.log(state.BasketProducts)
      }

      state.AllPricePoductsInBasket = state.BasketProducts.reduce((acc, el) => {
        return (el.price * el.basketCount) + acc
      }, 0)

      state.CountProductsInBasket = state.BasketProducts.reduce((acc, el) => {
        return (el.basketCount) + acc
      }, 0)

      localStorage.setItem('basket', JSON.stringify(state.BasketProducts))
      localStorage.setItem('countProductsInBasket', JSON.stringify(state.CountProductsInBasket))
      localStorage.setItem('allPricePoductsInBasket', JSON.stringify(state.AllPricePoductsInBasket))
    },
    SetMinusInBasketProductsWithItemPage (state) {
      state.BasketProducts = state.BasketProducts.filter(item => item.id !== state.ItemPageInfo.id)

      state.CountProductsInBasket = state.BasketProducts.reduce((acc, el) => {
        return (el.basketCount) + acc
      }, 0)

      state.AllPricePoductsInBasket = state.BasketProducts.reduce((acc, el) => {
        return (el.price * el.basketCount) + acc
      }, 0)

      localStorage.setItem('basket', JSON.stringify(state.BasketProducts))
      localStorage.setItem('countProductsInBasket', JSON.stringify(state.CountProductsInBasket))
      localStorage.setItem('allPricePoductsInBasket', JSON.stringify(state.AllPricePoductsInBasket))
    }
  },
  actions: {
  }
})
