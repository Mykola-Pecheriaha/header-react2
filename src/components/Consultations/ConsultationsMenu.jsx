import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import consultationsData from '../../data/consultationsData'

const ConsultationsMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div style={{ margin: '20px 0' }}>
      <button onClick={() => setIsMenuOpen(!isMenuOpen)}>Консультації</button>
      {isMenuOpen && (
        <ul>
          {consultationsData.consultations.map((consultation) => (
            <li key={consultation.title}>
              <Link
                to={`/manipulation/${encodeURIComponent(consultation.title)}`}
              >
                {consultation.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ConsultationsMenu
