import React from "react";
import Project from "./Project";

const Projects = () => {
  const technologies = ["HTML", "CSS", "JS", "React"];
  const reactPokedexDescription =
    "This is the first project I in which I attempted to consume an API. Using the data I called from the API I allow users to search through the original 151 pokemon either via the search box using the pokemon's name or by clicking a button to show all, and selecting a pokemon from a list. From there users are taken to a dedicated page where they can see details about the pokemon, including their combat stats, pokedex flavour text entry, evolution tree and more. This app was designed with a mobile user in mind, and as such looks better on mobile. That being said, it functions the same on desktop or mobile.";
  const taskTrackerDescription =
    "My first React project! Prior to this my Javascript experience was all with Vanilla JS. Despite task trackers and to-do lists being a bit of a cliche project, I feel like it was a great introduction for me. It taught me a lot about state management with hooks, and how to use local storage to store / restore session data. I'm also quite happy with how it turned out visually. The design is simple, but I tried to make it a bit different to every other basic task tracker out there.";
  const staticProductPageDescription =
    "I created this page entirely in Codepen a number of years ago. It's one of the earliest examples of my work I could find. This project was mainly an excersize to see how closely I could match a final design to a PSD from a designer; My attempy at simulating a real work scenario. The design is from a free PSD I found online, the project is essentially an exact, from scratch clone of the live website for the template which is actually still live to this day. I used HTML, SCSS and a tiny bit of vanilla Javascript to get the sticky nav to change colour on scroll.";
  const spaceInvadersDescription =
    "One of the first JavaScript projects that I tried. This was created in pure vanilla JS. I followed a YouTube tutorial by Ania Kubów. I can remember at the time not knowing 100% what the code I was writing was doing, however I was able to finish with a working product and fix any issues that I ran into. Looking back at the code years later it makes much more sense!";
  return (
    <>
      <section className="projects-container" id="projects">
        <div className="projects-content-container content-container">
          <div className="full-height">
            <h1 className="projects-title title title-white">Projects</h1>
            <h2 className="projects-sub-title sub-title sub-title-white">
              Over the years I've tried my hand at many projects. Here are a few
              examples; they range from static one page sites, to full dynamic
              React applications. Scroll down to have a look.
            </h2>
          </div>
          <Project
            title="React Pokedex"
            content={reactPokedexDescription}
            img="img/pokedex-img.png"
            technologies={technologies.filter((tech) => !tech.includes("JS"))}
            link="http://jordan-react-pokedex.netlify.com/"
            source="https://github.com/c0descrub/pokedex-v2"
          />
          <Project
            title="Task Tracker App"
            content={taskTrackerDescription}
            img="img/task-app.png"
            technologies={technologies.filter((tech) => !tech.includes("JS"))}
            link="https://jordan-react-todoapp.netlify.app/"
            source="https://github.com/c0descrub/task-app"
          />
          <Project
            title="one page design Product Page"
            content={staticProductPageDescription}
            img="img/mache-thumb.png"
            technologies={technologies.filter(
              (tech) => !tech.includes("React")
            )}
            link="https://codepen.io/codescrub/full/weLeVY"
            source="https://codepen.io/codescrub/pen/weLeVY"
          />
          <Project
            title="Space Invaders"
            content={spaceInvadersDescription}
            img="img/space-invaders-thumb.png"
            technologies={technologies.filter(
              (tech) => !tech.includes("React")
            )}
            link="https://space-invaders-excercise.netlify.app/"
            source="https://github.com/c0descrub/space-invaders-excersise"
          />
        </div>
      </section>
    </>
  );
};

export default Projects;
