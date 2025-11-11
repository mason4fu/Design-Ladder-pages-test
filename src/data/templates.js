import researchMinimalBlue from '../assets/templates/research-minimal-blue.png'
import researchInfographic from '../assets/templates/research-infographic.png'
import eventGradientPop from '../assets/templates/event-gradient-pop.png'
import eventCommunity from '../assets/templates/event-community.png'
import organizationalCorporate from '../assets/templates/organizational-corporate.png'
import researchEarthy from '../assets/templates/research-earthy.png'
import eventMinimalBlack from '../assets/templates/event-minimal-black.png'
import organizationalWarm from '../assets/templates/organizational-warm.png'
import eventFestival from '../assets/templates/event-festival.png'
import researchBold from '../assets/templates/research-bold.png'

export const templates = [
  {
    id: 'research-minimal-blue',
    name: 'Precision Research',
    posterTypes: ['RESEARCH/ACADEMIC POSTER'],
    topics: ['CONFERENCE', 'HACKATHON'],
    colorPalette: ['Blue', 'Purple', 'Blue-Purple'],
    styleTags: ['Minimal', 'Clean', 'Professional'],
    thumbnail: researchMinimalBlue,
    createdBy: 'Dr. Maya Chen',
    date: '01/15/2024',
    useCount: 1432,
    likes: 201,
    description: 'Crisp typographic hierarchy with ample white space, ideal for academic presentations.',
    layout: {
      background: '#eef2ff',
      elements: [
        { type: 'text', style: 'title', content: 'Project Title' },
        { type: 'text', style: 'subtitle', content: 'Key Findings' },
        { type: 'text', style: 'body', content: 'Insert your abstract or overview here.' }
      ]
    }
  },
  {
    id: 'research-infographic',
    name: 'Data Storyboard',
    posterTypes: ['RESEARCH/ACADEMIC POSTER', 'ORGANIZATIONAL'],
    topics: ['CONFERENCE'],
    colorPalette: ['Blue', 'Yellow', 'Yellow-Green'],
    styleTags: ['Infographic', 'Data-forward'],
    thumbnail: researchInfographic,
    createdBy: 'Analisa Flores',
    date: '02/11/2024',
    useCount: 1876,
    likes: 265,
    description: 'Modular layout with icon blocks and callouts for metrics-heavy posters.',
    layout: {
      background: '#e0f2fe',
      elements: [
        { type: 'text', style: 'title', content: 'Headline' },
        { type: 'text', style: 'caption', content: 'Key metric highlight' },
        { type: 'graphic', style: 'chart', content: 'Insert chart here' }
      ]
    }
  },
  {
    id: 'event-gradient-pop',
    name: 'Neon Night',
    posterTypes: ['SOCIAL EVENT POSTER'],
    topics: ['HACKATHON', 'FUNDRAISER'],
    colorPalette: ['Purple', 'Red', 'Red-Orange'],
    styleTags: ['Bold', 'Gradient', 'High contrast'],
    thumbnail: eventGradientPop,
    createdBy: 'Jordan Blake',
    date: '03/04/2024',
    useCount: 964,
    likes: 142,
    description: 'Vibrant gradient background with large headline for energetic night events.',
    layout: {
      background: '#2e1065',
      elements: [
        { type: 'text', style: 'title', content: 'Event Name' },
        { type: 'text', style: 'subtitle', content: 'Date & Time' },
        { type: 'text', style: 'body', content: 'Call to action goes here.' }
      ]
    }
  },
  {
    id: 'event-community',
    name: 'Community Spotlight',
    posterTypes: ['SOCIAL EVENT POSTER', 'ORGANIZATIONAL'],
    topics: ['VOLUNTEERING', 'FUNDRAISER'],
    colorPalette: ['Orange', 'Yellow', 'Red-Orange'],
    styleTags: ['Friendly', 'Illustrated'],
    thumbnail: eventCommunity,
    createdBy: 'Lena Ortiz',
    date: '02/22/2024',
    useCount: 1320,
    likes: 188,
    description: 'Warm palette with rounded shapes, perfect for community outreach.',
    layout: {
      background: '#fff7ed',
      elements: [
        { type: 'text', style: 'title', content: 'Join Us' },
        { type: 'text', style: 'body', content: 'Describe volunteer roles or donation goals.' },
        { type: 'graphic', style: 'illustration', content: 'Place illustration here.' }
      ]
    }
  },
  {
    id: 'organizational-corporate',
    name: 'Executive Brief',
    posterTypes: ['ORGANIZATIONAL'],
    topics: ['CONFERENCE'],
    colorPalette: ['Blue', 'Blue-Purple'],
    styleTags: ['Corporate', 'Structured'],
    thumbnail: organizationalCorporate,
    createdBy: 'Claudia Ruiz',
    date: '01/28/2024',
    useCount: 2110,
    likes: 305,
    description: 'Grid-based layout with clean dividers for organizational announcements.',
    layout: {
      background: '#f1f5f9',
      elements: [
        { type: 'text', style: 'title', content: 'Division Update' },
        { type: 'text', style: 'body', content: 'Key bullet points and initiatives.' },
        { type: 'text', style: 'footer', content: 'Contact information.' }
      ]
    }
  },
  {
    id: 'research-earthy',
    name: 'Field Notes',
    posterTypes: ['RESEARCH/ACADEMIC POSTER'],
    topics: ['VOLUNTEERING', 'FUNDRAISER'],
    colorPalette: ['Yellow-Green', 'Blue', 'Blue-Purple'],
    styleTags: ['Organic', 'Handcrafted'],
    thumbnail: researchEarthy,
    createdBy: 'Noah Briggs',
    date: '04/12/2024',
    useCount: 768,
    likes: 119,
    description: 'Earthy palette and textured accents suited for environmental studies.',
    layout: {
      background: '#f7fee7',
      elements: [
        { type: 'text', style: 'title', content: 'Study Topic' },
        { type: 'text', style: 'body', content: 'Methodology overview.' },
        { type: 'graphic', style: 'photo', content: 'Add supporting imagery.' }
      ]
    }
  },
  {
    id: 'event-minimal-black',
    name: 'Mono Modern',
    posterTypes: ['SOCIAL EVENT POSTER'],
    topics: ['HACKATHON', 'CONFERENCE'],
    colorPalette: ['Black', 'White', 'Blue'],
    styleTags: ['Minimal', 'High contrast'],
    thumbnail: eventMinimalBlack,
    createdBy: 'Sasha Ibarra',
    date: '05/08/2024',
    useCount: 842,
    likes: 133,
    description: 'Monochrome foundation with accent stripes for tech-forward gatherings.',
    layout: {
      background: '#0f172a',
      elements: [
        { type: 'text', style: 'title', content: 'Hackathon' },
        { type: 'text', style: 'subtitle', content: 'Schedule Highlights' },
        { type: 'graphic', style: 'callout', content: 'Keynote speaker block.' }
      ]
    }
  },
  {
    id: 'organizational-warm',
    name: 'Mission Update',
    posterTypes: ['ORGANIZATIONAL'],
    topics: ['VOLUNTEERING'],
    colorPalette: ['Orange', 'Yellow', 'Blue'],
    styleTags: ['Approachable', 'Story-driven'],
    thumbnail: organizationalWarm,
    createdBy: 'Priya Desai',
    date: '03/30/2024',
    useCount: 1543,
    likes: 192,
    description: 'Panel layout with space for testimonies and impact statements.',
    layout: {
      background: '#fffbeb',
      elements: [
        { type: 'text', style: 'title', content: 'Our Mission' },
        { type: 'text', style: 'body', content: 'Share progress and outcomes.' },
        { type: 'text', style: 'quote', content: 'Add volunteer story.' }
      ]
    }
  },
  {
    id: 'event-festival',
    name: 'Festival Burst',
    posterTypes: ['SOCIAL EVENT POSTER'],
    topics: ['FUNDRAISER'],
    colorPalette: ['Red', 'Orange', 'Yellow'],
    styleTags: ['Playful', 'Illustrated'],
    thumbnail: eventFestival,
    createdBy: 'Elle Rivers',
    date: '06/01/2024',
    useCount: 1102,
    likes: 174,
    description: 'Illustration-forward layout that highlights performers or attractions.',
    layout: {
      background: '#fff1f2',
      elements: [
        { type: 'text', style: 'title', content: 'Festival Name' },
        { type: 'text', style: 'body', content: 'Line-up or schedule details.' },
        { type: 'graphic', style: 'illustration', content: 'Feature artwork.' }
      ]
    }
  },
  {
    id: 'research-bold',
    name: 'Impact Abstract',
    posterTypes: ['RESEARCH/ACADEMIC POSTER', 'ORGANIZATIONAL'],
    topics: ['CONFERENCE', 'FUNDRAISER'],
    colorPalette: ['Blue', 'Red', 'Purple'],
    styleTags: ['Bold', 'Editorial'],
    thumbnail: researchBold,
    createdBy: 'Theo Marshall',
    date: '05/24/2024',
    useCount: 1987,
    likes: 284,
    description: 'Editorial-style layout with split columns and strong typography.',
    layout: {
      background: '#e8edff',
      elements: [
        { type: 'text', style: 'title', content: 'Impact Title' },
        { type: 'text', style: 'body', content: 'Problem statement and outcomes.' },
        { type: 'graphic', style: 'chart', content: 'Impact visualization.' }
      ]
    }
  }
]

