let info = {
  name: "Jaydip Barvaliya",
  logo_name: "Jaydip",
  flat_picture: require("./src/assets/potrait.jpg"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "I'm a Front-end  Web Developer with a passion for building projects that are used routinely. Building applications in JavaScript. Former supervisor and finance professional who's eager to enhance a company's user experience. ",
  links: {
    linkedin: "https://www.linkedin.com/in/jaydip-barvaliya/",
    github: "https://github.com/JaydipBarvaliya",
    resume: "https://github.com/JaydipBarvaliya/Resume/blob/main/Jaydip_Resume.pdf"
  },
  education: [
    {
      name: "St Clair College",
      place: "Toronto, Canada",
      date: "May, 2021 - Aug, 2022",
      degree: "Data Analytics For Business",
      gpa: "3.9/4.0",

      skills: [
        // "Skills gained:",
        // "Design, conduct and interpret research and statistical analysis. ",
        // "Apply an evidence-based approach to problems.",
        // "Communicate findings using models, charts and graphs.",
        // "Communicate research findings using clear, accurate, concise writing.",


      ]
    },
    {
      name: "Parul University",
      course:"Information & Technology",
      place: "Gujaratm, India",
      date: "Apr, 2014 - Apr, 2018",
      degree: "Bachelor Of Engineering",
      gpa: "8.0/9",
      description:""
    }
  ],
  experience: [

    {
      name: "Sr. Software Engineer I at Cognizant",
      place: "Mississauga, Canada",
      date: "Aug, 2021 - Present",
      position: "",
      description:"Demo Description",
      skills: []
    },

  ],
  skills: [
    {
      title: "languages",
      info: [
        "Spring-Boot",
        "Hibernate",

      ],
      icon: "fa fa-aws"
    },
    {
      title: "data frameworks",
      info: [
        "Pillow"
      ],
      icon: "fa fa-cubes"
    },
    {
      title: "web technologies",
      info: ["Vue.js",  "React.js", "Node.js", "HTML", "CSS"],
      icon: "fas fa-laptop-code"
    },
    {
      title: "databases",
      info: ["MongoDB", "MySQL", "OracleSQL",],
      icon: "fa fa-database"
    },
    {
      title: "operating systems & tools",
      info: [
        "MacOS",
        "Windows",
        "Android",
        "Scrum",
        "Heroku",
        "Firebase",
        "AWS S3"
      ],
      icon: "fas fa-tools"
    },
    {
      title: "design",
      info: ["Illustrator", "XD", "Photoshop", "Final Cut Pro"],
      icon: "fa fa-pencil-square-o"
    }
  ],
  portfolio: [

    {
      name: "Todo-application",
      pictures: [

        {
          img: require("./src/assets/portfolio/todo-application/one.png")
        },
        {
          img: require("./src/assets/portfolio/todo-application/two.png")
        },

      ],
      technologies: ["JavaScript", "HTML5", "Netlify"],
      category: "web todo list  app ",
      github: "https://github.com/Natain/todo-application",
      visit: "https://natainbogdan.netlify.app/",
      description:
        "Todo Application was made to help me with the learning schedule and it seams was doing a great job this app helping me to organize all the daily tasks."
    },



    {
      name: "Grocery-listing-react",
      pictures: [
        // {
        //   img: require("./src/assets/portfolio/clumpr/logo.png")
        // },
        {
          img: require("./src/assets/portfolio/grocery/one.png")
        },
        {
          img: require("./src/assets/portfolio/grocery/two.png")
        }
      ],
      technologies: ["CSS", "JavaScript","React.js", "HTML5",],
      category: "Web App",
      github: "https://github.com/Natain/grocery-listing-react",
      date: "",
      visit: "https://grocery-listing-react.netlify.app/",
      description:  "Grocery-listing-react it's a simple app that can help you doing shoppings.",
    },
    {
      name: "Gitscores",
      pictures: [
        {
          img: require("./src/assets/portfolio/Gitscores/one.png")
        },
        {
          img: require("./src/assets/portfolio/Gitscores/two.png")
        },
        {
          img: require("./src/assets/portfolio/Gitscores/three.png")
        },

      ],
      technologies: ["JavaScript", "CSS", "EJS", "Herokuapp"],
      category: "Scoring app for Github",
      github: "https://github.com/Natain/gitscores",
      date: "Aug, 2021 - Sep, 2021",
      visit: "https://gitscores.herokuapp.com/",
      description:
        "Gitscores v1.0.2 was updated from the orginal with more tools that let you personalize the app on your desingn."
    }
  ],
   recommendations: [
    {
      title:
        "In his internship, Jaydip Barvaliya has demonstrated excellent learning ability, and with a dedicated, task oriented approach, he was able to complete his assignment ahead of time.",
      author: "Timothy Gray",
      position: "CTO",
      company: "Startup Norway As",
      location: " Oslo, Norway"
    },
    {
      title:
        "I feel his budding leadership abilities will become even more effective in a diverse and challenging environment.",
      author: "Hansley Jacob",
      position: "Project Manager",
      company: "Startup Norway As",
      location: "Oslo, Norway"
    }
  ]
};

export default info;



