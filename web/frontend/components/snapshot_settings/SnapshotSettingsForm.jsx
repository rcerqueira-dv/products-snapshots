import React from 'react';
import { Form, FormLayout, Select, Button } from '@shopify/polaris';

const SnapshotSettingsForm = ({ frequencyOptions, frequency, setFrequency, handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <FormLayout>
        <Select
          label="Product Snapshot Frequency"
          options={frequencyOptions.map(option => ({
            label: option.charAt(0).toUpperCase() + option.slice(1),
            value: option,
          }))}
          value={frequency}
          onChange={value => setFrequency(value)}
        />
        <FormLayout.Group>
          <Button variant="primary" submit>Save</Button>
        </FormLayout.Group>
      </FormLayout>
    </Form>
  );
};

export default SnapshotSettingsForm;
