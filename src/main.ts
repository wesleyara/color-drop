import { createApp } from "vue";
import "./styles/globals.scss";
import "./styles/typography.scss";
import App from "./App.vue";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiEyedropper, MdClose } from "oh-vue-icons/icons";
import { createPinia } from "pinia";
import router from "./router";

addIcons(BiEyedropper, MdClose);

const app = createApp(App);
const pinia = createPinia();

app.component("VIcon", OhVueIcon);
app.use(pinia);
app.use(router);
app.mount("#app");
