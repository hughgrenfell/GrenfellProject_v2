import React from 'react';
import { useLocation } from 'react-router-dom';
import { HomePage } from './javascript/HomePage';
import { ProjectsPage } from './javascript/ProjectsPage';
import Project1 from './javascript/Project1'
import Project2 from './javascript/Project2'
import Project3 from './javascript/Project3'
import Project4 from './javascript/Project4'
import Project5 from './javascript/Project5'
import Project6 from './javascript/Project6'

export function Home() {
    return (
        < HomePage />
    );
}

export function Projects() {
    return (
        < ProjectsPage />
    );
}

export function P1(props) {

    return (
        < Project1 tasks={props.tasks} />
    );
}

export function P2() {
    return (
        <Project2 />
    );
}

export function P3() {
    return (
        <Project3 />
    );
}

export function P4() {
    return (
        <Project4 />
    );
}

export function P5() {
    return (
        <Project5 />
    );
}

export function P6() {
    return (
        <Project6 />
    );
}

export function Whoops404() {

    let location = useLocation();
    console.log(location);

    return (
        <div>
            <h1>Resource not found at { location.pathname }!</h1>
        </div>
    );
}