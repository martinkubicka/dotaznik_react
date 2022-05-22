/**
 * @file RadioComponent.js
 * @author Martin Kubička (martinkubicka22@gmail.com)
 * @date 22.05.2022
 * 
 * @brief declaration of radio input component
 */

import React from 'react'

/**
 * @brief declaration of radio input component
 * 
 * @param props.class definition of .class
 * @param props.txt text that is shown at the top of each component
 * @param props.fun function
 * @param props.for definition of .for
 */
export default function RadioComponent(props) {
  return (
    <>
        <div class="form-group input-group-lg mb-3">
          <label for="formGroupExampleInput" class="h5">{props.txt}</label>
          <div class="form-check">
            <input class={props.class} type="radio" name={props.for} value="yes" onChange={e=>props.fun(e.target.value)}/>
            <label class="form-check-label" for={props.for}>
              Yes
            </label>
          </div>
          <div class="form-check">
            <input class={props.class} type="radio" name={props.for} value="no" onChange={e=>props.fun(e.target.value)}/>
            <label class="form-check-label" for={props.for}>
              No
            </label>
            <div class="invalid-feedback">Please choose an option.</div>
          </div>
        </div>
    </>
  )
}

/*** End of RadioComponent.js ***/
