<template>
  <div class="home">
    <div class="page-wrapper">
        
        <!-- MENU SIDEBAR-->
        <SiderNavBar></SiderNavBar>
        <!-- END MENU SIDEBAR-->

        <!-- PAGE CONTAINER-->
        <div class="page-container">
            <!-- HEADER DESKTOP-->
            <HeaderBar></HeaderBar>
            
            <!-- END HEADER DESKTOP-->

            <!-- MAIN CONTENT-->
            <div class="main-content ">
                <div>
                    <div class="container-fluid">
                      <div class="card">
                        <div class="card-header">
                          <div class=" d-flex align-items-center ">
                            <h4>User List</h4>
                            <button class=" btn btn-primary ml-auto" data-toggle="modal" data-target="#user_create"> <i class="fas fa-plus"></i> Add User</button>
                          </div>
                        </div>
                        <div class="card-body">
                            <table class="table">
                              <thead>
                                <tr>
                                  <th>Name</th>
                                  <th>Email</th>
                                  <th>Phone</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody v-if="users && users.length > 0">
                                <tr v-for="item in this.users" :key="item.index">
                                  <td scope="row">{{ item.name }}</td>
                                  <td>{{ item.email }}</td>
                                  <td>{{ item.phone }}</td>
                                  <td>
                                    <button @click="editUser(item)" class=" btn btn-sm btn-info mr-1"> <i class="fas fa-edit" ></i> Edit</button>
                                    <button @click="userDelete(item.id)" class="btn btn-sm btn-danger"><i class="fas fa-trash    "></i> Delete</button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                        </div>
                      </div>

                    </div>
                </div>
            </div>
        </div>
        <!-- END PAGE CONTAINER-->
        
        <!-- Modal -->
        <div class="modal fade" id="user_create" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">

          <form @submit.prevent="createUser">
                    
            <div class="modal-dialog modal-lg" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title"> <i class="fas fa-plus    "></i> Create User</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="">Name <span class=" text-danger">*</span></label>
                          <input type="text" v-model="createForm.name" name="" id="" class="form-control" placeholder="">
                        </div>
                      </div>
               
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="">Email <span class=" text-danger">*</span></label>
                          <input type="email" v-model="createForm.email" name="" id="" class="form-control" placeholder="">
                        </div>
                      </div>
               
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="">Phone <span class=" text-danger">*</span></label>
                          <input type="text" v-model="createForm.phone" name="" id="" class="form-control" placeholder="">
                        </div>
                      </div>
               
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="">Select Role</label>
                          <select v-model="createForm.user_role" class="form-control" name="" id="">
                            <option selected value="">Select Role</option>
                            <option value="1">Admin</option>
                            <option value="2">Manager</option>
                          </select>
                        </div>
                      </div>
               
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="">Password <span class=" text-danger">*</span></label>
                          <input type="password" v-model="createForm.password" name="" id="" class="form-control" placeholder="">
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="">Confirm Password <span class=" text-danger">*</span></label>
                          <input type="password" v-model="createForm.confirm_password" name="" id="" class="form-control" placeholder="">
                        </div>
                      </div>
               
                    </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="submit" class="btn btn-primary">Save</button>
                </div>
              </div>
            </div>

          </form>
        </div>
        
        <!-- Modal -->
        <button id="user_edit_modal_button" class=" d-none" data-toggle="modal" data-target="#user_edit">aaa</button>
        <div class="modal fade" id="user_edit" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">

          <form @submit.prevent="updateUser">
                    
            <div class="modal-dialog modal-lg" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title"> <i class="fas fa-edit    "></i> Edit User</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="">Name <span class=" text-danger">*</span></label>
                          <input type="text" v-model="editForm.name" name="" id="" class="form-control" placeholder="">
                        </div>
                      </div>
               
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="">Email <span class=" text-danger">*</span></label>
                          <input type="email" v-model="editForm.email" name="" id="" class="form-control" placeholder="">
                        </div>
                      </div>
               
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="">Phone <span class=" text-danger">*</span></label>
                          <input type="text" v-model="editForm.phone" name="" id="" class="form-control" placeholder="">
                        </div>
                      </div>
               
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="">Select Role</label>
                          <select v-model="editForm.user_role" class="form-control" name="" id="">
                            <option selected value="">Select Role</option>
                            <option value="1">Admin</option>
                            <option value="2">Manager</option>
                          </select>
                        </div>
                      </div>
               
                    </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="submit" class="btn btn-primary">Update</button>
                </div>
              </div>
            </div>

          </form>
        </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/Header.vue'
import SiderNavBar from '@/components/SiderNavBar.vue'
import axios from 'axios';

export default {
  name: 'Home',
  data: function () {
    return {
  
      users: [],
      createForm: {
        name: '',
        email: '',
        phone: '',
        user_role: '',
        password: '',
        confirm_password: '',
      }, 
      editForm: {
        id: '',
        name: '',
        email: '',
        phone: '',
        user_role: '',
      } 
      
    }
  },
  methods: {
    getUsers:  function() {
      axios({
        method: 'get', //you can set what request you want to be
        url: 'http://localhost:3000/user',
        headers: {
          'Content-Type': 'application/json',
        }
      }).then((response) => { 
        this.users = response.data ;      
      }).catch(function(error) {
        console.log(error);
      })

    },

    createUser: function() {
      axios({
        method: 'POST', //you can set what request you want to be
        url: 'http://localhost:3000/user',
        headers: {
          'Content-Type': 'application/json',
        },
        data: this.createForm
      }).then(() => {
        this.getUsers()
        document.getElementById('user_create').click();
        this.createForm.name= '';
        this.createForm.email= '';
        this.createForm.phone= '';
        this.createForm.user_role= '';
        this.createForm.password= '';
        this.createForm.confirm_password= '';

      }).catch(function(error) {
          // handle error
          console.log(error);
      })
    },

    editUser: function(item){
      document.getElementById('user_edit_modal_button').click();
      console.log(item);
      this.editForm.id= item.id;
      this.editForm.name= item.name;
      this.editForm.email= item.email;
      this.editForm.phone= item.phone;
      this.editForm.user_role= item.role_id;
    },

    updateUser: function(){
      axios({
        method: 'PUT', //you can set what request you want to be
        url: `http://localhost:3000/user/update/${this.editForm.id}`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: this.editForm
      }).then(() => {
        this.getUsers();
        document.getElementById('user_edit').click();
      }).catch(function(error) {
          // handle error
          console.log(error);
      })
    },

    userDelete: function(id){
      axios({
        method: 'DELETE', //you can set what request you want to be
        url: `http://localhost:3000/user/${id}`,
        headers: {
          'Content-Type': 'application/json',
        }
      }).then(() => {
        this.getUsers();
      }).catch(function(error) {
          console.log(error);
      })
    }

  },

  mounted() {
    this.getUsers()
  },
  components: {
    HeaderBar,
    SiderNavBar
  }
}
</script>
