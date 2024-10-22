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
      <br /><br /><br /><br /><br /><br />
      <div className="header">SKILLS</div>
      <div className="logos">
        <div className="logo hidden">
          <img src={java} alt="Java" id="icons" />
          <div className="overlay">Constructed a few programs in Java including a PostFix Calculator with a GUI.</div>
        </div>
        <div className="logo hidden">
          <img src={python} alt="Python" id="icons" />
          <div className="overlay">Python</div>
        </div>
        <div className="logo hidden">
          <img src={c} alt="C" id="icons" />
          <div className="overlay">C</div>
        </div>
        <div className="logo hidden">
          <img src={sql} alt="SQL" id="icons" />
          <div className="overlay">SQL</div>
        </div>
      </div>
      <br />
      <div className="logos">
        <div className="logo hidden">
          <img src={html5} alt="HTML5" id="icons" />
          <div className="overlay">HTML5</div>
        </div>
        <div className="logo hidden">
          <img src={css} alt="CSS" id="icons" />
          <div className="overlay">CSS</div>
        </div>
        <div className="logo hidden">
          <img src={js} alt="JavaScript" id="icons" />
          <div className="overlay">JavaScript</div>
        </div>
        <div className="logo hidden">
          <img src={node} alt="Node.js" id="icons" />
          <div className="overlay">Node.js</div>
        </div>
        <div className="logo hidden">
          <img src={react} alt="React" id="icons" />
          <div className="overlay">React</div>
        </div>
      </div>
      <div className="logos">
        <div className="logo hidden">
          <img src={tdd} alt="TDD" id="icons" />
          <div className="overlay">TDD</div>
        </div>
        <div className="logo hidden">
          <img src={maven} alt="Maven" id="icons" />
          <div className="overlay">Maven</div>
        </div>
        <div className="logo hidden">
          <img src={junit} alt="JUnit" id="icons" />
          <div className="overlay">JUnit</div>
        </div>
        <div className="logo hidden">
          <img src={svn} alt="SVN" id="icons" />
          <div className="overlay">SVN</div>
        </div>
        <div className="logo hidden">
          <img src={checkstyle} alt="Checkstyle" id="icons" />
          <div className="overlay">Checkstyle</div>
        </div>
      </div>
      <div className="logos">
        <div className="logo hidden">
          <img src={jira} alt="Jira" id="icons" />
          <div className="overlay">Jira</div>
        </div>
        <div className="logo hidden">
          <img src={confluence} alt="Confluence" id="icons" />
          <div className="overlay">Confluence</div>
        </div>
        <div className="logo hidden">
          <img src={slack} alt="Slack" id="icons" />
          <div className="overlay">Slack</div>
        </div>
        <div className="logo hidden">
          <img src={arcade} alt="Arcade" id="icons" />
          <div className="overlay">Arcade</div>
        </div>
      </div>
      <div className="logos">
        <div className="logo hidden">
          <img src={office} alt="Office" id="icons" />
          <div className="overlay">Office</div>
        </div>
        <div className="logo hidden">
          <img src={excel} alt="Excel" id="icons" />
          <div className="overlay">Excel</div>
        </div>
        <div className="logo hidden">
          <img src={teams} alt="Teams" id="icons" />
          <div className="overlay">Teams</div>
        </div>
      </div>
      <div className="logos">
        <div className="logo hidden">
          <img src={gitlab} alt="GitLab" id="icons" />
          <div className="overlay">GitLab</div>
        </div>
        <div className="logo hidden">
          <img src={github} alt="GitHub" id="icons" />
          <div className="overlay">GitHub</div>
        </div>
      </div>
      <div className="logos">
        <div className="logo hidden">
          <img src={photoshop} alt="Photoshop" id="icons" />
          <div className="overlay">Photoshop</div>
        </div>
        <div className="logo hidden">
          <img src={premiere} alt="Premiere" id="icons" />
          <div className="overlay">Premiere</div>
        </div>
        <div className="logo hidden">
          <img src={illustrator} alt="Illustrator" id="icons" />
          <div className="overlay">Illustrator</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
