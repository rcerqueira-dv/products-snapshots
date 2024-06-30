import React, { useState, useEffect } from 'react';
import { Form, FormLayout, TextField, Button, Label } from '@shopify/polaris';
import SelectTable from '../products/SelectTable';
import { Page } from '@shopify/polaris';

const ProductSnapshotCreateForm = () => {
  const [productsOptions, setProductsOptions] = useState([]);
  const [name, setName] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // const fetchFrequencyOptions = async () => {
    //   let data = ['daily', 'weekly', 'monthly'];
    //   setFrequencyOptions(data);
    //   setFrequency(data[0]);
    // };

    // const fetchProductsOptions = async () => {
    //   try {
    //     const response = await fetch(`/api/products`);
    //     if (!response.ok) {
    //       throw new Error('Failed to fetch frequency options');
    //     }
    //     const data = await response.json();
    //     setProductsOptions(data.product_options);
    //   } catch (error) {
    //     console.error('Error fetching product options:', error);
    //     // Manejo de errores
    //   }
    // };
    const fetchProductsOptions = () => {
      const products = [
        {
          id: "1",
          title: "Smartphone",
          description: "Dispositivo móvil con pantalla táctil y capacidades de conexión a internet."
        },
        {
          id: "2",
          title: "Laptop",
          description: "Computadora portátil ligera y de alto rendimiento para uso profesional y personal."
        },
        {
          id: "3",
          title: "Smart TV",
          description: "Televisor inteligente con aplicaciones de streaming integradas."
        },
        {
          id: "4",
          title: "Auriculares inalámbricos",
          description: "Auriculares sin cables con cancelación de ruido y excelente calidad de sonido."
        },
        {
          id: "5",
          title: "Tablet",
          description: "Dispositivo portátil con pantalla táctil ideal para leer, navegar por internet y ver videos."
        },
        {
          id: "6",
          title: "Cámara réflex digital",
          description: "Cámara de alta resolución con lentes intercambiables para fotógrafos profesionales."
        },
        {
          id: "7",
          title: "Reloj inteligente",
          description: "Reloj con funciones avanzadas como monitoreo de salud, notificaciones y GPS."
        },
        {
          id: "8",
          title: "Consola de videojuegos",
          description: "Sistema de entretenimiento para jugar videojuegos de alta definición."
        },
        {
          id: "9",
          title: "Altavoz Bluetooth",
          description: "Altavoz portátil con conexión inalámbrica y sonido de alta calidad."
        },
        {
          id: "10",
          title: "Cafetera de cápsulas",
          description: "Máquina para hacer café utilizando cápsulas de diferentes sabores."
        },
        {
          id: "11",
          title: "Ebook Reader",
          description: "Dispositivo para leer libros electrónicos con pantalla de tinta electrónica."
        },
        {
          id: "12",
          title: "Robot aspirador",
          description: "Aspiradora automática que limpia el piso de manera autónoma."
        },
        {
          id: "13",
          title: "Parrilla eléctrica",
          description: "Parrilla compacta y fácil de usar para asar alimentos en interiores."
        },
        {
          id: "14",
          title: "Purificador de aire",
          description: "Dispositivo que limpia el aire eliminando contaminantes y alérgenos."
        },
        {
          id: "15",
          title: "Termostato inteligente",
          description: "Termostato que se puede controlar de forma remota para ajustar la temperatura del hogar."
        }
      ]
      setProductsOptions(products);

    };

    fetchProductsOptions();
  }, []);

  const handleSubmit = async () => {
    let hasErrors = false;
    const newErrors = {};

    if (!name) {
      newErrors.name = 'Name is required';
      hasErrors = true;
    }

    if (productsOptions.length === 0) {
      newErrors.products = 'At least one product must be selected';
      hasErrors = true;
    }

    setErrors(newErrors);

    if (!hasErrors) {
      try {
        const response = await fetch(`/api/v1/product_snapshots`, {
          method: 'CREATE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ product_snapshot: { name: name, products: productsOptions } }),
        });
        if (!response.ok) {
          throw new Error('Failed to update product_snapshot');
        }
        // Manejar la respuesta según sea necesario
      } catch (error) {
        console.error('Error updating product_snapshot:', error);
      }
    }
  };

  const handleNameChange = value => {
    setName(value);
    if (value) {
      setErrors((prevErrors) => ({ ...prevErrors, name: '' }));
    }
  }


  return (
    <Page>
      <Form onSubmit={handleSubmit}>
        <FormLayout>
          <TextField
            value={name}
            onChange={handleNameChange}
            label="Name"
            autoComplete="Name"
            error={errors.name}
          />
          <Label>Products</Label>
          <SelectTable
            products={productsOptions}
            setProductsOptions={setProductsOptions}
          />

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button primary submit>Submit</Button>
          </div>
        </FormLayout>
      </Form>
    </Page>
  );
};

export default ProductSnapshotCreateForm;
