/**
 * @file App.js
 * @author Martin Kubička (martinkubicka22@gmail.com)
 * @date 21.05.2022
 * 
 * @brief Simple questionnaire
 */

import React, {useState} from 'react';
import AlertComponent from './AlertComponent';
import HeaderComponent from './HeaderComponent';
import NavbarComponent from './NavbarComponent';
import RadioComponent from './RadioComponent';
import ScopeComponent from './ScopeComponent';
import SelectComponent from './SelectComponent';
import SubmitComponent from './SubmitComponent';

/** 
 * @brief "main" function
*/
function App() {

  /*** USE STATES ***/

  /** useStates for getting values of radio radio buttons */
  const [nervous, setNervous] = useState("")
  const [sport, setSport] = useState("")
  const [happy, setHappy] = useState("")
  const [tired, setTired] = useState("")

  /** useState for showing/hiding alert */
  const [alertDiv, setAlertDiv] = useState("alert alert-warning alert-dismissible d-none fade")

  /** useState for setting text of alert */
  const [txt, setText] = useState("")

  /** useStates for poping up invalid input */
  const [invalidNervous, setInvalidNervous] = useState("form-check-input")
  const [invalidSport, setInvalidSport] = useState("form-check-input")
  const [invalidHappy, setInvalidHappy] = useState("form-check-input")
  const [invalidTired, setInvalidTired] = useState("form-check-input")

  /** useState for getting value of slider */
  const [sliderValue, setSliderValue] = useState(0);
  const [selectInputValue, setSelectInputValue] = useState("1");

  /**
   * @brief function for handling after clicking submit button
   * @param e 
   */
  const handleSubmit = (e) => {
    e.preventDefault() /** prevention to not refreshing page after clicking submit button */

    let countInvalid = 0; /** counter for detecting if there is invalid input */
    let countData = 0; /** counting score */

    if(nervous === "") { /** if nervous value is empty show invalid input alert */
      setInvalidNervous("form-check-input is-invalid")
      countInvalid = 1
    } else {
      if (nervous === "no") { /** if nervous value is no increase score */
        countData = countData + 1
      }
      setInvalidNervous("form-check-input") /** hide alert */
    }

    if(sport === "") { /** if sport value is empty show invalid input alert */
      setInvalidSport("form-check-input is-invalid")
      countInvalid = 1
    } else {
      if (sport === "yes") { /** if sport value is yes increase score */
        countData = countData + 1
      }
      setInvalidSport("form-check-input") /** hide alert */
    }

    if(happy === "") { /** if happy value is empty show invalid input alert */
      setInvalidHappy("form-check-input is-invalid")
      countInvalid = 1
    } else {
      if (happy === "yes") { /** if happy value is yes increase score */
        countData = countData + 1
      }
      setInvalidHappy("form-check-input") /** hide alert */
    }

    if(tired === "") { /** if tired value is empty show invalid input alert */
      setInvalidTired("form-check-input is-invalid")
      countInvalid = 1
    } else {
      if (tired === "no") { /** if tired value is no increase score */
        countData = countData + 1
      }
      setInvalidTired("form-check-input") /** hide alert */
    }

    if (sliderValue >= 5) { /** if slider value is >= 5 than increase score */
      countData = countData + 1
    }

    if (selectInputValue === "3") {
      countData = countData + 2
    } else if (selectInputValue === "2") {
      countData = countData + 1
    }

    if (countInvalid === 0) { /** if there was no bad input */
      if (countData > 3) { /** show positive alert */
        setText("It looks like you're going to have a good day :)")
        setAlertDiv("alert alert-success alert-dismissible w-25 mx-auto fade show")
      } else { /** show negative alert */
        setText("It looks like you're going to have a bad day :(")
        setAlertDiv("alert alert-danger alert-dismissible w-25 mx-auto fade show")
      }
    }
  }

  return (
    <>
      <NavbarComponent />
      <HeaderComponent />
      
      <AlertComponent txt={txt} fun={setAlertDiv} div={alertDiv} />

      <form class="w-25 mx-auto" onSubmit={handleSubmit}>
        <ScopeComponent value={sliderValue} fun={setSliderValue} />
        
        <SelectComponent val={selectInputValue} fun={setSelectInputValue}/>
       
        <RadioComponent txt="Do you feel nervous these days?" class={invalidNervous} fun={setNervous} for="RadioNervous"/>
        <RadioComponent txt="Did you do any sports last week?" class={invalidSport} fun={setSport} for="RadioSport"/>
        <RadioComponent txt="Do you feel happy?" class={invalidHappy} fun={setHappy} for="RadioHappy"/>
        <RadioComponent txt="Do you feel tired" class={invalidTired} fun={setTired} for="RadioTired"/>

        <SubmitComponent />
      </form>
    </>
  )
}
export default App;

/*** End of App.js ***/