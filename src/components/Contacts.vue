<template>
   <section class="bg-white py-12">
  <div class="max-w-4xl mx-auto px-4">
    <h1 class="text-3xl font-bold text-center text-gray-800 mb-6">Contacts</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Contact Information -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">Contact Information</h2>
        <p class="text-gray-700 mb-2"><i class="fas fa-envelope mr-2"></i>ivonaro@gmail.com</p>
        <p class="text-gray-700 mb-2"><i class="fas fa-phone mr-2"></i>+1234567890</p>
        <p class="text-gray-700 mb-2"><i class="fas fa-map-marker-alt mr-2"></i>Catarman, Cordova, Cebu</p>
      </div>

      <!-- Contact Form -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">Send a Message</h2>
        <form>
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" name="name" class="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
          </div>
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" class="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
          </div>
          <div class="mb-4">
            <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" name="message" rows="4" class="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
          </div>
          <button type="submit" class="inline-block px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">Send Message</button>
        </form>
      </div>
    </div>
  </div>
</section>

  </template>
  
  <style>

  </style>
  