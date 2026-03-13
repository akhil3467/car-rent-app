import React from 'react';
import { dummyCarData } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
function FeatureSection() {
  const navigate=useNavigate  
  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-2">Featured Vechile</h2>
      <h6 className="text-center text-muted mb-5">
        Explore our selection of premium vechiles available for every need 
      </h6>
      <div className="row g-4">
       {
        dummyCarData.map((car)=>(
            <div className="col-md-6 col-lg-4 key={car.id}">
                <div className="card h-100 shadow-sm border-0 rounded-4 vechile-card" onClick={()=>{
                }}
                                    style={{cusor:";pointer"}}
                    >
                 {/* Image */}
                 <div className="overflow-hidden rounded-top-4">
                    <img src={car.image}
                    className="card-img-top img-fluid vechile-img"
                    alt={car.model}
                    />
                 </div>
                 <div className="card-body d-flex flex-column">
                  {/* Title */}
                  <h5 className="fw-bold mb-2">
                    {car.brand} {car.model} 
                  </h5>
                  {/* Description */}
                  <div className="row small text-muted mb-2">
                    <div className="col-6">{car.seating_capacity}</div>
                    <div className="col-6">{car.fuel_type}</div>
                  </div>
                  <div className="row small text-muted mb-3">
                    <div className="col-6">{car.transmission}</div>
                    <div className="col-6">{car.location}</div>
                  </div>
                  {/* Description */}
                  <p className="text-muted small flex-grow-1">
                    {car.description}
                  </p>
                  {/* Price & Availability */}
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <div>
                        <h6 className="mb-0 fw-bold text-dard">
                            {car.pricePerDay}
                        </h6>
                        <small className="text-muted"></small>
                    </div>

                  </div>
                 </div>
                </div>

                </div>
        )
        )
       }
      </div>
    </div>

  )
}

export default FeatureSection
