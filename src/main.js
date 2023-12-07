import { createApp } from "vue";
import "./styles.css";
import router from "@/router";
import App from "./App.vue";
import VueFeather from "vue-feather";

createApp(App).use(router).component(VueFeather.name, VueFeather).mount("#app");
