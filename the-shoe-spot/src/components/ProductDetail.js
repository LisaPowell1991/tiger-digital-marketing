import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductDetail = ({ shoes }) => {
    const { id } = useParams();
    const shoe = shoes.find(shoe => shoe.id === id);
    const [selectedSize, setSelectedSize] = useState(null);

    if (!shoe) {
        return <div>Product not found</div>;
    }

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <img src={shoe.photoUrl} alt={shoe.name} className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <h1>{shoe.name}</h1>
                    <p className="lead">${shoe.price.toFixed(2)}</p>
                    <div className="mb-3">
                        <label className="form-label">Size</label>
                        <div className="d-flex flex-wrap">
                            {[...Array(10).keys()].map(i => (
                                <div
                                    key={i + 2}
                                    className={`size-block ${selectedSize === i + 2 ? 'selected' : ''}`}
                                    onClick={() => handleSizeSelect(i + 2)}
                                >
                                    {i + 2}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="quantity" className="form-label">Quantity</label>
                        <input type="number" id="quantity" className="form-control" min="1" max="10" defaultValue="1" />
                    </div>
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;