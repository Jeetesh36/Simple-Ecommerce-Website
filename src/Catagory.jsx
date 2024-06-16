import React from 'react'


function Catagory({finalcatagory, setcatName}) {
  //   return (
  //     <div>
  //     <ul>
  //         {finalcatagory.map((catagory) => (
  //             <li onClick={()=>setcatName(catagory.name)} key={catagory.slug} className='bg-[rgb(204,204,204)] p-[7px] cursor-pointer text-[20px] font-serif font-[500] mb-2'>
  //               <a href={catagory.url}>{catagory.name}</a>
  //     </li>
  //         ))}
  //     </ul>
  // </div>
     
  //   )

  // let Cat = finalcatagory.map((v,i)=>{
  //   return(
  //     <li key={i} className='bg-[#ccc] p-[7px] cursor-pointer text-[20px] font-serif font-[500] mb-2'>
  //       {v}
  //       </li>
  //   )
  // })
  
  return (
    <div>
      <h3 className='text-[25px] font-[500] p-[10px]'>Product Category</h3>
      <ul> 
      {finalcatagory.map((category) => (
          <li
            onClick={() => setcatName(category.name)}
            key={category.slug}
            className='bg-[rgb(204,204,204)] p-[7px] cursor-pointer text-[20px] font-serif font-[500] mb-2'
          >
            <a >{category.name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Catagory





 