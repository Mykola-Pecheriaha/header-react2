// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import operationsData from '../../data/operationsData'

// const OperationsMenu = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   return (
//     <div>
//       <button onClick={() => setIsMenuOpen(!isMenuOpen)}>Операції</button>
//       {isMenuOpen && (
//         <ul>
//           {operationsData.map((operation) => (
//             <li key={operation.title}>
//               <Link to={`/operation/${encodeURIComponent(operation.title)}`}>
//                 {operation.title}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   )
// }

// export default OperationsMenu
