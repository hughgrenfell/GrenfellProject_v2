import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Projects, P1, P2, P3, P4, P5, P6, Whoops404 } from './pages';

function App() {

  const DATA = [
    { id: "todo-0", name: "Eat", completed: true },
    { id: "todo-1", name: "Sleep", completed: false },
    { id: "todo-2", name: "Repeat", completed: false }
  ]

  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/project1" element={<P1 tasks={DATA} />} />
        <Route path="/projects/project2" element={<P2 />} />
        <Route path="/projects/project3" element={<P3 />} />
        <Route path="/projects/project4" element={<P4 />} />
        <Route path="/projects/project5" element={<P5 />} />
        <Route path="/projects/project6" element={<P6 />} />
        <Route path="*" element={<Whoops404 />} />
      </Routes>
    </div>
  );
}

export default App;
