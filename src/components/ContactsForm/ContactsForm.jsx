import { Formik, Field } from 'formik';
import { nanoid } from 'nanoid';
import { Form, FormButton, FormField } from './ContactsForm.styled';

export const ContactsForm = ({ onSave }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={(values, actions) => {
        onSave({ ...values, id: nanoid() });
        actions.resetForm();
      }}
    >
      <Form>
        <FormField>
          Name
          <Field type="text" name="name" />
        </FormField>
        <FormField>
          Number
          <Field type="tel" name="number" />
        </FormField>

        <FormButton type="submit">Add contact</FormButton>
      </Form>
    </Formik>
  );
};
