import image1 from '../assets/panda.jpeg';
import image2 from '../assets/11.jpg';
import image3 from '../assets/a1.jpg';
import image4 from '../assets/b1.jpg';
import image5 from '../assets/d2.jpg';
import image6 from '../assets/s1.jpg';
import image7 from '../assets/t1.jpg';
import image8 from '../assets/z1.jpg';


function Card () {

    return (
        <div className="container">
            <div class="gallery-items">
                <img class="img-name" src={image1} alt="Gallery-1"></img>
                 <div className='name'>Panda</div>
            </div>

            <div class="gallery-items">
                <img class="img-name" src={image2} alt="Gallery-2"></img>
                <div className='name'>SpongeBob Squarepants</div>
            </div>

            <div class="gallery-items">
                <img class="img-name" src={image3} alt="Gallery-3"></img>
                <div className='name'>Angry Birds</div>
            </div>

            <div class="gallery-items">
                <img class="img-name" src={image4} alt="Gallery-4"></img>
                <div className='name'>Ben10</div>
            </div>

            <div className="gallery-items">
                <img class="img-name" src={image5} alt="Gallery-5"></img>
                <div className='name'>Doraemon</div>
            </div>

            <div className="gallery-items">
                <img class ="img-name" src={image6} alt="Gallery-6"></img>
                <div className='name'>Shinchan</div>
            </div>

            <div className="gallery-items">
                <img class ="img-name" src={image7} alt="Gallery-7"></img>
                <div className='name'>Tom and Jerry</div>
            </div>

            <div className="gallery-items">
                <img class ="img-name" src={image8} alt="Gallery-8"></img>
                <div className='name'>Zootopia</div>
            </div>
        </div>
    );
}

export default Card