import React from 'react';
import axios from 'axios';
import { API_URL } from "../helper";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         }
    }

    componentDidMount () {
        this.getUser()
    }

    getUser = () => {
      axios.get(`${API_URL}/dataUser`) 
      .then((res) => {
        console.log("test data user", res.data)
      }).catch((err) => {
        console.log(err)
      }) 
    }
    
    render() { 
    
        return ( 
            <div>
                <h1>TEST HOMEPAGE</h1>
          
                
            </div>
         );
    }
}
 
export default HomePage; 