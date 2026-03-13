import { cityList } from "../assets/assets";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";
const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1>Luxury Car on Rent</h1>
        <h5>Book your dream car anytime, anywhere</h5>

        <div className="booking-form">
          <form className="form-row">

            {/* Pickup Location */}
            <div className="form-group">
              <select required defaultValue="">
    <option value="" disabled>
      Pickup Location
    </option>

    {cityList.map((city) => (
      <option key={city} value={city}>
        {city}
      </option>
    ))}

  </select>

            </div>

            {/* Pickup Date */}
            
            <div className="form-group">
  <input type="text" placeholder="Pickup Date"
    onFocus={(e) => (e.target.type = "date")}
    onBlur={(e) => (e.target.type = "text")}
    required/>
</div>

            {/* Pickup Time */}
            <div className="form-group">
            <input type="text" placeholder="Pickup Time"
    onFocus={(e) => (e.target.type = "time")}
    onBlur={(e) => (e.target.type = "text")}
    required/>
            </div>

            {/* Return Date */}
            <div className="form-group">
             <input type="text" placeholder="Return Date"
    onFocus={(e) => (e.target.type = "date")}
    onBlur={(e) => (e.target.type = "text")}
    required/>
            </div>

            {/* Return Time */}
            <div className="form-group">
             <input type="text" placeholder="Return Time"
    onFocus={(e) => (e.target.type = "time")}
    onBlur={(e) => (e.target.type = "text")}
    required/>
            </div>

            {/* Button */}
            <div className="form-group">
              <button type="submit">Book Now</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
