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
    "I define myself as a Full Stack Developer who also harvest AWS Cloud!. Always curious to learn and discuss technology. I have proficiency in different Back-End & Front-End Technologies and Frameworks and have worked a lot on them as well as on provisioning Infrastructure as Code.",
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
      description:"",
      skills: []
    },
    {
      name: "Parul University",
      course:"Information & Technology",
      place: "Gujarat, India",
      date: "Apr, 2014 - Apr, 2018",
      degree: "Bachelor Of Engineering",
      gpa: "8.0/9",
      description:""
    }
  ],
  experience: [

    {
      name: "Cognizant",
      place: "Mississauga, Canada",
      position: "Sr. Software Engineer I",
      date: "Aug, 2022 - Present",      
      description:"",
      skills: []
    },
    {
      name: "Sunflower Lab",
      place: "Gujarat, India",
      position: "DevOps Engineer",
      date: "Dec 2020 - Oct 2021",      
      description:"",
      skills: []
    },
    {
      name: "Advanced",
      place: "Gujarat, India",
      position: "Full Stack Developer",
      date: "Jun 2018 - Dec 2020",      
      description:"",
      skills: []
    },
    {
      name: "STL - Sterlite Technologies",
      place: "Gujarat, India",
      position: "Jr. Software Engineer",
      date: "Jan 2018 - Jun 2018",      
      description:"",
      skills: []
    }
  ],
  skills: [
    {
      title: "Languages",
      info: [
        "Java"
      ],
      icon: "fa fa-code"
    },
    {
      title: "Frameworks",
      info: [
        "REST",
        "Spring-Boot",
        "Hibernate",
        "JPA",
        "Spring Security",
        "Maven",
        "JUnit"

      ],
      icon: "fa fa-cubes"
    },
    {
      title: "web technologies",
      info: ["Vue.js", "React.js", "Node.js", "HTML", "CSS"],
      icon: "fas fa-laptop-code"
    },
  
    {
      title: "AWS Cloud",
      info: ["EC2", "Lambda", "S3", "VPC", "DynamoDB", "Route 53",  "API Gateway", "CloudFront", "ECS", "SNS", "SQS"],
      icon: "fa fa-cloud"
    },

    {
      title: "Databases",
      info: ["MySQL", "PostGreSQL",],
      icon: "fa fa-database"
    },


    {
      title: "DevOps Tools",
      info: [
        "Terraform",
        "Jenkins",
        "Docker",
        "NIFI",
        "Keycloak",
      ],
      icon: "fas fa-tools"
    },

    {
      title: "",
      info: [
      ],
      icon: ""
    },

    {
      title: "Other",
      info: [
        "NIFI",
        "Keycloak"
      ],
      icon: "fas fa-tools"
    },

    {
      title: "",
      info: [
      ],
      icon: ""
    },

  ],
  certificates: [

    {
      name: "AWS Certified Developer - Associate",
      pictures: [
        {
          img: require("./src/assets/certificates/developer/developer.jpeg")
        }
      ],
      technologies: [],
      category: "",
      github: "https://github.com/Natain/todo-application",
      visit: "https://natainbogdan.netlify.app/",
      description:""
    },



    {
      name: "AWS Certified Developer Associate ",
      pictures: [
        {
          img: require("./src/assets/certificates/architect/architect.jpeg")
        }
      ],
      technologies: [],
      category: "Web App",
      github: "https://github.com/Natain/grocery-listing-react",
      date: "",
      visit: "https://grocery-listing-react.netlify.app/",
      description:  "",
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



