import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      page: "",
      pageTwoPath: "welcome",
      pageThreePath: "identification",
      pageFourPath: "covid-questionary",
      pageFivePath: "",
      pageSixPath: "",
      apiData: {
        first_name: "",
        last_name: "",
        email: "",
        had_covid: "",
        had_antibody_test: "",
        covid_sickness_date: "",
        antibodies: {
          test_date: "",
          number: null,
        },
        had_vaccine: false,
        vaccination_stage: "",
        i_am_waiting: "",
        non_formal_meetings: "",
        number_of_days_from_office: "",
        what_about_meetings_in_live: "",
        tell_us_your_opinion_about_us: "",
      },

      result: {},
    };
  },
  mutations: {
    setPageTwoPath(state, pageTwoPath) {
      state.pageTwoPath = pageTwoPath;
    },
    setPageThreePath(state, PageThreePath) {
      state.pageThreePath = PageThreePath;
    },
    setPageFourPath(state, pageFourPath) {
      state.pageFourPath = pageFourPath;
    },
    setPageFivePath(state, pageFivePath) {
      state.pageFivePath = pageFivePath;
    },
    setPageSixPath(state, pageSixPath) {
      state.pageSixPath = pageSixPath;
    },
    setUsername(state, newUsername) {
      state.apiData.first_name = newUsername;
    },
    setSurname(state, newSurname) {
      state.apiData.last_name = newSurname;
    },
    setMail(state, newMail) {
      state.apiData.email = newMail;
    },
    setHadCovid(state, HadCovid) {
      state.apiData.had_covid = HadCovid;
    },
    setHadAntibodyTest(state, HadAntibodyTest) {
      state.apiData.had_antibody_test = HadAntibodyTest;
    },
    setCovidSicknessDate(state, CovidSicknessDate) {
      state.apiData.covid_sickness_date = CovidSicknessDate;
    },
    setAntibodiesDate(state, testDate) {
      state.apiData.antibodies.test_date = testDate;
    },
    setAntiNumber(state, number) {
      state.apiData.antibodies.number = number;
    },
    setHadVaccine(state, hadVaccine) {
      state.apiData.had_vaccine = hadVaccine;
    },
    setVaccinationStage(state, vaccinationStage) {
      state.apiData.vaccination_stage = vaccinationStage;
    },
    setWaiting(state, waiting) {
      state.apiData.i_am_waiting = waiting;
    },
    setNonFormalMeetings(state, NonFormalMeetings) {
      state.apiData.non_formal_meetings = NonFormalMeetings;
    },
    setDaysFromOffice(state, DaysFromOffice) {
      state.apiData.number_of_days_from_office = DaysFromOffice;
    },
    setMeetingsInLive(state, MeetingsInLive) {
      state.apiData.what_about_meetings_in_live = MeetingsInLive;
    },
    setOpinionAboutUs(state, OpinionAboutUs) {
      state.apiData.tell_us_your_opinion_about_us = OpinionAboutUs;
    },
    setHadVaccineBoolean(state, hadVaccine) {
      if (hadVaccine === "true") {
        state.result.had_vaccine = true;
      } else if (hadVaccine === "false") {
        state.result.had_vaccine = false;
      }
    },
    setHadAntibodyTestBoolean(state, HadAntibodyTest) {
      if (HadAntibodyTest === "true") {
        state.result.had_antibody_test = true;
      } else if (HadAntibodyTest === "false") {
        state.result.had_antibody_test = false;
      }
    },
    setResult(state, rez) {
      console.log("asd");
      for (const [key, value] of Object.entries(state.apiData)) {
        if (typeof value !== "object" && value !== "") {
          state.result[`${key}`] = value;
        } else if (
          typeof value === "object" &&
          value.number &&
          !state.apiData.covid_sickness_date
        ) {
          state.result[`${key}`] = value;
        }
      }

      store.commit("setHadVaccineBoolean", state.result.had_vaccine);
      store.commit("setHadAntibodyTestBoolean", state.result.had_antibody_test);
    },
  },
});

const app = createApp(App);

app.use(router);

app.use(store);

app.mount("#app");
