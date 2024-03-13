import React from 'react'

const Idris = () => {
    const students = ['Toheeb', 'Aminat', 'Latifat', 'Femi', 'David'] 
  return (
    <div>
       {
        students.map((student) => (
            <h2>
                {student}
            </h2>
        ))
       } 
    </div>
  )
}

export default Idris