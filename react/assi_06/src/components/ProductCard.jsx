import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="card h-100 shadow-sm">
      {/* Product Image */}
      <div className="text-center p-3">
        <img
          src={product.image}
          alt={product.title}
          className="img-fluid"
          style={{ maxHeight: '200px', objectFit: 'contain' }}
        />
      </div>

      {/* Product Info */}
      <div className="card-body d-flex flex-column">
        <h6 className="card-title text-truncate">{product.title}</h6>
        <p className="text-success fw-bold mb-2">${product.price}</p>

        <Link to={`/product/${product.id}`} className="btn btn-primary mt-auto w-100">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
