<template>
    <!-- Main Content -->

    <section class="content home">
        <div class="container-fluid">
            <div class="row clearfix">
                <div class="col-lg-12">
                    <div class="card property_list" v-for="properties in properties" :key="properties.id">
                        <div class="body">
                            <div class="row">
                                <div class="col-lg-4 col-md-6">
                                    <div class="property_image">
                                        <img class="img-thumbnail img-fluid" src="../../src/assets/images/property-1.jpg"
                                            alt="img">
                                        <span class="badge badge-danger">{{ properties.type }}</span>
                                    </div>
                                </div>
                                <div class="col-lg-8 col-md-6">
                                    <div class="col-lg-6 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">
                                        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                            <button class="btn btn-info me-md-4" type="button">UPDATE</button>
                                        </div>
                                    </div>
                                    <div class="property-content">
                                        <div class="detail">
                                            <h5 class="text-success m-t-0 m-b-0">{{ properties.price }}</h5>
                                            <h4 class="m-t-0"><a href="#" class="col-blue-grey">{{ properties.location
                                            }}</a>
                                            </h4>
                                            <p class="text-muted"><i class="zmdi zmdi-pin m-r-5 p-0"> {{ properties.location
                                            }}</i></p>
                                            <p class="text-muted m-b-0">{{ properties.desc }}</p>
                                        </div>
                                        <div class="property-action m-t-15">
                                            <a href="#" title="Square Feet"><i class="zmdi zmdi-view-dashboard"></i><span>{{
                                                properties.size }}</span></a>
                                            <a href="#" title="Bedroom"><i class="zmdi zmdi-hotel"></i><span>{{
                                                properties.bedroom }}</span></a>
                                            <a href="#" title="Garages"><i class="zmdi zmdi-car-taxi"></i><span>{{
                                                properties.garage }}</span></a>
                                            <a href="#" title="Bathroom"><i class="zmdi zmdi-home"></i><span>{{
                                                properties.bathroom }}</span></a>
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
export default {
    props: ["properties"]

}
</script>

<style></style>