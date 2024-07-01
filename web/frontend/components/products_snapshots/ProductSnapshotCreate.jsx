// ProductSnapshotCreate.jsx
import React from 'react';
import ProductSnapshotForm from './ProductSnapshotForm';

const ProductSnapshotCreate = () => {

  const handleCreate = async (data) => {
    try {
      const response = await fetch(`/api/v1/product_snapshots`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ product_snapshot: data }),
      });

      if (!response.ok) {
        throw new Error('Failed to create product snapshot');
      }
      // Manejar la respuesta según sea necesario
    } catch (error) {
      console.error('Error creating product snapshot:', error);
    }
  };

  return <ProductSnapshotForm onSubmit={handleCreate} submitButtonLabel="Create" />;
};

export default ProductSnapshotCreate;
