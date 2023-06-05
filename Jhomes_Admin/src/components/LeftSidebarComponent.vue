<template>
  <aside id="leftsidebar" class="sidebar">
    <div class="menu">
      <ul class="list">
        <li>
          <div class="user-info">
            <div class="image"><a href="profile.html"><img src="../../src/assets/images/team-5.jpg" alt="User"></a></div>
            <div class="detail">
              <h4>Brian</h4>
              <small>Agency Agent</small>
            </div>
            <a href="events.html" title="Events"><i class="zmdi zmdi-calendar"></i></a>
            <a href="mail-inbox.html" title="Inbox"><i class="zmdi zmdi-email"></i></a>
            <a href="contact.html" title="Contact List"><i class="zmdi zmdi-account-box-phone"></i></a>
            <a href="chat.html" title="Chat App"><i class="zmdi zmdi-comments"></i></a>
            <a href="sign-in.html" title="Sign out"><i class="zmdi zmdi-power"></i></a>
          </div>
        </li>
        <li class="header">MAIN</li>
        <li class="active open"><router-link to="/admin"><i class="zmdi zmdi-home"></i><span>Dashboard</span></router-link></li>
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
            <li><router-link to="/agentprofile">Agent Profile</router-link></li>
            <li><a href="invoices.html">Agent Invoice</a></li>
          </ul>
        </li>
        <li> <a href="#" class="menu-toggle"><i class="zmdi zmdi-apps"></i><span>Roles</span> </a>
          <ul class="ml-menu">
            <li><a href="mail-inbox.html">Admin</a></li>
            <li><a href="contact.html">Agent</a></li>
            <li><a href="contact.html">User</a></li>
          </ul>
        </li>
        <li> <router-link to="/login" class="zmdi zmdi-accounts-outline"><i class=""></i><span>Login</span> </router-link>
        </li>
        <li> <router-link to="/register" class="zmdi zmdi-accounts-outline"><i class=""></i><span>Register</span> </router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {

}
</script>

<style></style>