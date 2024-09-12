// src/components/Manipulations/ManipulationDetailsPage.js
import React from 'react'
import { useParams, Link } from 'react-router-dom'
import manipulationsData from '../../data/manipulationsData'

const ManipulationDetailsPage = () => {
  const { manipulationTitle } = useParams()
  const decodedTitle = decodeURIComponent(manipulationTitle)
  const manipulation = manipulationsData.manipulations.find(
    (manip) => manip.title === decodedTitle
  )

  if (!manipulation) {
    return (
      <div>
        <h2>Маніпуляцію не знайдено.</h2>
        <Link to="/">Повернутися на головну</Link>
      </div>
    )
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>{manipulation.title}</h1>
      <p>{manipulation.description}</p>
      {manipulation.image && (
        <img
          src={manipulation.image}
          alt={manipulation.title}
          style={{ maxWidth: '100%' }}
        />
      )}
      <br />
      <Link to="/">Повернутися на головну</Link>
    </div>
  )
}

export default ManipulationDetailsPage
