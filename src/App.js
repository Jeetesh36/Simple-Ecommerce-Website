import axios from 'axios';
import './App.css';
import Catagory from './Catagory'
import { useEffect, useState } from 'react';

function App() {
  let [finalcatagory, setfinalcatagory] = useState([])
  let [finalproduct, setfinalproduct] = useState([])
  let [catName, setcatName]= useState('')

  let getCategory = () => {
    axios.get('https://dummyjson.com/products/categories')
      .then((response) => response.data)
      .then((finalResponse) => {
        setfinalcatagory(finalResponse)
      })
  }
  let getproducts = () => {
    axios.get('https://dummyjson.com/products')
      .then((proResponse) => proResponse.data)
      .then((finalResponse) => {
        setfinalproduct(finalResponse.products)
      })
  }
  useEffect(() => {
    getCategory();
    getproducts();
  }, [])

  useEffect(() =>{
    if(catName!==''){
      axios.get(`https://dummyjson.com/products/category/${catName}`)
      .then((proResponse) => proResponse.data)
      .then((finalResponse) => {
        setfinalproduct(finalResponse.products)
      })
    }

  },[catName])

  let pitems= finalproduct.map((products,index)=>{
    return(
      <ProductItems key={index} pdata={products}/>
    )
  })
  return (

    <>
      <div className='py-[40px]'>
        <div className='max-w-[1320px] mx-auto'>
          <h1 className='text-center text-[40px] font-bold mb-[30px]'>Our Products</h1>
          <div className='grid grid-cols-[30%_auto] gap-[20px]'>
            <div>

              <Catagory finalcatagory={finalcatagory} setcatName={setcatName}/>
            </div>
            <div className='grid grid-cols-3 gap-5'>
              {finalproduct.length>=1?
              pitems
            :
            'No Product found'}

            </div>
          </div>
        </div>

      </div>

    </>
  );
}

export default App;

function ProductItems({pdata}) {
  return (
    <div className='shadow-lg text-center pb-4'>
      <img src= {pdata.thumbnail} className='w-[100%] h-[230px]' />
      <h4>{pdata.title}</h4>
      <b>Rs {pdata.price}</b>
    </div>
  )
}