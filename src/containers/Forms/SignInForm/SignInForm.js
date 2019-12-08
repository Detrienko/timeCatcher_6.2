import React, { Component } from 'react';
import classes from './SignInForm.module.css';

class SignInForm extends Component {

  render(){
    return(
      <div>
        <div className={classes.formWrapper}>
          <div>
            <h2>Sign in</h2>
            <p>Xlt pro skf foki toki. Psddf Forgi sdfomfugmeldjg.</p>
          </div>
          <div>
            <form>
              <label>USERNAME</label>
              <input type="text"/>
              <label>PASSWORD</label>
              <input type="password"/>
            </form>
          </div>
        </div>
        <div 
          id='formCover'
          className={classes.formCover}
          onClick={this.props.hideModal}>
        </div>
      </div>
      )
  }

}



export default SignInForm;
