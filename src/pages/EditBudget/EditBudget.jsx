import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Button, Close } from "common/buttons";
import { TextFieldXL } from "common/forms";
import { MonthAndYear } from "common/text";
import styles from "./EditBudget.module.css";

export const EditBudget = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onFocus", // ошибки проверяются после потери фокуса
  });

  const onCloseClick = () => {
    navigate("/", { replace: true });
  };

  const onSubmit = (data) => {
    console.log("onSubmit >>> ", data);
    // reset(); // -очистка всех полей формы
    navigate("/", { replace: true });
  };

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.modal}>
        <div className={styles.top}>
          <MonthAndYear>{new Date()}</MonthAndYear>
          <Close onClick={onCloseClick} variant="black" />
        </div>
        <div className={styles.edit}>
          <h3>Budget</h3>
          <TextFieldXL
            name="number"
            type="number"
            errors={errors}
            options={{
              required: { value: true, message: "enter your budget" },
            }}
            register={register}
          />
        </div>
      </div>
      <Button variant="primary_blue">Save</Button>
    </form>
  );
};
