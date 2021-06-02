<template>
<b-container fluid>
  <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
  <center>
      <b-row>
            <b-col lg="6" class="pb-2"
              ><b-button class="btn btn-success" size="lg" @click="register()"
                >REGISTREERI</b-button
              ></b-col
            > <b-col lg="6" class="pb-2"
              ><b-button class="btn btn-success" size="lg" @click="logIn()"
                >LOGI SISSE</b-button
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
              
                </b-card>
              </b-col>
            </b-row>
          </b-container>
</template>
<script>
import axios from "axios";
export default {
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
     logIn() {
      this.$router.push("login");
    },
     register() {
      this.$router.push("register");
    },
  },
};
</script>
