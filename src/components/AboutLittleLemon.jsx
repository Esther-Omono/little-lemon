import '../styles/aboutlittlelemon.css';
import About1 from '../assets/about-image1.jpg';
import About2 from '../assets/about-image2.jpg';

const AboutLittleLemon = () => {
  return (
    <section className='about-section'>
      <div className='about-container'>
        <div className='about-text'>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat
            purus sed dapibus cursus. Maecenas blandit sapien vel libero
            ultricies, eget tempus neque vulputate. Sed facilisis convallis
            dolor, non feugiat sem tincidunt ut. Aliquam ut magna id metus
            congue pretium. Duis lacinia, orci sit amet porta tincidunt, eros
            dui semper velit, nec imperdiet turpis nulla quis odio. Maecenas
            imperdiet interdum facilisis. Etiam ut augue vehicula, molestie
            turpis ut, gravida lorem. Proin tincidunt nibh id ipsum eleifend
            vestibulum. Donec bibendum at est vel tempor. Aenean ut suscipit
            nisi. Nulla facilisi. Suspendisse ultricies rutrum mi et laoreet.
            Nunc eget nisi in est venenatis varius in sit amet libero. Aliquam
            vulputate ex id ligula interdum, ut venenatis est suscipit.
          </p>
        </div>
        <div className='about-images'>
          <img src={About1} alt='Little Lemon Chef' />
          <img src={About2} alt='Little Lemon Chef' />
        </div>
      </div>
    </section>
  );
};

export default AboutLittleLemon;
