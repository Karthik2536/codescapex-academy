import React from 'react'
import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://code-scapex-test.vercel.app'
const LOGO_URL = `${SITE_URL}/codescapex-logo.jpeg`

const KEYWORDS = [
  'Code Scapex Academy',
  'Code Scapex',
  'Code Scapex Chennai',
  'Placement Training',
  'Placement Programs',
  'College Placements',
  'Campus Placements',
  'Placement Skills',
  'Placement Preparation',
  'Technical Training',
  'Employability Training',
  'Engineering Training',
  'College Training',
  'Student Training',
  'Coding Training',
  'Programming Training',
  'Technical Skills',
  'Employability Skills',
  'Career Training',
  'Aptitude Training',
  'DSA Training',
  'Java Training',
  'Python Training',
  'SQL Training',
  'Coding Placement',
  'Placement Coaching',
  'Career Preparation',
  'Skill Development',
  'Industry Training',
  'Software Training',
  'Engineering Students',
  'Campus Training',
  'Placement Academy'
].join(', ')

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['EducationalOrganization', 'LocalBusiness'],
  '@id': `${SITE_URL}/#organization`,
  name: 'Code Scapex Academy',
  alternateName: ['Code Scapex', 'Code Scapex Chennai', 'Code Scapex Placement Academy'],
  url: SITE_URL,
  logo: LOGO_URL,
  image: LOGO_URL,
  description:
    'Code Scapex Academy in Chennai is a premier campus placement preparation and technical skills training academy for engineering colleges and students, specializing in Core Java, Python, SQL, DSA, aptitude, and employability skills.',
  telephone: '+919440972536',
  email: 'codescapex@gmail.com',
  priceRange: '₹₹',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    addressCountry: 'IN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 13.0827,
    longitude: 80.2707
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00'
    }
  ],
  areaServed: [
    {
      '@type': 'City',
      name: 'Chennai'
    },
    {
      '@type': 'State',
      name: 'Tamil Nadu'
    },
    {
      '@type': 'Country',
      name: 'India'
    }
  ],
  parentOrganization: {
    '@type': 'Organization',
    name: 'ALTUMERA SOLUTIONS PRIVATE LIMITED'
  },
  sameAs: [
    'https://wa.me/919440972536'
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Placement & Technical Training Programs',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Course',
          name: 'Campus Placement & Aptitude Training',
          description: 'Comprehensive campus placement preparation, aptitude training, reasoning, and technical interview coaching for engineering students.',
          provider: {
            '@type': 'EducationalOrganization',
            name: 'Code Scapex Academy'
          }
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Course',
          name: 'Core Java & Backend Training',
          description: 'Hands-on Core Java, OOPs, collections, Spring Boot, and backend foundations with real-world coding practice.',
          provider: {
            '@type': 'EducationalOrganization',
            name: 'Code Scapex Academy'
          }
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Course',
          name: 'Python & Data Structures and Algorithms (DSA) Training',
          description: 'Python programming, algorithmic thinking, data structures, and competitive coding preparation for campus placements.',
          provider: {
            '@type': 'EducationalOrganization',
            name: 'Code Scapex Academy'
          }
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Course',
          name: 'SQL & Database Engineering',
          description: 'Relational database architecture, queries, joins, optimization, and real-time database exercises.',
          provider: {
            '@type': 'EducationalOrganization',
            name: 'Code Scapex Academy'
          }
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Course',
          name: 'Institutional Workshops & Employability Skills',
          description: 'Customized technical workshops, bootcamps, and employability skills training tailored for engineering colleges.',
          provider: {
            '@type': 'EducationalOrganization',
            name: 'Code Scapex Academy'
          }
        }
      }
    ]
  },
  knowsAbout: [
    'Placement Training',
    'Placement Programs',
    'College Placements',
    'Campus Placements',
    'Placement Skills',
    'Placement Preparation',
    'Technical Training',
    'Employability Training',
    'Engineering Training',
    'College Training',
    'Student Training',
    'Coding Training',
    'Programming Training',
    'Technical Skills',
    'Employability Skills',
    'Career Training',
    'Aptitude Training',
    'DSA Training',
    'Java Training',
    'Python Training',
    'SQL Training',
    'Coding Placement',
    'Placement Coaching',
    'Career Preparation',
    'Skill Development',
    'Industry Training',
    'Software Training',
    'Engineering Students',
    'Campus Training',
    'Placement Academy'
  ]
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which technical and placement training subjects can colleges request?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Core Java, Python, SQL and databases, Web Technologies, Data Structures and Algorithms (DSA), Java backend foundations, aptitude training, campus placement preparation, and customized college workshops.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can placement and technical programs be customized for our engineering students?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The proposed scope is tailored around student year, department, current skill level, learning objectives, placement syllabus, and the institution’s academic timetable.'
      }
    },
    {
      '@type': 'Question',
      name: 'Where does Code Scapex Academy conduct training in Chennai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Code Scapex Academy provides institutional campus training across engineering colleges in Chennai and Tamil Nadu, as well as hands-on interactive workshops and bootcamps.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do engineering colleges request a proposal or quotation for campus training?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Institutions can submit an enquiry via the online form or directly contact codescapex@gmail.com / WhatsApp at +91 94409 72536 with preferred topics, student batch size, and dates.'
      }
    }
  ]
}

export default function SEO() {
  const pageTitle = 'Code Scapex Academy Chennai | Campus Placement & Technical Training'
  const pageDesc =
    'Code Scapex Academy in Chennai delivers premier campus placement training, engineering technical programs, and employability skills in Core Java, Python, SQL, DSA, and aptitude for engineering students.'

  return (
    <Helmet>
      {/* Basic HTML Meta */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDesc} />
      <meta name="keywords" content={KEYWORDS} />
      <meta name="author" content="Code Scapex Academy - ALTUMERA SOLUTIONS PRIVATE LIMITED" />
      <link rel="canonical" href={SITE_URL} />

      {/* Favicon & Touch Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      {/* Crawling & Indexing */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />

      {/* Local SEO / Geo Tags for Chennai, Tamil Nadu */}
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Chennai" />
      <meta name="geo.position" content="13.0827;80.2707" />
      <meta name="ICBM" content="13.0827, 80.2707" />
      <meta name="city" content="Chennai" />
      <meta name="country" content="India" />

      {/* Open Graph / Facebook / WhatsApp */}
      <meta property="og:type" content="business.business" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDesc} />
      <meta property="og:url" content={SITE_URL} />
      <meta property="og:site_name" content="Code Scapex Academy" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:image" content={LOGO_URL} />
      <meta property="og:image:alt" content="Code Scapex Academy - Placement & Technical Training Chennai" />
      <meta property="business:contact_data:locality" content="Chennai" />
      <meta property="business:contact_data:region" content="Tamil Nadu" />
      <meta property="business:contact_data:country_name" content="India" />
      <meta property="business:contact_data:phone_number" content="+919440972536" />
      <meta property="business:contact_data:email" content="codescapex@gmail.com" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDesc} />
      <meta name="twitter:image" content={LOGO_URL} />
      <meta name="twitter:image:alt" content="Code Scapex Academy - Placement Training Chennai" />

      {/* Structured Data: Educational Organization / Local Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>

      {/* Structured Data: FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Helmet>
  )
}
