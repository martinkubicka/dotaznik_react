/**
 * @file AlertComponent.js
 * @author Martin Kubička (martinkubicka22@gmail.com)
 * @date 21.05.2022
 * 
 * @brief Declaration of select input component
 */

import React from 'react'

/**
 * @brief Declaration of select input component
 * 
 * @param props.val actual selected value
 * @param props.fun handle value selection
 */
export default function SelectComponent(props) {
    return (
        <div class="form-group input-group-lg mb-3">
            <label for="formGroupExampleInput" class="h5">How many hours did you sleep last night?</label>
            <select class="form-select" value={props.val} onChange={e=>props.fun(e.target.value)}>
                <option value="1">0 to 4 hours</option>
                <option value="2">5 to 8 hours</option>
                <option value="3">9 and more hours</option>
            </select>
        </div>
    )
}

/*** End of SelectComponent.js ***/
