// src/components/Manipulations/ManipulationDetailsPage.js
import React from 'react'
import { useParams, Link } from 'react-router-dom'
import consultationsData from '../../data/consultationsData'

const ConsultationDetailsPage = () => {
  const { consultationTitle } = useParams()
  const decodedTitle = decodeURIComponent(consultationTitle)
  const consultation = consultationsData.consultations.find(
    (manip) => manip.title === decodedTitle
  )

  if (!consultation) {
    return (
      <div>
        <h2>Консультацію не знайдено.</h2>
        <Link to="/">Повернутися на головну</Link>
      </div>
    )
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>{consultation.title}</h1>
      <p>{consultation.description}</p>
      {consultation.image && (
        <img
          src={consultation.image}
          alt={consultation.title}
          style={{ maxWidth: '100%' }}
        />
      )}
      <br />
      <Link to="/">Повернутися на головну</Link>
    </div>
  )
}

export default ConsultationDetailsPage
