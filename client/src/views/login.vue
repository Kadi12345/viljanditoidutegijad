<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
        <form
          class="text-center border border-success p-5"
          style="margin-top:30px;height:auto;padding-top:100px !important;"
          @submit.prevent="loginSupplier"
        >
          <input
            type="text"
            id="email"
            class="form-control mb-5"
            placeholder="Email"
            v-model="login.email"
          />

          <input
            type="password"
            id="password"
            class="form-control mb-5"
            placeholder="Password"
            v-model="login.password"
          />
          <p>
            Sul ei ole veel kontot? <router-link to="/register"
              >Registreerima!</router-link
            >
          </p>

          <center>
            <button class="btn btn-success" size="lg" type="submit">
              Logi sisse
            </button>
          </center>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      login: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async loginSupplier() {
        try {
        let response = await this.$http.post("/api/login", this.login);
        let token = response.data.token;
        localStorage.setItem("jwt", token);
        if (token) {
          this.$swal("Tere tulemast!");
          this.$router.push("/offers");
        }
      } catch (err) {
        this.$swal("Uhh, midagi läks valesti!", "error");
        console.log(err.response);
      }
    }
  }
};
</script>