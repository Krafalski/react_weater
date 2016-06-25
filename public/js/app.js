'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

let App = React.createClass({
  render: function (){
    return(
      <div>
       react on!
      </div>
    )
  }
})

let container = document.getElementById('container');

ReactDOM.render ((
  <App />
), container)
