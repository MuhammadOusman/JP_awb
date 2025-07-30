import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail({ products }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h3 className="text-center mt-5">Product Not Found</h3>;
  }

  return (
    <div className="container py-4">
      <div className="row">
        {/* Left Section: Images & Info */}
        <div className="col-md-8">
          <div className="card mb-4">
            <img
              src={product.image}
              alt={product.title}
              className="card-img-top"
              style={{ maxHeight: '400px', objectFit: 'contain' }}
            />
            <div className="card-body">
              <h3 className="card-title">{product.title}</h3>
              <p className="text-muted mb-1"><strong>Category:</strong> {product.category}</p>
              <p className="text-muted">{product.description}</p>
              <span className="badge bg-warning text-dark">
                ⭐ {product.rating.rate} / 5 ({product.rating.count} reviews)
              </span>
            </div>
          </div>
        </div>

        {/* Right Section: Price, Contact, Seller */}
        <div className="col-md-4">
          <div className="card mb-3 shadow-sm">
            <div className="card-body">
              <h4 className="text-success fw-bold mb-3">${product.price.toFixed(2)}</h4>

              <button className="btn btn-success w-100 mb-2">
                📞 Contact Seller
              </button>
              <button className="btn btn-outline-primary w-100">
                💬 Chat with Seller
              </button>
            </div>
          </div>

          <div className="card mb-3 shadow-sm">
            <div className="card-body">
              <h6 className="fw-bold mb-1">Seller Information</h6>
              <p className="mb-0">John Doe</p>
              <small className="text-muted">Member since Jan 2023</small>
            </div>
          </div>

          <div className="card shadow-sm">
            <div className="card-body">
              <h6 className="fw-bold mb-1">Location</h6>
              <p className="mb-0">Karachi, Pakistan</p>
              <small className="text-muted">Posted 2 days ago</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
