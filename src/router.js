import { createRouter, createWebHistory } from "vue-router";

import AdvicesPage from "./components/AdvicesPage.vue";
import WelcomePage from "./components/WelcomePage.vue";
import IdentificationPage from "./components/IdentificationPage.vue";
import CovidQuestionary from "./components/CovidQuestionary.vue";
import ThankYou from "./components/ThankYou.vue";
import VaccinationPage from "./components/VaccinationPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/welcome" },
    { path: "/welcome", component: WelcomePage },
    { path: "/identification", component: IdentificationPage },
    { path: "/covid-questionary", component: CovidQuestionary },
    { path: "/vaccination", component: VaccinationPage },
    { path: "/advices", component: AdvicesPage },
    { path: "/thank-you", component: ThankYou },
  ],
});

export default router;
