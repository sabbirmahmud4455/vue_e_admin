<template>
  <div class="page-wrapper">
        <div class="page-content--bge5">
            <div class="container">
                <div class="login-wrap">
                    <div class="login-content">
                        <div class="login-logo">
                            <a href="#">
                                <img src="images/icon/logo.png" alt="CoolAdmin">
                            </a>
                        </div>
                        <div class="login-form">
                            <form @submit.prevent="loginSubmit">
                                <div class="form-group">
                                    <label>Email Address</label>
                                    <input v-model="loginForm.email" class="au-input au-input--full" type="email" name="email" placeholder="Email" required>
                                </div>
                                <div class="form-group">
                                    <label>Password</label>
                                    <input v-model="loginForm.password" class="au-input au-input--full" type="password" required name="password" placeholder="Password">
                                </div>
                                <!-- <div class="login-checkbox">
                                    <label>
                                        <input type="checkbox" name="remember">Remember Me
                                    </label>
                                    <label>
                                        <a href="#">Forgotten Password?</a>
                                    </label>
                                </div> -->
                                <button class="au-btn au-btn--block au-btn--green m-b-20" type="submit">sign in</button>
                                <!-- <div class="social-login-content">
                                    <div class="social-button">
                                        <button class="au-btn au-btn--block au-btn--blue m-b-20">sign in with facebook</button>
                                        <button class="au-btn au-btn--block au-btn--blue2">sign in with twitter</button>
                                    </div>
                                </div> -->
                            </form>
                            <div class="register-link">
                                <p>
                                    Don't you have account?
                                    <a href="#">Sign Up Here</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios';
import router from '../router/index'


export default {
    data: () => {
        return {
            loginForm : {
                email: '',
                password: ''
            }

        }
    },

  methods: {
    loginSubmit:  function() {

      axios({
        method: 'post', //you can set what request you want to be
        url: 'http://localhost:3000/login',
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
        data: this.loginForm
      }).then(() => { 
        router.push("/")
      }).catch(function(error) {
        console.log(error);
      })
    },
  }
}
</script>