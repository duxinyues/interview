import React, { useState, useEffect } from 'react';
import './App.scss';
import Card from './Card';
import List from './List';
function App() {
  const [visible, setVisible] = useState(0)
  return (
    <div className="App">
      <div className='tab'>
        <div className={`${visible === 0 && 'visible'}`} onClick={() => { setVisible(0) }}>卡片</div>
        <div className={`${visible === 1 && 'visible'}`} onClick={() => { setVisible(1) }}>列表</div>
      </div>
      {visible === 0 && <Card />}
      {visible === 1 && <List />}
    </div>
  );
}

export default App;
