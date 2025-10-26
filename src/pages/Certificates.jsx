import React from 'react'

export default function Certificates(){
  const thumbs = [1,2,3,4,5,6]
  return (
    <>
      <h2>Certificates</h2>
      <div className="certificates-grid large">
        {thumbs.map(i=> <div key={i} className="thumb" style={{backgroundImage:`url(https://picsum.photos/seed/c${i}/800/500)`}}></div>)}
      </div>
    </>
  )
}
