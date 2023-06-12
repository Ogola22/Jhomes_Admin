<template>
    <!-- Main Content -->
    <section class="content home">
        <div class="block-header">
            <div class="row">
                <div class="col-lg-7 col-md-6 col-sm-12">
                    <h2>Add Property
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
                        <li class="breadcrumb-item active">Add Property</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row clearfix">
                <form @submit.prevent="submitForm" action="">
                    <div class="col-lg-12">
                    <div class="card">
                        <div class="header">
                            <h2><strong>Property</strong> Details <small>Property Description...</small> </h2>

                        </div>
                        <div class="body">
                            <div class="row clearfix">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Property title"
                                            v-model="property.title">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Property Location"
                                            v-model="property.location">

                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <div class="form-line">
                                            <textarea rows="4" class="form-control no-resize"
                                                placeholder="Property Description" v-model="property.desc"></textarea>
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
                                        <select data-placeholder="Select Option" class="chosen-select" id="itemN-23"
                                            v-model="property.type">
                                            <option value="Villa">Villa</option>
                                            <option value="Apartment">Apartment</option>
                                            <option value="Home">Home</option>
                                            <option value="Office">Office</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6">
                                    <div class="form-group">
                                        <label for="itemN-23">Property For</label>
                                        <select data-placeholder="Select Option" class="chosen-select" id="itemN-23"
                                            v-model="property.property_for">
                                            <option value="For Sale">For Sale</option>
                                            <option value="For Rent">For Rent</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Price / Rent"
                                            v-model="property.price">
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
                                        <input type="text" class="form-control" placeholder="Bedrooms"
                                            v-model="property.bedroom">
                                    </div>
                                </div>
                                <div class="col-lg-3 col-dm-3 col-sm-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Square ft"
                                            v-model="property.size">
                                    </div>
                                </div>
                                <div class="col-lg-3 col-dm-3 col-sm-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Car Parking"
                                            v-model="property.garage">
                                    </div>
                                </div>
                                <div class="col-lg-3 col-dm-3 col-sm-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Bathroom"
                                            v-model="property.bathroom">
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
                                        </div>
                                        <div class="fallback">
                                            <input name="file" type="file" @change="handleImageChange" accept="image/*" multiple />
                                           
                                        </div>
                                           
                                    </form>
                                    <img :src="property.imagePreview" alt="">
                                </div>
                                <div class="col-sm-12">
                                    <button type="submit" class="btn btn-primary btn-round">Submit</button>
                                    <button type="submit" class="btn btn-default btn-round btn-simple">Cancel</button>
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
                imagePreview: null,
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

    methods: {
        handleImageChange(event) {
            this.property.image = event.target.files[0];
            let reader = new FileReader();
            reader.addEventListener("load", function () {
                this.showPreview = true;
                this.imagePreview = reader.result;


            }.bind(this), false);
            if (this.form.image) {
                if (/\.(jpg?g|gif)$/i.test(this.form.image.name)) {
                    reader.readAsDataURL(this.form.image);
                }
            }
        },
        async submitForm(event) {
            event.preventDefault();

            try {
                const formData = new FormData();
                formData.append('title', this.property.title);
                formData.append('location', this.property.location);
                formData.append('desc', this.property.desc);
                formData.append('price', this.property.price);
                formData.append('bedroom', this.property.bedroom);
                formData.append('bathroom', this.property.bathroom);
                formData.append('size', this.property.size);
                formData.append('type', this.property.type);
                formData.append('property_for', this.property.property_for);
                formData.append('garage', this.property.garage);
                formData.append('image', this.property.image);
                let response;

                if (this.isEditing) {
                    response = await axios.put(`property/${this.property.id}`, formData.append, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    });
                }
                else {
                    response = await axios.post('property', formData, {
                        
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                        
                    });
                    console.log(response.property);
                   
                }
            } catch (error) {
                console.error('Error:', error);
               
            } this.$router.push('/propertyList')
        },
        // async addProperty() {
        //     await axios.post('property', this.property).then((res) => {
        //         alert(res.data);
        //         console.log(res);
        //         this.property = {
        //             title: "",
        //             location: "",
        //             desc: "",
        //             price: "",
        //             bedroom: "",
        //             bathroom: "",
        //             size: "",
        //             type: "",
        //             property_for:"",
        //             garage: ""
        //         };
        //     });
        //     this.$router.replace("/propertyList")
        // },
    }
};
</script>

<style></style>