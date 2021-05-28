<template>
  <div class="container mb-5">
    <div class="row">
      <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
        <center>
          <h2>Lisa uus pakkumine</h2>
          <br />
          <form id="create-post-form">
            <div class="form-group col-md-12">
              <input
                type="text"
                id="product"
                v-model="offer.product"
                name="product"
                class="form-control"
                placeholder="Kirjuta siia, mida pakud"
              />
            </div>
            <div class="form-group col-md-12">
              <input
                type="text"
                id="imageUrl"
                v-model="offer.imageUrl"
                name="imageUrl"
                class="form-control"
                placeholder="Kui sul on tootest pilt, lisa siia url, kujul: https://lihapirukad-006.jpg"
              />
            </div>
            <div class="form-group col-md-12">
              <input
                type="text"
                id="offerDate"
                v-model="offer.offerDate"
                name="offerDate"
                class="form-control"
                placeholder="Mis kuupäevaks sa antud toodet pakud"
              />
            </div>
            <div class="form-group col-md-12">
              <input
                type="text"
                id="supplier"
                v-model="offer.supplier"
                name="supplier"
                class="form-control"
                placeholder="Pakkuja nimi"
              />
            </div>
            <div class="form-group col-md-12">
              <input
                type="text"
                id="contact"
                v-model="offer.contact"
                name="contact"
                class="form-control"
                placeholder="Kontaktid"
              />
            </div>
            <br />
            <b-col lg="6" class="pb-2"
              ><b-button class="btn btn-success" size="lg" @click="addOffer()"
                >LISA PAKKUMINE</b-button
              ></b-col
            >
          </form>
        </center>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "add",
  data() {
    return {
      offer: {
        product: "",
        imageUrl: "",
        offerDate: "",
        supplier: "",
        contact: "",
      },
    };
  },
  methods: {
    addOffer() {
      let newOffer = {
        product: this.offer.product,
        imageUrl: this.offer.imageUrl,
        offerDate: this.offer.offerDate,
        supplier: this.offer.supplier,
        contact: this.offer.contact,
      };
      console.log(newOffer);
      this.submitToServer(newOffer);
    },
    submitToServer(data) {
      axios
        .post("api/offer", data)
        .then((response) => {
          console.log(response);
          this.$router.push("/offers");
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
  },
};
</script>
