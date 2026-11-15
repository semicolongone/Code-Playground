import React from 'react'
import StudentProfile from './StudentProfile'

export default function App() {
  return (
    <div>
      <StudentProfile name="Aayan" age="13" hobby="Skydiving" subject="Math"/>
      <StudentProfile name="Sam" age="15" hobby="Skiing" subject="Recess"/>
    </div>
  )
}