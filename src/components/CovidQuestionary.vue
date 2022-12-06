<template>
  <div class="bg-grayZ w-full h-screen flex flex-col items-center wrapper">
    <div class="flex flex-col justify-center w-[152rem] relative">
      <div class="w-full flex flex-row justify-between mt-[8.9rem]">
        <covid-logo></covid-logo>
        <p class="bold text-[4rem] leading-[4rem]">2/4</p>
      </div>
      <div class="w-full h-[2px] bg-black mt-[2.3rem]"></div>

      <div class="flex flex-row justify-between">
        <div>
          <form
            v-on:submit.prevent
            action=""
            class="form-container info-form mt-[4.2rem]"
            autocomplete="off"
            id="questionaryForm"
          >
            <div class="input-field mb-[4.6rem]">
              <p
                class="mb-[1rem] bold text-[2.2rem] leading-[2.7rem] font-bold"
              >
                გაქვს გადატანილი Covid-19?*
              </p>
              <div class="flex flex-col gap-[1rem] pt-[1rem]">
                <div class="flex items-center gap-[1.7rem] pl-[1.8rem]">
                  <input
                    id="suffered-yes"
                    name="suffered"
                    type="radio"
                    class="w-[2.2rem] h-[2.2rem] accent-blacker"
                    v-model="transfered"
                    value="yes"
                  />
                  <label class="font-medium text-[2rem]" for="suffered-yes"
                    >კი</label
                  >
                </div>
                <div class="flex items-center gap-[1.7rem] pl-[1.8rem]">
                  <input
                    id="suffered-no"
                    name="suffered"
                    type="radio"
                    class="w-[2.2rem] h-[2.2rem] accent-blacker"
                    v-model="transfered"
                    value="no"
                    @click="resetAllInputs"
                  />
                  <label class="font-medium text-[2rem]" for="suffered-no"
                    >არა</label
                  >
                </div>
                <div class="flex items-center gap-[1.7rem] pl-[1.8rem]">
                  <input
                    name="suffered"
                    id="suffered-now"
                    type="radio"
                    class="w-[2.2rem] h-[2.2rem] accent-blacker"
                    v-model="transfered"
                    value="have_right_now"
                    @click="resetAllInputs"
                  />
                  <label class="font-medium text-[2rem]" for="suffered-now"
                    >ახლა მაქვს</label
                  >
                </div>
              </div>
              <p
                v-if="transferedCheck === false"
                class="h-[2rem] mt-[0.5rem] ml-[2rem] text-red font-normal text-[1.6rem] leading[1.9rem]"
              >
                პასუხის მონიშვნა სავალდებულოა
              </p>
            </div>

            <div v-show="transfered === 'yes'" class="input-field mb-[4.6rem]">
              <p
                class="mb-[1rem] bold text-[2.2rem] leading-[2.7rem] font-bold"
              >
                ანტისხეულების ტესტი გაქვს გაკეთებული?*
              </p>
              <div class="flex flex-col gap-[1rem] pt-[1rem]">
                <div class="flex items-center gap-[1.7rem] pl-[1.8rem]">
                  <input
                    id="anti-yes"
                    name="anti"
                    type="radio"
                    class="w-[2.2rem] h-[2.2rem] accent-blacker"
                    v-model="antiRadioButton"
                    value="true"
                    @click="resetCovidInput"
                    ref="antiInputYes"
                  />
                  <label class="font-medium text-[2rem]" for="anti-yes"
                    >კი</label
                  >
                </div>
                <div class="flex items-center gap-[1.7rem] pl-[1.8rem]">
                  <input
                    id="anti-no"
                    name="anti"
                    type="radio"
                    class="w-[2.2rem] h-[2.2rem] accent-blacker"
                    v-model="antiRadioButton"
                    value="false"
                    @click="resetAntiInputs"
                    ref="antiInputNo"
                  />
                  <label class="font-medium text-[2rem]" for="anti-no"
                    >არა</label
                  >
                </div>
              </div>
              <p
                v-if="antiRadioCheck === false"
                class="h-[2rem] mt-[0.5rem] ml-[2rem] text-red font-normal text-[1.6rem] leading[1.9rem]"
              >
                პასუხის მონიშვნა სავალდებულოა
              </p>
            </div>

            <div
              v-if="transfered === 'yes' && antiRadioButton === 'true'"
              class="flex flex-col gap-[2.5rem]"
            >
              <p
                class="w-[60rem] leading-[2.6rem] mb-[1rem] bold text-[2.2rem] leading-[2.7rem] font-bold"
              >
                თუ გახსოვს მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების
                რაოდენობა*
              </p>
              <input
                placeholder="რიცხვი"
                class="leading-[1.8rem] bg-transparent text-[1.8rem] w-[51.3rem] h-[5rem] border-[0.08rem] border-black border-solid pl-[2rem] pr-[2rem]"
                type="text"
                @focus="dateFocus($event)"
                @blur="dateBlur($event)"
                id="test-date"
                v-model="testDate"
              />
              <input
                id="anti-number"
                type="number"
                class="leading-[1.8rem] bg-transparent text-[1.8rem] w-[51.3rem] h-[5rem] border-[0.08rem] border-black border-solid pl-[2rem] pr-[2rem]"
                placeholder="ანტისხეულების რაოდენობა"
                v-model="antiNumber"
              />
              <p
                v-if="dateAndNumberCheck === false"
                class="h-[2rem] mt-[0.5rem] ml-[2rem] text-red font-normal text-[1.6rem] leading[1.9rem]"
              >
                შეავსეთ ან ორივე ველი ან არცერთი
              </p>
            </div>

            <div
              v-if="transfered === 'yes' && antiRadioButton === 'false'"
              class="flex flex-col gap-[2.5rem]"
            >
              <p
                class="w-[60rem] leading-[2.6rem] mb-[1rem] bold text-[2.2rem] leading-[2.7rem] font-bold"
              >
                მიუთითე მიახლოებით პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*
              </p>
              <input
                placeholder="დდ/თთ/წწ"
                class="leading-[1.8rem] bg-transparent text-[1.8rem] w-[51.3rem] h-[5rem] border-[0.08rem] border-black border-solid pl-[2rem] pr-[2rem]"
                type="text"
                @focus="covidDateFocus($event)"
                @blur="covidDateBlur($event)"
                id="covid-date"
                v-model="covidDate"
              />
              <p
                v-if="covidDateCheck === false"
                class="h-[2rem] mt-[0.5rem] ml-[2rem] text-red font-normal text-[1.6rem] leading[1.9rem]"
              >
                თარიღის შეყვანა სავალდებულოა
              </p>
            </div>
          </form>
        </div>

        <div class="">
          <div class="relative">
            <div class="z-10 absolute w-[90.4rem] right-[0rem] -top-[2rem]">
              <img class="" src="../assets/vaccinate2.png" alt="" />
            </div>

            <div
              v-if="this.$store.state.pageThreePath === 'identification'"
              class="fade-YellowToRed w-[62.9rem] h-[7.5rem] absolute bg-yellow top-[17rem] -left-[77.6rem]"
            ></div>

            <div
              v-else-if="this.$store.state.pageThreePath === 'vaccination'"
              class="absolute relative right-[46rem] top-[2rem]"
            >
              <div
                class="fade-StarToRed w-[28.8rem] h-[31.2rem] right-[0rem] absolute z-10"
              >
                <img src="../assets/main-logo-1.png" class="w-fit" />
              </div>
              <div
                class="fade-RedToRed absolute w-[25rem] h-[25rem] right-[0rem] rounded-[50%] bg-reddish"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="z-50 gap-[11rem] flex items-center justify-center absolute top-[95rem] left-[50%] -translate-x-[50%]"
      >
        <router-link to="/identification" @click="previousPageAnimationTrigger">
          <img class="cursor-pointer" src="../assets/leftarrow.png" alt="" />
        </router-link>
        <img
          @click="submitForm"
          class="cursor-pointer"
          src="../assets/rightarrow.png"
          alt=""
          form="questionaryForm"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CovidLogo from "./icons/CovidLogo.vue";

