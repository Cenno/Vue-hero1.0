<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">Hero List</h2>
    <a class="btn btn-success" href="add.html">Add</a>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>GENDER</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in list" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.gender}}</td>
            <td>
              <a href @click="">删除</a>
              <a href>编辑</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
//下载axios后引用
import axios from 'axios'

var url = 'http://localhost:3002/heros'
export default {
  data(){
    return {
      list:[]
    }
  },
  methods:{
    getAllData(){
      axios.get(url)
      .then(res=>{
        var {data,status}=res
        if(status==200){
          this.list = data;
        }
      })
    }
  },

  mounted(){
    this.getAllData();
  }
};
</script>

<style>
</style>
