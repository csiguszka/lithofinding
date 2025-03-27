<template>
  <v-container class="m-auto w-[350px]">
    <v-form v-model="valid" ref="form" @submit.prevent="submitForm">
      <v-text-field
        v-model="name"
        :rules="nameRules"
        label="Név"
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="Email"
        required
        type="email"
      ></v-text-field>

      <v-text-field
        v-model="phone"
        :rules="phoneRules"
        label="Telefonszám"
        required
        type="tel"
      ></v-text-field>

      <v-textarea
        v-model="message"
        :rules="messageRules"
        label="Üzenet"
        required
        rows="4"
      ></v-textarea>

      <v-btn :disabled="!valid" color="primary" type="submit">Küldés</v-btn>
    </v-form>

    <!-- Success Message -->
    <v-alert v-if="submitted" type="success" class="mt-4">
      Az üzenet sikeresen elküldve!
    </v-alert>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      valid: false,
      name: "",
      email: "",
      phone: "",
      message: "",
      nameRules: [(v) => !!v || "A név megadása kötelező"],
      emailRules: [
        (v) => !!v || "Az email cím megadása kötelező",
        (v) => /.+@.+\..+/.test(v) || "Érvényes email címet adjon meg",
      ],
      phoneRules: [
        (v) => !!v || "A telefonszám megadása kötelező",
        (v) => /^\d+$/.test(v) || "Csak számokat használhat",
      ],
      messageRules: [(v) => !!v || "Az üzenet megadása kötelező"],
      submitted: false, // State to track if form was submitted
    };
  },
  methods: {
    submitForm() {
      const formData = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        message: this.message,
      };
      console.log(formData);

      axios
        .post(
          "https://giant-julietta-backendtheworstthing-e4b19e87.koyeb.app/api/contact",
          formData
        )
        .then((response) => {
          console.log("Sikeres küldés:", response);
          this.submitted = true; // Set submitted to true to show success message
          this.$emit("formSubmitted", response);
        })
        .catch((error) => {
          console.error("Hiba történt:", error);
          this.submitted = false; // In case of error, hide the success message
        });
    },
  },
};
</script>
