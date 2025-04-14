import React from 'react';

const Admin = () => {
  return (
    <div className="admin">
      <div className="admin-container">
        <h1>Panel de Administración</h1>
        
        <div className="admin-grid">
          <section className="admin-card">
            <h2>Productos</h2>
            <div className="admin-actions">
              <button className="btn">Agregar Producto</button>
              <button className="btn">Editar Productos</button>
            </div>
          </section>

          <section className="admin-card">
            <h2>Pedidos</h2>
            <div className="admin-actions">
              <button className="btn">Ver Pedidos</button>
              <button className="btn">Actualizar Estado</button>
            </div>
          </section>

          <section className="admin-card">
            <h2>Usuarios</h2>
            <div className="admin-actions">
              <button className="btn">Gestionar Usuarios</button>
              <button className="btn">Ver Estadísticas</button>
            </div>
          </section>

          <section className="admin-card">
            <h2>Configuración</h2>
            <div className="admin-actions">
              <button className="btn">Ajustes Generales</button>
              <button className="btn">Personalizar Sitio</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Admin; 