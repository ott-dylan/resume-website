export default class DataService {
    _data = {
        projectRepo: 'https://github.com/ott-dylan/resume-website',
        react95Repo: 'https://github.com/React95/React95',
        items: [
            {
                id: 'about',
                name: 'About.txt',
                icon: 'info_bubble',
                content: {
                    paragraphs: [
                        "Hi, I'm Dylan Ott, a Computer Science enthusiast, budding entrepreneur, and high school senior from Ashburn, VA. With a firm grounding in IT and Entrepreneurship, I navigate through an enriching educational journey, complemented by a 4.52 GPA and a 1500 SAT score.",
                        'My entrepreneurial spirit is showcased through founding Nivaro.io and ScholarAI.org, where I blend innovation, education, and technology to foster young minds and streamline academic experiences by leveraging AI and a versatile tech stack involving React.js, Tailwind CSS, and OpenAI.',
                        "As the CTO of Delilah.ai, I've successfully cultivated a platform that personalizes the academic journey for over 50k users, incorporating technologies like React.js and Django, and deploying on cloud platforms like Heroku and AWS, achieving substantial impact and revenue within its inaugural year.",
                        'My technical toolkit includes languages like Python and JavaScript, along with proficiency in frameworks and platforms such as React.js, Node.js, and Django. I find joy in exploring new technologies and utilizing them to drive innovative solutions in the EdTech space.',
                        'Off the tech field, I dive into sports, both as a participant and a coach in various soccer leagues, embracing the values of teamwork and leadership. I’m excited about the boundless possibilities at the intersection of technology, AI, and entrepreneurship, and I welcome collaborations and connections that fuel further innovation. Connect with me on LinkedIn, and let’s create, innovate, and lead together.',
                    ],
                },
            },
            {
                id: 'resume',
                name: 'Resume.txt',
                icon: 'notepad_2',
                content: {
                    resumeLink:
                        'https://drive.google.com/file/d/1klDE1EM0Xa2je6zfyX6XyddD8Y9mcy3-/view?usp=sharing',
                    workExperience: [
                        {
                            jobTitle: 'Venture Capital Intern',
                            company:
                                'Virginia Innovation Partnership Corporation',
                            location: 'Herndon, Virginia, United States',
                            period: 'JUNE 2023 – AUGUST 2023',
                            accomplishments: [
                                'Collaborated with executives to allocate over 1.5M in grants to tech startups in Virginia.',
                                'Evaluated 25+ startup pitches, providing critical feedback that shaped investment choices within a 10-member team.',
                                'Streamlined task management using Airtable, ensuring efficient workflows and timely evaluations.',
                                'Employed data analytics on Airtable to derive meaningful insights from startup data, enhancing the firm’s investment decision-making process.',
                            ],
                        },
                        {
                            jobTitle: 'Chief Executive Officer and Founder',
                            company: 'Nivaro.io',
                            location: 'Ashburn, Virginia, United States',
                            period: 'FEB 2023 – PRESENT',
                            accomplishments: [
                                'Managed a dynamic team of 33, overseeing coding, operations, and product development.',
                                'Gained media recognition on multiple platforms including CBS WUSA9, ABC, and DCNewsNow.',
                                'Developed curriculum websites and taught programming using React.js, Node.js, and TailwindCSS.',
                            ],
                        },
                        {
                            jobTitle: 'Developer',
                            company: 'ScholarAI.org',
                            location: 'Ashburn, VA, United States',
                            period: 'JAN 2023 – PRESENT',
                            accomplishments: [
                                'Founded ScholarAI.org to address student challenges in efficient note-taking.',
                                'Successfully launched a SaaS website and iOS application, gaining over 20K+ users.',
                                'Utilized React.js, Tailwind CSS, and OpenAI for optimal app performance and scalability.',
                            ],
                        },
                        {
                            jobTitle: 'Chief Technology Officer',
                            company: 'Delilah.ai',
                            location: 'Cambridge, MA, United States',
                            period: 'JAN 2023 – PRESENT',
                            accomplishments: [
                                'Spearheaded the development of a website, accruing over 50k+ users and achieving 5-figure revenue within a year.',
                                'Utilized a tech stack including React.js, Django, Figma, and cloud platforms such as Heroku, AWS, and Microsoft Azure.',
                            ],
                        },
                        {
                            jobTitle: 'Land Surveying Intern',
                            company: 'Johnson Bernat Associates Inc.',
                            location: 'Gaithersburg, Maryland, United States',
                            period: 'JUN 2022 – AUG 2022',
                            accomplishments: [
                                'Conducted comprehensive field surveys for property boundaries and topographical features across the DMV area.',
                                'Utilized DJI drones, total stations, and GPS receivers for precise data measurement.',
                                'Analyzed and processed survey data, producing detailed maps and reports.',
                                'Collaborated within a team, ensuring all data met stringent project requirements and specifications.',
                            ],
                        },
                        // More work experiences can be added here
                    ],
                    // Education details can be added here
                    education: [
                        {
                            credit: 'Academy of Engineering and Technology, Entrepreneurship and Computer Science',
                            place: 'Academies of Loudoun, Virginia, United States',
                            gpa: '4.52 GPA, 1500 SAT',
                            period: 'AUG 2020 – JUN 2024',
                        },
                        {
                            credit: 'Advanced Studies Diploma',
                            place: 'Briar Woods High School, Virginia, United States',
                            gpa: '4.52 GPA, 1500 SAT',
                            period: 'AUG 2020 – JUN 2024',
                        },
                    ],
                },
            },
            // Project details can be added in this section
            {
                id: 'news',
                name: 'News.txt',
                icon: 'mailnews_3',
                content: {
                    hard: [
                        {
                            name: 'React.js',
                            progress: 95,
                        },
                        {
                            name: 'Node.js',
                            progress: 90,
                        },
                        {
                            name: 'Django',
                            progress: 85,
                        },
                        {
                            name: 'Python',
                            progress: 80,
                        },
                        {
                            name: 'HTML/CSS',
                            progress: 80,
                        },
                        {
                            name: 'Java',
                            progress: 75,
                        },
                        {
                            name: 'JavaScript',
                            progress: 75,
                        },
                        {
                            name: 'TailwindCSS',
                            progress: 70,
                        },
                        // More skills can be added here
                    ],
                    soft: 'Teamwork, Leadership, Entrepreneurship, Analytical thinking, Creative Problem solving',
                },
            },
            {
                id: 'contact',
                name: 'Contact.txt',
                icon: 'inetcfg_2301',
                content: {
                    emailText:
                        'If you want to collaborate or discuss potential opportunities, just email me on ',
                    email: 'dylanott858@gmail.com',
                    socialText: 'Or you can reach me out through LinkedIn:',
                    social: [
                        {
                            name: 'FaLinkedin',
                            link: 'https://www.linkedin.com/in/ott-dylan',
                        },
                        {
                            name: 'FaGithub',
                            link: 'https://github.com/ott-dylan',
                        },
                    ],
                },
            },
        ],
    }

    getItems() {
        return this._data.items.map(({ id, name, icon }) => ({
            id,
            name,
            icon,
        }))
    }

    getItem(id) {
        return this._data.items.find((x) => x.id === id)
    }

    getProjectInfo() {
        return {
            projectRepo: this._data.projectRepo,
            react95Repo: this._data.react95Repo,
        }
    }
}
