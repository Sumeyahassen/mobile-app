import React from 'react'
import Student  from './components/Student'
import Profile from './components/Profile'
function App() {
  return (
    // flex gap-4 justify-center items-center pt-10
    <div className="">
    <Student name="Sumeya" age={23} isStudent={true}/>
    <Student name="Hikma" age={26} isStudent={false}/>
    <Student name="Iman" age={22} isStudent={true}/>
    <Student name="Biniyam" age={23} isStudent={true}/>
    <Student/>
    <Profile firstName="sumeya" lastName="hassen" age={22}/>

    </div>
  )
}

export default App
