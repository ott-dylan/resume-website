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
                        'Currently working on Nivaro and Delilah as well as growing my personal brand on TikTok.',
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
                            gpa: '4.52 GPA, 1520 SAT',
                            period: 'AUG 2020 – JUN 2024',
                        },
                        {
                            credit: 'Advanced Studies Diploma',
                            place: 'Briar Woods High School, Virginia, United States',
                            gpa: '4.52 GPA, 1520 SAT',
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
