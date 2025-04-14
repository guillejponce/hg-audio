import React from 'react';
import ProductCard from '../components/ProductCard';

const Home = () => {
  // Mock data for products
  const products = [
    { id: 1, title: 'Producto 1', price: 1000, image: 'https://via.placeholder.com/300' },
    { id: 2, title: 'Producto 2', price: 2000, image: 'https://via.placeholder.com/300' },
    { id: 3, title: 'Producto 3', price: 3000, image: 'https://via.placeholder.com/300' },
    { id: 4, title: 'Producto 4', price: 4000, image: 'https://via.placeholder.com/300' },
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Bienvenido a HG Audio</h1>
          <p>Tu destino para equipos de audio de alta calidad</p>
        </div>
      </section>

      <section className="about">
        <h2>Quiénes Somos</h2>
        <p>
          Somos una empresa dedicada a la venta y distribución de equipos de audio profesional.
          Ofrecemos productos de la más alta calidad y servicio personalizado.
        </p>
      </section>

      <section className="products">
        <h2>Nuestros Productos</h2>
        <div className="product-grid">
          {products.map(product => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </section>

      <section className="contact">
        <h2>Contacto</h2>
        <div className="contact-info">
          <p>Email: info@hgaudio.com</p>
          <p>Teléfono: (123) 456-7890</p>
          <p>Dirección: Calle Principal 123, Ciudad</p>
        </div>
      </section>
    </div>
  );
};

export default Home; 