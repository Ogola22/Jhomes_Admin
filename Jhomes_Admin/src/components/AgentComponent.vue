<template>
    <section class="content agent">
        <div class="block-header">
            <div class="row">
                <div class="col-lg-7 col-md-6 col-sm-12">
                    <h2>All Agents
                        <small class="text-muted">Welcome to Jhomes Company Ltd</small>
                    </h2>
                </div>
                <div class="col-lg-5 col-md-6 col-sm-12">
                    <button class="btn btn-primary btn-icon btn-round hidden-sm-down float-right m-l-10" type="button">
                        <i class="zmdi zmdi-plus"></i>
                    </button>
                    <ul class="breadcrumb float-md-right">
                        <li class="breadcrumb-item"><a href="index.html"><i class="zmdi zmdi-home"></i> Jhomes</a></li>
                        <li class="breadcrumb-item"><a href="javascript:void(0);">Agents</a></li>
                        <li class="breadcrumb-item active">All Agents</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container-fluid" >
            <div class="row clearfix">
                <div class="col-lg-4 col-md-6" v-for="agent in agent" :key="agent.id">
                    <div class="card agent">
                        <div class="agent-avatar"> <a href="profile.html"> <img src="../../src/assets/images/team-5.jpg"
                                    class="img-fluid " alt=""> </a> </div>
                        <div class="agent-content">
                            <div class="agent-name">
                                <h4><a href="profile.html">{{ agent.fname }}</a></h4>
                                <span>{{ agent.lname }}</span>
                            </div>
                            <ul class="agent-contact-details">
                                <li><i class="zmdi zmdi-phone"></i><span>{{ agent.phone }}</span></li>
                                <li><i class="zmdi zmdi-email"></i>{{ agent.email }}</li>
                            </ul>
                            <ul class="social-icons">
                                <li><a class="facebook" href="#"><i class="zmdi zmdi-facebook">{{ agent.facebook }}</i></a></li>
                                <li><a class="twitter" href="#"><i class="zmdi zmdi-twitter">{{ agent.tweeter }}</i></a></li>
                                <li><a class="gplus" href="#"><i class="zmdi zmdi-google-plus">{{ agent.likedin }}</i></a></li>
                                <li><a class="linkedin" href="#"><i class="zmdi zmdi-linkedin">{{ agent.intagram }}</i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
</template>

<script>
export default {
    props: ["agent"],
}
</script>

<style></style>