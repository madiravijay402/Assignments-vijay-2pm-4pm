// import React, { useState } from 'react'

// function Product() {
//     const [prod,setprod]=useState([{id:1,name:'laptop',price:67993}
//         ,{id:2,name:'mobile',price:45332},
//         {id:3,name:'smart watch',price:15499}
//         ,{id:4,name:'t-shirt',price:533}
//         ,{id:5,name:'shorts',price:449}
//     ])
//   return (
//     <>
//     <h1 className='text-bg-primary text-wrap'>product list</h1>
//     <div className="conatiner border border-secondary">
//      <ul style={{listStyle:'none'}} className='text-start'>
//         {prod.map((item)=>{
//             return <li key={item.id}>{item.name}-{item.price}</li>
//         })}
//      </ul>
//      </div>
//     </>
//   )
// }

// export default Product
import React, { useState } from 'react';

function Product() {
    const [prod, setprod] = useState([
        {id: 1, name: 'laptop', price: 67993},
        {id: 2, name: 'mobile', price: 45332},
        {id: 3, name: 'smart watch', price: 15499},
        {id: 4, name: 't-shirt', price: 533},
        {id: 5, name: 'shorts', price: 449}
    ]);
    
    return (
        <>
            <h1 className='text-bg-primary text-wrap'>Product List</h1>
            <div className="container border border-secondary" style={{padding: '15px'}}>
                <ul style={{listStyle: 'none', padding: 0}} className='text-start'>
                    {prod.map((item) => {
                        return (
                            <li key={item.id} style={{marginBottom: '8px', fontSize: '18px'}}>
                                <span style={{textTransform: 'capitalize', fontWeight: '500'}}>
                                    {item.name}
                                </span>
                                <span style={{float:'right', color: '#2563eb', fontWeight: 'bold'}}>
                                    ₹{item.price.toLocaleString('en-IN')}
                                </span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}

export default Product;