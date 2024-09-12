// src/components/HomePage/HomePage.js
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import operationsData from '../../data/operationsData'
import manipulationsData from '../../data/manipulationsData'
import consultationsData from '../../data/consultationsData'

const HomePage = () => {
  const [isOperationsOpen, setIsOperationsOpen] = useState(false)
  const [isManipulationsOpen, setIsManipulationsOpen] = useState(false)
  const [isConsultationsOpen, setIsConsultationsOpen] = useState(false)

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Клініка пластичної хірургії</h1>

      <div style={{ margin: '20px 0' }}>
        <button onClick={() => setIsOperationsOpen(!isOperationsOpen)}>
          Операції
        </button>
        {isOperationsOpen && (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {operationsData.operations.map((operation) => (
              <li key={operation.title} style={{ margin: '10px 0' }}>
                <Link to={`/operation/${encodeURIComponent(operation.title)}`}>
                  {operation.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div style={{ margin: '20px 0' }}>
        <button onClick={() => setIsManipulationsOpen(!isManipulationsOpen)}>
          Маніпуляції
        </button>
        {isManipulationsOpen && (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {manipulationsData.manipulations.map((manipulation) => (
              <li key={manipulation.title} style={{ margin: '10px 0' }}>
                <Link
                  to={`/manipulation/${encodeURIComponent(manipulation.title)}`}
                >
                  {manipulation.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div style={{ margin: '20px 0' }}>
        <button onClick={() => setIsConsultationsOpen(!isConsultationsOpen)}>
          Консультації
        </button>
        {isConsultationsOpen && (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {consultationsData.consultations.map((consultation) => (
              <li key={consultation.title} style={{ margin: '10px 0' }}>
                <Link
                  to={`/consultation/${encodeURIComponent(consultation.title)}`}
                >
                  {consultation.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default HomePage
