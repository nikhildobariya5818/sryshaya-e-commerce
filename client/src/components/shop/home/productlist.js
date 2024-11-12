import React from 'react';

const ProductList = () => {
  return (
    <div className="flex justify-center py-8 space-x-4">
      {products.map((product, index) => (
        <div key={index} className="w-64 p-4 bg-white rounded-lg shadow">
          <img
            alt={product.name}
            className="mb-4"
            height="200"
            src={product.imageUrl}
            style={{
              aspectRatio: "256/200",
              objectFit: "cover",
            }}
            width="256"
          />
          <div className="text-sm uppercase text-gray-500">{product.category}</div>
          <div className="text-lg font-bold">{product.name}</div>
          <div className="flex mb-2">{renderStars(product.rating)}</div>
          <div className="text-lg font-semibold">${product.price}</div>
          {product.discountedPrice && (
            <div className="text-sm line-through text-gray-400">${product.discountedPrice}</div>
          )}
        </div>
      ))}
    </div>
  );
};

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

// Sample data for products
const products = [
  {
    name: 'Ergonomic Linen Pants',
    category: 'Baby Food',
    imageUrl: '/placeholder.svg',
    rating: 5,
    price: 25.0,
  },
  {
    name: 'Grapefruit fun facts',
    category: 'Baby Food',
    imageUrl: '/placeholder.svg',
    rating: 5,
    price: 34.83,
    discountedPrice: 35.0,
  },
  {
    name: 'Marshmallow Candy White',
    category: 'Meat',
    imageUrl: '/placeholder.svg',
    rating: 4,
    price: 50.0,
  },
  {
    name: 'Raw Meat on White',
    category: 'Fish',
    imageUrl: '/placeholder.svg',
    rating: 4,
    price: 58.8,
    discountedPrice: 60.0,
  },
];

// Helper function to render star icons based on rating
function renderStars(rating) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<StarIcon key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'} />);
  }
  return stars;
}

export default ProductList;
