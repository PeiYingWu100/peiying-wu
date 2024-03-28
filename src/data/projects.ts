export interface Project {
  img: string;
  title: string;
  details: string;
  features? : string[];
  tech: string;
  githubLink: string;
  demoLink: string;
  IsImgRight?: boolean;
}

const Projects: Project[] = [
    {
      img: "/project_weather.jpg",
      title: "Climate Cast",
      details:
        "The weather web application automatically detects the user's location to provide current weather updates.",
        features:[
          "If the user's location is unavailable, the default display is set to Sydney, Australia.",
          "Users can search for weather information in other locations.", 
          "A search dropdown list to enhance location accuracy.",
          "The weather card background will dynamically adjust based on the time of day.", 
          "The website features error messaging for any issues encountered.", 
          "Disables search functionality during loading periods.", 
          ],
        tech: "HTML, CSS, Bootstrap5, JavaScript, React, Vite",
      githubLink: "https://github.com/PeiYingWu100/climate-cast",
      demoLink: "https://climate-cast.vercel.app/",
      IsImgRight: true,
    },
    // {
    //   img: "/project_rawg.jpg",
    //   title: "Project Title",
    //   details:
    //     "LoreTipsum dolor sit amet consectetur adipisicing elit. Atque quia iusto laboriosam explicabo ipsa fuga facere eum labore nulla repudiandae rem omnis optio pariatur architecto doloremque, minus est assumenda vitae?",
    //   tech: "HTML, CSS, JavaScript, React, Vite",
    //   githubLink: "https://rawg-game-hub-ochre.vercel.app/",
    //   demoLink: "https://rawg-game-hub-ochre.vercel.app/",
    // },
    //   {
    //     img: "",
    //     title: "",
    //     details: "",
    //     tech: "",
    //     githubLink: "",
    //     demoLink: "",
    //      producIimRright: false,
    //   },
];

export default Projects;