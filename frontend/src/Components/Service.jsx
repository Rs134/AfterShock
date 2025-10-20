import { useNavigate } from "react-router-dom";

function Service() {
  const navigate = useNavigate();

  const goToChatbot = () => {
    navigate("/chatbot");
  };
  return (
    <div className="service">
      <h1 className="title service-title"> Introducing Our Chatbot</h1>
      <div className="service-content">
        <div className="service-box-container">
          <div className="service-box">
            <h2 className="service-box-title">Compassionate Conversations</h2>
            <p className="service-box-description">Provides a safe space for survivors to express their fears, emotions, and concerns without judgment.</p>
          </div>
          <div className="service-box">
            <h2 className="service-box-title">Guided Healing Tools</h2>
            <p className="service-box-description">Offers personalized exercises, coping strategies, and therapeutic prompts to help manage stress and anxiety.</p>
          </div>
          <div className="service-box">
            <h2 className="service-box-title">24/7 Accessible Support</h2>
            <p className="service-box-description">Always available when survivors need it most, offering comfort and guidance at any stage of recovery.</p>
          </div>
        </div>
        <div className="service-box-container-2">
          <h2 className="service-box-2-title">Empowering Recovery, One Chat at a Time</h2>
          <button className="service-button" onClick={goToChatbot}>
            Get Started
          </button>
        </div>
      </div>

    </div>
  );
}

export default Service;
