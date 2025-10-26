import './AboutUs.css';

function AboutUs() {
  return (
    <main className="about-us-container">
      <header className="about-us-header">
        <div className="about-us-heading">
          <img
            src="https://p1.hiclipart.com/preview/922/979/640/green-leaf-logo-emoji-seedling-emoticon-sticker-plant-plant-stem-flower-png-clipart-thumbnail.jpg"
            alt="Leaf logo left"
            className="plant-logo plant-logo-left"
          />
          <h1>About Us</h1>
          <img
            src="https://p1.hiclipart.com/preview/922/979/640/green-leaf-logo-emoji-seedling-emoticon-sticker-plant-plant-stem-flower-png-clipart-thumbnail.jpg"
            alt="Leaf logo right"
            className="plant-logo plant-logo-right"
          />
        </div>

        <h2 className="about-us-subtitle">
          Welcome to <span>Paradise Nursery</span>, where green meets serenity!
        </h2>
      </header>

      <section className="about-us-section">
        <p className="about-us-content">
          At Paradise Nursery, we are passionate about bringing nature closer to you. 
          Our mission is to provide a wide range of high-quality plants that not only 
          enhance the beauty of your surroundings but also contribute to a healthier 
          and more sustainable lifestyle. From air-purifying plants to aromatic fragrant 
          ones, we have something for every plant enthusiast.
        </p>

        <p className="about-us-content">
          Our team of experts is dedicated to ensuring that each plant meets our strict 
          standards of quality and care. Whether you&apos;re a seasoned gardener or just 
          starting your green journey, we&apos;re here to support you every step of the way.
        </p>

        <p className="about-us-content">
          Join us in our mission to create a greener, healthier world. Visit 
          <strong> Paradise Nursery </strong> today and experience the beauty of nature 
          right at your doorstep.
        </p>
      </section>
    </main>
  );
}

export default AboutUs;

