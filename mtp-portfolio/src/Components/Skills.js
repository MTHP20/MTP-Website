import React, { useEffect } from 'react';
import './Skills.css';
import java from '../images/java.png';
import python from '../images/python.png';
import c from '../images/c.png';
import sql from '../images/sql.png';
import html5 from '../images/html5.png';
import css from '../images/css.png';
import js from '../images/js.png';
import node from '../images/node.png';
import react from '../images/react.png';
import tdd from '../images/tdd.png';
import maven from '../images/maven.png';
import junit from '../images/junit.png';
import svn from '../images/svn.png';
import checkstyle from '../images/checkstyle.png';
import gitlab from '../images/gitlab.png';
import github from '../images/github.png';
import office from '../images/office.png';
import excel from '../images/excel.png';
import teams from '../images/teams.png';
import photoshop from '../images/photoshop.png';
import premiere from '../images/premiere.png';
import illustrator from '../images/illustrator.png';
import jira from '../images/jira.png';
import slack from '../images/slack.png';
import confluence from '../images/confluence.png';
import arcade from '../images/arcade.png';





const Skills = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="skills" className="hidden">
      <br></br><br></br><br></br><br></br><br></br><br></br>
      <div className="header">SKILLS</div>
      <div class="logos">
        <div class="logo hidden">
          <img src={java} alt="main" id="icons" />
        </div>
        <div class="logo hidden">
          <img src={python} alt="main" id="icons" />
        </div>
        <div class="logo hidden">
          <img src={c} alt="main" id="icons" />
        </div>
        <div class="logo hidden">
          <img src={sql} alt="main" id="icons" />
        </div>
      </div>
      <br></br>
      <div class="logos">
        <div class="logo hidden">
          <img src={html5} alt="main" id="icons" />
        </div>
        <div class="logo hidden">
          <img src={css} alt="main" id="icons" />
        </div>
        <div class="logo hidden">
          <img src={js} alt="main" id="icons" />
        </div>
        <div class="logo hidden">
          <img src={node} alt="main" id="icons" />
        </div>
        <div class="logo hidden">
          <img src={react} alt="main" id="icons" />
        </div>
      </div>
      <div class="logos">
        <div class="logo hidden">
          <img src={tdd} alt="main" id="icons" />
        </div>
        <div class="logo hidden">
          <img src={maven} alt="main" id="icons" />
        </div>
        <div class="logo hidden">
          <img src={junit} alt="main" id="icons" />
        </div>
        <div class="logo hidden">
          <img src={svn} alt="main" id="icons" />
        </div>
        <div class="logo hidden">
          <img src={checkstyle} alt="main" id="icons" />
        </div>
      </div>
      <div class="logos">
        <div class="logo hidden">
          <img src={jira} alt="main" id="icons" />
        </div>
        <div class="logo hidden">
          <img src={confluence} alt="main" id="icons" />
        </div>
        <div class="logo hidden">
          <img src={slack} alt="main" id="icons" />
        </div>
        <div class="logo hidden">
          <img src={arcade} alt="main" id="icons" />
        </div>
      </div>
      <div class="logos">
        <div class="logo hidden">
          <img src={office} alt="main" id="icons" />
        </div>
        <div class="logo hidden">
          <img src={excel} alt="main" id="icons" />
        </div>
        <div class="logo hidden">
          <img src={teams} alt="main" id="icons" />
        </div>
      </div>
      <div class="logos">
        <div class="logo hidden">
          <img src={gitlab} alt="main" id="icons" />
        </div>
        <div class="logo hidden">
          <img src={github} alt="main" id="icons" />
        </div>
      </div>
      <div class="logos">
        <div class="logo hidden">
          <img src={photoshop} alt="main" id="icons" />
        </div>
        <div class="logo hidden">
          <img src={premiere} alt="main" id="icons" />
        </div>
        <div class="logo hidden">
          <img src={illustrator} alt="main" id="icons" />
        </div>
      </div>
    </section>
  );
};

export default Skills;