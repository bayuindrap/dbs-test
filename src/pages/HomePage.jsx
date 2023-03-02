import React from 'react';
import axios from 'axios';
import { API_URL } from "../helper";
import { Button, Table } from "reactstrap";
import { connect } from 'react-redux';
import { userAction } from '../redux/actions';
import { userReducer } from '../redux/reducers/userReducer';
import { Link } from 'react-router-dom';





class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: []
    }
  }

  componentDidMount() {
    // this.getUser(),
    this.props.userAction()
  }

  // getUser = () => {
  //   axios.get(`${API_URL}/dataUser`)
  //     .then((res) => {
  //       // console.log("test data user", res.data)
  //       this.setState({ userList: res.data })
  //     }).catch((err) => {
  //       console.log(err)
  //     })
  // }


  printTable = () => {
    return this.props.userList.map((value, index) => {
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
                eKTP
              </th>
              <th>
                Address
              </th>
              <th>
                Job
              </th>
              <th>
                Date of Birth
              </th>
              <th>
                Phone Number
              </th>
              <th>
                Family
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{value.name}</th>
              <td>{value.eKTP}</td>
              <td>{value.Address}</td>
              <td>{value.job}</td>
              <td>{value.dob}</td>
              <td>{value.phone}</td>
              <td><Button>Show</Button></td>
            </tr>
          </tbody>
        </Table>
      </div>

    })
  }


  render() {

    return (
      <div>
        <h1>TEST HOMEPAGE</h1>
        <div>
          <div style={{}}>
            <Link to={"/new-user"}>
              <Button>
                Create New User
              </Button>
            </Link>
          </div>
        </div>
        <div>
          {this.printTable()}
        </div>

      </div>
    );
  }
}

const mapToProps = ({userReducer}) => {
  console.table("test", userReducer.userList)
  return {
    userList: userReducer.userList

  }
}

export default connect(mapToProps, {userAction})(HomePage); 