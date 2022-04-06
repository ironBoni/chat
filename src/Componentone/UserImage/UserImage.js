import React from 'react'
import './UserImage.css'

export default function UserImage(props) {
  return (
    <img className='profile-image' src={props.src}></img>
    )
}
