<script setup></script>

<template>
  <section class="mt-8">
    <section>
      <div
        class="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-8 md:space-x-8"
      >
        <!-- Text content -->
        <div class="w-full md:w-1/2 text-center">
          <h1
            ref="text"
            class="text-3xl md:text-4xl font-bold mb-4 text-red-600"
          >
            Hi! I am Ivon P. Aro
          </h1>
          <p class="text-lg font-bold">
            A BSIT student at Cordova Public College.
          </p>
          <p class="text-lg font-semibold">and Web Developer</p>
        </div>
        <!-- Big image -->
        <div class="w-full md:w-1/2 flex justify-center">
          <img
            src="/ivon.png"
            alt="Portfolio Image"
            class="w-70 h-64 rounded-full shadow-xl"
          />
        </div>
      </div>
    </section>
    <section>
      <div class="container mx-auto mt-8">
        <h1 class="text-2xl font-bold mb-8 text-center text-gray-800">
          My Projects
        </h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <!-- Card 1 -->
          <div
            class="bg-slate-800 rounded-lg shadow-md overflow-hidden border border-black"
          >
            <img
              src="/chat.png"
              alt="Project 1"
              class="w-full h-48 object-cover"
            />
            <div class="p-4">
              <h2 class="text-xl font-bold mb-2 text-white">
                Recipes Website using Vue
              </h2>
              <p class="text-white">Description of project 1 goes here.</p>
            </div>
          </div>
          <!-- Card 2 -->
          <div
            class="bg-slate-800 rounded-lg shadow-md overflow-hidden border border-black"
          >
            <img
              src="/spotify.png"
              alt="Project 2"
              class="w-full h-48 object-cover"
            />
            <div class="p-4">
              <h2 class="text-xl font-bold mb-2 text-white">
                Spotify API using Node js
              </h2>
              <p class="text-white">Description of project 2 goes here.</p>
            </div>
          </div>
          <!-- Card 3 -->
          <div
            class="bg-slate-800 rounded-lg shadow-md overflow-hidden border border-black"
          >
            <img
              src="/uns.png"
              alt="Project 3"
              class="w-full h-48 object-cover"
            />
            <div class="p-4">
              <h2 class="text-xl font-bold mb-2 text-white">
                Calculator using Vue
              </h2>
              <p class="text-white">Description of project 3 goes here.</p>
            </div>
          </div>
          <!-- Card 4 -->
          <div
            class="bg-slate-800 rounded-lg shadow-md overflow-hidden border border-black"
          >
            <img
              src="/image.png"
              alt="Project 4"
              class="w-full h-48 object-cover"
            />
            <div class="p-4">
              <h2 class="text-xl font-bold mb-2 text-white">
                TODO App using Vue js
              </h2>
              <p class="text-white">Description of project 4 goes here.</p>
            </div>
          </div>
          <!-- Card 5 -->
          <div
            class="bg-slate-800 rounded-lg shadow-md overflow-hidden border border-black"
          >
            <img
              src="/crud.png"
              alt="Project 5"
              class="w-full h-48 object-cover"
            />
            <div class="p-4">
              <h2 class="text-xl font-bold mb-2 text-white">
                Weather App using Vue
              </h2>
              <p class="text-white">Description of project 5 goes here.</p>
            </div>
          </div>
          <!-- Card 6 -->
          <div
            class="bg-slate-800 rounded-lg shadow-md overflow-hidden border border-black"
          >
            <img
              src="/port.png"
              alt="Project 6"
              class="w-full h-48 object-cover"
            />
            <div class="p-4">
              <h2 class="text-xl font-bold mb-2 text-white">
                Portfolio Website - Vuejs
              </h2>
              <p class="text-white">Description of project 6 goes here.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<style></style>
