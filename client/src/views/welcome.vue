<template>
  <div class="container mb-5 mt-1">
    <b-row align-v="start">
      <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
        <center>
          <b-row>
            <b-col lg="6" class="pb-2"
              ><b-button class="btn btn-success" size="lg" @click="addOffer()"
                >LISA PAKKUMINE</b-button
              ></b-col
            >
            <b-col lg="6" class="pb-2"
              ><b-button class="btn btn-success" size="lg" @click="showOffers()"
                >VAATA PAKKUMISI</b-button
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
  },
};
</script>
