import React, { useState } from 'react';


function About() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
        
      <button className="accordion" onClick={() => toggleAccordion(1)}>
        Why us?
      </button>
      <div className="panel" style={{ display: activeIndex === 1 ? 'block' : 'none' }}>
        <div>
          <p>At Margalla Event Management, we turn your vision into reality with seamless event planning and management. Here’s why you should choose us:</p>
          <p><strong>Tailored Experiences:</strong> Every event is unique, and we strive to create a personalized experience that aligns with your specific needs and desires.</p>
          <p><strong>Attention to Detail:</strong> From the smallest decorations to the overall flow of the event, our meticulous attention to detail ensures nothing is overlooked.</p>
          <p><strong>Expert Team:</strong> Our team of professionals has extensive experience in managing events of all scales, from intimate gatherings to large-scale corporate functions.</p>
          <p><strong>Stress-Free Planning:</strong> Leave the logistics to us! We handle everything from venue selection to on-site coordination, so you can focus on enjoying your event.</p>
          <p><strong>Innovative Solutions:</strong> We stay ahead of trends and use the latest technologies to bring creativity and innovation to your events.</p>
          
        </div>
      </div>

      <button className="accordion" onClick={() => toggleAccordion(2)}>
        Our Mission
      </button>
      <div className="panel" style={{ display: activeIndex === 2 ? 'block' : 'none' }}>
        <p>Our mission is to create unforgettable events by delivering personalized, innovative, and seamless experiences. We aim to exceed client expectations through meticulous planning and creative solutions. With passion and professionalism, we bring visions to life, ensuring every moment is memorable.</p>
      </div>

      <button className="accordion" onClick={() => toggleAccordion(3)}>
        Diversity
      </button>
      <div className="panel" style={{ display: activeIndex === 3 ? 'block' : 'none' }}>
        <p>Diversity is a key pillar of our approach. We embrace and celebrate diverse cultures, ideas, and perspectives, ensuring that every event reflects inclusivity and uniqueness. By fostering a diverse environment, we create experiences that resonate with a wide range of audiences, offering creativity and innovation that speaks to everyone.</p>
      </div>
    </div>
   
  );
}

export default About;
