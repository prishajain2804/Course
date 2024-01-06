import { useState } from "react";
import styles from "./CourseInput.module.css";
import Button from "./Button";

function CourseInput(props) {
  const [enteredValue, setEnteredValue] = useState( "");

  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);

    if (event.target.value.length > 0) {
      setIsValid(true);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    console.log (">> "+ enteredValue + " >>")
    if (enteredValue.length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <div className={"form-control" + (!isValid ? " invalid" : "")}> */}
      {/* <div className={`form-control ${(!isValid ? " invalid" : "")}`}> */}
      {/* <div className={stylesform-control}> */}
      <div
        className={`${styles["form-control"]}  ${
          !isValid ? " " + styles["invalid"] : ""
        }`}
      >
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} value={enteredValue}/>
      </div>
      {/* <button type="submit">Add Goal</button> */}
      <Button>Add Goal</Button>
    </form>
  );
}

export default CourseInput;
