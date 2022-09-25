import React from 'react';
import './App.css';
import axios from "axios";
import {connect} from 'react-redux';
import {userInsert} from './reducer/userSlice';
import {postInsert} from './reducer/postSlice';
import {commentInsert} from './reducer/commentSlice';
import Dashboard from './ReduxComponents/Dashboard';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PostDetails from './ReduxComponents/PostDetails';
class App extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    const{userInsert,postInsert,commentInsert}=this.props
    const url='https://jsonplaceholder.typicode.com'
    axios.get(`${url}/users`)
    .then(response=>userInsert(response.data))
    axios.get(`${url}/posts`)
    .then(response=>postInsert(response.data))
    axios.get(`${url}/posts`)
    .then(response=>commentInsert(response.data))
  }
  render(){
    console.log(this.props,'props')
    return(<div>
      <BrowserRouter>
      <Switch>
<Route exact path="/" render={(routeProps) => <Dashboard   {...routeProps}/>} />
<Route path="/postDetails/:id" render={(route) => <PostDetails   {...route} />} />
</Switch>
</BrowserRouter>
    </div>

    )
  }
}
const mapStateToProps=state=>({
 state
})
const mapDispatchToProps=dispatch=>({
  userInsert:(users)=>dispatch(userInsert(users)),
  postInsert:(posts)=>dispatch(postInsert(posts)),
  commentInsert:(comments)=>dispatch(commentInsert(comments)),
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
