import "./FormStyles.css"
import Modal from "./Modal"
import MyComponent from "./MyComponent"
import { use, useState } from "react"
export default function LoanForm(){
    
    
    const[errorMessage,setErrorMessage]=useState(null);
    const[showModal,setshowModal]=useState(false);
    const[LoanInputs,setLoanInputs]=useState({
        name:"",
        phoneNumber:"",
        age:"",
        isEmployee:false,
        salaryRange:"",
    });
    function handleFormSubmit(event){
        event.preventDefault();
        setErrorMessage(null);
        const{age,phoneNumber}=LoanInputs;
        if(age<18 || age>100){
            setErrorMessage("the age is not allowed");

        }else if(phoneNumber.length<10 || phoneNumber.length>12){
            setErrorMessage("phone number format is incorrect")
        }





        setshowModal(true);
    }

    const btnIsDisabled =

    LoanInputs.name ===""||
    LoanInputs.age ===""||
    LoanInputs.phoneNumber ==="";
    function handleDivClick(){
        if(showModal){
        
        setshowModal(false);
    }
    }
    function handlePhoneNumberInputChange(value){
        setLoanInputs({...LoanInputs,phoneNumber:value});
    }
     function handleNameInputChange(value){
        setLoanInputs({...LoanInputs,name:value});
    }
     function handleAgeInputChange(value){
        setLoanInputs({...LoanInputs,age:value});
    }






    return(
        <div onClick={handleDivClick} className="flex" style={{flexDirection:"column"}}>
            <form id="Loan-form" className="flex"  style={{flexDirection:"column"}}>
                <h1>Requesting a Loan</h1>
                <hr></hr>
               
                <MyComponent 
                inputName="name"
                handleChange={handleNameInputChange}
                value={LoanInputs.name}
                />
                 <MyComponent 
                inputName="phone number"
                handleChange={handlePhoneNumberInputChange}
                value={LoanInputs.phoneNumber}
                />
                 <MyComponent 
                inputName="age"
                handleChange={handleAgeInputChange}
                value={LoanInputs.age}
                />
                
                
                
                
                
             
                <label style={{marginTop:"30px"}}>Are you an employee?</label>
                <input type="checkbox" checked={LoanInputs.isEmployee} onChange={(event)=>{setLoanInputs({...LoanInputs,isEmployee:event.target.checked

                })

                    }
                }/>
                <label>Salary:</label>
                <select  value={LoanInputs.salaryRange} onChange={(event)=>
                {
                    setLoanInputs({...LoanInputs,salaryRange:event.target.value})
                }

                }
                
                
                
                
                >
                    <option>less than 500$</option>
                    <option>between 200$ and 300$</option>
                    <option>above 500$</option>
                </select>
                <button
                className={btnIsDisabled ? "disabled":""}
                 onClick={handleFormSubmit}
                disabled={btnIsDisabled}
                
                id="submit-loan-btn">
                    Submit
                    
                    </button>
            </form>
            <Modal errorMessage={errorMessage} isVisible={showModal}/>

          
        </div>
    )
}




