import type {NavMenu} from './NavMenu'


const nav: Array<NavMenu> = [
  {
    discriminator: 'parent',
    label: 'About',
    children: [ 
      { 
        discriminator: 'child',
        label: 'Message from the president', 
        link: '/about/message-from-president' 
      }, 
      {
        discriminator: 'child',
        label: 'Mission and Vision', 
        link: '/about/mission-and-vision' 
      },
    ]
  },
  {
    discriminator: 'parent',
    label: 'Immigration',
    children: [ 
      { 
        discriminator: 'child',
        label: 'Express Entry', 
        link: '/immigration/express-entry' 
      }, 
      {
        discriminator: 'child',
        label: 'Family Class', 
        link: '/immigration/family-class' 
      },
      {
        discriminator: 'child',
        label: 'LMIA', 
        link: '/immigration/lmia' 
      },
      {
        discriminator: 'child',
        label: 'Student Visa', 
        link: '/immigration/student-visa' 
      },
      {
        discriminator: 'child',
        label: 'Visitor Visa', 
        link: '/immigration/visitor-visa' 
      },
      {
        discriminator: 'child',
        label: 'Work Permit', 
        link: '/immigration/work-permit' 
      },
    ]
  },
  {
    discriminator: 'parent',
    label: 'Recruitment',
    children: [
      {
        discriminator: 'child',
        label: 'Canada',
        link: '/recruitment/canada'
      },
      {
        discriminator: 'child',
        label: 'UK',
        link: '/recruitment/uk'
      },
      {
        discriminator: 'child',
        label: 'US',
        link: '/recruitment/us'
      },
      {
        discriminator: 'child',
        label: 'Ethical Recruitment',
        link: '/recruitment/ethical-recruitment'
      }
    ]
  },
  {
    discriminator: 'parent',
    label: 'Education',
    children: [
      {
        discriminator: 'child',
        label: 'Bow Valley - Health and Human Services Management',
        link: '/education/bow-valley-health-human-services-management'
      },
      {
        discriminator: 'child',
        label: 'Bow Valley',
        link: '/education/bow-valley'
      },
      {
        discriminator: 'child',
        label: 'Concordia University',
        link: '/education/concordia-university'
      },
      {
        discriminator: 'child',
        label: 'MacEwan School of Continuing Education',
        link: '/education/macewan-sce'
      },
      {
        discriminator: 'child',
        label: 'MacEwan',
        link: '/education/macewan'
      },
      {
        discriminator: 'child',
        label: 'NorQuest College',
        link: '/education/norquest-college'
      },
      {
        discriminator: 'child',
        label: 'SAIT',
        link: '/education/sait'
      }
    ]
  }
]

export default nav
