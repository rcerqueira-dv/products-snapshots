import { Form, FormLayout, Checkbox, TextField, Button } from '@shopify/polaris';
import { useState, useCallback } from 'react';

function ProductSnapshotForm() {
  const [newsletter, setNewsletter] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = useCallback(() => {
    setEmail('');
    setNewsletter(false);
  }, []);



  const handleEmailChange = useCallback((value: string) => setEmail(value), []);

  return (
    <Form onSubmit={handleSubmit}>
      <FormLayout>


        <TextField
          value={email}
          onChange={handleEmailChange}
          label="Email"
          type="email"
          autoComplete="email"
          helpText={
            <span>
              We’ll use this email address to inform you on future changes to
              Polaris.
            </span>
          }
        />

        <Button submit>Submit</Button>
      </FormLayout>
    </Form>
  );
}