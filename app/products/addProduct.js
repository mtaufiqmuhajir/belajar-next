'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function AddProduct () {
  const router = useRouter()
  const [modal, setModal] = useState(false)
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [isMutating, setIsMutating] = useState(false)

  async function handleSubmit (e) {
    e.preventDefault()
    setIsMutating(true)
    await fetch('http://localhost:5000/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: title,
        price: price
      })
    })
    setIsMutating(false)
    setTitle('')
    setPrice('')
    router.refresh()
    setModal(false)
  }

  function handleChange () {
    setModal(!modal)
  }

  return (
    <div>
      <button className='btn' onClick={handleChange}>
        Add New
      </button>
      <input
        type='checkbox'
        checked={modal}
        onChange={handleChange}
        className='modal-toggle'
      />
      <div className='modal'>
        <div className='modal-box'>
          <h3 className='font-bold text-lg'>Add New Product</h3>
          <form onSubmit={handleSubmit}>
            <div className='form-control'>
              <label className='label font-bold'>Title</label>
              <input
                className='input w-full input-bordered'
                type='text'
                value={title}
                onChange={e => {
                  setTitle(e.target.value)
                }}
                placeholder='Product Name'
              />
            </div>
            <div className='form-control'>
              <label className='label font-bold'>Price</label>
              <input
                className='input w-full input-bordered'
                type='number'
                value={price}
                onChange={e => {
                  setPrice(e.target.value)
                }}
                placeholder='Product Price'
              />
            </div>
            <div className='modal-action'>
              <button className='btn' type='button' onClick={handleChange}>
                Close
              </button>
              {isMutating ? (
                <button className='btn loading' type='button'>
                  Saving ...
                </button>
              ) : (
                <button className='btn btn-primary' type='submit'>
                  Save
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
