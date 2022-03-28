<template>
  <div class="category_list">
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
                            <h4>Category List</h4>
                            <button class=" btn btn-primary ml-auto" data-toggle="modal" data-target="#category_create"> <i class="fas fa-plus"></i> Add Category</button>
                          </div>
                        </div>
                        <div class="card-body">
                            <table class="table">
                              <thead>
                                <tr>
                                  <th>SL</th>
                                  <th>Name</th>
                                  <th>Position</th>
                                  <th>Parent Category</th>
                                  <th>Status</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>

                                <tr v-for="(item, index) in this.categories" :key="index">
                                    <td>{{ index + 1 }}</td>
                                    <td>{{ item.name }}</td>
                                    <td> {{ item.position }} </td>
                                    <td>
                                        <span class="badge" :class="item.parent_name ? 'badge-success' : 'badge-danger' ">{{ item.parent_name ? item.parent_name : "N/A" }}</span>
                                    </td>
                                    <td>
                                        <span v-if="item.is_active == true" class="badge badge-success"> Active</span>
                                        <span v-if="item.is_active == false" class="badge badge-danger"> InActive</span>
                                    </td>

                                    <td>
                                        <div class="dropdown">
                                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Action
                                            </button>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a class="modal-trigger dropdown-item tooltipped" data-toggle="modal" data-content="http://127.0.0.1:8000/admindashboard/category_brand/category/view/1" href="#modal1"> 
                                                    <i class="material-icons"> </i>
                                                    View 
                                                </a>
                                               <a href="http://127.0.0.1:8000/admindashboard/category_brand/category/edit/1" class="dropdown-item" target="_blank">
                                                <i class="material-icons "></i>
                                                    Edit
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>


                                <!-- <tr v-for="item in this.categories" :key="item.index">
                                  <td scope="row">{{ item.name }}</td>
                                  <td>{{ item.name }}</td>
                                  <td>{{ item.name }}</td>
                                  <td>
                                    <button @click="editCategory(item)" class=" btn btn-sm btn-info mr-1"> <i class="fas fa-edit" ></i> Edit</button>
                                    <button @click="categoryDelete(item.id)" class="btn btn-sm btn-danger"><i class="fas fa-trash    "></i> Delete</button>
                                  </td>
                                </tr> -->
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
        <div class="modal fade" id="category_create" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">

          <form @submit.prevent="createCategory">
                    
            <div class="modal-dialog modal-lg" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title"> <i class="fas fa-plus    "></i> Create Category</h5>
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
                          <label for="">Position <span class=" text-danger">*</span></label>
                          <input type="number" v-model="createForm.position" name="" id="" class="form-control" placeholder="">
                        </div>
                      </div>

                        <div class="col-md-6 form-group">
                          <label for="">Want to show home page?</label>
                          <div class="form-check">
                                <label class="form-check-label">
                                    <input v-model="createForm.show_home" type="radio" class="form-check-input" name="show_home" id="" value="Yes">
                                    Yes
                                </label>
                            </div>
                          <div class="form-check">
                                <label class="form-check-label">
                                    <input v-model="createForm.show_home" type="radio" class="form-check-input" name="show_home" id="" value="No" checked>
                                    No
                                </label>
                            </div>
                        </div>

                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="">Select Parent</label>
                          <select v-model="createForm.parentCategory" class="form-control" name="" id="">
                            <option selected value="">Select Category</option>
                            <option v-for="(item, index) in this.categories" :key="index" :value="item.id">{{ item.name }}</option>
                          </select>
                        </div>
                      </div>
               
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="">Choose Variant</label>
                          <select multiple v-model="createForm.categoryVariant" class="form-control" name="" id="">
                            <option selected value="">Select Variant</option>
                            <option value="1">Admin</option>
                            <option value="2">Manager</option>
                            <option value="3">Manager</option>
                            <option value="4">Manager</option>
                            <option value="5">Manager</option>
                            <option value="2">Manager</option>
                            <option value="2">Manager</option>
                            <option value="2">Manager</option>
                          </select>
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
        <button id="category_edit_modal_button" class=" d-none" data-toggle="modal" data-target="#category_edit">aaa</button>
        <div class="modal fade" id="category_edit" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">

          <form @submit.prevent="updateCategory">
                    
            <div class="modal-dialog modal-lg" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title"> <i class="fas fa-edit    "></i> Edit Category</h5>
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
                          <label for="">Position <span class=" text-danger">*</span></label>
                          <input type="number" v-model="createForm.position" name="" id="" class="form-control" placeholder="">
                        </div>
                      </div>

                        <div class="col-md-6 form-group">
                          <label for="">Want to show home page?</label>
                          <div class="form-check">
                                <label class="form-check-label">
                                    <input v-model="createForm.show_home" type="radio" class="form-check-input" name="show_home" id="" value="Yes">
                                    Yes
                                </label>
                            </div>
                          <div class="form-check">
                                <label class="form-check-label">
                                    <input v-model="createForm.show_home" type="radio" class="form-check-input" name="show_home" id="" value="No" checked>
                                    No
                                </label>
                            </div>
                        </div>

                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="">Select Parent</label>
                          <select v-model="createForm.parentCategory" class="form-control" name="" id="">
                            <option selected value="">Select Category</option>
                            <option value="1">Admin</option>
                            <option value="2">Manager</option>
                            <option value="2">Manager</option>
                            <option value="2">Manager</option>
                            <option value="2">Manager</option>
                            <option value="2">Manager</option>
                            <option value="2">Manager</option>
                            <option value="2">Manager</option>
                          </select>
                        </div>
                      </div>
               
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="">Choose Variant</label>
                          <select multiple v-model="createForm.categoryVariant" class="form-control" name="" id="">
                            <option selected value="">Select Variant</option>
                            <option value="1">Admin</option>
                            <option value="2">Manager</option>
                            <option value="3">Manager</option>
                            <option value="4">Manager</option>
                            <option value="5">Manager</option>
                            <option value="2">Manager</option>
                            <option value="2">Manager</option>
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
import HeaderBar from '@/components/HeaderBar.vue'
import SiderNavBar from '@/components/SiderNavBar.vue'
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Home',
  data: function () {
    return {
      createForm: {
        name: '',
        position: '',
        show_home: '',
        parentCategory: '',
        categoryVariant: '',
      }, 
      editForm: {
        id: '',
        name: '',
        position: '',
        show_home: '',
        parentCategory: '',
        categoryVariant: '',
      } 
      
    }
  },
  methods: {
    ...mapActions(['getCategories']),
    
    createCategory: function() {
      axios({
        method: 'POST', //you can set what request you want to be
        url: 'http://localhost:3000/category',
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
        data: this.createForm
      }).then(() => { 
        this.getCategories()
        // document.getElementById('category_create').click();
        // this.createForm.name= '';
        // this.createForm.email= '';
        // this.createForm.phone= '';
        // this.createForm.category_role= '';
        // this.createForm.password= '';
        // this.createForm.confirm_password= '';

      }).catch(function(error) {
          // handle error
          console.log(error);
      })
    },

    editCategory: function(item){
      document.getElementById('category_edit_modal_button').click();
      console.log(item);
      this.editForm.id= item.id;
      this.editForm.name= item.name;
      this.editForm.email= item.email;
      this.editForm.phone= item.phone;
      this.editForm.category_role= item.role_id;
    },

    updateCategory: function(){
      axios({
        method: 'PUT', //you can set what request you want to be
        url: `http://localhost:3000/category/update/${this.editForm.id}`,
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
        data: this.editForm
      }).then(() => {
        this.getCategories();
        document.getElementById('category_edit').click();
      }).catch(function(error) {
          // handle error
          console.log(error);
      })
    },

    categoryDelete: function(id){
      axios({
        method: 'DELETE', //you can set what request you want to be
        url: `http://localhost:3000/category/${id}`,
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        }
      }).then(() => {
        this.getCategories();
      }).catch(function(error) {
          console.log(error);
      })
    }

  },
  computed: mapGetters(['categories']),

  mounted () {
    this.getCategories()
  },

  
  components: {
    HeaderBar,
    SiderNavBar
  }
}
</script>
