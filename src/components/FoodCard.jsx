import { Motorbike } from 'lucide-react';
import '../styles/foodcard.css';
import { Link } from 'react-router-dom';

const FoodCard = ({ meal }) => {
  return (
    <article className='food-card'>
      <div className='food-card-image'>
        <img src={meal.image} alt={meal.name} />
      </div>
      <div className='food-card-header'>
        <h3>{meal.name}</h3>
        <span>{meal.price}</span>
      </div>
      <div className='food-card-footer'>
        <p>{meal.description}</p>
        <div className='food-card-footer-inner'>
          <Link to='/order-online'>
            <p>Order a delivery</p>
            <Motorbike />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default FoodCard;
