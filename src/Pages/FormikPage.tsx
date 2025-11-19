import React from "react";
import FormikM4P2 from "../components/FormikM4P2/FormikM4P2";

const FormikPage = () => {
  return (
    <div>
      <h2>Установка Formik</h2>
      <pre>
        <code>{`npm install formik --save`}</code>
      </pre>
      <h2>Початок роботи з формік</h2>
      <h3>Приклад 1</h3>
      <p>
        Без використання бібліотек нам би довелося збирати всі данні з форми за
        допомогою функції
      </p>
      <pre>
        <code>{` <form className={css.form} action={handleSubmit}></form>`}</code>
      </pre>
      <pre>
        <code>{`  const handleSubmit = (values) => {
    const username = values.get("username");
    console.log(username);
  };`}</code>
      </pre>

      <ol>
        <li>
          <p>Створюємо інтерфейс для данних форми </p>
          <pre>
            <code>{`interface OrderFormValues {
  username: string;
  email: string;
  delivery: "pickup" | "courier" | "gluten-free";
  restrictions: string[];
  deliveryTime: "morning" | "afternoon" | "evening";
  message: string;
}`}</code>
          </pre>
        </li>
        <li>
          <p>Створюємо окремий обєкт INITIAL_VALUES</p>
          <pre>
            <code>{`const INITIAL_VALUES: OrderFormValues = {
  username: "",
  email: "",
  delivery: "pickup",
  restrictions: ["vegan"],
  deliveryTime: "morning",
  message: "",
};`}</code>
          </pre>
        </li>
        <li>
          <p>Типізуємо функцію, що передаємо в handleSubmit</p>
          <pre>
            <code>{`const handleSubmit = (
                values: OrderFormValues,
                formikHelpers: FormikHelpers<OrderFormValues>
              ) => {
                console.log(values);
                formikHelpers.resetForm();
              };`}</code>
          </pre>
        </li>
      </ol>
      <FormikM4P2 />
    </div>
  );
};

export default FormikPage;
