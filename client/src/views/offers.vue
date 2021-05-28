<template>
  <div class="container mb-5">
    <div class="row">
      <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
        <center>
          <b-table striped hover :items="items" :fields="fields">
            <template #cell(product)="data">
              <b class="text-info">{{ data.item.value }} </b>
            </template>
          </b-table>
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
      fields: [
        { key: "offerDate", label: "Pakkumise kuupäev:", sortable: true },
        { key: "product", label: "Toode:", sortable: true },
        { key: "imageUrl", label: "Pilt:", sortable: true },
        { key: "supplier", label: "Pakkuja:", sortable: true },
        { key: "contact", label: "Kontakt:", sortable: true },
        { key: "id", label: "" },
        { key: "delete", label: "" },
      ],
      items: [],
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
