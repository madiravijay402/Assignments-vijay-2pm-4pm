// import React from 'react'

// function Product({name},{price}) {
//   return (
//     <>
//     <div>Products</div>
//     <table>
//         <tr>
//             {name.map((names,prices)=>{
//                 <th key={names}>{names}</th>
//             })}
//         </tr>
//     </table>
//     </>
//   )
// }

// export default Product
import React from 'react'

function Product({ name, price }) {
  return (
    <>
      <div>Products</div>

      <table border="1">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {name.map((item, index) => (
            <tr key={index}>
              <td>{item}</td>
              <td>{price[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Product
