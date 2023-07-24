'use client'
import axios from 'axios'
import { useEffect, useState } from 'react'

export const metadata = {
  title: "test Data"
}

export default function Page () {
  const [name, setName] = useState('')
  const [Password, setPassword] = useState('')
  const [products, setProducts] = useState(null)
  const [Search, setSearch] = useState(null)
  const baseUrl = 'https://dummyjson.com/products';
  const data = async (baseUrl) => {
    axios({
      method: 'get',
      url: baseUrl
    })
      .then(response => {
        console.log(response)
        if (response.status == 200) {
          setProducts(response?.data?.products)
        }
      })
      .catch(res => {
        console.log('res', res)
      })
  }

  useEffect(() => {
    data(baseUrl)
  }, [])

  console.log('ddddddddd', products)
  return (
    <div className='bg-white h-screen w-full  '>
      <div className='flex justify-center'>
        <div className=''>
          <form>
            <div>
              <label>Nama</label>
              <input
                className='border-red-100 border-2'
                type='text'
                name='nama'
                onChange={e => {
                  setName(e.target.value)
                }}
              />
            </div>
            <div>
              <label>Password</label>
              <input
                className='border-red-100 border-2'
                type='password'
                name='nama'
                onChange={e => {
                  setPassword(e.target.value)
                }}
              />
            </div>
          </form>
          <div>
            <div>
              <label>Nama : {name}</label>
            </div>
            <div>
              <label>Password : {Password}</label>
            </div>
          </div>
          <div>
            <div>
              <label>Cari</label>
              <input
                className='border-red-100 border-2'
                type='text'
                name='nama'
                onChange={e => {
                 if (e.target.value) {
                    data(baseUrl+'/search?q='+e.target.value)
                 }else{
                    data(baseUrl)
                 }
                }}
              />
            </div>
          </div>
          <div className='w-full'>
            <table>
              <tr>
                <th>Title</th>
                <th>Brand</th>
                <th>Category</th>
                <th>Price</th>
              </tr>
              {products &&
                products?.map((e, key) => {
                  return (
                    <tr key={key}>
                      <td>{e.title}</td>
                      <td>{e.brand}</td>
                      <td>{e.category}</td>
                      <td>{e.price}</td>
                    </tr>
                  )
                })}
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
