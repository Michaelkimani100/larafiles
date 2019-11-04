<template>
    <div class="container">
        <div class="row justify-content-center mt-3">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header"><h3>File upload</h3></div>
                    <div class="card-body">
                        <div class="form-group">
                         <label for="exampleFormControlFile1">Select File</label>
                         <input type="file" id="file-upload" class="form-control" multiple  @change="fileChange">
                        </div>
                          <button class="btn btn-primary float-right" @click="uploadFile">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        },
        data(){
            return{
                attachment:[],
                form:new FormData

            }
        },
        methods:{
            fileChange(e){
           var selectedfiles=e.target.files
           if(!selectedfiles.length){
               return false
           }
           for( let i=0;i<selectedfiles.length;i++){
               this.attachment.push(selectedfiles[i])
           }
        //    this.attachment=selectedfiles
            },
            uploadFile(){
                for(let i=0;i<this.attachment.length;i++){
                       this.form.append('pics[]',this.attachment[i]);
                }

                const config={headers:{'content-type':'multipart/form-data'}}
                this.axios.post('api/file',this.form,config)
                .then((response)=>{
                    document.getElementById('file-upload').value=[]

                })
            }
        }
    }
</script>
<style scoped>
.card{
    background-color: whitesmoke;
}
.card-header{
    color: #b08f26;
}
.btn{
    background-color:#b08f26;
    border: none;
}
</style>
