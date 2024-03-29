<template>
  <div id="app">
    <nav class="flex items-center justify-between flex-wrap bg-white p-6">
      <div class="flex items-center flex-shrink-0 text-white">
        <router-link to="/" class="block mt-4 lg:inline-block text-6xl text-black font-bold ml-4 font-mono">
    <img src="/bike.png" alt="Logo" class="h-20 w-auto">
</router-link>

    <span class="font-semibold text-xl tracking-tight"></span>
    <!-- Add your brand name here -->
</div>

      <button
        @click="toggleNavbar"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        :aria-expanded="isNavbarOpen.toString()"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div
        class="w-full block lg:flex lg:w-auto justify-center"
        :class="{ hidden: !isNavbarOpen }"
      >
        <!-- Toggle visibility based on isNavbarOpen -->
        <div class="text-sm lg:flex-grow">
          <div class="text-center">
            <!-- Container to center the links -->
            <router-link
              class="block mt-4 lg:inline-block text-lg text-black hover:bg-sky-200 px-4 py-2 rounded-md mr-5 font-sans font-bold border-b md:border-none"
              :to="{ path: '/' }"
              active-class="active-link"
            >
              Home
            </router-link>
            <router-link
              class="block mt-4 lg:inline-block text-black text-lg hover:bg-sky-200 px-4 py-2 rounded-md mr-5 font-bold border-b md:border-none"
              :to="{ path: '/projects' }"
              active-class="active-link"
            >
              Projects
            </router-link>
            <router-link
              class="block mt-4 lg:inline-block  text-black text-lg hover:bg-sky-200 px-4 py-2 rounded-md mr-5 font-bold border-b md:border-none"
              :to="{ path: '/contacts' }"
              active-class="active-link"
            >
              Contact
            </router-link>
            <router-link
              class="block mt-4 lg:inline-block  text-black text-lg hover:bg-sky-200 px-4 py-2 rounded-md mr-5 font-bold border-b md:border-none"
              :to="{ path: '/about' }"
              active-class="active-link"
            >
              About
            </router-link>
          </div>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
  <footer id="foot" class="text-white rounded-lg shadow py-6 text-center">
  <h1 class="text-black text-center text-lg mb-4 font-bold">Follow Me</h1>
  <div class="flex justify-center">
    <!-- GitHub -->
    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" class="text-white  mx-2 mr-4">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-8 h-8 fill-current bg-slate-400">
        <path d="M12 0C5.4 0 0 5.4 0 12c0 5.3 3.4 9.8 8.1 11.4.6.1.9-.3.9-.6v-2.1c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.5-.3-5.1-1.3-5.1-5.9 0-1.3.5-2.4 1.2-3.2-.1-.4-.5-1.6.1-3.3 0 0 1.1-.3 3.5 1.3 1-.3 2-.4 3-.4s2 .1 3 .4c2.4-1.7 3.5-1.3 3.5-1.3.6 1.7.2 2.9.1 3.3.7.8 1.2 1.9 1.2 3.2 0 4.6-2.6 5.6-5.1 5.9.4.4.8 1.1.8 2.3v3.4c0 .3.3.7 1 .6C20.6 21.8 24 17.3 24 12c0-6.6-5.4-12-12-12z"/>
      </svg>
    </a>

    <!-- Facebook -->
    <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer" class="text-white mx-2  mr-4">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-10 h-10 fill-current bg-slate-400">
        <path d="M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h6v-8H9V9h3V7.26C12 5.26 13.12 4 15.5 4H18V2z"/>
      </svg>
    </a>

    <!-- Instagram -->
    <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer" class="text-white mx-2 mr-4 mb-6">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-8 h-8 fill-current bg-slate-400">
        <path d="M11.997 2.1c-2.9 0-3.3.1-4.5.2-1.2.1-2 .5-2.7 1.1-.8.7-1.2 1.5-1.3 2.7-.1 1.2-.1 1.7-.1 4.6s0 3.4.1 4.6c.1 1.2.5 2 .9 2.7.6.8 1.4 1.4 2.7 1.5 1.2.1 1.6.1 4.5.1s3.4-.1 4.6-.2c1.2-.1 2-.5 2.7-1.1.8-.7 1.2-1.5 1.3-2.7.1-1.2.1-1.7.1-4.6s0-3.4-.1-4.6c-.1-1.2-.5-2-.9-2.7-.6-.8-1.4-1.4-2.7-1.5-1.1-.1-1.6-.1-4.5-.1zM12 6.5c3 0 5.5 2.5 5.5 5.5s-2.5 5.5-5.5 5.5-5.5-2.5-5.5-5.5S9 6.5 12 6.5zm0 2.3c-1.8 0-3.3 1.5-3.3 3.3s1.5 3.3 3.3 3.3 3.3-1.5 3.3-3.3-1.5-3.3-3.3-3.3zM17 17h-1v-1h1v1zm2-8h-1v1h1V9z"/>
      </svg>
    </a>
  </div>
  <div>
    <h1 class="text-slate-600 font-sans font-bold text-center">© 2024. Vue.js Portfolio . Created by Ivon P. Aro</h1>
  </div>
</footer>

</template>

<script>
export default {
  data() {
    return {
      isNavbarOpen: false,
    };
  },
  methods: {
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    },
  },
};
</script>

<style scoped>
.active-link {
  border-bottom: 2px solid white;
}
</style>
