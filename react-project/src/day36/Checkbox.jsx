import React, { useState } from 'react'

function Checkbox() {
  const [teams, setTeams] = useState({
    csk: false,
    mi: false,
    others: false,
  })

  const handleChange = (e) => {
    const { name, checked } = e.target
    setTeams(prev => ({ ...prev, [name]: checked }))
  }

  const selected = Object.keys(teams).filter(k => teams[k])

  return (
    <div className='box' style={{marginTop:50}}>
      <form>
        <h4>Favorite IPL teams</h4>
        <label>csk</label>
        <input type="checkbox" name="csk" checked={teams.csk} onChange={handleChange} />
        <label>mi</label>
        <input type="checkbox" name="mi" checked={teams.mi} onChange={handleChange} />
        <label>others</label>
        <input type="checkbox" name="others" checked={teams.others} onChange={handleChange} />
      </form>
      <p>{selected.length ? `Selected: ${selected.join(', ')}` : 'None selected'}</p>
    </div>
  )
}

export default Checkbox