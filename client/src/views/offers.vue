<template>
  <div class="container mb-5">
    <div class="row">
      <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
        <center>
          <b-card
            img-src= {{ offers.data.imageUrl }}
            img-alt="Card image"
            img-right
          >
            <b-card-text>
          {{ offers.data.product }}
            </b-card-text>
          </b-card>
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
        {product: [] },
        {imageUrl: [] }


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
      this.items = offers.data;
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
