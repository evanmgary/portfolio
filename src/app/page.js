import Image from "next/image";
import Link from "next/link";
import { ProjectCardLg, ProjectCardSm } from "./components";
import "./styles.css"

export const metadata = {
  title: "Portfolio",
  description: "Portfolio page for Evan Gary."
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="name-info">
        <h1 className="name">Evan Gary</h1>
        <h3 className="tagline">Software Developer</h3>
        <div className="links">
            <div><Link className="git-link" href="http://github.com/evanmgary"><Image src="/github-mark.png" height="30" width="30" alt="Github logo"></Image>evanmgary</Link></div>
            <div><Link className="lin-link" href="https://www.linkedin.com/in/evanmgary/"><Image src="/LinkedIn_icon.png" alt="Linkedin logo" height="30" width="30"></Image>evanmgary</Link></div>
        </div>
        
      </div>
      <div className="portfolio-box-large">
        <ProjectCardLg link="https://evanmgary.github.io/bracket_maker" location={"/bracket.PNG"} title="Bracket Maker" desc="Tool to create and randomize NCAA tournament brackets using various advanced stats" alt=""></ProjectCardLg>
        <ProjectCardLg link="https://emg-weathertools.vercel.app/" location={"/weather.PNG"} title="Weather App" desc="App to chart weather forecasts, buoy data, and historical data" alt=""></ProjectCardLg>      </div>

      <div className="portfolio-box-large">
        <ProjectCardLg link="https://online-menu-theta.vercel.app/menu" location={"/menu.PNG"} title="Online Menu Practice" desc="Takeout menu clone created to practice UI elements and CRUD operations (currently WIP)" alt=""></ProjectCardLg>
        <ProjectCardLg link="/pokedex/dextable" location={"/pokemon.PNG"} title="Stat-Focused Pokedex" desc="Sortable Pokedex with competitive-focused statistics" alt=""></ProjectCardLg>
      </div>
      <div className="portfolio-box-large">
        
      </div>
      <div className="portfolio-box-small">
        <ProjectCardSm link="/quote" location={'/quote.PNG'} desc="Quote generator using an api" alt=""></ProjectCardSm>
        <ProjectCardSm link="/markdown" location={'/markdown.PNG'} desc="Markdown using marked library" alt=""></ProjectCardSm>
        <ProjectCardSm link="/drum" location={'/drum.PNG'} desc="Simple drum machine" alt=""></ProjectCardSm>
      </div>
      <div className="portfolio-box-small">
        <ProjectCardSm link="/calculator" location={'/calculator.PNG'} desc="Javascript calculator" alt=""></ProjectCardSm>
        <ProjectCardSm link="/clock" location={'/clock.PNG'} desc="Pomodoro timer" alt=""></ProjectCardSm>
        <ProjectCardSm link="/gol" location={'/gol.PNG'} desc="Conway's game of life" alt=""></ProjectCardSm>
      </div>
    </main>
  );
}
