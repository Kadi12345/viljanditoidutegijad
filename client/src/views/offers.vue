<template>
  <div class="container mb-5">
    <div class="row">
      <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
        <center>
            <div v-for="offer in offers" :key="offer.product" class="col-md-3 col-6 my-1" >
            <div class="card h-100">
                <img :src="offer.imageUrl" class="card-img-top">
                <div class="card-body">
                    <div class="card-title">{{ offer.product }}</div>
                    <div>
                        <span class="badge badge-pill badge-info">${{ offer.offerDate }}</span>
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
      this.offers = offers.data;
    },
  },
  /*methods: {
    deleteOffer(id, index) {
      if (confirm("Oled sa kindel, et soovid toote kustutada?"))
        axios
          .delete("/api/offers/" + id)
          .then((resp) => {
            this.items.splice(index, 1);
          })
          .catch((error) => {
            console.log(error.message);
          });
    },
  },*/
};
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
