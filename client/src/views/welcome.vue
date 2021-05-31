<template>
  <div class="container mb-5 mt-1">
    <b-row align-v="start">
      <div class="col-lg-12 offset-lg-12 col-sm-10 offset-sm-1">
        <center>
          <b-row>
            <b-col lg="3" class="pb-2"
              ><b-button class="btn btn-success" size="lg" @click="logIn()"
                >LISA PAKKUMINE</b-button
              ></b-col
            >
            <b-col lg="3" class="pb-2"
              ><b-button class="btn btn-success" size="lg" @click="showOffers()"
                >VAATA PAKKUMISI</b-button
              ></b-col
            >
             <b-col lg="3" class="pb-2"
              ><b-button class="btn btn-success" size="lg" @click="register()"
                >REGISTREERI</b-button
              ></b-col
            > <b-col lg="3" class="pb-2"
              ><b-button class="btn btn-success" size="lg" @click="logIn()"
                >LOGI SISSE</b-button
              ></b-col
            >
          </b-row>
        </center>
      </div>
    </b-row>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },

  methods: {
    addOffer() {
      this.$router.push("addOffer");
    },
    showOffers() {
      this.$router.push("offers");
    },
     logIn() {
      this.$router.push("login");
    },
     register() {
      this.$router.push("register");
    },
  },
};
</script>
