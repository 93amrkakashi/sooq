import React from 'react'
import { Link } from 'react-router-dom'
// import { useUser } from '../../hooks/users';
// import { main } from '../../utils/routes'
// import { useAuth } from "./../../hooks/auth";

function Avtar({user,size}) {

  return (
    <div className='user-photo'>
      {/* <Link to={`/profile/${user?.id}`}>
      </Link> */}
        <img style={{width:size,height:size, borderRadius:"50%"}} src={user?.avatar?user?.avatar :"https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="} alt="" />
    </div>
  )
}

export default Avtar
