import React from "react";
import { Property } from "@/interfaces";


type PropertyCardProps = {
  property: Property;
};

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="border rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white">
      {/* Image */}
    

      {/* Info Section */}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-1">{property.title}</h2>
        <p className="text-gray-500 text-sm mb-2">{property.location}</p>

        <p className="text-lg font-bold text-green-600 mb-3">
          ${property.price.toLocaleString()}
        </p>

        {property.description && (
          <p className="text-gray-700 text-sm line-clamp-3">
            {property.description}
          </p>
        )}
      </div>
    </div>
  );
}

