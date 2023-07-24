'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function DeleteProduct (products) {
  const router = useRouter()
  const [modal, setModal] = useState(false)
  const [isMutating, setIsMutating] = useState(false)

  async function handleDelete (productId) {
    console.log(productId);
    setIsMutating(true)
    await fetch(`http://localhost:5000/products/${productId}`, {
      method: 'DELETE'
    })
    setIsMutating(false)

    router.refresh()
    setModal(false)
  }

  function handleChange () {
    setModal(!modal)
  }

  return (
    <div>
      <button className='btn btn-error btn-sm text-white' onClick={handleChange}>
        Delete
      </button>
      <input
        type='checkbox'
        checked={modal}
        onChange={handleChange}
        className='modal-toggle'
      />
      <div className='modal'>
        <div className='modal-box'>
          <h3 className='font-bold text-lg'>Are you sure delete {products.title}</h3>
          <div className='modal-action'>
            <button
              className='btn'
              type='button'
              onClick={handleChange}
            >
              Close
            </button>
            {isMutating ? (
              <button className='btn loading' type='button'>
                Deleting ...
              </button>
            ) : (
              <button
                className='btn btn-primary'
                type='submit'
                onClick={() => handleDelete(products.id)}
              >
                Delete
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
