<template>
  <div class="bg-gray-100 min-h-screen flex items-start justify-center pt-12">
    <div class="max-w-md w-full bg-white p-6 rounded-xl shadow-md">

      <h3 class="text-xl font-semibold mb-2">Quick Info Form</h3>
      <p class="text-gray-500 mb-4">
        Fill anything you’re comfortable sharing.
      </p>

      <form @submit.prevent="handleSubmit" class="space-y-4">

        <div>
          <label class="block text-sm font-medium text-gray-700">Name</label>
          <input
            v-model="form.name"
            type="text"
            placeholder="Your name"
            class="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Email</label>
          <input
            v-model="form.email"
            type="email"
            placeholder="example@mail.com"
            class="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Favorite Business
          </label>

          <div class="space-y-2">
            <label class="flex items-center space-x-2">
              <input type="radio" value="bfh" v-model="form.tech">
              <span>Business For Home</span>
            </label>

            <label class="flex items-center space-x-2">
              <input type="radio" value="online" v-model="form.tech">
              <span>Online Business</span>
            </label>

            <label class="flex items-center space-x-2">
              <input type="radio" value="market" v-model="form.tech">
              <span>Physical Market</span>
            </label>

            <label class="flex items-center space-x-2">
              <input type="radio" value="other" v-model="form.tech">
              <span>Other</span>
            </label>
            <input type="text" v-model="form.location" placeholder="-3.35677,33.9765782"/>
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">About you</label>
          <textarea
            v-model="form.about"
            placeholder="Write something..."
            class="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          ></textarea>
        </div>

        <button
          type="submit"
          class="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900 transition"
        >
          Submit
        </button>

      </form>

    </div>
  </div>
</template>

<script setup>
import { reactive,ref } from 'vue'
import axios from 'axios'

const form = reactive({
  name: '',
  email: '',
  tech: '',
  about: '',
  location: ''
})
const loading = ref(false)

const handleSubmit = () => {
  loading.value = true
  axios.post("http://35.232.150.120:2044/api/form", form)
    .then(resp => console.log(resp.data))
    .catch(err => console.error(err))
    .finally(() => loading.value = false)

  // Reset form (optional)
  form.name = ''
  form.email = ''
  form.tech = ''
  form.about = ''
  form.location = ''
}
</script>
