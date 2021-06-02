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
              ><b-button class="btn btn-success" size="lg" @click="showMyOffers"
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
                  @offer-deleted="getOffers"
                >
                  <b-card-text>
                    {{ offer.supplier }}<br>
                    {{ offer.contact }}
                  </b-card-text>
                  <span class="badge badge-pill badge-success "> Pakkumine kehtib: <br>{{ offer.offerDate }}</span>
                    <center>
            <button class="badge badge-pill badge-danger" size="lg" type="submit" @click="deleteOffer">
              Kustuta
            </button>
          </center>
              
                </b-card>
              </b-col>
            </b-row>
          </b-container>
</template>
<script>
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
        offerDate: ""
        },
       
      ],
    };
  },

  async created() {
    await this.getOffers();
  },
  methods: {
    async getOffers() {
      const offers = await axios({
        url: "api/offers",
        method: "GET",
      });
      console.log("offers", offers);
      this.offers = offers.data.allOffers;
    },

     addOffer() {
      this.$router.push("/addoffer");
    },

    showMyOffers() {
      this.$router.push("/myoffers");
    },
  },
  moment,
  
    async deleteOffer() {
      await axios({
        url: `/api/offers/${this.offer.id}`,
        method: "DELETE"
      });
      this.$emit("offer-deleted");
    },
};
</script>
