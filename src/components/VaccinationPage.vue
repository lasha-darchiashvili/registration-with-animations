<template>
  <div
    class="bg-grayZ w-full h-screen flex flex-col items-center wrapper relative"
  >
    <div class="flex flex-col justify-center w-[152rem] relative">
      <div class="w-full flex flex-row justify-between mt-[8.9rem]">
        <covid-logo></covid-logo>
        <p class="bold text-[4rem] leading-[4rem]">3/4</p>
      </div>
      <div class="w-full h-[2px] bg-black mt-[2.3rem]"></div>

      <div class="flex flex-row justify-between">
        <div>
          <form
            v-on:submit.prevent
            action=""
            class="form-container info-form mt-[4.2rem]"
            autocomplete="off"
            id="vaccinationForm"
          >
            <div class="mb-[4.6rem]">
              <p
                class="mb-[1rem] bold text-[2.2rem] leading-[2.7rem] font-bold"
              >
                უკვე აცრილი ხარ?*
              </p>
              <div class="flex flex-col gap-[1rem] pt-[1rem]">
                <div class="flex items-center gap-[1.7rem] pl-[1.8rem]">
                  <input
                    id="vaccinated-yet-yes"
                    name="vaccinated-yet"
                    type="radio"
                    class="w-[2.2rem] h-[2.2rem] accent-blacker"
                    v-model="vaccinationButton"
                    value="true"
                    @click="resetWaitingButtons"
                  />
                  <label
                    class="font-medium text-[2rem]"
                    for="vaccinated-yet-yes"
                    >კი</label
                  >
                </div>
                <div class="flex items-center gap-[1.7rem] pl-[1.8rem]">
                  <input
                    id="vaccinated-yet-no"
                    name="vaccinated-yet"
                    type="radio"
                    class="w-[2.2rem] h-[2.2rem] accent-blacker"
                    v-model="vaccinationButton"
                    value="false"
                    @click="resetStageButoons"
                  />
                  <label class="font-medium text-[2rem]" for="anti-no"
                    >არა</label
                  >
                </div>
              </div>
              <p
                v-if="vaccinationCheck === false"
                class="h-[2rem] mt-[0.5rem] ml-[2rem] text-red font-normal text-[1.6rem] leading[1.9rem]"
              >
                პასუხის მონიშვნა სავალდებულოა
              </p>
            </div>

            <div v-show="vaccinationButton === 'true'" class="mb-[4.6rem]">
              <p
                class="mb-[1rem] bold text-[2.2rem] leading-[2.7rem] font-bold"
              >
                აირჩიე რა ეტაპზე ხარ*
              </p>
              <div class="flex flex-col gap-[1rem] pt-[1rem]">
                <div class="flex items-center gap-[1.7rem] pl-[1.8rem]">
                  <input
                    id="stage-first-registration-two"
                    name="stage"
                    type="radio"
                    class="w-[2.2rem] h-[2.2rem] accent-blacker"
                    v-model="stageButton"
                    value="first_dosage_and_registered_on_the_second"
                    ref="stageFirstRegistrationTwo"
                  />
                  <label
                    class="font-medium text-[2rem]"
                    for="stage-first-registration-two"
                    >პირველი დოზა და დარეგისტრირებული ვარ მეორეზე</label
                  >
                </div>
                <div class="flex items-center gap-[1.7rem] pl-[1.8rem]">
                  <input
                    id="stage-vaccinated"
                    name="stage"
                    type="radio"
                    class="w-[2.2rem] h-[2.2rem] accent-blacker"
                    v-model="stageButton"
                    value="fully_vaccinated"
                    ref="stageVaccinated"
                  />
                  <label class="font-medium text-[2rem]" for="stage-vaccinated"
                    >სრულად აცრილი ვარ</label
                  >
                </div>
                <div class="flex items-center gap-[1.7rem] pl-[1.8rem]">
                  <input
                    id="stage-only-first"
                    name="stage"
                    type="radio"
                    class="w-[2.2rem] h-[2.2rem] accent-blacker"
                    v-model="stageButton"
                    value="first_dosage_and_not_registered_yet"
                    ref="stageOnlyFirst"
                  />
                  <label class="font-medium text-[2rem]" for="stage-only-first"
                    >პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე</label
                  >
                </div>
              </div>
              <p
                v-if="stageCheck === false"
                class="h-[2rem] mt-[0.5rem] ml-[2rem] text-red font-normal text-[1.6rem] leading[1.9rem]"
              >
                პასუხის მონიშვნა სავალდებულოა
              </p>
            </div>

            <div
              v-if="
                vaccinationButton === 'true' &&
                stageButton === 'first_dosage_and_not_registered_yet'
              "
              class="w-[33.7rem] ml-[5.7rem] mb-[4.6rem]"
            >
              <p class="font-medium text-[2rem]">რომ არ გადადო,</p>
              <p class="font-medium text-[2rem]">ბარემ ახლავე დარეგისტრირდი</p>
              <a
                href="https://booking.moh.gov.ge"
                class="font-medium text-[2rem] text-blueZ hover:underline"
                >https://booking.moh.gov.ge</a
              >
            </div>

            <div v-show="vaccinationButton === 'false'" class="mb-[4.6rem]">
              <p
                class="mb-[1rem] bold text-[2.2rem] leading-[2.7rem] font-bold"
              >
                რას ელოდები?*
              </p>
              <div class="flex flex-col gap-[1rem] pt-[1rem]">
                <div class="flex items-center gap-[1.7rem] pl-[1.8rem]">
                  <input
                    id="waiting-date"
                    name="waiting"
                    type="radio"
                    class="w-[2.2rem] h-[2.2rem] accent-blacker"
                    v-model="waitingButton"
                    value="registered_and_waiting"
                    ref="waitingDate"
                  />
                  <label class="font-medium text-[2rem]" for="waiting-date"
                    >დარეგისტრირებული ვარ და ველოდები რიცხვს</label
                  >
                </div>
                <div class="flex items-center gap-[1.7rem] pl-[1.8rem]">
                  <input
                    id="waiting-noplan"
                    name="waiting"
                    type="radio"
                    class="w-[2.2rem] h-[2.2rem] accent-blacker"
                    v-model="waitingButton"
                    value="not_planning"
                    ref="waitingNoplan"
                  />
                  <label class="font-medium text-[2rem]" for="waiting-noplan"
                    >არ ვგეგმავ</label
                  >
                </div>
                <div class="flex items-center gap-[1.7rem] pl-[1.8rem]">
                  <input
                    id="waiting-planning"
                    name="waiting"
                    type="radio"
                    class="w-[2.2rem] h-[2.2rem] accent-blacker"
                    v-model="waitingButton"
                    value="had_covid_and_planning_to_be_vaccinated"
                    ref="waitingPlanning"
                  />
                  <label class="font-medium text-[2rem]" for="waiting-planning"
                    >გადატანილი მაქვს და ვგეგმავ აცრას</label
                  >
                </div>
              </div>
              <p
                v-if="waitingCheck === false"
                class="h-[2rem] mt-[0.5rem] ml-[2rem] text-red font-normal text-[1.6rem] leading[1.9rem]"
              >
                პასუხის მონიშვნა სავალდებულოა
              </p>
            </div>

            <div
              v-if="
                vaccinationButton === 'false' &&
                waitingButton === 'had_covid_and_planning_to_be_vaccinated'
              "
              class="mb-[4.6rem] w-[49.1rem] ml-[5.7rem] leading-[2.4rem]"
            >
              <p class="font-medium text-[2rem] mb-[2rem]">
                ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ
                ვაქცინის გაკეთება.
              </p>
              <div>
                <p class="font-medium text-[2rem]">რეგისტრაციის ბმული</p>
                <a
                  href="https://booking.moh.gov.ge"
                  class="font-medium text-[2rem] text-blueZ hover:underline"
                  >https://booking.moh.gov.ge</a
                >
              </div>
            </div>
          </form>
        </div>

        <div class="">
          <div class="relative">
            <div class="z-20 absolute w-[78.3rem] right-[0rem] top-[4rem]">
              <img class="" src="../assets/doctor2.png" alt="" />
            </div>
            <div class="absolute relative right-[48.5rem] top-[8.5rem]">
              <div v-if="this.$store.state.pageFourPath === 'advices'">
                <div
                  class="fade-StarToLittleStar w-[19.47rem] h-[17.2rem] right-[1rem] absolute z-10"
                >
                  <img src="../assets/main-logo-1.png" class="w-fit" />
                </div>
                <div
                  class="fade-HeartToNothing w-[19.47rem] h-[17.2rem] absolute z-10 top-[2rem] right-[1rem]"
                >
                  <img src="../assets/heart.png" class="w-[26rem]" />
                </div>
              </div>
              <div
                v-if="this.$store.state.pageFourPath === 'covid-questionary'"
              >
                <div
                  class="fade-RedToRedStar w-[22.9rem] h-[22.9rem] rounded-[50%] top-[14rem] right-[11.7em] absolute bg-reddish"
                ></div>
                <div
                  class="fade-RedToStar w-[22.9rem] h-[22.9rem] top-[14rem] right-[11.7em] absolute"
                >
                  <img src="../assets/main-logo-1.png" class="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="z-50 gap-[11rem] flex items-center justify-center absolute top-[95rem] left-[50%] -translate-x-[50%]"
      >
        <router-link
          to="/covid-questionary"
          @click="previousPageAnimationTrigger"
        >
          <img class="cursor-pointer" src="../assets/leftarrow.png" alt="" />
        </router-link>
        <img
          @click="submitForm"
          class="cursor-pointer"
          src="../assets/rightarrow.png"
          alt=""
          form="vaccinationForm"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CovidLogo from "./icons/CovidLogo.vue";

