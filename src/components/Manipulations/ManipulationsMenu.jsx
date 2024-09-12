// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import manipulationsData from '../../data/manipulationsData'

// const ManipulationsMenu = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   return (
//     <div>
//       <button onClick={() => setIsMenuOpen(!isMenuOpen)}>Маніпуляції</button>
//       {isMenuOpen && (
//         <ul>
//           {manipulationsData.map((manipulation) => (
//             <li key={manipulation.title}>
//               <Link
//                 to={`/manipulation/${encodeURIComponent(manipulation.title)}`}
//               >
//                 {manipulation.title}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   )
// }

// export default ManipulationsMenu
