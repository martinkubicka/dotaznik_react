/**
 * @file NavbarComponent.js
 * @author Martin Kubička (martinkubicka22@gmail.com)
 * @date 21.05.2022
 * 
 * @brief Declaration of navigation bar
 */

import React from 'react'
import logo from './logo.png'; 

export default function NavbarComponent() {
  return (
    <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
            <img src={logo} alt="" width="30" height="24" class="d-inline-block align-text-top mx-2" />
                we care.
            </a>
        </div>
    </nav>
  )
}

/*** End of NavbarComponent.js ***/
