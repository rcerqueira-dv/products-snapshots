// ProductSnapshotEdit.jsx
import React, { useEffect, useState } from 'react';
import ProductSnapshotForm from './ProductSnapshotForm';

const ProductSnapshotEdit = ({ id }) => {
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    const fetchProductSnapshot = async () => {
      try {
        const response = await fetch(`/api/v1/product_snapshots/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product snapshot');
        }
        const data = await response.json();
        // setInitialData({ TODO
        //   ...data.product_snapshot,
        //   selectedProductIds: data.product_snapshot.products.map(product => product.id),
        // });
        setInitialData({
          ...data.product_snapshot,
          selectedProductIds: ["1", "2", "3"],
        });
      } catch (error) {
        console.error('Error fetching product snapshot:', error);
      }
    };

    fetchProductSnapshot();
  }, [id]);

  const handleEdit = async (data) => {
    try {
      const response = await fetch(`/api/v1/product_snapshots/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ product_snapshot: data }),
      });
      if (!response.ok) {
        throw new Error('Failed to update product snapshot');
      }
      // Manejar la respuesta según sea necesario
    } catch (error) {
      console.error('Error updating product snapshot:', error);
    }
  };

  return (
    <ProductSnapshotForm
      initialData={initialData}
      onSubmit={handleEdit}
      submitButtonLabel="Save"
    />
  );
};

export default ProductSnapshotEdit;
