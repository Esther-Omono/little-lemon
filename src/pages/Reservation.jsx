import '../styles/reservation.css';
import restaurantInterior from '../assets/bookings2.jpg';
import chefCooking from '../assets/bookings1.jpg';
import { useState, useReducer } from 'react';
import { fetchAPI, submitAPI } from '../utils/api';

// Reducer for managing available times
const timesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return fetchAPI(action.date);
    default:
      return state;
  }
};

// Initialize times for today
const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

// Validation functions
export const validateDate = (date) => {
  if (!date) return false;
  const selectedDate = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return selectedDate >= today;
};

export const validateGuests = (guests) => {
  if (!guests) return false;
  const num = parseInt(guests);
  return !isNaN(num) && num >= 1;
};

export const validateTime = (time) => {
  return time !== '';
};

export const validateOccasion = (occasion) => {
  return occasion !== '';
};

const Reservation = () => {
  const [availableTimes, dispatch] = useReducer(
    timesReducer,
    [],
    initializeTimes
  );
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '',
    occasion: '',
    seatingStandard: true,
    seatingOutside: false,
  });
  const [errors, setErrors] = useState({});

  // Validate individual field
  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'date':
        if (!validateDate(value)) {
          error = 'Please select a valid future date';
        }
        break;
      case 'time':
        if (!validateTime(value)) {
          error = 'Please select a time';
        }
        break;
      case 'guests':
        if (!validateGuests(value)) {
          error = 'Please select number of guests';
        }
        break;
      case 'occasion':
        if (!validateOccasion(value)) {
          error = 'Please select an occasion';
        }
        break;
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
    return error === '';
  };

  // Update available times when date changes
  const handleDateChange = (selectedDate) => {
    setFormData({ ...formData, date: selectedDate, time: '' });
    validateField('date', selectedDate);
    const dateObj = new Date(selectedDate);
    dispatch({ type: 'UPDATE_TIMES', date: dateObj });
  };

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const handleSubmit = () => {
    // Validate all fields before submit
    const isDateValid = validateField('date', formData.date);
    const isTimeValid = validateField('time', formData.time);
    const isGuestsValid = validateField('guests', formData.guests);
    const isOccasionValid = validateField('occasion', formData.occasion);

    if (!isDateValid || !isTimeValid || !isGuestsValid || !isOccasionValid) {
      alert('Please fill in all required fields');
      return;
    }

    // Submit to API
    const success = submitAPI(formData);

    if (success) {
      alert(
        `Booking confirmed for ${formData.guests} guests on ${formData.date} at ${formData.time}`
      );
      // Reset form
      setFormData({
        date: '',
        time: '',
        guests: '',
        occasion: '',
        seatingStandard: true,
        seatingOutside: false,
      });
      setErrors({});
    } else {
      alert('Booking failed. Please try again.');
    }
  };

  return (
    <div className='booking-page'>
      <section className='reservation-container'>
        <div className='reservation-content'>
          <div className='reservation-text'>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Find a table for any occasion</p>
          </div>
          <div className='restaurant-images'>
            <img src={restaurantInterior} alt='Restaurant interior' />
            <img src={chefCooking} alt='Chef cooking' />
          </div>
        </div>
      </section>

      <div className='booking-form-container'>
        <div className='booking-form'>
          <div className='form-grid'>
            <div className='form-group'>
              <label htmlFor='date'>
                Date <span className='required'>*</span>
              </label>
              <input
                type='date'
                id='date'
                value={formData.date}
                onChange={(e) => handleDateChange(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                required
              />
              {errors.date && (
                <span className='error-message'>{errors.date}</span>
              )}
            </div>

            <div className='form-group'>
              <label htmlFor='time'>
                Time <span className='required'>*</span>
              </label>
              <select
                id='time'
                value={formData.time}
                onChange={(e) =>
                  setFormData({ ...formData, time: e.target.value })
                }
                disabled={!formData.date}
                required
              >
                <option value=''>Select time</option>
                {availableTimes.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
              {errors.time && (
                <span className='error-message'>{errors.time}</span>
              )}
            </div>

            <div className='form-group'>
              <label htmlFor='diners'>
                Number of Diners <span className='required'>*</span>
              </label>
              <select
                id='diners'
                value={formData.guests}
                onChange={(e) =>
                  setFormData({ ...formData, guests: e.target.value })
                }
                required
              >
                <option value=''>Select number</option>
                <option value='1'>1 guest</option>
                <option value='2'>2 guests</option>
                <option value='3'>3 guests</option>
                <option value='4'>4 guests</option>
                <option value='5'>5 guests</option>
                <option value='6'>6 guests</option>
                <option value='7'>7 guests</option>
                <option value='8'>8 guests</option>
                <option value='9+'>9+ guests</option>
              </select>
              {errors.guests && (
                <span className='error-message'>{errors.guests}</span>
              )}
            </div>

            <div className='form-group'>
              <label htmlFor='occasion'>
                Occasion <span className='required'>*</span>
              </label>
              <select
                id='occasion'
                value={formData.occasion}
                onChange={(e) =>
                  setFormData({ ...formData, occasion: e.target.value })
                }
                required
              >
                <option value=''>Select occasion</option>
                <option value='birthday'>Birthday</option>
                <option value='anniversary'>Anniversary</option>
                <option value='engagement'>Engagement</option>
                <option value='business'>Business</option>
                <option value='casual'>Casual Dining</option>
                <option value='other'>Other</option>
              </select>
              {errors.occasion && (
                <span className='error-message'>{errors.occasion}</span>
              )}
            </div>
          </div>

          <div className='seating-options'>
            <h3>Seating options</h3>
            <div className='seating-checkboxes'>
              <div className='checkbox-item'>
                <input
                  type='checkbox'
                  id='standard'
                  checked={formData.seatingStandard}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      seatingStandard: e.target.checked,
                    })
                  }
                />
                <label htmlFor='standard'>Standard</label>
              </div>
              <div className='checkbox-item'>
                <input
                  type='checkbox'
                  id='outside'
                  checked={formData.seatingOutside}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      seatingOutside: e.target.checked,
                    })
                  }
                />
                <label htmlFor='outside'>Outside</label>
              </div>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className='submit-btn'
            disabled={
              !formData.date ||
              !formData.time ||
              !formData.guests ||
              !formData.occasion
            }
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export { initializeTimes, timesReducer };

export default Reservation;
