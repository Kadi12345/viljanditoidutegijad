<template>
  <div class="container mb-5">
    <div class="row">
      <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
        <center>
        <div v-for="offer in offers" :key="offer.product" class="col-md-8 col-8 my-4" >
            <div class="card h-200">
                <img :src="offer.imageUrl" class="card-img-top">
                <div class="card-body">
                    <div class="card-title">{{ offer.product }}</div>
                    <div class="card-title">{{ offer.supplier }}</div>
                    <div class="card-title">{{ offer.contact }}</div>
                    <div>
                        <span class="badge badge-pill badge-info success">{{ offer.offerDate }}</span>
                    </div>
                </div>
            </div>
        </div>
        </center>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
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
  },
  /*
      moment,
    async deleteOffer() {
      await axios({
        url: /api/deleteTask`,
        method: "DELETE",
        data: this.offer,
      });
      this.$emit("offer-deleted");
    },*/
};
</script>
