<template>
    <div  class="container">
        <div class="row mt-5">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Events Table</h3>

                <div  class="card-tools">
                    <button class="btn btn-success" @click="newModal">Add New <i class="fas fa-calendar-plus fa-fw"></i></button>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body table-responsive p-0">
                <table class="table table-hover">
                  <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Time Starts</th>
                        <th>Time Ends</th>
                        <th>Place</th>
                        <th>Bio</th>
                        <th>Category</th>
                        <th>Photo</th>
                        <th>Modify</th>
                  </tr>


                  <tr v-for="event in events" :key="event.id">

                    <td>{{event.id}}</td>
                    <td>{{event.name}}</td>
                    <td>{{event.date}}</td>
                    <td>{{event.timestarts}}</td>
                    <td>{{event.timeends}}</td>
                    <td>{{event.place}}</td>
                    <td>{{event.subject}}</td>
                    <td>{{event.category}}</td>
                    <td>PHOTO</td>    
                    <td>
                        <a href="#" @click="editModal(event)">
                            <i class="fa fa-edit blue"></i>
                        </a>
                        /
                        <a href="#" @click="deleteUser(event.id)">
                            <i class="fa fa-trash red"></i>
                        </a>
                    </td>
                    
                  </tr>
                </tbody></table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
        </div>

    <!-- Modal -->
            <div class="modal fade" id="addNew" tabindex="-1" role="dialog" aria-labelledby="addNewLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" v-show="!editmode" id="addNewLabel">Add New Event</h5>
                    <h5 class="modal-title" v-show="editmode" id="addNewLabel">Update Event's Info</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form @submit.prevent="editmode ? updateUser() : createUser()">
                <div class="modal-body">
                     <div class="form-group">
                        <input v-model="form.name" type="text" name="name"
                            placeholder="Name"
                            class="form-control" :class="{ 'is-invalid': form.errors.has('name') }">
                        <has-error :form="form" field="name"></has-error>
                    </div>

                     <div class="form-group">
                        <input v-model="form.date" type="date" name="date"
                            placeholder="Date"
                            class="form-control" :class="{ 'is-invalid': form.errors.has('date') }">
                        <has-error :form="form" field="date"></has-error>
                    </div>

                    <div class="form-group">
                              <p>Time Starts</p>
                        <input v-model="form.timestarts" type="time" name="timestarts"
                            placeholder="Time Starts"
                            class="form-control" :class="{ 'is-invalid': form.errors.has('timestarts') }">
                        <has-error :form="form" field="date"></has-error>
                    </div>

                     <div class="form-group">
                        <p>Time Ends</p>
                        <input v-model="form.timeends" type="time" name="timeends"
                            placeholder="Time Ends"
                            class="form-control" :class="{ 'is-invalid': form.errors.has('timeends') }">
                        <has-error :form="form" field="timeends"></has-error>
                    </div>

                    <div class="form-group">
                        <p>Place</p>
                        <input v-model="form.place" type="text" name="place"
                            placeholder="Place"
                            class="form-control" :class="{ 'is-invalid': form.errors.has('place') }">
                        <has-error :form="form" field="place"></has-error>
                    </div>

                     <div class="form-group">
                        <textarea v-model="form.subject" name="subject" id="subject"
                        placeholder="Short bio for event (Optional)"
                        class="form-control" :class="{ 'is-invalid': form.errors.has('subject') }"></textarea>
                        <has-error :form="form" field="subject"></has-error>
                    </div>


                    <div class="form-group">
                        <p>Category</p>
                        <select name="type" v-model="form.category" id="type" class="form-control" :class="{ 'is-invalid': form.errors.has('type') }">
                            <option value="CREATECH">Createch</option>
                            <option value="SUSTİNO">Sustino</option>
                            <option value="EBT">EBT</option>
                        </select>
                        <has-error :form="form" field="type"></has-error>
                    </div>

                    

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                    <button v-show="editmode" type="submit" class="btn btn-success">Update</button>
                    <button v-show="!editmode" type="submit" class="btn btn-success">Create</button>
                </div>

                </form>

                </div>
            </div>
            </div>
    </div>


</template>


<script>
    export default {
        data() {
            return {
                editmode: false,
                events : {},
                form: new Form({
                    id:'',
                    name : '',
                    date: '',
                    timestarts: '',
                    timeends: '',
                    place: '',
                    subject: '',
                    category:'',
                    photo: '',
                })
            }
        },
        methods: {
            updateUser(){
                this.$Progress.start();
                // console.log('Editing data');
                this.form.put('api/events/'+this.form.id)
                .then(() => {
                    // success
                    $('#addNew').modal('hide');
                    toast({
                        type: 'success',
                        title: 'Event Updated in successfully'
                        })
                        this.$Progress.finish();
                         Fire.$emit('AfterCreate');
                })
                .catch(() => {
                    this.$Progress.fail();
                });
            },
            editModal(event){
                this.editmode = true;
                this.form.reset();
                $('#addNew').modal('show');
                this.form.fill(event);
            },
            newModal(){
                this.editmode = false;
                this.form.reset();
                $('#addNew').modal('show');
            },
            deleteUser(id){
                swal({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#2FA360',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                    }).then((result) => {
                        // Send request to the server
                         if (result.value) {
                                this.form.delete('api/events/'+id).then(()=>{
                                       toast({
                                        type: 'success',
                                        title: 'Event Deleted in successfully'
                                        })
                                    Fire.$emit('AfterCreate');
                                }).catch(()=> {
                                    swal("Failed!", "There was something wronge.", "warning");
                                });
                         }
                    })
            },
            loadUsers(){
                axios.get("api/events").then(({ data }) => (this.events = data.data));
            },
            createUser(){
                this.$Progress.start();
                this.form.post('api/events')
                .then(()=>{
                    Fire.$emit('AfterCreate');
                    $('#addNew').modal('hide')
                    toast({
                        type: 'success',
                        title: 'Event Created in successfully'
                        })
                    this.$Progress.finish();
                })
                .catch(()=>{
                    this.$Progress.fail();
                })
            }
        },
        created() {
           this.loadUsers();
           Fire.$on('AfterCreate',() => {
               this.loadUsers();
           });
           // setInterval(() => this.loadUsers(), 3000);
        }
    }
</script>