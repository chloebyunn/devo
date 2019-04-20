import React, { Component } from 'react'

export class SignIn extends Component {

    state = {}
  render() {
    return (
      <div>
        <form onSubmit={}>
            <h4>Sign In</h4>
            <div className="input-field">
                <input type="email" id="email" onChange={} />
                <input type="password" id="password" onChange={} />
            </div>
            <div>
                <button className="">Login</button>
            </div> 

        
        </form>
        
      </div>
    )
  }
}

export default SignIn
