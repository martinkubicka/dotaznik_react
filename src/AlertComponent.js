/**
 * @file AlertComponent.js
 * @author Martin Kubička (martinkubicka22@gmail.com)
 * @date 21.05.2022
 * 
 * @brief Declaration of alert component
 */

import React from 'react'

/**
 * @brief Declaration of alert component
 * 
 * @param props.div actual div of component
 * @param props.txt text of alert
 * @param props.fun useState for changing class of alert component
 */
export default function AlertComponent(props) {
    /** 
     * @brief function to hide alert after clicking X button
     */
    function hideAlert() {
        props.fun("alert alert-success alert-dismissible w-25 mx-auto d-none fade")
    }

    return (
        <div class={props.div} role="alert">
            {props.txt}
            <button type="button" class="btn-close btn-close" aria-label="Close" onClick={hideAlert}></button>
        </div>
    )
}

/*** End of AlertComponent.js ***/
