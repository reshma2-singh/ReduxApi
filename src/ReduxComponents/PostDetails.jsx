import React from 'react'
import {useSelector,useDispatch} from "react-redux";
const style={
  formatBox:{
    marginLeft:'550px',
    border:'2px solid black',
    padding:'10px',
    width:'20%',
    borderRadius:'5px',
    background: 'lightyellow',
    marginTop:'20px'
  },
  secondBox:{
    marginLeft:'10px',
    width:'20%',
    height:'40%',
    marginTop:'20px',
   float:'left',
    padding:'15px',
    border: '2px solid black',
    background: 'lightyellow',
    cursor: 'pointer',
    borderRadius:'5px',
    alignItems:'center',
  
  }
}
function PostDetails(props) {
  const { match: { params: { id }} } = props;
const userInformation = useSelector(state=>({
  user:state.user.user,
  post:state.post.postList
}))
console.log(userInformation,"vokk")
const data= userInformation.user.find((item)=>item.id==id);
const posts= userInformation.post.filter((item)=>item.userId==id);
console.log(data,'val');
console.log(posts,'post')
  return (<>
    <div style={style.formatBox}>
     
    <p>the user ID is :<b>{id}</b></p> 
   {
    data&&(
      <div >
        <div>Name:{data.name}</div>
        <div>UserName:{data.username}</div>
        <div>Email:{data.email}</div>
      </div>
    )
   }
    </div>
    <div>
    </div>
    <div>
      {
      posts&&(
        <div>
{
posts.map(item=>(
  <div style={style.secondBox}>
  <div><b>PostId:{item.id}</b></div>
  <div><b>Body:</b>{item.body}</div>
  <div><b>Title:</b>{item.title}</div>
  </div>
))

}
        </div>
      )}
    </div>
  </>) 
}

export default PostDetails