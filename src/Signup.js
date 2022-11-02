import React from 'react'
import Fb from './images/fb.png'
import Google from './images/google.png'
import Twitter from './images/twitter.png'



function Signup() {
  return (
    <div class="main-wrap">
    <div class="form-wrap">
    <h1>SIGN <span>UP</span></h1>
    
 <form class="form">
 <input type="email" name="email" id="email" placeholder="Email"/>
  
 <input type="password" name="pass" id="pass" placeholder="Password"/>
  
 <input type="password" name="cpass" id="cpass" placeholder="Confirm Password"/>
 
 <button type="submit" class="form-btn">SIGN UP</button>


</form>
<span class="sign-up-with">Or sign up with</span>
<div class="social-logo">
                    <a href="#" title="Facebook">
                        <img src={Fb} alt="Facebook"/>
                    </a>
                    <a href="#" title="Google">
                        <img src={Google}alt="Google"/>
                    </a>
                    <a href="#" title="Twitter">
                        <img src={Twitter} alt="Twitter"/>
                    </a>
               </div>
    </div>
    </div>
  )
}

export default Signup