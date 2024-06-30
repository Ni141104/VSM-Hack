import './Card.css';
function Card({ id,
    Brand,
    Color,
    Memory,
    Storage,
    Rating,
    image, price, sellingPrice ,}) {
       
    return (
        
        <div className="product">
            <div className='h-full left-container'>
            <img src={image} alt="error" />
            </div>
            <div className="data bg-[#FFF8DB]">
            <div className='head'>
                <span className='type'>
              Brand: 
                </span> 
              {Brand}
            </div>
            <div className='head'> 
            <span className='type'>
              Color: 
                </span> 
              {Color}
            </div>
            <div className='head'>
                <span className='type'>
               Memory: 
                    </span> 
               {Memory} 
            </div>
            <div className='head'>
                <span className='type'>
               Storage:
                    </span> 
               {Storage} 
            </div>
            <div className='head'>
                <span className='type'>
              Rating: 
                    </span> 
               {Rating} 
            </div>
            <div className="rate">
                <span className='original'>
                    {sellingPrice}
                </span>
                <span className='cancel'>
                {price}
                </span>
                  
            </div>
            </div>
        </div>
    )
}

export default Card;

