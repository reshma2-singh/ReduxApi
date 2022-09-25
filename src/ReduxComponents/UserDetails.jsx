import React,{useState} from 'react'
import {useSelector,useDispatch} from "react-redux";
import {userUpdate} from '../reducer/userSlice';
import { useHistory } from 'react-router-dom';
const style={
  formatBox:{
    marginLeft:'20px',
    marginTop:'30px',
    float: 'left',
    padding:'10px',
    border: '2px solid black',
    background: 'lightyellow',
    cursor: 'pointer',
    borderRadius:'5px',
    alignItems:'center',
    fontWeight:'800'  
  }
}
function UserDetails(props) {
  const history = useHistory()
    const dispatch=useDispatch()
    const userInformation = useSelector(state=>state.user)
    console.log(userInformation)
function handleClick(id){
  
  history.push(`/postDetails/${id}`)
}
  return (<>
  <div>
    {
      userInformation.user.map(item=>{
        const{name,username,email,address:{city}}=item;
        return <div style={style.formatBox} onClick={()=>handleClick(item.id)}>
          <div>Name:{name}</div>
          <div>UserName:{username}</div>
          <div>Email:{email}</div>
          <div>City:{city}</div>
        </div>
      })
    }
  </div>
  
  
  </>
           
  )
}

export default UserDetails