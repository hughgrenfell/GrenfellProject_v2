import { Link } from 'react-router-dom';
import project1logo from './components/project1/images/todo-logo.png';
import project2logo from './components/project2/images/mealplanner-logo.png';
import project3logo from './components/project3/images/loancalculator-logo.png';
import '../css/project-page-styles.css';

export function ProjectsPage() {
    return(
        <div className="project-container">
            <h1>Current Projects:</h1>
            <nav className="projects-nav" id="projects-nav">
                <Link to="project1">
                    <img src={project1logo} alt="Todo List Screenshot"/>
                    <h2>Todo List</h2>
                </Link>
                <Link to="project2">
                    <img src={project2logo} alt="Meal Planner Screenshot"/>
                    <h2>Meal Planner</h2>
                </Link>
                <Link to="project3">
                    <img src={project3logo} alt="Loan Calculator Screenshot"/>
                    <h2>Loan Calculator</h2>
                </Link>
                <Link to="project4">
                    <img src={project3logo} alt="Popup Practice Screenshot"/>
                    <h2>Popup Practice</h2>
                </Link>
                <Link to="project5">
                    <img src={project3logo} alt="Drag and Drop Screenshot"/>
                    <h2>Drag And Drop Practice</h2>
                </Link>
                <Link to="project6">
                    <img src={project3logo} alt="Drag and Drop Screenshot"/>
                    <h2>Popup with Animation</h2>
                </Link>
            </nav>
        </div>
    )
}