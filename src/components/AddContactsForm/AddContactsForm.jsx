import { Formik, Field } from 'formik';
import { nanoid } from 'nanoid';
import { Form, FormButton, FormField } from './AddContactsForm.styled';

export const AddContactsForm = ({ onSave }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={(values, actions) => {
        onSave({ ...values, id: nanoid() });
        console.log(values);
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
