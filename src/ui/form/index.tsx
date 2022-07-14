import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../input';

export type RegistrationFormFields = {
  firstName: string;
};

// export const RegistrationForm: FC = () => {
//   const {
//     register,
//     handleSubmit,
//   } = useForm<RegistrationFormFields>();

//   const onSubmit = handleSubmit((data) => {
//     console.log(data);
//   });

  
// };

// export default RegistrationForm;