import React from 'react'

export default function StudentProfile(props) {
  return (
    <div>
      <h1>Student Profile</h1>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Favorite Hobby: {props.hobby}</p>
      <p>Favorite Subject: {props.subject}</p>
    </div>
  )
}
