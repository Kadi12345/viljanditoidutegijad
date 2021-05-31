<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
        <form
          class="text-center border border-success p-5"
          style="margin-top:70px;height:auto;padding-top:100px !important;"
          @submit.prevent="registerSupplier"
        >
          <input
            type="text"
            id="name"
            class="form-control mb-5"
            placeholder="Name"
            v-model="register.name"
            required
          />
          <input
            type="text"
            id="contact"
            class="form-control mb-5"
            placeholder="Contact"
            v-model="register.contact"
            required
          />
          <input
            type="email"
            id="email"
            class="form-control mb-5"
            placeholder="Email"
            v-model="register.email"
            required
          />

          <input
            type="password"
            id="password"
            class="form-control mb-5"
            placeholder="Password"
            v-model="register.password"
          />
          <p>
            Sul on juba konto?<router-link to="/"
              >Logi sisse!</router-link
            >
        </p>
         
            <center>
              <button class="btn btn-success" size="lg" type="submit">
               Registreeri
              </button>
            </center>
       
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert";
export default {
  data() {
    return {
      register: {
        name: "",
        contact: "",
        email: "",
        password: "",
      },
    };
  },
 methods: {
    async registerSupplier() {
      try {
        let response = await this.$http.post("/api/registerSupplier", this.registerSupplier);
        console.log(response);
        let token = response.data.token;
        if (token) {
          localStorage.setItem("jwt", token);
          this.$router.push("/offers");
          swal("Success", "Registration Was successful", "success");
        } else {
          swal("Error", "Something Went Wrong", "Error");
        }
      } catch (err) {
        let error = err.response;
        if (error.status == 409) {
          swal("Error", error.data.message, "error");
        } else {
          swal("Error", error.data.err.message, "error");
        }
      }
    },
  },
};
</script>