import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { Message } from '../../store/email/email.models';
import { sendMessage } from '../../store/email/email.actions';

export const CreateEmail: React.FC = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    id: Yup.string().required(),
    name: Yup.string().required(),
    messageType: Yup.string().required().equals([ 'Inbox', 'Outbox' ]),
    title: Yup.string().required(),
    body: Yup.string().required(),
  });

  const handleSubmit = () => {
    dispatch(sendMessage(formik.values));
    formik.resetForm();
  };

  const formik = useFormik<Message>({
    initialValues: {
      id: '',
      name: '',
      messageType: 'Inbox',
      title: '',
      body: '',
      createdAt: 0,
    },
    onSubmit: handleSubmit,
    validationSchema
  });

  return (
    <div className="create-mail-page">
      <form className="create-mail__form">
        <Input
          label="ID"
          value={formik.values.id}
          name="id"
          onChange={formik.handleChange}
        />
        <Input
          label="Name"
          value={formik.values.name}
          name="name"
          onChange={formik.handleChange}
        />
        <Input
          label="Message Type"
          value={formik.values.messageType}
          name="messageType"
          onChange={formik.handleChange}
        />
        <Input
          label="Title"
          value={formik.values.title}
          name="title"
          onChange={formik.handleChange}
        />
        <Input
          label="Body"
          value={formik.values.body}
          name="body"
          onChange={formik.handleChange}
        />
        <Button type="submit" onClick={formik.handleSubmit}>Submit</Button>
      </form>
    </div>
  );
};
