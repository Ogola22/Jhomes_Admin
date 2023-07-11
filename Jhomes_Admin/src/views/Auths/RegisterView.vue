<template>
    <body class="theme-purple authentication sidebar-collapse">
        <!-- Navbar -->

        <nav class="navbar navbar-expand-lg fixed-top navbar-transparent">
            <div class="container">
                <div class="navbar-collapse">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" title="Follow us on Twitter" href="#" target="_blank">
                                <i class="zmdi zmdi-twitter"></i>
                                <p class="d-lg-none d-xl-none">Twitter</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" title="Like us on Facebook" href="#" target="_blank">
                                <i class="zmdi zmdi-facebook"></i>
                                <p class="d-lg-none d-xl-none">Facebook</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" title="Follow us on Instagram" href="#" target="_blank">
                                <i class="zmdi zmdi-instagram"></i>
                                <p class="d-lg-none d-xl-none">Instagram</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <router-link to="/login" class="nav-link btn btn-primary btn-round">SIGN IN</router-link>
                        </li>
                    </ul>
                </div>
            </div> 
        </nav>
        <!-- End Navbar -->
        <div class="page-header">
            <div class="page-header-image" style="background-image:url(assets/images/login.jpg)"></div>
            <div class="container">
                <div class="col-md-12 content-center">
                    <div class="card-plain">
                        <form action="" @submit.prevent="handleSubmit()">
                            <error v-if="error" :error="error"/>
                            <div class="header">
                                <div class="logo-container">
                                    <img src="/icon-deal.png" alt="">
                                </div>
                                <h5>Sign Up</h5>
                                <span>Register a new membership</span>
                            </div>
                            <div class="content">
                                <div class="input-group">
                                    <input type="text" class="form-control" v-model="name" placeholder="Enter User Name">
                                    <span class="input-group-addon">
                                        <i class="zmdi zmdi-account-circle"></i>
                                    </span>
                                </div>
                                <div class="input-group">
                                    <input type="text" class="form-control" v-model="email" placeholder="Enter Email">
                                    <span class="input-group-addon">
                                        <i class="zmdi zmdi-email"></i>
                                    </span>
                                </div>
                                <div class="input-group">
                                    <input type="password" v-model="password" placeholder="Password" class="form-control" />
                                    <span class="input-group-addon">
                                        <i class="zmdi zmdi-lock"></i>
                                    </span>
                                </div>
                                <div class="input-group">
                                    <input type="password" v-model="password_confirmation" placeholder="Confirm Password"
                                        class="form-control" />
                                    <span class="input-group-addon">
                                        <i class="zmdi zmdi-lock"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="footer text-center">
                                <button class="btn l-cyan btn-round btn-lg btn-block waves-effect waves-light">SIGN
                                    UP</button>
                                <h6 class="m-t-20"><router-link to="/login" class="link">You already have a
                                        membership?</router-link></h6>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <footer class="footer">
                <div class="container">
                    <div class="copyright">
                        &copy;
                        <span>
                            2023
                        </span>,
                        <span>Designed by <a href="" target="_blank">Brian</a></span>
                    </div>
                </div>
            </footer>
        </div>
    </body>
</template>

<script>
import axios from 'axios';
import Error from '../../components/ErrorComponent.vue';
export default {
    components: {
        Error
    },
    data() {
        return {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            error: ''
        }
    },
    methods: {
        async handleSubmit() {
            try {
                const response = await axios.post('register', {
                name: this.name,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation
            });

            console.log(response)
            this.$router.push('/login');
            } catch (e) {
                this.error = 'Enter Correct Details, Ensure To Set a Strong Password'
           }

        }
    }
}
</script>

<style></style>