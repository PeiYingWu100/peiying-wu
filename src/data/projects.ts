export interface Project {
  img: string;
  title: string;
  details: string;
  tech: string;
  githubLink: string;
  demoLink: string;
  IsImgRight?: boolean;
}

const Projects: Project[] = [
    {
      img: "/project_rawg.jpg",
      title: "Project Title",
      details:
        "LoreTipsum dolor sit amet consectetur adipisicing elit. Atque quia iusto laboriosam explicabo ipsa fuga facere eum labore nulla repudiandae rem omnis optio pariatur architecto doloremque, minus est assumenda vitae?",
      tech: "HTML, CSS, JavaScript, React, Vite",
      githubLink: "https://rawg-game-hub-ochre.vercel.app/",
      demoLink: "https://rawg-game-hub-ochre.vercel.app/",
      IsImgRight: true,
    },
    {
      img: "/project_rawg.jpg",
      title: "Project Title",
      details:
        "LoreTipsum dolor sit amet consectetur adipisicing elit. Atque quia iusto laboriosam explicabo ipsa fuga facere eum labore nulla repudiandae rem omnis optio pariatur architecto doloremque, minus est assumenda vitae?",
      tech: "HTML, CSS, JavaScript, React, Vite",
      githubLink: "https://rawg-game-hub-ochre.vercel.app/",
      demoLink: "https://rawg-game-hub-ochre.vercel.app/",
    },
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