function Testimonials (){
    return (
        <div className="test-container">
            <h1 className="title test-title"> Testimonials</h1>
            <div className="reviews">
                <div className="review-box">
                    <h1 className="name"> Review #1 </h1>
                    <p className="description"> Aftershock helped me with the emotional impact of my accident in a way that felt safe and supportive. It provided me with a way to move forward.</p>
                    <img className="review-img" src="avatar.jpg" />
                </div>
                <div className="review-box">
                    <h1 className="name"> Review #2</h1>
                    <p className="description"> This project combines compassion with practical guidance in a way I haven’t seen before. It felt like someone truly understood what I was going through.</p>
                    <img className="review-img" src="avatar.jpg" />
                </div>
                <div className="review-box">
                    <h1 className="name"> Review #3</h1>
                    <p className="description"> Aftershock made me feel less alone during a really difficult time. The personalized insights and recommendations were exactly what I needed.</p>
                    <img className="review-img" src="avatar.jpg" />
                </div>
            </div>
        </div>
    )
}
export default Testimonials;