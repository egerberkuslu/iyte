<template>
   <div class="container-fluid">
    <h1 class="m-3 text-dark">Kapak Sayısı</h1>
    <div class="row ">
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-info">
              <div v-for="kapak in kapaklar" :key="kapak.id" class="inner">
                <h3 >{{kapak.sayi}}</h3>

                <p>Güncel Kapak Sayısı</p>
              </div>
              <div class="icon">
                <i class="ion ion-bag"></i>
              </div>
              <a @click="editModal()"  class="small-box-footer">Kapak Sayısı Değiştirmek için <i class="fa fa-arrow-circle-right"></i></a>
            </div>
          </div>
    </div>
                <!-- Modal -->
                <div class="modal fade" id="addNew" tabindex="-1" role="dialog" aria-labelledby="addNewLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" v-show="editmode" id="addNewLabel">Update Kapak Sayısı</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form @submit.prevent="updateUser(kapak)">
                <div class="modal-body">
                     <div class="form-group">
                        <input v-model="form.sayi" type="text" name="sayi"
                            placeholder="Kapak Sayısı"
                            class="form-control" :class="{ 'is-invalid': form.errors.has('sayi') }">
                        <has-error :form="form" field="sayi"></has-error>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                    <button v-show="editmode" type="submit" class="btn btn-success">Update</button>
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
                kapaklar : {},
                form: new Form({
                   sayi:'',
                })
            }
        },
        methods: {
            updateUser(){
                this.$Progress.start();
                // console.log('Editing data');
                this.form.put('api/kapak/'+'1')
                .then(() => {
                    // success
                    $('#addNew').modal('hide');
                    toast({
                        type: 'success',
                        title: 'Kapak Updated in successfully'
                        })
                        this.$Progress.finish();
                         Fire.$emit('AfterCreate');
                })
                .catch(() => {
                    this.$Progress.fail();
                });
            },
            editModal(kapak){
                this.editmode = true;
                this.form.reset();
                $('#addNew').modal('show');
                this.form.fill(kapak);
            },
            newModal(){
                this.editmode = false;
                this.form.reset();
                $('#addNew').modal('show');
            },
   
            loadKapak(){
                axios.get("api/kapak").then(({ data }) => (this.kapaklar = data.data));
            },
        },
        created() {
           this.loadKapak();
           Fire.$on('AfterCreate',() => {
               this.loadKapak();
           });
           // setInterval(() => this.loadKapak(), 3000);
        }
    }
</script>