import React, {useState} from 'react'

export default function Sidebar({active, setActive}){
  const [open, setOpen] = useState(false)
  const items = [
     {label:'Home', icon:'fa-solid fa-house'},
     {label:'About', icon:'fa-solid fa-user'},
     {label:'Projects', icon:'fa-solid fa-briefcase'},
     {label:'Certificates', icon:'fa-solid fa-images'},
  {label:'Contact', icon:'fa-solid fa-envelope'},
  ]

  function onClick(i, name){
    setActive(i)
    history.replaceState(null,'','#'+(name||items[i].label.toLowerCase()))
    setOpen(false)
  }

  return (
    <aside className="sidebar" id="siteSidebar">
      <div className="logo">Muzammal</div>
      <button className="menu-toggle" onClick={()=> setOpen(o=>!o)} aria-label="Toggle menu">☰</button>
      <nav>
        <ul className={`Links ${open? 'show': ''}`}>
          {items.map((it,i)=> (
            <li key={it.label} className={i===active? 'activeLink' : ''} onClick={()=> onClick(i, it.label.toLowerCase())}>
              <i className={`${it.icon}`}></i>
              <span>{it.label}</span>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
