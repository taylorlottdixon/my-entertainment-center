import { Component } from "react";
import { signUp } from '../../utilities/users-service';
import "../../pages/AuthPage/AuthPage.css";
import { useNavigate } from "react-router";

export default class SignUpForm extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
      };
  
    handleChange = (evt) => {
        this.setState({
          [evt.target.name]: evt.target.value,
          error: ''
        });
      };
  
    handleSubmit = async (evt) => {
        try {
            const {username, email, password} = this.state;
            const userLogin = {username, email, password};
            // The promise returned by the signUp service
            // method will resolve to the user object included
            // in the payload of the JSON Web Token (JWT)
            const user = await signUp(userLogin);
            this.props.setUser(user);
            useNavigate("/dashboard")
        } catch {
            // An error occurred
            // Probably due to a duplicate email
            this.setState({ error: 'Sign Up Failed - Try Again' });
        }
    }
  
    render() {
        const disable = this.state.password !== this.state.confirm;
        return (
          <div>
            <div className="LoginPage">
                <h1>Sign Up</h1>
                <form autoComplete="off" onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input type="text" name="username" value={this.state.name} onChange={this.handleChange} required />
                    <label>Email</label>
                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                    <label>Password</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                    <label>Confirm</label>
                    <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
                    <button type="submit" disabled={disable}>SIGN UP</button>
                </form>
                <h3 onClick={() => this.props.setShowLogin(!this.props.showLogin)}>I already have an account</h3>
            </div>
            <p className="error-message">&nbsp;{this.state.error}</p>
          </div>
        );
    }
}