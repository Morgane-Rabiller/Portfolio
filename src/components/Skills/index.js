import "./styles.scss";
import Stack from "./stack";
import html from "src/assets/img/skills/html5.png";
import css from "src/assets/img/skills/css3.png";
import javscript from "src/assets/img/skills/javascript.png";
import php from "src/assets/img/skills/php.png";
import vue from "src/assets/img/skills/vuejs.png";
import react from "src/assets/img/skills/react.png";
import laravel from "src/assets/img/skills/laravel.png";
import symfony from "src/assets/img/skills/symfony.png";
import nodejs from "src/assets/img/skills/nodejs.png";
import mysql from "src/assets/img/skills/mysql.png";
import postgresql from "src/assets/img/skills/postgresql.png";
import mongodb from "src/assets/img/skills/mongodb.png";
import redis from "src/assets/img/skills/redis.png";
import dart from "src/assets/img/skills/dart.png";
import flutter from "src/assets/img/skills/flutter.png";
import graphql from "src/assets/img/skills/graphql.png";
import git from "src/assets/img/skills/git.png";
import github from "src/assets/img/skills/github.png";
import figma from "src/assets/img/skills/figma.png";
import docker from "src/assets/img/skills/docker.png";
import trello from "src/assets/img/skills/trello.png";
import scrum from "src/assets/img/skills/scrum.png";
import Typewriter from "typewriter-effect";

const Skills = () => (
    <div className="skills p-5 my-5 md:mx-8">
        <p className="font-bold text-2xl text-center mb-5">MES COMPÉTENCES</p>
        <Typewriter
            onInit={(typewriter) => {
                typewriter
                    .typeString(
                        "Voilà la liste des compétences que j'ai pu apprendre durant mes différentes formations :"
                    )
                    .start();
            }}
            options={{
                autoStart: true,
                delay: 10,
                wrapperClassName: "font-semibold",
            }}
        />
        <div className="flex flex-wrap gap-6 mt-5">
            <Stack img={html} content="HTML5"/>
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
