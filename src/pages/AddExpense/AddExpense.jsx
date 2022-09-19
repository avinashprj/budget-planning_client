import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import styles from "./AddExpense.module.css";

import { getFullDate } from "services/dates/format.helpers";
import { Icon } from "common/media";
import { Button, Close } from "common/buttons";
import {
  Select,
  Switch,
  TextFieldAddExpense,
  FileUpload,
  Textarea,
} from "common/forms";
import { addExpense } from "features/expenses/expensesSlice";

export const AddExpense = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm({
    mode: "onFocus", // ошибки проверяются после потери фокуса
  });

  const onSubmit = (data) => {
    // reset(); // -очистка всех полей формы
    dispatch(addExpense({...data, file: null, date: new Date()}))
    navigate("/", { replace: true });
  };

  const onCloseClick = () => {
    navigate(-1);
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.wrapper}>
        <div className={styles.blue}>
          <h1>Add Expense</h1>
          <Close onClick={onCloseClick} variant="white" />
        </div>
        <div className={styles.white}>
          <span>Amount</span>
          <TextFieldAddExpense
            name="amount"
            type="number"
            register={register}
            errors={errors}
            options={{
              required: { value: true, message: "enter number" },
            }}
          />
          <button>
            <span>{getFullDate(new Date())}</span>
            <Icon>calendar</Icon>
          </button>
        </div>
      </div>
      <main>
        <div className={styles.category}>
          <span>Select Category</span>
          <Select
            name="category"
            type="radio"
            register={register}
            errors={errors}
            options={{
              required: { value: true, message: "select category" },
            }}
          />
          <div className={styles.remember}>
            <span>Add This Bill Each Month</span>
            <Switch name="repeat" type="checkbox" register={register} />
          </div>
        </div>
        <div className={styles.photo}>
          <span>Add Photo</span>
          <FileUpload name="file" register={register} />
        </div>
        <div className={styles.textarea}>
          <span>More Details</span>
          <Textarea name="details" register={register} />
        </div>
      </main>
      <Button variant="primary_blue">Add</Button>
    </form>
  );
};
