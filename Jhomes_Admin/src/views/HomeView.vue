<template>
   <section class="content home">
        <div class="container-fluid">
            <div class="row clearfix">
                <div class="col-lg-12">
                    <div class="card property_list" v-for="property in property" :key="property.id">
                        <div class="body">
                            <div class="row">
                                <div class="col-lg-4 col-md-6">
                                    <div class="property_image">
                                        <img class="img-thumbnail img-fluid" src="../assets/images/property-1.jpg"
                                            alt="property image">
                                        <span class="badge badge-danger">{{ property.property_for }}</span>
                                    </div>
                                </div>
                                <div class="col-lg-8 col-md-6">
                                    <div class="col-lg-6 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">                                                                            
                                    </div>
                                    <div class="property-content">
                                        <div class="detail">
                                            <h5 class="text-success m-t-0 m-b-0">{{ property.price }}</h5>
                                            <h4 class="m-t-0"><a href="#" class="col-blue-grey">{{ property.title
                                            }}</a>
                                            </h4>
                                            <p class="text-muted"><i class="zmdi zmdi-pin m-r-5 p-0"> {{ property.location
                                            }}</i></p>
                                            <p class="text-muted m-b-0">{{ property.desc }}</p>
                                        </div>
                                        <div class="property-action m-t-15">
                                            <a href="#" title="Square Feet"><i class="zmdi zmdi-view-dashboard"></i><span>{{
                                                property.size }}</span></a>
                                            <a href="#" title="Bedroom"><i class="zmdi zmdi-hotel"></i><span>{{
                                                property.bedroom }}</span></a>
                                            <a href="#" title="Garages"><i class="zmdi zmdi-car-taxi"></i><span>{{
                                                property.garage }}</span></a>
                                            <a href="#" title="Bathroom"><i class="zmdi zmdi-home"></i><span>{{
                                                property.bathroom }}</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
export default {
  data() {
        return {
          property: {
                title: "",
                location: "",
                desc: "",
                price: "",
                bedroom: "",
                bathroom: "",
                size: "",
                type: "",
                property_for:"",
                garage: "",
                image: ""
            },
        };
    },
    created() {
        this.getProperty();
    },
    methods: {
        getProperty() {
            axios.get('properties').then(res => {
                this.property = res.data;
                console.log(res.data)
            })
        }
    }

}
</script>

<style>

</style>