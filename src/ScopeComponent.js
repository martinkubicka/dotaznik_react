/**
 * @file ScopeComponent.js
 * @author Martin Kubička (martinkubicka22@gmail.com)
 * @date 21.05.2022
 * 
 * @brief Declaration of scope
 */

import React from 'react'

/**
 * @brief Declaration of scope
 * 
 * @param props.value actual selected value
 * @param props.fun function for handling change of the scope
 */
export default function ScopeComponent(props) {
    return (
        <div class="form-group input-group-lg mb-3">
          <label for="formGroupExampleInput" class="h5">On scale from 0 to 10 how do you feel these days?</label>
          <input type="range" class="form-range" id="slider1" min="0" max="10" value={props.value} onChange={e => props.fun(e.target.value)}/>
        </div>
    )
}

/*** End of ScopeComponent.js ***/