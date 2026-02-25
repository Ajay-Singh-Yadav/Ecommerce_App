import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import colors from '@theme/colors';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[A-Za-z]+$/, 'Only alphabets allowed')
    .min(2, 'First name must be at least 2 characters')
    .max(30, 'Too long')
    .required('First name is required'),

  lastName: Yup.string()
    .matches(/^[A-Za-z]+$/, 'Only alphabets allowed')
    .min(2, 'Last name must be at least 2 characters')
    .max(30, 'Too long')
    .required('Last name is required'),

  email: Yup.string()
    .matches(
      /^[a-z][a-z0-9._]*@[a-z0-9]+\.[a-z]{2,}$/,
      'Email must start with a letter, contain lowercase letters, numbers and one @',
    )
    .required('Email is required'),

  phone: Yup.string()
    .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
    .required('Phone number is required'),

  gender: Yup.string()
    .oneOf(['Male', 'Female', 'Other'], 'Select valid gender')
    .required('Please select gender'),

  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()_+=-]).{8,}$/,
      'Password must contain 8 characters,uppercase,lowercase,number, special character',
    )
    .required('Password is required'),
});

const SignupScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          phone: '',
          gender: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          Alert.alert('Success', JSON.stringify(values, null, 2));
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          values,
          errors,
          touched,
        }) => (
          <>
            <TextInput
              placeholder="First Name"
              style={styles.input}
              onChangeText={handleChange('firstName')}
              onBlur={handleBlur('firstName')}
              value={values.firstName}
            />
            {touched.firstName && errors.firstName && (
              <Text style={styles.error}>{errors.firstName}</Text>
            )}

            <TextInput
              placeholder="Last Name"
              style={styles.input}
              onChangeText={handleChange('lastName')}
              onBlur={handleBlur('lastName')}
              value={values.lastName}
            />
            {touched.lastName && errors.lastName && (
              <Text style={styles.error}>{errors.lastName}</Text>
            )}

            <TextInput
              placeholder="Email"
              style={styles.input}
              keyboardType="email-address"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            {touched.email && errors.email && (
              <Text style={styles.error}>{errors.email}</Text>
            )}
            <TextInput
              placeholder="Password"
              style={styles.input}
              keyboardType="default"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            {touched.password && errors.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}

            <TextInput
              placeholder="Phone Number"
              style={styles.input}
              keyboardType="numeric"
              onChangeText={handleChange('phone')}
              onBlur={handleBlur('phone')}
              value={values.phone}
            />
            {touched.phone && errors.phone && (
              <Text style={styles.error}>{errors.phone}</Text>
            )}

            <View style={styles.genderContainer}>
              <Text>Select Gender:</Text>

              <TouchableOpacity
                onPress={() => setFieldValue('gender', 'Male')}
                style={[
                  styles.genderBtn,
                  {
                    backgroundColor:
                      values.gender === 'Male'
                        ? colors.ButtonGray
                        : colors.white,
                  },
                ]}
              >
                <Text>Male</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setFieldValue('gender', 'Female')}
                style={[
                  styles.genderBtn,
                  {
                    backgroundColor:
                      values.gender === 'Female'
                        ? colors.ButtonGray
                        : colors.white,
                  },
                ]}
              >
                <Text>Female</Text>
              </TouchableOpacity>
            </View>

            {touched.gender && errors.gender && (
              <Text style={styles.error}>{errors.gender}</Text>
            )}

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.btnText}>Submit</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 5,
    borderRadius: 8,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  genderContainer: {
    marginVertical: 10,
  },
  genderBtn: {
    padding: 10,
    backgroundColor: '#eee',
    marginVertical: 5,
    borderRadius: 6,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
