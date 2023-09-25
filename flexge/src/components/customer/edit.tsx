import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import axios from 'axios';

export interface IValues {
    [key: string]: any;
}
export interface IFormState {
    id: number,
    customer: any;
    values: IValues[];
    submitSuccess: boolean;
    loading: boolean;
}

class EditCustomer extends React.Component<RouteComponentProps<any>, IFormState> {
    constructor(props: RouteComponentProps) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            customer: {},
            values: [],
            loading: false,
            submitSuccess: false,
        }
    }
    componentDidMount(): void {
        axios.get(`http://localhost:5000/customers/${this.state.id}`).then((data) => {
            this.setState({ customer: data.data });
        })
    }
    processFormSubmission = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        this.setState({ loading: true });
        axios.patch(`http://localhost:5000/customers/${this.state.id}`, this.state.values).then(data => {
            this.setState({ submitSuccess: true, loading: false })
            setTimeout(() => {
                this.props.history.push('/');
            }, 1500)
        })
    }
    private setValues = (values: IValues) => {
        this.setState({ values: { ...this.state.values, ...values } });
    }

    private handleInputChanges = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        this.setValues({ [e.currentTarget.id]: e.currentTarget.value })
    }


    public render() {
        const { submitSuccess, loading } = this.state;
        return (
            <div className="App">
                {this.state.customer &&
                    <div>
                        < h1 > User List Management App</h1>
                        <p> Built with React.js and TypeScript </p>

                        <div>
                            <div className={"col-md-12 form-wrapper"}>
                                <h2> Edit User </h2>
                                {submitSuccess && (
                                    <div className="alert alert-info" role="alert">
                                        User's details has been edited successfully </div>
                                )}
                                <form id={"create-post-form"} onSubmit={this.processFormSubmission} noValidate={true}>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="name"> First Name </label>
                                        <input type="text" id="name" defaultValue={this.state.customer.name} onChange={(e) => this.handleInputChanges(e)} name="name" className="form-control" placeholder="Enter customer's first name" />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="age"> Age </label>
                                        <input type="text" id="age" defaultValue={this.state.customer.age} onChange={(e) => this.handleInputChanges(e)} name="age" className="form-control" placeholder="Enter customer's last name" />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="gender"> Gender </label>
                                        <input type="checkbox" id="gender" checked={this.state.customer.gender} onChange={(e) => this.handleInputChanges(e)} name="gender" className="form-control" />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="username"> username </label>
                                        <input type="text" id="username" defaultValue={this.state.customer.username} onChange={(e) => this.handleInputChanges(e)} name="username" className="form-control" placeholder="Enter customer's email address" />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="password"> Password </label>
                                        <input type="text" id="password" defaultValue={this.state.customer.password} onChange={(e) => this.handleInputChanges(e)} name="password" className="form-control" placeholder="Enter customer's phone number" />
                                    </div>
                                    
                                    <div className="form-group col-md-4 pull-right">
                                        <button className="btn btn-success" type="submit">
                                            Edit User </button>
                                        {loading &&
                                            <span className="fa fa-circle-o-notch fa-spin" />
                                        }
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }

}
export default withRouter(EditCustomer)