import '../styles/specials.css';
import FoodCard from './FoodCard';
import greekSalad from '../assets/greek-salad.jpg';
import bruschetta from '../assets/bruschetta.jpg';
import lemonDessert from '../assets/lemon-dessert.jpg';
import { Link } from 'react-router-dom';

const Specials = () => {
  const meals = [
    {
      name: 'Greek Salad',
      image: greekSalad,
      price: '$12.99',
      description: `The famous greek salad of crispy lettuce, peppers, olives and 
      our Chicago style feta cheese, garnished with crunchy garlic and rosemary 
      croutons.`,
    },
    {
      name: 'Bruschetta',
      image: bruschetta,
      price: '$5.99',
      description: `Our Bruschetta is made from grilled bread that has been 
      smeared with garlic and seasoned with salt and olive oil.`,
    },
    {
      name: 'Lemon Dessert',
      image: lemonDessert,
      price: '$5.00',
      description: `This comes straight from grandma's recipe book, every last 
      ingredient has been sourced and is as authentic as can be imagined.`,
    },
  ];

  return (
    <section className='specials-container'>
      <div className='specials-heading'>
        <h2>This week specials!</h2>
        <Link to='/order-online'>
          <button className='btn specials-btn'>Online Menu</button>
        </Link>
      </div>
      <div className='grid'>
        {meals.map((meal, index) => (
          <FoodCard key={index} meal={meal} />
        ))}
      </div>
    </section>
  );
};

export default Specials;
