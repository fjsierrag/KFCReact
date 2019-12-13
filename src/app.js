import React from 'react';

import Welcome from './welcome';
import Counter from './counter';
import DateField from './date-field';
import Timer from './timer';
import Register from './register';

function App(){
  /*const el = React.createElement('h1',null,'Hello React!');
  const container = React.createElement('div',null,el);
  return container;
*/
  return(
      <div>
        <h1>Hello React</h1>
        <Welcome
          name="Francisco"
        />
        <Counter />

        <DateField/>
        <Timer seconds={10} name={"algo"}/>
        <Register />
      </div>
  )

}

export default App;
