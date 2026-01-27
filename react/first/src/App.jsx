import React from 'react'
import Student  from './components/Student'
function App() {
  return (
    <div className="flex gap-4 justify-center items-center pt-10">
    <Student name="Sumeya" age={23} isStudent={true}/>
    <Student name="Hikma" age={26} isStudent={false}/>
    <Student name="Iman" age={22} isStudent={true}/>
    <Student name="Biniyam" age={23} isStudent={true}/>
    <Student/>

    </div>
  )
}

export default App
