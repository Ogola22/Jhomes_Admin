<template>
  <body class="theme-purple authentication sidebar-collapse">
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
                    <router-link to="/register" class="nav-link btn btn-primary btn-round" >SIGN UP</router-link>
                </li>
            </ul>
        </div>
    </div>
</nav>
<!-- End Navbar -->
<div class="page-header">
    <div class="page-header-image" style="background-image:url(../../assets/images/image-gallery/10.jpg)"></div>
    <div class="container">
        <div class="col-md-12 content-center">
            <div class="card-plain">
                <form @submit.prevent="handleLogin" class="form" method="" action="">
                    <div class="header">
                        <div class="logo-container">
                            <img src="/icon-deal.png" alt="">
                        </div>
                        <h5>Log in</h5>
                    </div>
                    <div class="content">                                                
                        <div class="input-group input-lg">
                            <input type="email"
                             class="form-control" v-model="email" placeholder="Email">
                            <span class="input-group-addon">
                                <i class="zmdi zmdi-account-circle"></i>
                            </span>
                            
                        </div>
                        <div class="input-group input-lg">
                            <input type="password" v-model="password"
                             placeholder="Password" class="form-control" />
                            <span class="input-group-addon">
                                <i class="zmdi zmdi-lock"></i>
                            </span>
                        </div>
                    </div>
                    <div class="footer text-center">
                        <button class="btn l-cyan btn-round btn-lg btn-block waves-effect waves-light">SIGN IN</button>
                        <h6 class="m-t-20"><router-link to="/forgotpassword" class="link">Forgot Password?</router-link></h6>
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
export default {
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        async handleLogin() {
            const response = await axios.post('login', {
                email: this.email,
                password: this.password,
            });

            localStorage.setItem('token', response.data.token);
            this.$store.dispatch('user', response.data.user)
            this.$router.push('/');
        }
    }
}

</script>

<style>

</style>