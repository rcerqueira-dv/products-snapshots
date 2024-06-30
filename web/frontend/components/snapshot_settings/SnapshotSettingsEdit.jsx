import React, { useState, useEffect } from 'react';
import { Page } from '@shopify/polaris';
import SnapshotSettingsForm from './SnapshotSettingsForm';

const SnapshotSettingsEdit = ({ snapshotSettingId }) => {
  const [frequencyOptions, setFrequencyOptions] = useState([]);
  const [frequency, setFrequency] = useState('');

  useEffect(() => {
    // const fetchFrequencyOptions = async () => {
    //   let data = ['daily', 'weekly', 'monthly'];
    //   setFrequencyOptions(data);
    //   setFrequency(data[0]);
    // };

    const fetchFrequencyOptions = async () => {
      try {
        const response = await fetch(`/api/v1/snapshot_settings/${snapshotSettingId}/edit`);
        if (!response.ok) {
          throw new Error('Failed to fetch frequency options');
        }
        const data = await response.json();
        setFrequencyOptions(data.frequency_options);
        // Puedes establecer un valor predeterminado para frequency si es necesario
        setFrequency(data.frequency_options[0]); // Aquí establezco el primer valor como predeterminado
      } catch (error) {
        console.error('Error fetching frequency options:', error);
        // Manejo de errores
      }
    };

    fetchFrequencyOptions();
  }, [snapshotSettingId]);

  const handleSubmit = async () => {
    try {
      const response = await fetch(`/api/v1/snapshot_settings/${snapshotSettingId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ snapshot_setting: { time_frequency: frequency } }),
      });
      if (!response.ok) {
        throw new Error('Failed to update snapshot_setting');
      }
      // Manejar la respuesta según sea necesario
    } catch (error) {
      console.error('Error updating snapshot_setting:', error);
    }
  };

  return (
    <Page>
      <SnapshotSettingsForm
        frequencyOptions={frequencyOptions}
        frequency={frequency}
        setFrequency={setFrequency}
        handleSubmit={handleSubmit}
      />
    </Page>
  );
};

export default SnapshotSettingsEdit;
