<template>
    <section class="content agent">
        <div class="block-header">
            <div class="row">
                <div class="col-lg-7 col-md-6 col-sm-12">
                    <h2>Enter Details
                        <small class="text-muted">Welcome to Jhomes Company Ltd.</small>
                    </h2>
                </div>
                <div class="col-lg-5 col-md-6 col-sm-12">
                    <button class="btn btn-primary btn-icon btn-round hidden-sm-down float-right m-l-10" type="button">
                        <i class="zmdi zmdi-plus"></i>
                    </button>
                    <ul class="breadcrumb float-md-right">
                        <li class="breadcrumb-item"><router-link to="/"><i class="zmdi zmdi-home"></i> Jhomes</router-link>
                        </li>
                        <li class="breadcrumb-item"><a href="javascript:void(0);">Agents</a></li>
                        <li class="breadcrumb-item active">Add Agents</li>
                    </ul>
                </div>
            </div>
        </div>
        <form action="" @submit="submitForm" enctype="multipart/form-data">
            <div class="container-fluid">
                <div class="row clearfix">

                    <div class="col-lg-12">
                        <div class="card">
                            <div class="body">
                                <div class="row clearfix">
                                    <div class="col-sm-4">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="First Name" v-model="agent.fName">
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Last Name" v-model="agent.lName">
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Phone No." v-model="agent.phone">
                                        </div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="col-sm-3">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Date of Birth" v-model="agent.dob">
                                        </div>
                                    </div>
                                    <div class="col-sm-3">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Age" v-model="agent.age">
                                        </div>
                                    </div>
                                    <div class="col-sm-3">
                                        <select class="form-control show-tick" v-model="agent.gender">
                                            <option value="">-- Gender --</option>
                                            <option value="1">Male</option>
                                            <option value="2">Female</option>
                                            <option value="3">Other</option>
                                            <option value="4">Prefer not to say</option>
                                        </select>
                                    </div>
                                    <div class="col-sm-3">
                                        <div class="form-group">
                                            <input type="email" class="form-control" placeholder="Enter Your Email" v-model="agent.email">
                                        </div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="col-sm-12">
                                        <form action="" id="frmFileUpload" class="dropzone" method="post"
                                            enctype="multipart/form-data">
                                            <div class="dz-message">
                                                <div class="drag-icon-cph"> <i class="material-icons">touch_app</i> </div>
                                                <h3>Drop files here or click to upload.</h3>
                                            </div>
                                            <div class="fallback">
                                                <input name="file" type="file" @change="handleImageChange" accept="image/*" multiple />
                                            </div>
                                        </form>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <textarea rows="4" class="form-control no-resize"
                                                placeholder="Biography" v-model="agent.biography"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="row clearfix">
                    <div class="col-lg-12 col-md-12">
                        <div class="card">
                            <div class="header">
                                <h2><strong>Social</strong> Information <small>Enter Social Media Usernames</small> </h2>
                            </div>
                            <div class="body">
                                <div class="row clearfix">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Facebook" v-model="agent.facebook">
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Twitter" v-model="agent.tweeter">
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Instagram" v-model="agent.instagram">
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Linkdin" v-model="agent.linkedin">
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <button type="submit" class="btn btn-primary btn-round">Submit</button>
                                        <button type="submit" class="btn btn-default btn-round btn-simple">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>

    </section>
</template>

<script>
import axios from 'axios'
export default {

    data() {
        return {
            agent: {
                fName: "",
                lName: "",
                email: "",
                phone: "",
                age: "",
                gender: "",
                biography: "",
                facebook: "",
                tweeter: "",
                linkedin: "",
                instagram: "",
                dob: "",
                image: "",

            },
        };
    },

    methods: {
        handleImageChange(event) {
            this.agent.image = event.target.files[0];
        },
        async submitForm(event) {
            event.preventDefault();

            try {
                const formData = new FormData();
                formData.append('fName', this.agent.fName);
                formData.append('lName', this.agent.lName);
                formData.append('email', this.agent.email);
                formData.append('phone', this.agent.phone);
                formData.append('age', this.agent.age);
                formData.append('gender', this.agent.gender);
                formData.append('biography', this.agent.biography);
                formData.append('facebook', this.agent.facebook);
                formData.append('tweeter', this.agent.tweeter);
                formData.append('linkedin', this.agent.linkedin);
                formData.append('instagram', this.agent.instagram);
                formData.append('dob', this.agent.dob);
                formData.append('image', this.agent.image);

                let response;

                if (this.isEditing) {
                    response = await axios.put(`agent/${this.agent.id}`, formData.append, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    });
                }
                else {
                    response = await axios.post('agent', formData, {
                        
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                        
                    });
                    console.log(response.agent);
                   
                }
            } catch (error) {
                console.error('Error:', error);
               
            } this.$router.puch('/agents')
        },
    },
};
</script>

<style></style>