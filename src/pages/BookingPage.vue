<script setup lang="ts">

</script>

<template>
    <div>
        <h1>Book your stay</h1>
        <p>
            Vi er 100 eksperter innen strategisk rådgivning, design og teknologi - med kontorer i Oslo og Krakow. Vi er en langsiktig digital partner for kundene våre, som vi hjelper med å løse komplekse utfordringer og å lykkes digitalt.
        </p>
        <form>
            <label for="name">Name</label>
            <input id="name" v-model="text" placeholder="Name" />

            <label for="surname">Surname</label>
            <input id="surname" v-model="text" placeholder="Surname" />

            <label for="email">E-mail</label>
            <input id="email" v-model="text" placeholder="email@address.no" />

            <label for="phone">Phone number</label>
            <input id="phone" v-model="text" placeholder="+47 12345678" />

            <label for="other">Other</label>
            <textarea id="other" v-model="message" placeholder="Allergies, etc."></textarea>
        </form>
    </div>
</template>