import { useState } from "react";
import "./CourseInput.css";

function CourseInput(props){

    const [enteredValue,setEnteredValue] = useState();

    const [isValid,setIsValid] = useState(true);


    const goalInputChangeHandler =(event) =>{
        setEnteredValue(event.target.value);

        if (event.target.value.length > 0){
            setIsValid(true);
        }
    }

   
   
    const formSubmitHandler = (event) =>{
        event.preventDefault();

        if (enteredValue.length === 0){
            setIsValid(false);
            return;
        }
        props.onAddGoal(enteredValue);
    }



 return(<form onSubmit={formSubmitHandler}>
 <div className="form-control">
    <label style={{
        color: !isValid ? "red" : "black",
    }}>Course Goal</label>
    <input type="text"
     onChange={goalInputChangeHandler}
     style={{borderColor: !isValid ? "red" : "black",
     backgroundColor: !isValid ? "salmon" : "transparent"}} />
 </div>
 <button type="submit">Add Goal</button>

 </form>)
}

export default CourseInput;