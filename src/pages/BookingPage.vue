<script setup lang="ts">

</script>

<template>
    <div>
        <h1>Book your stay</h1>
        <p>
            Please request your stay through this form. The office admin will contact you for additional details and confirmation. 
        </p>
        <form class="w-full max-w-sm">
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label for="name" class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                        Name
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input id="name" v-model="text" placeholder="Name" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                </div>
            </div>

            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label for="phone" class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                        Phone number
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input id="phone" v-model="text" placeholder="+47 12345678" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                </div>
            </div>

            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label for="email" class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                        E-mail
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input id="email" v-model="text" placeholder="email@address.no" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                </div>
            </div>

            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label for="other" class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                        Other
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input id="other" v-model="message" placeholder="Allergies, etc." class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                </div>
            </div>

            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3"></div>
                <label class="md:w-2/3 block text-gray-500 font-bold">
                    <input class="mr-2 leading-tight" type="checkbox">
                    <span class="text-sm">
                        I have read the terms and conditions
                    </span>
                </label>
            </div>

            <div class="md:flex md:items-center">
                <div class="md:w-1/3"></div>
                <div class="md:w-2/3">
                <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                    Send application
                </button>
                </div>
            </div>
        </form>
    </div>
</template>