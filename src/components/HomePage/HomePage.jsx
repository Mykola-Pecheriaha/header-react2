// src/components/HomePage/HomePage.js

import OperationsMenu from '../Operations/OperationsMenu'
import ManipulationsMenu from '../Manipulations/ManipulationsMenu'
import ConsultationsMenu from '../Consultations/ConsultationsMenu'

const HomePage = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Клініка пластичної хірургії</h1>

      {/* Компонент для відображення меню операцій */}
      <OperationsMenu />

      <ManipulationsMenu />

      <ConsultationsMenu />
    </div>
  )
}

export default HomePage
