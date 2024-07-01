import { Page, LegacyCard, DataTable, Button, Frame, Toast } from '@shopify/polaris';
import { EditMajor, DeleteMajor, RefreshMajor } from '@shopify/polaris-icons';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ProductSnapshotIndexTable() {
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);
  const [productSnapshotData, setproductSnapshotData] = useState([]);
  const [toastContent, setToastContent] = useState('');


  useEffect(() => {
    // const fetchProductSnapshots = async () => {
    //   try {
    //     const response = await fetch(`/api/v1/product_snapshots`);
    //     if (!response.ok) {
    //       throw new Error('Failed to fetch product snapshot');
    //     }
    //     const data = await response.json();
    //     // setInitialData({ TODO
    //     //   ...data.product_snapshot,
    //     //   selectedProductIds: data.product_snapshot.products.map(product => product.id),
    //     // });
    //   } catch (error) {
    //     console.error('Error fetching product snapshot:', error);
    //   }
    // };
    const fetchProductSnapshots = () => {
      setproductSnapshotData([
        {
          id: 1,
          name: "Electronics Bundle",
          products: [
            { id: "1", title: "Smartphone", description: "Dispositivo móvil con pantalla táctil y capacidades de conexión a internet." },
            { id: "2", title: "Laptop", description: "Computadora portátil ligera y de alto rendimiento para uso profesional y personal." },
            { id: "3", title: "Smart TV", description: "Televisor inteligente con aplicaciones de streaming integradas." }
          ],
          create_date: "2024-01-01T10:00:00Z",
          type: "Bundle",
          last_restored: "2024-02-15T15:00:00Z",
        },
        {
          id: 2,
          name: "Office Essentials",
          products: [
            { id: "2", title: "Laptop", description: "Computadora portátil ligera y de alto rendimiento para uso profesional y personal." },
            { id: "4", title: "Auriculares inalámbricos", description: "Auriculares sin cables con cancelación de ruido y excelente calidad de sonido." },
            { id: "6", title: "Cámara réflex digital", description: "Cámara de alta resolución con lentes intercambiables para fotógrafos profesionales." }
          ],
          create_date: "2024-01-05T11:00:00Z",
          type: "Essentials",
          last_restored: "2024-02-20T09:00:00Z",
        },
        {
          id: 3,
          name: "Home Entertainment",
          products: [
            { id: "3", title: "Smart TV", description: "Televisor inteligente con aplicaciones de streaming integradas." },
            { id: "8", title: "Consola de videojuegos", description: "Sistema de entretenimiento para jugar videojuegos de alta definición." },
            { id: "9", title: "Altavoz Bluetooth", description: "Altavoz portátil con conexión inalámbrica y sonido de alta calidad." }
          ],
          create_date: "2024-01-10T12:00:00Z",
          type: "Entertainment",
          last_restored: "2024-03-01T14:00:00Z",
        },
        {
          id: 4,
          name: "Kitchen Gadgets",
          products: [
            { id: "10", title: "Cafetera de cápsulas", description: "Máquina para hacer café utilizando cápsulas de diferentes sabores." },
            { id: "13", title: "Parrilla eléctrica", description: "Parrilla compacta y fácil de usar para asar alimentos en interiores." },
            { id: "14", title: "Purificador de aire", description: "Dispositivo que limpia el aire eliminando contaminantes y alérgenos." }
          ],
          create_date: "2024-01-15T13:00:00Z",
          type: "Gadgets",
          last_restored: "2024-03-05T16:00:00Z",
        },
        {
          id: 5,
          name: "Smart Home Kit",
          products: [
            { id: "7", title: "Reloj inteligente", description: "Reloj con funciones avanzadas como monitoreo de salud, notificaciones y GPS." },
            { id: "12", title: "Robot aspirador", description: "Aspiradora automática que limpia el piso de manera autónoma." },
            { id: "15", title: "Termostato inteligente", description: "Termostato que se puede controlar de forma remota para ajustar la temperatura del hogar." }
          ],
          create_date: "2024-01-20T14:00:00Z",
          type: "Smart Home",
          last_restored: "2024-03-10T10:00:00Z",
        }
      ])
    };

    fetchProductSnapshots();
  }, []);

  const handleEdit = (id) => {
    navigate(`/ProductsSnapshots/EditProductSnapshotPage/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/v1/product_snapshots/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Failed to delete product snapshot');
      }
      setToastContent('Product snapshot deleted successfully');
      setShowToast(true);
      // Optionally refresh data or remove the deleted item from the local state
    } catch (error) {
      console.error('Error deleting product snapshot:', error);
      setToastContent('Error deleting product snapshot');
      setShowToast(true);
    }
  };

  const handleRestore = async (id) => {
    try {
      const response = await fetch(`/api/v1/product_snapshots/restore/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Failed to restore product snapshot');
      }
      setToastContent('Product snapshot restored successfully');
      setShowToast(true);
      // Optionally refresh data or update the restored item in the local state
    } catch (error) {
      console.error('Error restoring product snapshot:', error);
      setToastContent('Error restoring product snapshot');
      setShowToast(true);
    }
  };

  const rows = productSnapshotData.map((snapshot) => [
    snapshot.products.map(product => product.title).join(', '),
    snapshot.name,
    snapshot.create_date,
    snapshot.type,
    snapshot.last_restored,
    <div style={{ display: 'flex', gap: '10px' }}>
      <Button icon={EditMajor} onClick={() => handleEdit(snapshot.id)} />
      <Button icon={DeleteMajor} onClick={() => handleDelete(snapshot.id)} />
      <Button icon={RefreshMajor} onClick={() => handleRestore(snapshot.id)} />
    </div>
  ]);

  return (
    <Frame>
      <Page title="Sales by product">
        <LegacyCard>
          <DataTable
            columnContentTypes={[
              'text',
              'text',
              'datetime',
              'text',
              'datetime',
              'text'
            ]}
            headings={[
              'Name',
              'Products',
              'Created At',
              'Type',
              'Last Restored',
              'Options'
            ]}
            rows={rows}
          />
        </LegacyCard>
        {showToast && <Toast content={toastContent} onDismiss={() => setShowToast(false)} />}
      </Page>
    </Frame>
  );
}

export default ProductSnapshotIndexTable;
