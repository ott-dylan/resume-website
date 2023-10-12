export default class DataService {
  _data = {
    projectRepo: "https://github.com/DylanOtt/portfolio",
    react95Repo: "https://github.com/React95/React95",
    items: [
      {
        id: "about",
        name: "About.txt",
        icon: "info_bubble",
        content: {
          paragraphs: [
            "Hi! I am a Computer Science enthusiast and an entrepreneur based in Ashburn, Virginia. I am currently a high school junior with a passion for technology, innovation and entrepreneurship. I have a particular interest in Artificial Intelligence (AI) and Entrepreneurship.",
            "Communication, teamwork, and creative problem-solving are core to my approach to technology. With my growing experience in software development, I am eager to make a lasting difference in the technology field.",
            "The main technology I have been using is React for web development. But I'm always interested in exploring new technologies. I believe the future of technology lies in AI and I am keen to contribute to this field.",
            "When I am not in front of the computer, I usually enjoy coaching in the Ashburn Youth Basketball League and Loudoun Soccer. I also play travel soccer for Loudoun Soccer and varsity soccer for Briar Woods High School.",
          ],
        },
      },
      {
        id: "resume",
        name: "Resume.txt",
        icon: "notepad_2",
        content: {
          resumeLink:
            "https://drive.google.com/file/d/14IYrdwmxbH0LDhF4n0SxmsJ1EiRw6pTR/view?usp=sharing",
          workExperience: [
            {
              jobTitle: "Data Analytics Intern",
              company: "VIPC | Virginia Innovation Partnership Corporation",
              location: "Herndon, Virginia, United States",
              period: "JUNE 2023 – PRESENT",
              accomplishments: [
                "Working as a Data Analytics Intern",
                // Add more specific accomplishments here.
              ],
            },
            {
              jobTitle: "President, CEO",
              company: "Nivaro",
              location: "Ashburn, Virginia, United States",
              period: "FEB 2023 – PRESENT",
              accomplishments: [
                "Leading a team of 23 high schoolers from around the world to create innovative solutions using artificial intelligence to relevant issues.",
                "Generated over 7,500 users on multiple AI projects including ScholarAI.org and StudySavvy.net as of 6/13/23.",
              ],
            },
            {
              jobTitle: "Software Engineer",
              company: "Delilah",
              location: "Herndon, Virginia, United States",
              period: "FEB 2023 – PRESENT",
              accomplishments: [
                "Revolutionizing how students write with an AI-powered document editor.",
                "Backed by Harvard Innovation Labs, MIT iHQ, and Pear VC.",
                "Helping to develop the platform using React.js and Django.",
              ],
            },
            // More work experiences can be added here
          ],
          // Education details can be added here
          education: [
            {
              credit:
                "Academy of Engineering and Technology, Entrepreneurship and Computer Science",
              place: "Academies of Loudoun, Virginia, United States",
              gpa: "4.52 GPA",
              period: "AUG 2020 – JUN 2024",
            },
            {
              credit: "Advanced Studies Diploma",
              place: "Briar Woods High School, Virginia, United States",
              gpa: "4.52 GPA",
              period: "AUG 2020 – JUN 2024",
            },
          ],
        },
      },
      // Project details can be added in this section
      {
        id: "skills",
        name: "Skills.txt",
        icon: "progman_11",
        content: {
          hard: [
            {
              name: "React.js",
              progress: 95,
            },
            {
              name: "Artificial Intelligence (AI)",
              progress: 90,
            },
            {
              name: "Django",
              progress: 85,
            },
            {
              name: "Node.js",
              progress: 85,
            },
            {
              name: "Python",
              progress: 80,
            },
            {
              name: "HTML",
              progress: 80,
            },
            {
              name: "Java",
              progress: 75,
            },

            // More skills can be added here
          ],
          soft: "Teamwork, Leadership, Entrepreneurship, Analytical thinking, Creative Problem solving",
        },
      },
      {
        id: "contact",
        name: "Contact.txt",
        icon: "inetcfg_2301",
        content: {
          emailText:
            "If you want to collaborate or discuss potential opportunities, just email me on ",
          email: "dylanott858@gmail.com",
          socialText: "Or you can reach me out through LinkedIn:",
          social: [
            {
              name: "FaLinkedin",
              link: "https://www.linkedin.com/in/ott-dylan",
            },
            {
              name: "FaGithub",
              link: "https://github.com/ott-dylan",
            },
            // More social links can be added here
          ],
        },
      },
    ],
  };

  getItems() {
    return this._data.items.map(({ id, name, icon }) => ({ id, name, icon }));
  }

  getItem(id) {
    return this._data.items.find((x) => x.id === id);
  }

  getProjectInfo() {
    return {
      projectRepo: this._data.projectRepo,
      react95Repo: this._data.react95Repo,
    };
  }
}
