<template>
  <aside id="leftsidebar" class="sidebar">
    <div class="menu">
      <ul class="list">
        <li>
          <div class="user-info">
            <div class="detail">
              <h4 v-if="user">{{ user.name }}</h4>
              <h6 v-if="!user">JHOMES LTD</h6>
              <small>Agency Agent</small>
            </div>
            <a href="events.html" title="Events"><i class="zmdi zmdi-calendar"></i></a>
            <a href="mail-inbox.html" title="Inbox"><i class="zmdi zmdi-email"></i></a>
            <a href="contact.html" title="Contact List"><i class="zmdi zmdi-account-box-phone"></i></a>
            <a href="chat.html" title="Chat App"><i class="zmdi zmdi-comments"></i></a>
          </div>
        </li>
        <li class="header">MAIN</li>
        <li class="active open"><router-link to="/"><i class="zmdi zmdi-home"></i><span>Dashboard</span></router-link></li>
        <li><a href="javascript:void(0);" class="menu-toggle"><i class="zmdi zmdi-city"></i><span>Property</span> </a>
          <ul class="ml-menu">
            <li><router-link to="/propertylist">Property List</router-link></li>
            <li><router-link to="/addproperty">Add Property</router-link></li>
          </ul>
        </li>
        <li><a href="#" class="menu-toggle"><i
              class="zmdi zmdi-accounts-outline"></i><span>Agents</span> </a>
          <ul class="ml-menu">
            <li><router-link to="/agents">All Agents</router-link></li>
            <li><router-link to="/addagent">Add Agent</router-link></li>
          </ul>
        </li>
        <li> <a href="#" class="menu-toggle"><i class="zmdi zmdi-apps"></i><span>Roles</span> </a>
          <ul class="ml-menu">
            <li><router-link to="/roles">Role Management</router-link></li>
          </ul>
        </li>
        
        <li v-if="!user"> 
          <router-link to="/login" class="zmdi zmdi-accounts-outline"><span>Login</span> </router-link>
          <router-link to="/register" class="zmdi zmdi-accounts-outline"><span>Register</span> </router-link>
        </li>
        <li v-if="user"> 
          <a href="javascript:void(0)" @click="handleLogout" class="zmdi zmdi-accounts-outline"><span>Logout</span> </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      user: null
    }
  },
  async created() {
    const response = await axios.get('user');

    this.user = response.data
    
  },
  methods: {
    async handleLogout() {
      if (confirm('Are you sure to Logout?')) {
        localStorage.removeItem('token');
      }
    }
    
  },
  
}
</script>

<style></style>