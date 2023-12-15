import "./styles.scss";
import Stack from "./stack";
import html from "src/assets/skills/html5.png";
import css from "src/assets/skills/css3.png";
import javscript from "src/assets/skills/javascript.png";
import php from "src/assets/skills/php.png";
import vue from "src/assets/skills/vuejs.png";
import react from "src/assets/skills/react.png";
import laravel from "src/assets/skills/laravel.png";
import symfony from "src/assets/skills/symfony.png";
import nodejs from "src/assets/skills/nodejs.png";
import mysql from "src/assets/skills/mysql.png";
import postgresql from "src/assets/skills/postgresql.png";
import mongodb from "src/assets/skills/mongodb.png";
import redis from "src/assets/skills/redis.png";
import dart from "src/assets/skills/dart.png";
import flutter from "src/assets/skills/flutter.png";
import graphql from "src/assets/skills/graphql.png";
import git from "src/assets/skills/git.png";
import github from "src/assets/skills/github.png";
import figma from "src/assets/skills/figma.png";
import docker from "src/assets/skills/docker.png";
import trello from "src/assets/skills/trello.png";
import scrum from "src/assets/skills/scrum.png";

const Skills = () => (
    <div className="skills">
        <p className="skills__title">MES COMPÉTENCES</p>
        <div className="skills__list">
            <Stack img={html} content="HTML5" />
            <Stack img={css} content="CSS3" />
            <Stack img={javscript} content="Javascript" />
            <Stack img={php} content="PHP" />
            <Stack img={vue} content="VueJS" />
            <Stack img={react} content="REACT" />
            <Stack img={laravel} content="Laravel" />
            <Stack img={symfony} content="Symfony" />
            <Stack img={nodejs} content="NodeJS" />
            <Stack img={mysql} content="MySQL" />
            <Stack img={postgresql} content="PostgreSQL" />
            <Stack img={mongodb} content="MongoDB" />
            <Stack img={redis} content="Redis" />
            <Stack img={dart} content="Dart" />
            <Stack img={flutter} content="Flutter" />
            <Stack img={graphql} content="GraphQL" />
            <Stack img={git} content="Git" />
            <Stack img={github} content="Github" />
            <Stack img={figma} content="Figma" />
            <Stack img={docker} content="Docker" />
            <Stack img={trello} content="Trello" />
            <Stack img={scrum} content="Méthode agile SCRUM" />
        </div>
    </div>
);

export default Skills;
