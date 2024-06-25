// import React, { useState, useEffect } from 'react';
// import { Page, Form, FormLayout, Select } from '@shopify/polaris';

// const EditSettings = ({ settingId }) => {
//   settingId = 1
//   const [frequencyOptions, setFrequencyOptions] = useState([]);
//   const [frequency, setFrequency] = useState('');

//   useEffect(() => {
//     const fetchFrequencyOptions = async () => {
//       try {
//         const response = await fetch(`/api/v1/settings/${settingId}/edit`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch frequency options');
//         }
//         const data = await response.json();
//         setFrequencyOptions(data.frequency_options);
//         // Puedes establecer un valor predeterminado para frequency si es necesario
//         setFrequency(data.frequency_options[0]); // Aquí establezco el primer valor como predeterminado
//       } catch (error) {
//         console.error('Error fetching frequency options:', error);
//         // Manejo de errores
//       }
//     };

//     fetchFrequencyOptions();
//   }, [settingId]);

//   const handleSubmit = async () => {
//     try {
//       const response = await fetch(`/api/v1/settings/${settingId}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ setting: { time_frequency: frequency } }),
//       });
//       if (!response.ok) {
//         throw new Error('Failed to update setting');
//       }
//       // Manejar la respuesta según sea necesario
//     } catch (error) {
//       console.error('Error updating setting:', error);
//       // Manejo de errores
//     }
//   };

//   return (
//     <Page>
//       <Form onSubmit={handleSubmit}>
//         <FormLayout>
//           <Select
//             label="Product Snapshot Frequency"
//             options={frequencyOptions.map(option => ({
//               label: option.charAt(0).toUpperCase() + option.slice(1),
//               value: option,
//             }))}
//             value={frequency}
//             onChange={value => setFrequency(value)}
//           />
//           <FormLayout.Group>
//             <button type="submit">Save</button>
//           </FormLayout.Group>
//         </FormLayout>
//       </Form>
//     </Page>
//   );
// };

// export default EditSettings;

import React from 'react'

function EditSnapshotSettingsPage() {
  return (
    <div>EditSnapshotSettingsPage</div>
  )
}

export default EditSnapshotSettingsPage