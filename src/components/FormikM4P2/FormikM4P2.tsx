import { useId } from "react";
import css from "./FormikM4P2.module.css";
import { Formik, Form, Field, FormikHelpers, ErrorMessage } from "formik";
import * as Yup from "yup";

interface OrderFormValues {
  username: string;
  email: string;
  delivery: "pickup" | "courier" | "drone";
  restrictions: ("vegan" | "gluten-free" | "nut-free")[];
  deliveryTime: string;
  message: string;
}
const INITIAL_VALUES: OrderFormValues = {
  username: "",
  email: "",
  delivery: "pickup",
  restrictions: ["vegan"],
  deliveryTime: "",
  message: "",
};
// декларативний
const OrderSchema = Yup.object().shape({
  username: Yup.string().min(3).max(15).required(),
  email: Yup.string().email("Email is not valid").required("Email is required"),
  delivery: Yup.string().oneOf(
    ["pickup", "courier", "drone"],
    "Delivery is not valid"
  ),
  restrictions: Yup.array().min(1).of(Yup.string().required()).required(),
  deliveryTime: Yup.string().required("Delivery time is required"),
  message: Yup.string(),
});
const FormikM4P2 = () => {
  const fieldId = useId();
  const handleSubmit = (
    values: OrderFormValues,
    formikHelpers: FormikHelpers<OrderFormValues>
  ) => {
    console.log(values);
    formikHelpers.resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={handleSubmit}
        validationSchema={OrderSchema}
      >
        <Form className={css.form}>
          <fieldset>
            <legend>ClientInfo</legend>
            <label htmlFor={`${fieldId}-username`}>Name</label>
            <Field id={`${fieldId}-username`} type="text" name="username" />
            <ErrorMessage
              name="username"
              component="span"
              className={css.error}
            />
            <label htmlFor="">Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="span" className={css.error} />
          </fieldset>
          <fieldset>
            <legend>Delivery method</legend>
            <label htmlFor={`${fieldId}-delivery-pickup`}>
              <Field
                id={`${fieldId}-delivery-pickup`}
                type="radio"
                name="delivery"
                value="pickup"
              />
              Pickup
            </label>
            <label htmlFor={`${fieldId}-delivery-courier`}>
              <Field
                id={`${fieldId}-delivery-courier`}
                type="radio"
                name="delivery"
                value="courier"
              />
              Courier
            </label>
            <label htmlFor={`${fieldId}-delivery-drone`}>
              <Field
                id={`${fieldId}-delivery-drone`}
                type="radio"
                name="delivery"
                value="drone"
              />
              Drone
            </label>
            <ErrorMessage
              name="delivery"
              component="span"
              className={css.error}
            />
          </fieldset>
          <fieldset>
            <legend>Dierary restrictions</legend>
            <label htmlFor={`${fieldId}-restrictions-vegan`}>
              <Field
                id={`${fieldId}-restrictions-vegan`}
                type="checkbox"
                name="restrictions"
                value="vegan"
              />
              Vegan
            </label>
            <label htmlFor={`${fieldId}-restrictions-gluten-free`}>
              <Field
                id={`${fieldId}-restrictions-gluten-free`}
                type="checkbox"
                name="restrictions"
                value="gluten-free"
              />
              Gluten-free
            </label>
            <label htmlFor={`${fieldId}-restrictions-nut-free`}>
              <Field
                id={`${fieldId}-restrictions-nut-free`}
                type="checkbox"
                name="restrictions"
                value="nut-free"
              />
              Nut-free
            </label>
            <ErrorMessage
              name="restrictions"
              component="span"
              className={css.error}
            />
          </fieldset>
          <label>Prefered delivery time</label>
          <Field
            htmlFor={`${fieldId}-deliveryTime`}
            as="select"
            className={css.select}
            name="deliveryTime"
            id=""
          >
            <option disabled value="">
              Choose delivery time
            </option>
            <option value="morning">Morning (8:00-12:00)</option>
            <option value="afternoon">Afternoon (12:00-16:00)</option>
            <option value="evening">Evening (16:00-20:00)</option>
          </Field>
          <ErrorMessage
            name="deliveryTime"
            component="span"
            className={css.error}
          />
          <label htmlFor={`${fieldId}-message`}>Additional message</label>
          <Field
            as="textarea"
            className={css.textarea}
            name="message"
            rows={4}
            id={`${fieldId}-message`}
          />
          <button type="submit">Order</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikM4P2;
