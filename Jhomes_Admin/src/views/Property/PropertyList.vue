<template>
    
    <property-component :property="property"></property-component>
    
</template>

<script>
import PropertyComponent from '../../components/PropertyComponent.vue'
import axios from 'axios';
export default {
    components: { PropertyComponent },

    data() {
        return {
            property: []
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
<style scoped>

</style>