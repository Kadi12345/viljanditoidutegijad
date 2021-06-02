<template>
  <b-container fluid>
    <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
      <center>
        <b-row>
          <b-col lg="4" class="pb-2"
            ><b-button class="btn btn-success" size="lg" @click="addOffer"
              >LISA PAKKUMINE</b-button
            ></b-col
          >
          <b-col lg="4" class="pb-2"
            ><b-button class="btn btn-danger" size="lg" @click="addOffer"
              >MINU PAKKUMISED</b-button
            ></b-col
          >
          <b-col lg="4" class="pb-2"
            ><b-button class="btn btn-success" size="lg" @click="addOffer"
              >LOGI VÄLJA</b-button
            ></b-col
          >
        </b-row>
      </center>
    </div>
    <b-row cols="1" cols-sm="2" cols-md="3" cols-lg="4">
      <b-col
        v-for="offer in offers"
        :key="offer.product"
        col
        no-gutters
        class="mb-2 mt-5"
      >
        <b-card
          :title="offer.product"
          :img-src="offer.imageUrl"
          img-width="100%"
          align="center"
          class="h-200"
          @offer-deleted="getMyOffers"
        >
          <b-card-text>
            {{ offer.supplier }}<br />
            {{ offer.contact }}
          </b-card-text>
          <span class="badge badge-pill badge-success">
            Pakkumine kehtib: <br />{{ offer.offerDate }}</span
          >
          <center>
            <button
              class="badge badge-pill badge-danger"
              size="lg"
              type="submit"
              @click="deleteOffer"
            >
              Kustuta
            </button>
          </center>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import VueJwtDecode from "vue-jwt-decode";
import axios from "axios";
import moment from "moment";
export default {
  name: "offers",
  data() {
    return {
      offers: [
        {
          product: "",
          supplier: "",
          contact: "",
          imageUrl: "",
          offerDate: "",
        },
      ],
    };
  },

  async created() {
    await this.getMyOffers();
  },
  methods: {
 async getMyOffers() {
        try {
            let token = localStorage.getItem("jwt");
      let decoded = VueJwtDecode.decode(token);
   console.log("TOKEN", decoded);
   let idFromLocalStorage = decoded._id
const myOffers = await this.$http.get(`/api/myoffers/${idFromLocalStorage}`);
       console.log("OFFERS", myOffers);
this.offers = myOffers.data.offersBySupplier;
      } catch (err) {
        this.$swal("Uhh, midagi läks valesti!", "error");
        console.log(err.response);
      }
    },

    addOffer() {
      this.$router.push("/addoffer");
    },
  },
  
  moment,

  async deleteOffer() {
    await axios({
      url: `/api/offers/${this.offer.id}`,
      method: "DELETE",
    });
    this.$emit("offer-deleted");
  },
};
</script>
