// import React from 'react'

// function Todo() {
//   return (
//     <>
//     <h1>practical tasks</h1>
//      <h1 className='text-start' style={{marginTop:20}}>Todo List</h1>
//      <ul style={{listStyle:'none'} } className='text-start'>
//         <li><input type="checkbox"  name='react'/>React</li>
//         <li><input type="checkbox" name='javascript' />JavaScript</li>
//         <li><input type="checkbox" name='springboot' />Spring Boot</li>
//         <li><input type="checkbox" name='java dsa' />Java DSA</li>
//         <li><input type="checkbox" name='express' />Express</li>
//         <li><input type="checkbox" name='angular' />Angular</li>
//      </ul>
//      <div className="" style={{backgroundColor:'lightgray'}}>task completed</div>
//     </>
//   )
// }

// export default Todo
import React, { useState } from 'react';

function Todo() {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'React', completed: false },
    { id: 2, name: 'JavaScript', completed: false },
    { id: 3, name: 'Spring Boot', completed: false },
    { id: 4, name: 'Java DSA', completed: false },
    { id: 5, name: 'Express', completed: false },
    { id: 6, name: 'Angular', completed: false }
  ]);

  const handleToggle = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const percentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Practical Tasks</h1>
      <h1 className='text-start' style={{ marginTop: 20 }}>Todo List</h1>
      
      <ul style={{ listStyle: 'none', padding: 0 }} className='text-start'>
        {tasks.map(task => (
          <li key={task.id} style={{ marginBottom: '10px' }}>
            <input 
              type="checkbox" 
              checked={task.completed}
              onChange={() => handleToggle(task.id)}
              style={{ marginRight: '10px', cursor: 'pointer' }} 
            />
            <span style={{ 
              textDecoration: task.completed ? 'line-through' : 'none',
              color: task.completed ? '#b5b1b1' : '#000000'
            }}>
              {task.name}
            </span>
          </li>
        ))}
      </ul>
      
      <div 
        style={{
          backgroundColor: 'lightgray',
          padding: '15px',
          borderRadius: '5px',
          position: 'relative',
          overflow: 'hidden',
          marginTop: '20px'
        }}
      >
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: `${percentage}%`,
            backgroundColor: '#4ade80',
            transition: 'width 0.3s ease',
            zIndex: 0
          }}
        />
        <div style={{ position: 'relative', zIndex: 1, fontWeight: 'bold' }}>
          Task Completed: {completedTasks}/{totalTasks} ({percentage.toFixed(1)}%)
        </div>
      </div>
    </div>
  );
}

export default Todo;