'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import axios from 'axios'

export default function AddProduct () {
  const router = useRouter()
  const [modal, setModal] = useState(false)
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [isMutating, setIsMutating] = useState(false)

  async function handleSubmit (e) {
    e.preventDefault()
    setIsMutating(true)
    // let data = await fetch('https://yuspindev.yuspin.net/webservice/api/v1/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   redirect: "follow",
    //   body: JSON.stringify({
    //     username: title,
    //     password: price
    //   })
    // }).then(response => response.text())
    // .then(result => console.log(result))
    // .catch(error => {
    //    setIsMutating(false)
    //   console.log('error', error)
    // });
    // axios
    //   .request({
    //     method: 'POST',
    //     url: 'https://yuspindev.yuspin.net/webservice/api/v1/login',
    //     data: JSON.stringify({
    //       username: title,
    //       password: price
    //     }),

    //   })
    //   .then(response => {
    //     console.log(JSON.stringify(response.data));
    //   })
    //   .catch(res => {
    //     console.log('res', res)
    //   })

    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    myHeaders.append(
      'Cookie',
      'ci_session=e992db87b2976753b048db796a803c226f6eec8a'
    )

    var raw = JSON.stringify({
      username: title,
      password: price
    })

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    }

    fetch(
      'https://yuspindev.yuspin.net/webservice/api/v1/login',
      requestOptions
    )
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error))

    // console.log('data', data);
    setIsMutating(false)
    setTitle('')
    setPrice('')
    router.refresh()
    // setModal(false)
  }

  function handleChange () {
    setModal(!modal)
  }

  function handleMove(params) {
    router.push('dashboard')
  }

  return (
    <div>
      <button className='btn' onClick={handleChange}>
        Add New
      </button>
      <button className='btn' onClick={handleMove}>
       Post
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
                type='text'
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
