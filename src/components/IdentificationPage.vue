<template>
  <div
    class="bg-grayZ w-full h-screen flex flex-col items-center wrapper relative"
  >
    <div class="flex flex-col justify-center w-[152rem]">
      <div class="w-full flex flex-row justify-between mt-[8.9rem]">
        <covid-logo></covid-logo>
        <p class="bold text-[4rem] leading-[4rem]">1/4</p>
      </div>
      <div class="w-full h-[2px] bg-black mt-[2.3rem]"></div>

      <div class="flex flex-row justify-between">
        <div>
          <form
            action=""
            class="form-container info-form mt-[4.2rem]"
            autocomplete="off"
          >
            <div class="input-field mb-[2.2rem]">
              <p
                class="username-name mb-[1rem] bold text-[2.2rem] leading-[2.7rem]"
              >
                სახელი*
              </p>
              <input
                id="username"
                type="text"
                class="username leading-[1.8rem] bg-transparent text-[1.8rem] w-[51.3rem] h-[5rem] border-[0.08rem] border-black border-solid pl-[2rem] pr-[2rem]"
                placeholder="სახელი"
                v-model="username"
              />
              <p
                :class="{
                  visible:
                    usernameMinValue ||
                    usernameMaxValue ||
                    usernameOnlyLettersValue,
                  invisible:
                    !usernameMinValue &&
                    !usernameMaxValue &&
                    !usernameOnlyLettersValue,
                }"
                class="username-error h-[2rem] mt-[0.5rem] ml-[2rem] text-red font-normal text-[1.6rem] leading[1.9rem]"
              >
                {{ errorMessages.usernameErrorMessage }}
              </p>
            </div>

            <div class="input-field mb-[2.2rem]">
              <p
                class="surname-name mb-[1rem] bold text-[2.2rem] leading-[2.7rem]"
              >
                გვარი*
              </p>
              <input
                id="surname"
                type="text"
                class="surname leading-[1.8rem] bg-transparent text-[1.8rem] w-[51.3rem] h-[5rem] border-[0.08rem] border-black border-solid pl-[2rem] pr-[2rem]"
                placeholder="გვარი"
                v-model="surname"
              />
              <p
                :class="{
                  visible:
                    surnameMinValue ||
                    surnameMaxValue ||
                    surnameOnlyLettersValue,
                  invisible:
                    !surnameMinValue &&
                    !surnameMaxValue &&
                    !surnameOnlyLettersValue,
                }"
                class="surname-error h-[2rem] mt-[0.5rem] ml-[2rem] text-red font-normal text-[1.6rem] leading[1.9rem]"
              >
                {{ errorMessages.surnameErrorMessage }}
              </p>
            </div>

            <div class="input-field mb-[2.2rem]">
              <p
                class="mail-name mb-[1rem] bold text-[2.2rem] leading-[2.7rem]"
              >
                მეილი*
              </p>
              <input
                id="mail"
                type="text"
                class="mail leading-[1.8rem] bg-transparent text-[1.8rem] w-[51.3rem] h-[5rem] border-[0.08rem] border-black border-solid pl-[2rem] pr-[2rem]"
                placeholder="მეილი"
                v-model="mail"
              />
              <p
                :class="{
                  visible: mailFormatIncorrect || mailNotCorrectValue,
                  invisible: !mailFormatIncorrect && !mailNotCorrectValue,
                }"
                class="mail-error h-[2rem] mt-[0.5rem] ml-[2rem] text-red font-normal text-[1.6rem] leading[1.9rem]"
              >
                {{ errorMessages.mailErrorMessage }}
              </p>
            </div>
          </form>
          <div class="w-[23.7rem] h-[1px] bg-blacker mt-[11.1rem]"></div>
          <p
            class="w-[36.5rem] mt-[2rem] bold leading-[1.931rem] text-[1.6rem]"
          >
            *-ით მონიშნული ველების შევსება სავალდებულოა
          </p>
        </div>

        <div class="">
          <div class="relative">
            <div class="z-10 absolute w-[90.4rem] right-[0rem] -top-[6rem]">
              <img class="" src="../assets/scan2.png" alt="" />
            </div>

            <div v-if="this.$store.state.pageTwoPath === 'welcome'">
              <div
                class="fade-image absolute right-[71rem] top-[19.8rem] w-[10rem] h-[10rem] flex flex-col items-center z-20"
              >
                <img src="../assets/Rlogo.svg" class="absolute w-fit" alt="" />
                asd
              </div>
              <div
                class="fade-imageToYellow w-[10em] h-[10rem] rounded-[50%] absolute bg-reddish right-[71rem] top-[19.8rem]"
              ></div>
            </div>

            <div
              v-else-if="this.$store.state.pageTwoPath === 'covid-questionary'"
              class="fade-RedToYellow w-[22.9rem] h-[22.9rem] rounded-[50%] absolute bg-reddish top-[23rem] right-[60rem]"
            ></div>

            <!-- <div
              class="w-[62.2rem] h-[7.5rem] absolute bg-yellow top-[17rem] -left-[76rem]"
            ></div> -->
          </div>
        </div>
      </div>
      <div
        class="gap-[11rem] flex items-center justify-center absolute top-[95rem] left-[50%] -translate-x-[50%]"
      >
        <img
          class="cursor-pointer invisible"
          src="../assets/leftarrow.png"
          alt=""
        />
        <img
          @click="submitForm"
          class="cursor-pointer"
          src="../assets/rightarrow.png"
          alt=""
        />
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
  data() {
    return {
      animationPath: "",
      elementVisible: false,
      username: "",
      surname: "",
      mail: "",
      errorMessages: {
        usernameErrorMessage: "",
        surnameErrorMessage: "",
        mailErrorMessage: "",
        usernameMin: "სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან",
        usernameMax: "სახელის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან",
        usernameOnlyLetters:
          "სახელის ველი უნდა უნდა შეიცავდეს მხოლოდ ანბანის ასოებს",
        surnameMin: "გვარის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან",
        surnameMax: "გვარის ველი უნდა შედგებოდეს მაქსიმუმ 3 სიმბოლოსგან",
        surnameOnlyLetters:
          "გვარის ველი უნდა უნდა შეიცავდეს მხოლოდ ანბანის ასოებს",
        mailNotCorrect: "თქვენს მიერ შეყვანილი მეილი არასწორია",
        mailEndingNotCorrect:
          "გთხოვთ დარეგისტრირდეთ covid-ის მეილით (yourmail@covid.ge)",
      },

      usernameMinValue: true,
      usernameMaxValue: true,
      usernameOnlyLettersValue: true,
      surnameMinValue: true,
      surnameMaxValue: true,
      surnameOnlyLettersValue: true,
      mailNotCorrectValue: true,
      mailFormatIncorrect: true,
    };
  },
  mounted() {
    this.elementVisible = !this.elementVisible;
    setTimeout(() => (this.elementVisible = false), 2000);
  },
  methods: {
    nextPageAnimationTrigger() {
      this.$store.commit("setPageThreePath", "identification");
    },
    setPersonalInfo: function () {
      this.$store.state.apiData.username = this.username;
      this.$store.state.apiData.mail = this.mail;
      this.$store.state.apiData.surname = this.surname;
    },
    checkUsernameMinValue: function () {
      if (this.username.length < 3) {
        this.errorMessages.usernameErrorMessage =
          this.errorMessages.usernameMin;
        this.usernameMinValue = true;
        return;
      } else this.usernameMinValue = false;
    },
    checkUsernameMaxValue: function () {
      if (this.username.length > 255) {
        this.errorMessages.usernameErrorMessage =
          this.errorMessages.usernameMax;
        this.usernameMaxValue = true;
        return;
      } else this.usernameMaxValue = false;
    },
    checkUsernameOnlyLetters: function () {
      let letters = /^[a-zA-Zაბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ]+$/;
      if (!this.username.match(letters)) {
        this.errorMessages.usernameErrorMessage =
          this.errorMessages.usernameOnlyLetters;
        this.usernameOnlyLettersValue = true;
        return;
      } else this.usernameOnlyLettersValue = false;
    },
    checkSurnameMinValue: function () {
      if (this.surname.length < 3) {
        this.errorMessages.surnameErrorMessage = this.errorMessages.surnameMin;
        this.surnameMinValue = true;
        return;
      } else this.surnameMinValue = false;
    },
    checkSurnameMaxValue: function () {
      if (this.surname.length > 255) {
        this.errorMessages.surnameErrorMessage = this.errorMessages.surnameMax;
        this.surnameMaxValue = true;
        return;
      } else this.surnameMaxValue = false;
    },
    checkSurnameOnlyLetters: function () {
      let letters = /^[a-zA-Zაბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ]+$/;
      if (!this.surname.match(letters)) {
        this.errorMessages.surnameErrorMessage =
          this.errorMessages.surnameOnlyLetters;
        this.surnameOnlyLettersValue = true;
        return;
      } else this.surnameOnlyLettersValue = false;
    },
    testMail: function (email) {
      return /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
        email
      );
    },
    checkMailIsCorrect: function () {
      if (!this.testMail(this.mail)) {
        this.mailNotCorrectValue = true;
        this.errorMessages.mailErrorMessage = this.errorMessages.mailNotCorrect;
        return;
      } else this.mailNotCorrectValue = false;
    },
    checkMailEnding: function () {
      const emailEnding = "@covid.ge";
      const emailEndingLength = emailEnding.length;

      //   taking last characters of email value, which should match "@covid.ge"
      const emailValue = this.mail.trim().toLowerCase();
      const emailLength = emailValue.length;
      const emailValueEnding = emailValue.slice(
        emailLength - emailEndingLength,
        emailLength
      );
      if (emailValueEnding !== emailEnding) {
        this.mailFormatIncorrect = true;
        this.errorMessages.mailErrorMessage =
          this.errorMessages.mailEndingNotCorrect;
        return;
      } else this.mailFormatIncorrect = false;
    },
    submitForm: function () {
      this.checkUsernameMaxValue();
      this.checkUsernameOnlyLetters();
      this.checkUsernameMinValue();
      this.checkSurnameMaxValue();
      this.checkSurnameOnlyLetters();
      this.checkSurnameMinValue();
      this.checkMailEnding();
      this.checkMailIsCorrect();
      if (
        !this.usernameMinValue &&
        !this.usernameMaxValue &&
        !this.usernameOnlyLettersValue &&
        !this.surnameMinValue &&
        !this.surnameMaxValue &&
        !this.surnameOnlyLettersValue &&
        !this.mailNotCorrectValue &&
        !this.mailFormatIncorrect
      ) {
        (this.usernameErrorMessage = ""),
          (this.surnameErrorMessage = ""),
          (this.mailErrorMessage = ""),
          this.$store.commit("setUsername", this.username);
        this.$store.commit("setSurname", this.surname);
        this.$store.commit("setMail", this.mail);
        this.nextPageAnimationTrigger();
        this.$router.push({ path: "/covid-questionary" });
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

.fade-image {
  animation: fade-image 1s ease forwards;
}

.fade-imageToYellow {
  animation: fade-imageToYellow 1s ease forwards;
  animation-direction: normal;
}

.fade-RedToYellow {
  animation: fade-RedToYellow 1s forwards;
}

@keyframes fade-image {
  0% {
    opacity: 1;
    clip-path: inset(0 0 20px 0);
    transform: translate(0, 15px);
  }
  100% {
    opacity: 0;
    transform: translate(55px, -15px);
    clip-path: inset(0 0 20px 0);
  }
}
@keyframes fade-imageToYellow {
  0% {
    opacity: 0;
    transform: translate(-20px, 40px);
    width: 10rem;
    height: 10rem;
    border-radius: 0;
    background-color: rgba(221, 57, 57, 1);
  }
  100% {
    opacity: 1;
    transform: translate(550px, -25px);
    width: 62.2rem;
    height: 7.5rem;
    border-radius: 0;
    background-color: rgba(214, 209, 110, 1);
  }
}
@keyframes fade-RedToYellow {
  0% {
    border-radius: 0;
    background-color: rgba(221, 57, 57, 1);
  }
  100% {
    transform: translate(450px, -59px);
    width: 62.2rem;
    height: 7.5rem;
    border-radius: 0;
    background-color: rgba(214, 209, 110, 1);
  }
}
</style>
