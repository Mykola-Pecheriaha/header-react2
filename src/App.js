// src/App.js
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import OperationDetailsPage from './components/Operations/OperationDetailsPage'
import ManipulationDetailsPage from './components/Manipulations/ManipulationDetailsPage'
import ConsultationDetailsPage from './components/Consultations/ConsultationDetailsPage'

function App() {
  return (
    <Router>
      <Routes>
        {/* Головна сторінка */}
        <Route path="/" element={<HomePage />} />

        {/* Сторінки з деталями операцій */}
        <Route
          path="/operation/:operationTitle"
          element={<OperationDetailsPage />}
        />

        {/* Сторінки з деталями маніпуляцій */}
        <Route
          path="/manipulation/:manipulationTitle"
          element={<ManipulationDetailsPage />}
        />

        {/* Сторінки з деталями консультацій */}
        <Route
          path="/consultation/:consultationTitle"
          element={<ConsultationDetailsPage />}
        />
      </Routes>
    </Router>
  )
}

export default App
