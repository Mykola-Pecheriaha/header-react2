// src/components/Operations/OperationDetailsPage.js
import React from 'react'
import { useParams, Link } from 'react-router-dom'
import operationsData from '../../data/operationsData'

const OperationDetailsPage = () => {
  const { operationTitle } = useParams()
  const decodedTitle = decodeURIComponent(operationTitle)
  const operation = operationsData.operations.find(
    (op) => op.title === decodedTitle
  )

  if (!operation) {
    return (
      <div>
        <h2>Операцію не знайдено.</h2>
        <Link to="/">Повернутися на головну</Link>
      </div>
    )
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>{operation.title}</h1>
      <p>{operation.description}</p>
      {operation.image && (
        <img
          src={operation.image}
          alt={operation.title}
          style={{ maxWidth: '100%' }}
        />
      )}
      <br />
      <Link to="/">Повернутися на головну</Link>
    </div>
  )
}

export default OperationDetailsPage
