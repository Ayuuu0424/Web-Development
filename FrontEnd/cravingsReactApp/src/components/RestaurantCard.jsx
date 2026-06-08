function RestaurantCard({ image, name, rating, description, cuisines }) {
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="card h-100 border-0 shadow-sm restaurant-card">
        <div className="position-relative">
          <img src={image} alt={name} className="card-img-top restaurant-img" />

          <span className="rating position-absolute top-0 end-0 m-3 px-2 rounded-4">
            ⭐ {rating}
          </span>
        </div>

        <div className="card-body d-flex flex-column">
          <h5 className="fw-bold">{name}</h5>

          <p className="small flex-grow-1">{description}</p>

          <div className="d-flex flex-wrap gap-2 mb-2">
            {cuisines.map((cuisine, index) => (
              <span key={index} className="badge tag-badge px-2 py-1">
                {cuisine}
              </span>
            ))}
          </div>

          <hr />

          <button className="btn btn-custom w-100">Explore Menu</button>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;
