import html from '../../assets/skills/html-icon.svg'
import docker from '../../assets/skills/docker-icon.svg'
import css from '../../assets/skills/css-icon.svg'
import angular from '../../assets/skills/angular-icon.svg'
import javascript from '../../assets/skills/javascript-programming-language-icon.svg'
import nodeJS from '../../assets/skills/node-js-icon.svg'
import react from '../../assets/skills/react-js-icon.svg'
import typescript from '../../assets/skills/typescript-programming-language-icon.svg'
import bootstrap from '../../assets/skills/bootstrap-4-icon.svg'
import mysql from '../../assets/skills/mysql-icon.svg'
import tailwind from '../../assets/skills/tailwind-css-icon.svg'
import java from '../../assets/skills/java-programming-language-icon.svg'
import python from '../../assets/skills/python-programming-language-icon.svg'
import linux from '../../assets/skills/linux-ubuntu-icon.svg'
import git from '../../assets/skills/git-icon.svg'
import microsoftoffice from '../../assets/skills/office-365-icon.svg'
import cpp from '../../assets/skills/c-plus-plus-programming-language-icon.svg';
import postgresql from '../../assets/skills/postgresql-icon.svg'
import {SiPacker } from 'react-icons/si';

export const skillsImage = (skill) => {
    const packet = SiPacker
    const skillID = skill.toLowerCase();
    switch (skillID) {
        
        case 'html':
            return html;

        case 'cpp':
            return cpp    
        case 'docker':
            return docker;
        
        case 'css':
            return css;

        case 'postgresql':
                return postgresql;

        case 'angular':
            return angular;

        case 'javascript':
            return javascript;
       
        case 'node js':
            return nodeJS;
        
        case 'react':
            return react;
       
        case 'typescript':
            return typescript;
        
        case 'bootstrap':
            return bootstrap;
        
        case 'mysql':
            return mysql;

 
        case 'tailwind':
            return tailwind;
        
        
        case 'java':
            return java;
        
        case 'python':
            return python;
       
        case 'git':
            return git;
        
        case 'microsoft office':
            return microsoftoffice;

        case 'linux':
            return linux;

        case 'packet':
            return packet     
    
        default:
            break;
    }
}