export default {
  mounted() {
    console.log(1);
    this.$store.state.pageThreePath = "vaccination";
    this.$store.state.pageFivePath = "vaccination";
  },
  components: {
    CovidLogo,
  },
  data() {
    return {
      vaccinationButton: "",
      stageButton: "",
      waitingButton: "",
      vaccinationCheck: "",
      stageCheck: "",
      waitingCheck: "",
    };
  },
  methods: {
    previousPageAnimationTrigger() {
      this.$store.commit("setPageThreePath", "vaccination");
    },
    nextPageAnimationTrigger() {
      this.$store.commit("setPageFivePath", "vaccination");
    },
    checkVaccinationRadioValue() {
      if (this.vaccinationButton === "") {
        this.vaccinationCheck = false;
      } else this.vaccinationCheck = true;
    },
    checkStageRadioValue() {
      if (this.stageButton === "" && this.vaccinationButton === "true") {
        this.stageCheck = false;
      } else this.stageCheck = true;
    },
    checkWaitingRadioValue() {
      if (this.waitingButton === "" && this.vaccinationButton === "false") {
        this.waitingCheck = false;
      } else this.waitingCheck = true;
    },
    resetStageButoons() {
      this.stageButton = "";
      this.$refs.stageOnlyFirst.checked = false;
      this.$refs.stageVaccinated.checked = false;
      this.$refs.stageFirstRegistrationTwo.checked = false;
      this.$store.commit("setVaccinationStage", "");
    },
    resetWaitingButtons() {
      this.waitingButton = "";
      this.$refs.waitingNoplan.checked = false;
      this.$refs.waitingDate.checked = false;
      this.$refs.waitingPlanning.checked = false;
      this.$store.commit("setWaiting", "");
    },
    submitForm() {
      this.checkVaccinationRadioValue();
      this.checkStageRadioValue();
      this.checkWaitingRadioValue();
      this.nextPageAnimationTrigger();

      if (this.waitingButton || this.stageButton) {
        this.$store.commit("setHadVaccine", this.vaccinationButton);
        this.$store.commit("setVaccinationStage", this.stageButton);
        this.$store.commit("setWaiting", this.waitingButton);
        console.log(this.$store.state);
        this.$router.push({ path: "/advices" });
        console.log(this.stageButton);
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Noto+Sans+Georgian:wght@100;200;300;400;500;600;700;800;900&family=Open+Sans:wght@300;400;500;600;700;800&display=swap");
* {
  font-family: "Noto Sans Georgian" !important;
}

.fade-RedToRedStar {
  animation: fade-RedToRedStar 0.5s ease forwards;
}

.fade-RedToStar {
  animation: fade-RedToStar 0.5s ease forwards;
}

.fade-HeartToNothing {
  animation: fade-HeartToNothing 0.5s ease forwards;
}
.fade-StarToLittleStar {
  animation: fade-StarToLittleStar 0.5s ease forwards;
}

@keyframes fade-HeartToNothing {
  0% {
    opacity: 1;
  }
  1% {
  }
  100% {
    transform: translate(27px, -65px);
    width: 28.8rem;
    height: 31.2rem;
    opacity: 0;
  }
}
@keyframes fade-StarToLittleStar {
  0% {
    opacity: 0;
  }
  1% {
  }
  100% {
    transform: translate(27px, -65px);
    width: 28.8rem;
    height: 31.2rem;
    opacity: 1;
  }
}

@keyframes fade-RedToRedStar {
  0% {
    opacity: 1;
  }
  1% {
  }
  100% {
    transform: translate(130px, -206px);
    width: 25rem;
    height: 25rem;
    opacity: 0;
  }
}

@keyframes fade-RedToStar {
  0% {
    opacity: 0;
  }
  1% {
  }
  100% {
    transform: translate(130px, -206px);
    width: 28.8rem;
    height: 31.2rem;
    opacity: 1;
  }
}
</style>
