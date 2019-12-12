import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

const root = document.getElementById('root');


ReactDOM.render(<App />,root);
/*
function component(){
  const el = document.createElement('h1');
  el.innerText = 'Webpack Demo';
  return el;
}
function dep(id){
  const deps = ['webpack','babel'];
  deps.find(dep => dep === id);
  const el = document.createElement('p');
  if(dep){
    el.innerText = dep;
  }else{
    el.innerText = `${id} not found`;
  }
  return el;
}

function render(){
    const root = document.getElementById('root');
    const el = component();
    const d1 = dep('webpack');
    const d2 = dep('lodash');
    root.appendChild(el);
    root.appendChild(d1);
    root.appendChild(d2);
}

window.addEventListener('DOMContentLoaded',function(){
  render();
})*/


