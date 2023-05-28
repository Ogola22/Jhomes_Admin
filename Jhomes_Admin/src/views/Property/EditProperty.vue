<template>
    <!-- Main Content -->
    <section class="content home">
        <div class="block-header">
            <div class="row">
                <div class="col-lg-7 col-md-6 col-sm-12">
                    <h2>Update Property Details
                        <small class="text-muted">Jhomes Ltd Admin</small>
                    </h2>
                </div>
                <div class="col-lg-5 col-md-6 col-sm-12">
                    <button class="btn btn-primary btn-icon btn-round hidden-sm-down float-right m-l-10" type="button">
                        <i class="zmdi zmdi-plus"></i>
                    </button>
                    <ul class="breadcrumb float-md-right">
                        <li class="breadcrumb-item"><router-link to="/"><i class="zmdi zmdi-home"></i> Jhomes</router-link>
                        </li>
                        <li class="breadcrumb-item"><router-link to="/propertylist">Property</router-link></li>
                        <li class="breadcrumb-item active">Update</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row clearfix">
                <form @submit.prevent="updateProperty()" action="">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="header">
                                <h2><strong>Basic</strong> Information <small>Description text here...</small> </h2>

                            </div>
                            <div class="body">
                                <div class="row clearfix">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="property" class="form-label"
                                                >Property Title</label>
                                            <input type="text" class="form-control" v-model="property.title">
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="property" class="form-label"
                                                >Location</label>
                                            <input type="text" class="form-control" v-model="property.location"
                                               >

                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <div class="form-line">
                                                <label for="property" class="form-label"
                                                >Description</label>
                                                <textarea rows="4" class="form-control no-resize"
                                                v-model="property.desc"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="header">
                                <h2><strong>Property</strong> For <small>Description text here...</small> </h2>

                            </div>
                            <div class="body">
                                <div class="row clearfix">
                                    <div class="col-xs-12 col-sm-6">
                                        <div class="form-group">
                                            <label for="itemN-23">Property Type</label>
                                            <select data-placeholder="Select Option" class="chosen-select" id="itemN-23" v-model="property.type"
                                               >
                                                <option value="1">Villa</option>
                                                <option value="2">Apartment</option>
                                                <option value="2">Home</option>
                                                <option value="2">Office</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="property" class="form-label"
                                                >Price</label>
                                            <input type="text" class="form-control" v-model="property.price"
                                              >
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <textarea rows="4" class="form-control no-resize"
                                                placeholder="Property Address"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="col-lg-3 col-dm-3 col-sm-6">
                                        <div class="form-group">
                                            <label for="property" class="form-label"
                                                >Bedrooms</label>
                                            <input type="text" class="form-control" v-model="property.bedroom"
                                                >
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-dm-3 col-sm-6">
                                        <div class="form-group">
                                            <label for="property" class="form-label"
                                                >Size</label>
                                            <input type="text" class="form-control" v-model="property.size"
                                              >
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-dm-3 col-sm-6">
                                        <div class="form-group">
                                            <label for="property" class="form-label"
                                                >Parking Space</label>
                                            <input type="text" class="form-control" v-model="property.garage"
                                               >
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-dm-3 col-sm-6">
                                        <div class="form-group">
                                            <label for="property" class="form-label"
                                                >Bathrooms</label>
                                            <input type="text" class="form-control" v-model="property.bathroom"
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="body">

                                <div class="row clearfix">
                                    <div class="col-sm-12">
                                        <form action="/" id="frmFileUpload" class="dropzone m-b-15 m-t-15" method="post"
                                            enctype="multipart/form-data">
                                            <div class="dz-message">
                                                <div class="drag-icon-cph"> <i class="material-icons">touch_app</i> </div>
                                                <h3>Drop files here or click to upload.</h3>
                                                <em>(This is just a demo dropzone. Selected files are <strong>not</strong>
                                                    actually uploaded.)</em>
                                            </div>
                                            <div class="fallback">
                                                <input name="file" type="file" multiple />
                                            </div>
                                        </form>
                                    </div>
                                    <div class="col-sm-12">
                                        <button type="submit" class="btn btn-primary btn-round">Update</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

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
                garage: "",
            },
        };
        
    },
    created(){
        this.getProperty()   
    },

    methods: {
        async getProperty() {
            let id = this.$route.params.id;
            await axios.get(`property/${id}`).then((res) => {
                this.property = res.data;
                console.log(res.data)
            });
        },

        async updateProperty() {
            let id = this.$route.params.id;
            await axios.put(`property/${id}`, this.property).then((res) => {
                console.log(res.message);
                this.property = {
                    title: "",
                    location: "",
                    desc: "",
                    price: "",
                    bedroom: "",
                    bathroom: "",
                    size: "",
                    type: "",
                    garage: "",
                };
            });
            // this.$router.replace("/propertyList")
        }
    }

}
</script>

<style></style>