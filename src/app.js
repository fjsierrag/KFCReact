import React from 'react';

import Welcome from './welcome';
import Counter from './counter';
import DateField from './date-field';

function App(){
  /*const el = React.createElement('h1',null,'Hello React!');
  const container = React.createElement('div',null,el);
  return container;
*/
  return(
      <div>
        <h1>Hello React</h1>
        <Welcome
          name="Fabian"
        />
        <Counter />

        <DateField/>
      </div>
  )

}

export default App;
