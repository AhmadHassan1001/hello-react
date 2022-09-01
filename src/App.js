import './App.css';

import CoursesPanel from './components/CoursesPanel';

function App() {
  let data=[{
    id:'0',
    title: 'learn python from zero to hero',
    instructor: 'jose portila',
    stars:4,
    price: 39,
    image:"\\images\\Screenshot 2022-08-04 225212.png"
  },{
    id:'1',
    title: 'learn python from zero to hero',
    instructor: 'jose portila',
    stars:4,
    price: 39,
    image:"\\images\\Screenshot 2022-08-04 225212.png"
  },{
    id:'2',
    title: 'learn python from zero to hero',
    instructor: 'jose portila',
    stars:4,
    price: 39,
    image:"\\images\\Screenshot 2022-08-04 225212.png"
  }];
  let title="Expand your career opportunities with Python";
  let description="Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to both beginners and advanced developers alike.";
  return (
    <div className="App">
      <CoursesPanel data={data} title={title} description={description}/>
    </div>
  );
}

export default App;
