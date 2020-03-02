import React,{Component} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
let data ;
let todoList;
let user_data;
class App extends Component{
 constructor(props){
   super(props);
   this.state = {
     'todo' : []
   }
 }


 componentDidMount(){
  let comp = this
  axios.get('http://localhost:8000/list/')
  .then(function(response){
    data = response.data
    comp.setState({'todo':data})
  })




 }

clickHandeler = (e)=>{
  let id = e.target.value
  const button = e.target
  axios.delete(`http://localhost:8000/list/${id}/`)
  .then((response) =>{
    button.innerText='Done'


  })
}




submitdata = (e) =>
{
  //const a = this
  const inputElem = e.target.todo_item
  e.preventDefault()
  axios.post('http://localhost:8000/list/',{
    "todo": e.target.todo_item.value,
    "complete": false
})
.then(response => {
  inputElem.value = ''
  let todos = this.state.todo
  todos.push(response.data)
  console.log(response);
  this.setState({'todo' : todos})
})

}


editHandeler = (e) =>
{
   const edit_id = e.target.value
   console.log(e.target.value)
   axios.delete(`http://localhost:8000/list/${edit_id}/`,)
}

 render(){
  const todoList = this.state.todo

   return(
     //<div className="jumbotron">
      <div className="container">
      <h2 className="title">Today's Todo </h2><hr/>
       <form action="" onSubmit={this.submitdata} method="post">

         <input type="text" name ='todo_item' placeholder="Enter New Todo" />
         <button type="submit">Add</button>
       </form>
       <br/>
       {todoList.map((lists)=>
         <div key={lists.id} className="jumbotron">

                <ul>
                 <li className='list'>


                     {lists.date_time} ,Task : {lists.todo} <button className="btn btn-success done" value={lists.id} onClick = {this.clickHandeler}>complete?</button>

                          <button className="btn btn-success edit" value={lists.id} onClick = {this.editHandeler} >edit</button>
                 </li>
                </ul>





         </div>
         )}

         <footer className="footer">
         <div className="container">
         <span className="text-muted">Made with ❤️ by KAJAL </span>
         </div>
         </footer>

         </div>
    // </div>
   )
 }







}





export default App;
