<template>
  <div
    class="bg-grayZ w-full h-screen flex overflow-hidden flex-col items-center wrapper"
  >
    <div class="flex flex-col justify-center w-[152rem] relative">
      <div class="w-full flex flex-row justify-between mt-[8.9rem]">
        <covid-logo></covid-logo>
        <p class="bold text-[4rem] leading-[4rem]">4/4</p>
      </div>
      <div class="w-full h-[2px] bg-black mt-[2.3rem]"></div>

      <div class="flex flex-row justify-between">
        <div class="w-[81rem]">
          <form
            v-on:submit.prevent
            action=""
            class="form-container info-form pt-[4.2rem] h-screen overflow-auto pb-[26.3rem]"
            autocomplete="off"
            id="vaccinationForm"
          >
            <div class="mb-[4rem]">
              <p
                class="font-normal w-[60.6rem] text-[2.2rem] leading-[2.7rem] mb-[2rem]"
              >
                რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია.
                გარემო, რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და
                ყოფილა წლების განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი,
                ბევრისთვის კი — ჩვენთან გადმოსვლის.
              </p>

              <p class="font-normal w-[60.6rem] text-[2.2rem] leading-[2.7rem]">
                პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და
                ყოველდღიური კომუნიკაციაც გაიშვიათდა.
              </p>
            </div>

            <div
              class="w-[62.2rem] font-bold text-[2.2rem] leading-[2.65rem] mb-[4rem]"
            >
              <p>
                რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ
                შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?*
              </p>
              <div class="flex flex-col gap-[1.9rem] pt-[1.7rem]">
                <div class="flex items-center gap-[1.7rem] pl-[1.8rem]">
                  <input
                    id="frequency-twice-a-week"
                    name="frequency"
                    type="radio"
                    class="w-[2.2rem] h-[2.2rem] accent-blacker"
                    v-model="frequencyButton"
                    value="twice_a_week"
                  />
                  <label
                    class="font-medium text-[2rem]"
                    for="frequency-twice-a-week"
                    >კვირაში ორჯერ</label
                  >
                </div>
                <div class="flex items-center gap-[1.7rem] pl-[1.8rem]">
                  <input
                    id="frequency-once-a-week"
                    name="frequency"
                    type="radio"
                    class="w-[2.2rem] h-[2.2rem] accent-blacker"
                    v-model="frequencyButton"
                    value="once_a_week"
                  />
                  <label
                    class="font-medium text-[2rem]"
                    for="frequency-once-a-week"
                    >კვირაში ერთხელ</label
                  >
                </div>
                <div class="flex items-center gap-[1.7rem] pl-[1.8rem]">
                  <input
                    id="frequency-once-two-weeks"
                    name="frequency"
                    type="radio"
                    class="w-[2.2rem] h-[2.2rem] accent-blacker"
                    v-model="frequencyButton"
                    value="once_in_a_two_weeks"
                  />
                  <label
                    class="font-medium text-[2rem]"
                    for="frequency-once-two-weeks"
                    >ორ კვირაში ერთხელ</label
                  >
                </div>
                <div class="flex items-center gap-[1.7rem] pl-[1.8rem]">
                  <input
                    id="frequency-once-month"
                    name="frequency"
                    type="radio"
                    class="w-[2.2rem] h-[2.2rem] accent-blacker"
                    v-model="frequencyButton"
                    value="once_in_a_month"
                  />
                  <label
                    class="font-medium text-[2rem]"
                    for="frequency-once-month"
                    >თვეში ერთხელ</label
                  >
                </div>
              </div>
              <p
                v-if="frequencyCheck === false"
                class="h-[2rem] mt-[0.5rem] ml-[2rem] text-red font-normal text-[1.6rem] leading[1.9rem]"
              >
                პასუხის მონიშვნა სავალდებულოა
              </p>
            </div>

            <div
              class="w-[62.2rem] font-bold text-[2.2rem] leading-[2.65rem] mb-[4rem]"
            >
              <p>კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*</p>
              <div class="flex flex-col gap-[1.9rem] pt-[1.7rem]">
                <div class="flex items-center gap-[1.7rem] pl-[1.8rem]">
                  <input
                    id="working-days-zero"
                    name="working-days"
                    type="radio"
                    class="w-[2.2rem] h-[2.2rem] accent-blacker"
                    v-model="workingDaysButton"
                    value="0"
                  />
                  <label class="font-medium text-[2rem]" for="working-days-zero"
                    >0</label
                  >
                </div>
                <div class="flex items-center gap-[1.7rem] pl-[1.8rem]">
                  <input
                    id="working-days-one"
                    name="working-days"
                    type="radio"
                    class="w-[2.2rem] h-[2.2rem] accent-blacker"
                    v-model="workingDaysButton"
                    value="1"
                  />
                  <label class="font-medium text-[2rem]" for="working-days-one"
                    >1</label
                  >
                </div>
                <div class="flex items-center gap-[1.7rem] pl-[1.8rem]">
                  <input
                    id="working-days-two"
                    name="working-days"
                    type="radio"
                    class="w-[2.2rem] h-[2.2rem] accent-blacker"
                    v-model="workingDaysButton"
                    value="2"
                  />
                  <label class="font-medium text-[2rem]" for="working-days-two"
                    >2</label
                  >
                </div>
                <div class="flex items-center gap-[1.7rem] pl-[1.8rem]">
                  <input
                    id="working-days-three"
                    name="working-days"
                    type="radio"
                    class="w-[2.2rem] h-[2.2rem] accent-blacker"
                    v-model="workingDaysButton"
                    value="3"
                  />
                  <label
                    class="font-medium text-[2rem]"
                    for="working-days-three"
                    >3</label
                  >
                </div>
                <div class="flex items-center gap-[1.7rem] pl-[1.8rem]">
                  <input
                    id="working-days-four"
                    name="working-days"
                    type="radio"
                    class="w-[2.2rem] h-[2.2rem] accent-blacker"
                    v-model="workingDaysButton"
                    value="4"
                  />
                  <label class="font-medium text-[2rem]" for="working-days-four"
                    >4</label
                  >
                </div>
                <div class="flex items-center gap-[1.7rem] pl-[1.8rem]">
                  <input
                    id="working-days-five"
                    name="working-days"
                    type="radio"
                    class="w-[2.2rem] h-[2.2rem] accent-blacker"
                    v-model="workingDaysButton"
                    value="5"
                  />
                  <label class="font-medium text-[2rem]" for="working-days-five"
                    >5</label
                  >
                </div>
              </div>
              <p
                v-if="workingDaysCheck === false"
                class="h-[2rem] mt-[0.5rem] ml-[2rem] text-red font-normal text-[1.6rem] leading[1.9rem]"
              >
                პასუხის მონიშვნა სავალდებულოა
              </p>
            </div>

            <div
              class="w-[62.2rem] mb-[4rem] font-bold text-[2.2rem] leading-[2.65rem]"
            >
              <p class="w-[62.2rem] mb-[2rem]">
                რას ფიქრობ ფიზიკურ შეკრებებზე?
              </p>
              <textarea
                class="resize-none w-[62.2rem] h-[18.4rem] p-[2rem]"
                name=""
                v-model="liveMeetings"
              ></textarea>
            </div>

            <div
              class="w-[62.2rem] mb-[4rem] font-bold text-[2.2rem] leading-[2.65rem]"
            >
              <p class="w-[62.2rem]">რას ფიქრობ არსებულ გარემოზე:</p>
              <p class="w-[62.2rem] mb-[2rem]">
                რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?
              </p>
              <textarea
                class="resize-none w-[62.2rem] h-[18.4rem] p-[2rem]"
                name=""
                v-model="opinions"
              ></textarea>
              <div class="flex justify-end pt-[5rem]">
                <p
                  @click="submitForm"
                  class="cursor-pointer font-bold text-[1.8rem] leading-[2.1rem] rounded-[4rem] p-[2rem] w-[18rem] text-center bg-blueZ"
                >
                  დასრულება
                </p>
              </div>
            </div>
            <div
              class="z-50 flex justify-center items-center translate-x-[30rem]"
            >
              <router-link
                to="/vaccination"
                @click="previousPageAnimationTrigger"
              >
                <img
                  class="cursor-pointer"
                  src="../assets/leftarrow.png"
                  alt=""
                />
              </router-link>
              <img
                @click="submitForm"
                class="cursor-pointer invisible"
                src="../assets/rightarrow.png"
                alt=""
                form="vaccinationForm"
              />
            </div>
          </form>
        </div>

        <div class="">
          <div class="relative">
            <div class="z-20 absolute w-[78.3rem] right-[0rem] top-[4rem]">
              <img class="" src="../assets/bike2.png" alt="" />
            </div>
            <div class="absolute relative right-[46rem] top-[2rem]">
              <div
                class="fade-StarToHeart w-[28.8rem] h-[31.2rem] right-[1rem] absolute z-10"
              >
                <img src="../assets/main-logo-1.png" class="w-fit" />
              </div>
              <div
                class="fade-HeartToLittleHeart w-[28.8rem] h-[31.2rem] right-[0rem] absolute z-10 top-[2rem] -right-[1rem]"
              >
                <img src="../assets/heart.png" class="w-[26rem]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CovidLogo from "./icons/CovidLogo.vue";

