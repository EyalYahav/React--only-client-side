import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './comp/Header'
import Main from './comp/Main'
import Favorites from './comp/Favorites'
import About from './comp/About'

export default function App() {
  const [about, setAbout] = React.useState([])
  const [billionaires, setBillionaires] = React.useState([])
  const [value, setValue] = React.useState([])
  const [favs, setFavs] = React.useState([])

  useEffect(() => {
    (async () => {
      const res = await fetch(`https://forbes400.herokuapp.com/api/forbes400?limit=40`)
      const data = await res.json()
      setBillionaires(data)
      let favsFromLS = JSON.parse(localStorage.getItem('favsLS')) 
      favsFromLS && setFavs(JSON.parse(localStorage.getItem('favsLS')))
    })()

  }, [])

  const handleClickForFavs = (bill) => {
    let favsFromLS = JSON.parse(localStorage.getItem('favsLS'))
    if (favsFromLS && favsFromLS.find(e => e.person.name == bill.person.name)) {
      setFavs(favs.filter(e => e !== bill))
      localStorage.setItem('favsLS', `${JSON.stringify(favsFromLS.filter(e=> e.person.name !== bill.person.name))}`)
      
    }else{
      setFavs([...favs, bill])
      localStorage.setItem('favsLS', `${JSON.stringify([...favs,bill])}`)
    }
  }
  const handleValue = (values) => {
    setValue(values)
  }
  const moreInfo = (bill) => {
    setAbout(bill)
  }

  return (
    <Router>
      <div>
        <Header favs={favs} handleValue={handleValue} />
        <Routes>
          <Route path="/" element={<Main moreInfo={moreInfo}  handleClickForFavs={handleClickForFavs} favs={favs} billionaires={billionaires} value={value} />} />
          <Route path="/favorites" element={<Favorites  moreInfo={moreInfo} favs={favs}  handleClickForFavs={handleClickForFavs} />} />
          <Route path="/about" element={<About  moreInfo={moreInfo} about={about} favs={favs} handleClickForFavs={handleClickForFavs} billionaires={billionaires}/>} />
        </Routes>
      </div>
    </Router>
  )
}
