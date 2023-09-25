import * as React from 'react';
import axios from 'axios';
import { RouteComponentProps, withRouter } from 'react-router-dom';

export interface IValues {
    name: string,
    age: number,
    gender: boolean,
    username: string,
    password: string,
}
export interface IFormState {
    [key: string]: any;
    values: IValues[];
    submitSuccess: boolean;
    loading: boolean;
}

class Create extends React.Component<RouteComponentProps, IFormState> {
    constructor(props: RouteComponentProps) {
        super(props);

        this.state = {
            name: '',
            age: undefined,
            gender: null,
            username: '',
            password: '',
            values: [],
            loading: false,
            submitSuccess: false,
        }
    }

    processFormSubmission = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        this.setState({ loading: true });
        
        const formData = {
            name: this.state.name,
            age: this.state.age,
            gender: this.state.gender,
            username: this.state.username,
            password: this.state.password,
        }
        this.setState({
            submitSuccess: true,
            values: [...this.state.values, formData ],
            loading: false
        });
        axios.post(`http://localhost:5000/customers`, formData).then((data) => [
            setTimeout(() => {
                this.props.history.push('/');
            }, 1800)
        ]);
    }

    handleInputChanges = (evt: React.FormEvent<HTMLInputElement>) => {
        evt.preventDefault();
        this.setState({
            [evt.currentTarget.name]: evt.currentTarget.value,
        })
    };

    
        
    render() {
        const { submitSuccess, loading } = this.state;
        return (
                <div>
                    <div className={"col-md-12 form-wrapper"}>
                        <h2> Create User </h2>
                        {!submitSuccess && (
                            <div className="alert alert-info" role="alert">
                                Fill the form below to create a new post
                        </div>
                        )}
                        {submitSuccess && (
                            <div className="alert alert-info" role="alert">
                                The User was successfully submitted!
                                </div>
                        )}
                        <form id={"create-post-form"} onSubmit={this.processFormSubmission} noValidate={true}>
                            <div className="form-group col-md-12">
                                <label htmlFor="name"> Name </label>
                                <input type="text" id="name" onChange={(e) => this.handleInputChanges(e)} name="name" className="form-control" placeholder="Enter customer's first name" />
                            </div>
                            <div className="form-group col-md-12">
                                <label htmlFor="age"> Age </label>
                                <input type="text" id="age" onChange={(e) => this.handleInputChanges(e)} name="age" className="form-control" placeholder="Enter customer's last name" />
                            </div>
                            <div className="form-group col-md-12">
                                <label htmlFor="gender"> Gender </label>
                                <input type="checkbox" id="gender" onChange={(e) => this.handleInputChanges(e)} name="gender" className="form-control" placeholder="Enter customer's last name" />
                            </div>
                            <div className="form-group col-md-12">
                                <label htmlFor="username"> UserName </label>
                                <input type="text" id="username" onChange={(e) => this.handleInputChanges(e)} name="username" className="form-control" placeholder="Enter customer's email address" />
                            </div>
                            <div className="form-group col-md-12">
                                <label htmlFor="password"> Password </label>
                                <input type="password" id="password" onChange={(e) => this.handleInputChanges(e)} name="password" className="form-control" placeholder="Enter customer's phone number" />
                            </div>
                            
                            <div className="form-group col-md-4 pull-right">
                                <button className="btn btn-success" type="submit">
                                    Create User
                                </button>
                                {loading && <span className="fa fa-circle-o-notch fa-spin" /> }
                            </div>
                        </form>
                    </div>
                </div>
            )
        }

}

export default withRouter(Create);