export default {
  mounted() {
    this.$store.state.pageTwoPath = "covid-questionary";
    this.$store.state.pageFourPath = "covid-questionary";
    console.log(this.$store.state.pageTwoPath);
  },
  components: {
    CovidLogo,
  },
  data() {
    return {
      testDate: "",
      antiNumber: "",
      covidDate: "",
      transfered: "",
      antiRadioButton: "",
      transferedCheck: "",
      antiRadioCheck: "",
      covidDateCheck: "",
      dateAndNumberCheck: "",
    };
  },
  methods: {
    previousPageAnimationTrigger() {
      this.$store.commit("setPageTwoPath", "covid-questionary");
    },
    nextPageAnimationTrigger() {
      this.$store.commit("setPageFourPath", "covid-questionary");
    },
    dateFocus(event) {
      event.target.type = "date";
      console.log(this.transfered);
    },
    dateBlur(event) {
      if (event.target.value === "") {
        event.target.type = "text";
      }
    },
    covidDateFocus(event) {
      event.target.type = "date";
    },
    covidDateBlur(event) {
      if (event.target.value === "") {
        event.target.type = "text";
      }
    },
    resetAntiInputs() {
      this.testDate = "";
      this.antiNumber = "";
      this.$store.commit("setAntiNumber", "");
      this.$store.commit("setAntibodiesDate", null);
    },
    resetCovidInput() {
      this.covidDate = "";
      this.$store.commit("setCovidSicknessDate", "");
    },
    resetAllInputs() {
      this.testDate = "";
      this.antiNumber = "";
      this.covidDate = "";
      this.antiRadioButton = "";
      if (this.$refs.antiInputNo.checked) {
        this.$refs.antiInputNo.checked = false;
      }
      if (this.$refs.antiInputYes.checked) {
        this.$refs.antiInputYes.checked = false;
      }
    },
    submitForm() {
      this.checkTransferedValue();
      this.checkAntiRadioValue();
      this.checkCovidDateValue();
      this.nextPageAnimationTrigger();

      if (this.transfered === "no" || this.transfered === "have_right_now") {
        this.$store.commit("setHadCovid", this.transfered);
        this.antiRadioButton = "";
        this.testDate = "";
        this.antiNumber = "";
        this.covidDate = "";
        console.log(this.transfered);
        this.$router.push({ path: "/vaccination" });
      } else if (this.transfered === "yes" && this.antiRadioButton === "true") {
        this.checkDateAndNumberValue();
        if (
          (this.testDate && !this.antiNumber) ||
          (!this.testDate && this.antiNumber)
        ) {
          return;
        }
        this.antiRadioButton = "true";
        this.$store.commit("setHadCovid", this.transfered);
        this.$store.commit("setHadAntibodyTest", this.antiRadioButton);
        this.$store.commit("setAntiNumber", this.antiNumber);
        this.$store.commit("setAntibodiesDate", this.testDate);
        console.log(this.$store.state);
        console.log(this.antiNumber);
        this.$router.push({ path: "/vaccination" });
      } else if (
        this.transfered === "yes" &&
        this.antiRadioButton === "false" &&
        this.covidDate
      ) {
        this.antiRadioButton = "false";
        this.$store.commit("setHadCovid", this.transfered);
        this.$store.commit("setHadAntibodyTest", this.antiRadioButton);
        this.$store.commit(
          "setCovidSicknessDate",
          this.formatDate(this.covidDate)
        );
        console.log(this.$store.state);
        this.$router.push({ path: "/vaccination" });
      }
    },
    checkTransferedValue() {
      if (this.transfered === "") {
        this.transferedCheck = false;
      } else this.transferedCheck = true;
    },
    checkAntiRadioValue() {
      if (this.antiRadioButton === "" && this.transfered !== "") {
        this.antiRadioCheck = false;
      } else this.antiRadioCheck = true;
    },
    checkDateAndNumberValue() {
      if (
        (this.antiRadioButton !== "" &&
          this.transfered !== "" &&
          this.testDate === "" &&
          this.antiNumber !== "") ||
        (this.antiRadioButton !== "" &&
          this.transfered !== "" &&
          this.testDate !== "" &&
          this.antiNumber === "")
      ) {
        console.log(22);
        this.dateAndNumberCheck = false;
      } else this.dateAndNumberCheck = true;
    },
    checkCovidDateValue() {
      if (
        this.covidDate === "" &&
        this.transfered !== "" &&
        this.antiRadioButton !== "" &&
        this.testDate === "" &&
        !this.antiNumber
      ) {
        this.covidDateCheck = false;
      } else this.covidDateCheck = true;
    },
    formatDate(dateInput) {
      let correctedDate = new Date(dateInput);
      let date =
        correctedDate.getDate() > 9
          ? correctedDate.getDate()
          : `${0}${correctedDate.getDate()}`;
      let month =
        correctedDate.getMonth() + 1 > 9
          ? correctedDate.getMonth() + 1
          : `${0}${correctedDate.getMonth() + 1}`;
      let year = correctedDate.getFullYear();

      return `${date}/${month}/${year}`;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Noto+Sans+Georgian:wght@100;200;300;400;500;600;700;800;900&family=Open+Sans:wght@300;400;500;600;700;800&display=swap");
* {
  font-family: "Noto Sans Georgian" !important;
}

.fade-YellowToRed {
  animation: fade-YellowToRed 0.5s ease forwards;
}
.fade-StarToRed {
  animation: fade-StarToRed 0.5s ease forwards;
}
.fade-RedToRed {
  animation: fade-RedToRed 0.5s ease forwards;
}

@keyframes fade-RedToRed {
  0% {
    opacity: 0;
  }
  1% {
  }
  100% {
    transform: translate(-141px, 206px);
    width: 22.9rem;
    height: 22.9rem;
    opacity: 1;
  }
}
@keyframes fade-StarToRed {
  0% {
    opacity: 1;
  }
  1% {
  }
  100% {
    transform: translate(-141px, 206px);
    width: 21.9rem;
    height: 21.9rem;
    opacity: 0;
  }
}

@keyframes fade-YellowToRed {
  0% {
    width: 62.2rem;
    height: 7.5rem;
    border-radius: 0;
    background-color: rgba(214, 209, 110, 1);
  }
  1% {
    border-radius: 20%;
  }
  100% {
    transform: translate(-55px, 55px);
    width: 22.9rem;
    height: 22.9rem;
    border-radius: 50%;
    background-color: rgba(221, 57, 57, 1);
  }
}
</style>
