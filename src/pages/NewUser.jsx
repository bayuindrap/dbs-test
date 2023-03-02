import axios from 'axios';
import React from 'react';
import { FormGroup, Label, Input, InputGroup, InputGroupText, Button, Col, Form, Table } from "reactstrap";
import Swal from "sweetalert2";
import { API_URL } from '../helper';


class NewUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newUser: []
        }
    }

    btnSubmit = (value) => {
        console.log("btnregis",value)
        if (this.nameRegis.value == "" || this.eKTPRegis.value  == "" || this.addressRegis.value == "" ||
         this.jobRegis.value == "" || this.dobRegis.value == "" || this.phoneRegis.value == "" || 
         this.phoneRegiz.value == ""){
            // validation
            Swal.fire(
                "Regis warning",
                "Please fill all the empty input",
                "warning"
            )
         } else {
            axios.post(`${API_URL}/dataUser`, {
                name: this.nameRegis.value,
                eKTP: this.eKTPRegis.value,
                address: this.addressRegis.value,
                job: this.jobRegis.value,
                dob: this.dobRegis.value,
                phone: this.phoneRegis.value,
                phone2: this.phoneRegiz.value,
            }).then((res) => {
                console.log("regis", res)
                alert(`${this.nameRegis.value}, Registration Complete✔`)
                // Swal.fire({
                //     position: 'top-end',
                //     icon: 'success',
                //     title: 'Data has been saved',
                //     showConfirmButton: false,
                //     timer: 1500
                //   })

            }).catch ((error) => {
                console.log(error)
            })
         }
    }

    printForm = () => {
        return (
            <div>
                <Form>
                    <FormGroup row>
                        <Label sm={2}>Name</Label>
                        <Col sm={10}>
                            <Input
                                name="name"
                                placeholder="input name"
                                type="text"
                                innerRef={(element) => this.nameRegis = element}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label sm={2}>eKTP</Label>
                        <Col sm={10}>
                            <Input
                               
                                name="eKTP"
                                placeholder="input eKTP"
                                type="number"
                                innerRef={(element) => this.eKTPRegis = element}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label sm={2}>Address</Label>
                        <Col sm={10}>
                            <Input
                               
                                name="address"
                                placeholder="input address"
                                type="text"
                                innerRef={(element) => this.addressRegis = element}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label sm={2}>Job</Label>
                        <Col sm={10}>
                            <Input

                                name="job"
                                placeholder="input job"
                                type="text"
                                innerRef={(element) => this.jobRegis = element}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label sm={2}>Date of Birth</Label>
                        <Col sm={10}>
                            <Input
                                
                                name="password"
                                placeholder="input date of birth"
                                type="text"
                                innerRef={(element) => this.dobRegis = element}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup >
                        <div className='row'>
                        <Label sm={2}>Phone</Label>
                        <Col sm={10}>
                            <Input
                               
                                name="phone1"
                                placeholder="input phone1"
                                type="number"
                                innerRef={(element) => this.phoneRegis = element}
                            />
                            <Input
                                
                                name="phone2"
                                placeholder="input phone2"
                                type="number"
                                innerRef={(element) => this.phoneRegiz = element}
                            />
                        </Col>
                        </div>
                        <div>
                            <Button>Add phone</Button>
                        </div>
                    </FormGroup>
                </Form>
            </div>
        )
    }

    printTable = () => {
        
        //   console.log("data user", value.name)
          return <div style={{ padding: 50 }}>
    
            <Table
              bordered
              hover
              size=""
              striped
            >
              <thead>
                <tr>
                  <th>
                    Name
                  </th>
                  <th>
                    Date of Birth
                  </th>
                  <th>
                    Relationship Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row"><Input></Input></th>
                  <td><Input></Input></td>
                  <td><Input></Input></td>
                </tr>
                <tr>
                  <th scope="row"><Input></Input></th>
                  <td><Input></Input></td>
                  <td><Input></Input></td>
                </tr>
              </tbody>
            </Table>
            <div>
                <Button>Add Family Member</Button>
            </div>
          </div>
    
        
      }

    render() {
        return (
            <div>
                <h1>REGIS NEW USER</h1>
                <div>
                    {this.printForm()}
                </div>
                <div>
                    {this.printTable()}
                </div>
                <div>
                    <Button onClick={this.btnSubmit}>Submit</Button>
                </div>
            </div>
        );
    }
}

export default NewUser;