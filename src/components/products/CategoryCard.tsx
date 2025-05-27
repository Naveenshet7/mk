import React, { useState, memo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
}

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = memo(({ category }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Link 
      to={`/products/${category.id}`}
      className="block group card-hover rounded-lg overflow-hidden bg-white shadow-md"
    >
      <div className="relative aspect-w-16 aspect-h-9 overflow-hidden">
        <div className={`absolute inset-0 bg-gray-200 ${!imageLoaded ? 'animate-pulse' : ''}`} />
        <img
          src={category.image}
          alt={category.name}
          className={`w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 group-hover:text-spice-600 transition-colors duration-300">
          {category.name}
        </h3>
        <p className="text-gray-600 text-sm">
          {category.description}
        </p>
      </div>
    </Link>
  );
});

CategoryCard.displayName = 'CategoryCard';

export default CategoryCard;