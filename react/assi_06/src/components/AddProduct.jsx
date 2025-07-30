import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddProduct({ addProduct }) {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    addProduct({ title, price, image, description })
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit} className="card p-4">
      <h3 className="mb-3">Add New Product</h3>
      <input className="form-control mb-2" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required />
      <input className="form-control mb-2" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} required />
      <input className="form-control mb-2" placeholder="Image URL" value={image} onChange={e => setImage(e.target.value)} required />
      <textarea className="form-control mb-2" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} required />
      <button className="btn btn-success mt-2" type="submit">Add Product</button>
    </form>
  )
}

export default AddProduct
