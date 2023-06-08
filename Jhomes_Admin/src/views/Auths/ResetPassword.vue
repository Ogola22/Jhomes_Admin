<template>
    <div class="theme-purple authentication sidebar-collapse">
        <div class="page-header">
            <div class="container">
                <div class="col-md-12 content-center">
                    <div class="card-plain">
                        <form class="form" method="" action="" @submit.prevent="handleSubmit">
                            <div class="header">
                                <div class="logo-container">
                                    <img src="/icon-deal.png" alt="">
                                </div>
                                <h5>Reset Password</h5>
                            </div>
                            <div class="content">
                                <div class="input-group">
                                    <input type="text" class="form-control" v-model="email" placeholder="Enter Email">
                                    <span class="input-group-addon">
                                        <i class="zmdi zmdi-email"></i>
                                    </span>
                                </div>
                                <div class="input-group input-lg">
                                    <input type="password" v-model="password" placeholder="Password" class="form-control" />
                                    <span class="input-group-addon">
                                        <i class="zmdi zmdi-lock"></i>
                                    </span>
                                </div>
                                <div class="input-group input-lg">
                                    <input type="password" v-model="password_confirmation"
                                        placeholder="Confirm New Password" class="form-control" />
                                    <span class="input-group-addon">
                                        <i class="zmdi zmdi-lock"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="footer text-center">
                                <button
                                    class="btn l-cyan btn-round btn-lg btn-block waves-effect waves-light">Submit</button>
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
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            email: '',
            password: '',
            password_confirmation: '',
        }
    },
    methods: {
        async handleSubmit() {
            const response = await axios.post('reset-password', {
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation,
                token: this.$route.params.token
            })
            console.log(response)
            this.$router.push('/login');
        }
    }
}

</script>
<style>
</style>