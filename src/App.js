import React, { Component } from 'react';

class App extends Component {
  state = {
    email: '',
    isAgree: false,
  }
  handleEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }
  handleISAgree = (e) => {
    this.setState({
      isAgree: e.target.checked
    })
  }
  submitBtn = () => {
    const regEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const isValidEmail = regEmail.test(this.state.email)
    const isValidIsAgree = this.state.isAgree
    if (!isValidEmail) {
      alert('please enter valid email')
      return
    }
    if (!isValidIsAgree) {
      alert('please agree with terms')
      return

    }
    this.setState({
      email: "",
      isAgree: false,
    })
    alert('congratulations')
  };


  render() {
    const { email, isAgree } = this.state
    return (

      <div className="container">
        <div className="contact">
          <h3 className='h3' > Contact us</h3>
            <h3>its new updated</h3>
          <div className=' text-center' >

            <label htmlFor='email' >email</label>
            <input className='form-control' type="email" name="email"
              onChange={this.handleEmail}
              value={email}
              id="email" />

            <div className='form-check' >
             
              <input className='form-check-input' type="checkbox"
                value={isAgree}
                onChange={this.handleISAgree}
                name="agreement" id="agreement" />
              <label className='form-check-label' htmlFor="agreement"> Terms and conditions</label>
            </div>
            <button className='button' onClick={this.submitBtn}  >Submit</button>
          </div>
        </div>


      </div>

    );

  }
}

export default App;