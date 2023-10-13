import React from 'react'

import loudounNowPicture from '../../assets/loudounnow.png'

function DylanLinks() {
    const links = {
        'My LinkedIn': 'https://www.linkedin.com/in/ott-dylan/',
        'Personal Website': 'https://dylanott.com/',
        Nivaro: 'https://nivaro.io/',
        Delilah: 'https://delilah.ai/',
        ScholarAI: 'https://scholarai.org/',
        'ScholarAI iOS App':
            'https://apps.apple.com/us/app/scholarai-note-generator/id6450874899',
        'WUSA9, Great Morning Washington':
            'https://www.wusa9.com/video/entertainment/television/programs/great-day-washington/local-teens-create-successful-ai-startup-called-nivaro-to-help-empower-high-school-students/65-20acc5e1-8dda-4fd9-8fb9-124d1de88912',
        LoudounNow:
            'https://www.loudounnow.com/news/education/academies-of-loudoun-students-launch-ai-project-platform/article_e2c0a9d6-2e72-11ee-af17-87defac0e69b.html',
        DCNewsNow:
            'https://www.dcnewsnow.com/news/local-news/virginia/loudoun-county/teen-ceo-creates-incubator-program-to-help-peers/',
        ABC27: 'https://www.abc27.com/news/teen-ceo-creates-incubator-program-to-help-peers/',
        ABC8: 'https://www.wric.com/news/northern-virginia/virginia-teen-ceo-creates-incubator-program-to-help-peers/',
        WRBL: 'https://www.wrbl.com/news/teen-ceo-creates-incubator-program-to-help-peers/',
        YourErie:
            'https://www.yourerie.com/video/teen-ceo-creates-incubator-program-to-help-peers/8869864/',
    }

    return (
        <div>
            <h2>Links</h2>
            <ul>
                {Object.entries(links).map(([name, url]) => (
                    <li key={url}>
                        <a href={url} target="_blank" rel="noopener noreferrer">
                            {name}
                        </a>
                    </li>
                ))}
            </ul>
            <h2>News</h2>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '16px',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    height: '800px', // increase the height of the parent div
                }}
            >
                <iframe
                    width="100%"
                    height="400px" // decrease the height of the iframe
                    src="https://www.youtube.com/embed/tFZVYJoaIf4?si=r5qu0H1MRHpu8JzG"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                    style={{ borderRadius: '16px' }}
                ></iframe>
                <iframe
                    width="100%"
                    height="400px" // decrease the height of the iframe
                    src="https://www.youtube.com/embed/Rr2Df4cPsyc?si=2BjFDWSNtx504FRw"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                    style={{ borderRadius: '16px' }}
                ></iframe>
                <img
                    src={loudounNowPicture}
                    style={{ width: '100%', borderRadius: '16px' }}
                    alt="Loudoun Now"
                />
                <iframe
                    width="100%"
                    height="300px" // increase the height of the iframe
                    src="https://player.vimeo.com/video/818808501?muted=1&amp;autoplay=1&amp;autopause=0&amp;controls=1&amp;loop=1&amp;app_id=122963"
                    frameborder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    title="SCHOLARPRODUCTDEMO"
                    data-ready="true"
                ></iframe>
            </div>
        </div>
    )
}

export default DylanLinks