export default {
  components: {
    CovidLogo,
  },
  mounted() {
    this.$store.commit("setPageFivePath", "vaccination");
  },
  data() {
    return {
      frequencyButton: "",
      workingDaysButton: "",
      frequencyCheck: "",
      workingDaysCheck: "",
      liveMeetings: "",
      opinions: "",
    };
  },
  methods: {
    previousPageAnimationTrigger() {
      this.$store.commit("setPageFourPath", "advices");
    },
    nextPageAnimationTrigger() {
      this.$store.commit("setPageSixPath", "advices");
    },
    checkFrequencyRadioValue() {
      if (this.frequencyButton === "") {
        this.frequencyCheck = false;
      } else this.frequencyCheck = true;
    },
    checkWorkingDaysRadioValue() {
      if (this.workingDaysButton === "") {
        this.workingDaysCheck = false;
      } else this.workingDaysCheck = true;
    },
    submitForm() {
      this.checkFrequencyRadioValue();
      this.checkWorkingDaysRadioValue();
      this.nextPageAnimationTrigger();

      if (this.frequencyButton || this.workingDaysButton) {
        this.workingDaysButton = Number(this.workingDaysButton);
        this.$store.commit("setNonFormalMeetings", this.frequencyButton);
        this.$store.commit("setDaysFromOffice", this.workingDaysButton);
        this.$store.commit("setMeetingsInLive", this.liveMeetings);
        this.$store.commit("setOpinionAboutUs", this.opinions);

        this.$store.commit("setResult", this.$store.state.apiData);
        console.log(this.$store.state.apiData);
        console.log(this.$store.state.result);
        this.postApi();
        this.$router.push({ path: "/thank-you" });
      }
    },
    postApi() {
      fetch("https://covid19.devtest.ge/api/create", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.$store.state.result),
      })
        .then((response) => response.json())
        .then((response) => console.log(JSON.stringify(response)));
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Noto+Sans+Georgian:wght@100;200;300;400;500;600;700;800;900&family=Open+Sans:wght@300;400;500;600;700;800&display=swap");
* {
  font-family: "Noto Sans Georgian" !important;
}

form::-webkit-scrollbar {
  display: none;
}

.fade-HeartToLittleHeart {
  animation: fade-HeartToLittleHeart 0.5s ease forwards;
}
.fade-StarToHeart {
  animation: fade-StarToHeart 0.5s ease forwards;
}

@keyframes fade-HeartToLittleHeart {
  0% {
    opacity: 0;
  }
  1% {
  }
  100% {
    transform: translate(-45px, 65px);
    width: 19.47rem;
    height: 17.2rem;
    opacity: 1;
  }
}
@keyframes fade-StarToHeart {
  0% {
    opacity: 1;
  }
  1% {
  }
  100% {
    transform: translate(-45px, 65px);
    width: 19.47rem;
    height: 17.2rem;
    opacity: 0;
  }
}
</style>
