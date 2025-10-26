import React, {useState, useEffect} from 'react'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Certificates from './pages/Certificates'
import Contact from './pages/Contact'

export default function App(){
  const [active, setActive] = useState(0)
  const mapping = {home:0, about:1, projects:2, certificates:3, contact:4}

  useEffect(()=>{
    const hash = location.hash.replace('#','')
    if(hash && mapping[hash] !== undefined) setActive(mapping[hash])
  },[])

  return (
    <>
      <div className="brand" role="button" tabIndex={0}
        onClick={()=>{ setActive(0); history.replaceState(null,'','#home') }}
        onKeyDown={(e)=>{ if(e.key==='Enter'){ setActive(0); history.replaceState(null,'','#home') } }}
      >Muzammal</div>
      <div className="container">
      <Sidebar active={active} setActive={setActive} />
      <main className="mySwiper">
        <div className="SlideContainer">
          <section className={`swiper-slide home-slide ${active===0? 'active': ''}`}><Home/></section>
          <section className={`swiper-slide about-slide ${active===1? 'active': ''}`}><About/></section>
          <section className={`swiper-slide projects-slide ${active===2? 'active': ''}`}><Projects/></section>
          <section className={`swiper-slide certificates-slide ${active===3? 'active': ''}`}><Certificates/></section>
          <section className={`swiper-slide contact-slide ${active===4? 'active': ''}`}><Contact/></section>
        </div>
      </main>
    </div>
    </>
  )
}
