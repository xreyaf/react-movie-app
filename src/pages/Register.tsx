import React from 'react';
// @ts-ignore
import * as Unicons from '@iconscout/react-unicons';
import Container from '../components/Container';
import styled from '@emotion/styled';
import reg from '../assets/img/sally.webp';
import { useFormik } from 'formik';
import Button from '../components/Button';
import { theme } from '../styles/theme';
import Input from '../components/Input';
import Flex from '../components/Flex';
import ImgWithFallback from '../components/ImgWithFallback';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import Heading from '../components/Heading';

const ImageBackRectangle = styled(motion.div)`
  background-color: ${(props) => props.theme.colors.grey900};
  width: 35rem;
  height: 40rem;
  border-radius: 2.25rem;
  position: absolute;
  z-index: -1;
`;

const FormWrapper = styled.div`
  margin: 5rem 0;
  display: flex;
  flex-direction: row;
  gap: 7rem;
`;

const Form = styled(motion.form)`
  width: 100%;
  margin: auto 0;
`;

const Register = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, 'name must be less than 15 characters')
        .required('name is required '),
      surname: Yup.string()
        .max(15, 'surname must be less than 15 characters')
        .required('surname is required'),
      email: Yup.string()
        .email('please provide valid email')
        .required('email is required'),
      password: Yup.string()
        .matches(/^(?=.*[0-9]).{8,20}\S$/, 'only nums, size[8,20]')
        .required('password is required'),
      confirmPassword: Yup.string()
        .matches(/^(?=.*[0-9]).{8,20}\S$/, 'only nums, size[8,20]')
        .oneOf([Yup.ref('password')], 'passwords do not match')
        .required('password is required'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container>
      <FormWrapper>
        <ImageBackRectangle
          initial={{ opacity: 0 }}
          transition={{ duration: 2 }}
          animate={{ opacity: 1 }}
        />
        <motion.div
          style={{ width: '80%' }}
          initial={{ y: -50, opacity: 0 }}
          transition={{ type: 'spring', duration: 2 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <ImgWithFallback src={reg} alt="Register form" />
        </motion.div>

        <Form
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          animate={{ opacity: 1 }}
          onSubmit={formik.handleSubmit}
        >
          <Heading>Register</Heading>
          <br />
          <Input
            name="name"
            type="text"
            label={formik.touched.name ? formik.errors.name ?? 'name' : 'name'}
            placeholder="Ivan"
            onChange={formik.handleChange}
            error={formik.touched.name && !!formik.errors.name}
            onBlur={formik.handleBlur}
            icon={<Unicons.UilText size={24} />}
          />
          <Input
            name="surname"
            type="text"
            label={
              formik.touched.surname
                ? formik.errors.surname ?? 'surname'
                : 'surname'
            }
            placeholder="Ivanov"
            onChange={formik.handleChange}
            error={formik.touched.surname && !!formik.errors.surname}
            onBlur={formik.handleBlur}
            icon={<Unicons.UilTextFields size={24} />}
          />
          <Input
            name="email"
            type="email"
            label={
              formik.touched.email ? formik.errors.email ?? 'email' : 'email'
            }
            placeholder="mail@mail.com"
            onChange={formik.handleChange}
            error={formik.touched.email && !!formik.errors.email}
            onBlur={formik.handleBlur}
            icon={<Unicons.UilEnvelope size={24} />}
          />
          <Input
            name="password"
            type="password"
            label={
              formik.touched.password
                ? formik.errors.password ?? 'password'
                : 'password'
            }
            placeholder="********"
            onChange={formik.handleChange}
            error={formik.touched.password && !!formik.errors.password}
            onBlur={formik.handleBlur}
            icon={<Unicons.UilLock size={24} />}
          />
          <Input
            name="confirmPassword"
            type="password"
            label={
              formik.touched.confirmPassword
                ? formik.errors.confirmPassword ?? 'confirm password'
                : 'confirm password'
            }
            placeholder="********"
            onChange={formik.handleChange}
            error={
              formik.touched.confirmPassword && !!formik.errors.confirmPassword
            }
            onBlur={formik.handleBlur}
            icon={<Unicons.UilLock size={24} />}
          />

          <Flex direction="row" gap={'1rem'} justify={'center'}>
            <Button
              whileHover={{
                backgroundColor: `${theme.colors.primary500}`,
                cursor: 'pointer',
              }}
              type="submit"
              css={{ width: '60%' }}
            >
              Submit
            </Button>
            <Button
              whileHover={{
                backgroundColor: `${theme.colors.error600}`,
                cursor: 'pointer',
              }}
              type="reset"
              css={{
                width: '40%',
                backgroundColor: `${theme.colors.error500}`,
              }}
            >
              Reset
            </Button>
          </Flex>
        </Form>
      </FormWrapper>
    </Container>
  );
};

export default Register;
