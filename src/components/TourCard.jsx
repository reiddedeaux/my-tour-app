import React, { useState } from 'react'; // Importing React and useState hook

const TourCard = ({ id, name, info, image, price, onRemove }) => {
    const [readMore, setReadMore] = useState(false); // State to toggle read more/less

    return (
        <article className="tour-card">
            <img src={image} alt={name} />
            <div className="tour-info">
                <h2>{name}</h2>
                <p>
                    {readMore ? info : `${info.substring(0, 150)}...`}
                    <button onClick={() => setReadMore(!readMore)}>
                        {readMore ? 'Show Less' : 'Read More'} {/* Toggle read more/less */ }
                    </button>
                </p>
                <h3>${price}</h3>
                <button className="remove-button" onClick={() => onRemove(id)}> {/* Function to remove the tour */ }
                    Not Interested
                </button>
            </div>
        </article>

    )
}
export default TourCard;
// TourCard component to display individual tour information