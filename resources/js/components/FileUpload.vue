<template>
    <div class="container">
        <div class="row justify-content-center mt-3">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header"><h3>File upload</h3></div>
                    <div class="card-body">
                        <form>
                        <div class="form-group">
                         <label for="exampleFormControlFile1">Select File</label>
                         <input type="file" class="form-control">
                        </div>
                          <button type="submit" class="btn btn-primary float-right">Submit</button>
                        </form>

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
