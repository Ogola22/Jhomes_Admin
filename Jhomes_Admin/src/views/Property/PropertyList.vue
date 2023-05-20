<template>
    
    <property-component :properties="properties"></property-component>
    
</template>

<script>
import PropertyComponent from '../../components/PropertyComponent.vue'
import axios from 'axios';
export default {
    components: { PropertyComponent },

    data() {
        return {
            properties: []
        };
    },
    created() {
        this.getProperty();
    },
    methods: {
        getProperty() {
            axios.get('properties').then(res => {
                this.properties = res.data;
                console.log(res.data)
            })
        }
    }
}
</script>
<style scoped>

</style>