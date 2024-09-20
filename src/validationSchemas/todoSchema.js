import * as yup from "yup"

export const todoValidationSchema = yup
  .object({
    title: yup.string().required('This field is required!')
  })
  .required();