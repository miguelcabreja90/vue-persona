<template>
  <div class="form-body">
    <h5 class="card-title">Personal information</h5>
    <hr>
    <div class="row p-t-20">
      <div class="col-md-6">
        <div class="form-group">
          <label class="control-label">Names</label>
          <input type="text" required class="form-control" v-model="persona.firstName">
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label class="control-label">Last Names</label>
          <input type="text" required class="form-control" v-model="persona.lastName">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <div class="form-group has-success">
          <label class="control-label">Gender</label>
          <select class="form-control" name="gender" v-model="persona.gender">
            <option value="0">Male</option>
            <option value="1">Female</option>
          </select>
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label class="control-label">Birth date</label>
          <input
            type="date"
            class="form-control"
            placeholder="dd/mm/yyyy"
            v-model="persona.born"
          >
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label class="control-label">Age</label>
          <input type="number" class="form-control" v-model="persona.age">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label class="control-label">No. Identity</label>
          <input type="text" required class="form-control" v-model="persona.noIdent">
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label class="control-label">Childern</label>
          <input type="number" class="form-control" v-model="persona.children">
        </div>
      </div>
    </div>
    <h5 class="box-title m-t-40">Another one</h5>
    <hr>
    <div class="row">
      <div class="col-md-12">
        <div class="form-group">
          <label>Position</label>
          <input type="text" class="form-control" v-model="persona.position">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label>Salary</label>
          <input type="number" class="form-control" v-model="persona.salary">
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label>Race</label>
          <input type="text" class="form-control" v-model="persona.race">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Form_body"
  }
</script>

<style scoped>

</style>
