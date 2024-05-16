import React, {useState} from 'react';
import axios from 'axios';

const FeedbackForm = ({hotelId}) => {
    const [comments, setComments] = useState('');
    const [cleanlinessRating, setCleanlinessRating] = useState(0);
    const [serviceRating, setServiceRating] = useState(0);

    const submitFeedback = async () => {
        try {
            await axios.post(`/feedback/${hotelId}`, null, {
                params: {comments, cleanlinessRating, serviceRating}
            });
            alert('Feedback submitted successfully');
        } catch (error) {
            console.error('Error submitting feedback:', error);
        }
    };

    return (
        <div>
            <div>
                <label htmlFor="comments">Comments:</label>
                <textarea id="comments" value={comments} onChange={(e) => setComments(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="cleanlinessRating">Cleanliness Rating:</label>
                <input id="cleanlinessRating" type="number" value={cleanlinessRating}
                       onChange={(e) => setCleanlinessRating(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="serviceRating">Service Rating:</label>
                <input id="serviceRating" type="number" value={serviceRating}
                       onChange={(e) => setServiceRating(e.target.value)}/>
            </div>
            <button onClick={submitFeedback}>Submit Feedback</button>
        </div>


    );
};

export default FeedbackForm;
