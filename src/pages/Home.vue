<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        products: [],
        loading: true
      }
    },
    async mounted() {
      this.products = await this.getProducts()
      this.loading = false
    },
    methods: {
    async getProducts()  {
    const {data} = await axios.get('https://dummyjson.com/products')
    return data.products
    }
    }
  }
</script>


<template>
  <section class="mt-24 w-full p-4 flex flex-wrap justify-between gap-2">
    <div v-for="product in products" :key="product.id" class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <router-link :to="`/product/${product.id}`">
    <img class="rounded-t-lg object-cover h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 w-full" :src="product.images[0]" alt="" />
  </router-link>
  <div class="p-5">
    <router-link :to="`/product/${product.id}`">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ product.title }}</h5>
    </router-link>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ product.description }}</p>
    <router-link :to="`/product/${product.id}`" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Read more
      <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
      </svg>
    </router-link>
  </div>
</div>
<div v-if="loading" role="status" class="w-full flex justify-center item-center min-h-screen">
    <svg aria-hidden="true" class="w-1/4 h-full mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-sky-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div>

  </section>
</template>
