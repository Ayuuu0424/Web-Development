function RestaurantCard({ image, name, rating, description, cuisines }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-56 object-cover" />

        <span className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-sm font-medium shadow">
          ⭐ {rating}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h5 className="text-xl font-bold mb-2">{name}</h5>

        <p className="text-gray-600 flex-grow">{description}</p>

        <div className="flex flex-wrap gap-2 mt-4 mb-4">
          {cuisines.map((cuisine, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full text-sm bg-[var(--color-base-200)] text-[var(--color-primary)]"
            >
              {cuisine}
            </span>
          ))}
        </div>

        <hr className="border-[var(--color-base-300)] mb-4" />

        <button className="w-full py-2 rounded-md bg-[var(--color-primary)] text-white hover:opacity-90 transition">
          Explore Menu
        </button>
      </div>
    </div>
  );
}

export default RestaurantCard;
