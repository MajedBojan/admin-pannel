import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class SidebarForm extends Component {

  render() {
    return(
      <Link className="fa fa-users fa-lg" to="/clients">Clients</Link>
    )
  }
}

export default SidebarForm;
