// All content is static placeholder data. Replace with official AIIMS Bhopal content.
export interface MenuItem { label: string; icon: string; desc: string; link: string; }
export interface MenuGroup { label: string; link: string; blurb: string; items: MenuItem[]; }
const m = (label: string, icon: string, link: string, desc = 'Official information will be updated here.'): MenuItem => ({ label, icon, desc, link });
export const MENU: MenuGroup[] = [
  { label: 'Home', link: '/', blurb: '', items: [] },
  { label: 'About Us', link: '/about-us', blurb: 'The institute, its vision and people.', items: [
    m('About AIIMS Bhopal','🏛️','/about-us'), m('Vision & Mission','🎯','/about-us'), m('Institute Profile','📘','/about-us'), m("Director's Message",'✉️','/about-us'),
    m('History','🕰️','/about-us'), m('Campus','🌳','/about-us'), m('Organisational Structure','🧭','/about-us')] },
  { label: 'Administration', link: '/administration', blurb: 'Leadership, committees and contacts.', items: [
    m('Director','👤','/administration'), m('Dean','🎓','/administration'), m('Medical Superintendent','🩺','/administration'), m('Administrative Officers','🗂️','/administration'),
    m('Departments','🏢','/administration'), m('Committees','👥','/administration'), m('Contact Directory','📞','/administration')] },
  { label: 'Academics', link: '/academics', blurb: 'Programmes, calendar and student life.', items: [
    m('Undergraduate','🎓','/academics'), m('Postgraduate','📚','/academics'), m('Super Specialty','🔬','/academics'), m('Nursing','💉','/academics'),
    m('Paramedical','🚑','/academics'), m('Academic Calendar','📅','/academics'), m('Examination','📝','/academics'), m('Student Corner','🧑‍🎓','/academics')] },
  { label: 'Hospital', link: '/hospital', blurb: 'Patient care and clinical services.', items: [
    m('OPD','🩺','/hospital'), m('Emergency','🚨','/hospital'), m('Departments','🏥','/hospital'), m('Specialities','❤️','/hospital'), m('Patient Services','🤝','/hospital'),
    m('Diagnostic Services','🧪','/hospital'), m('Pharmacy','💊','/hospital'), m('Blood Bank','🩸','/hospital'), m('Health Information','ℹ️','/hospital')] },
  { label: 'Research', link: '/research', blurb: 'Science that improves care.', items: [
    m('Research Areas','🧬','/research'), m('Research Projects','🔭','/research'), m('Publications','📄','/research'), m('Clinical Research','🧫','/research'),
    m('Research Facilities','⚗️','/research'), m('Ethics Committee','⚖️','/research')] },
  { label: 'Gallery', link: '/gallery', blurb: '', items: [] },
  { label: 'Resources', link: '/resources', blurb: 'Documents, forms and citizen services.', items: [
    m('Downloads','⬇️','/resources'), m('Forms','📋','/resources'), m('Important Links','🔗','/resources'), m('Citizen Services','🏛️','/resources'), m('Policies','📜','/resources'), m('Reports','📊','/resources')] },
  { label: 'Tender', link: '/tender', blurb: 'Procurement notices.', items: [
    m('Active Tenders','📌','/tender'), m('Tender Notices','📣','/tender'), m('Corrigendum','✏️','/tender'), m('Procurement','🛒','/tender'), m('Archived Tenders','🗄️','/tender')] }
];
export const SLIDES = [
  { title: 'Excellence in Healthcare, Education & Research', text: 'Placeholder text. Official information will be updated here.', cta: [['Explore Hospital','/hospital'],['Academic Programs','/academics']], bg: 'linear-gradient(120deg,#0b2a5b,#1a5a8c)' },
  { title: 'Advancing Healthcare Through Research', text: 'Placeholder text. Official information will be updated here.', cta: [['Explore Research','/research']], bg: 'linear-gradient(120deg,#08424a,#14807f)' },
  { title: 'Compassionate Care, Around the Clock', text: 'Placeholder text. Official information will be updated here.', cta: [['Patient Services','/hospital']], bg: 'linear-gradient(120deg,#102a43,#2b6f7a)' }
];
export const QUICK = [
  { label: 'OPD Appointment', icon: '📅', link: '/hospital' }, { label: 'Emergency', icon: '🚨', link: '/hospital', urgent: true },
  { label: 'Patient Services', icon: '🤝', link: '/hospital' }, { label: 'Academic Programs', icon: '🎓', link: '/academics' },
  { label: 'Recruitment', icon: '💼', link: '/resources' }, { label: 'Contact Us', icon: '📞', link: '/administration' }
];
export const OFFICIALS = Array.from({ length: 5 }, (_, i) => ({
  name: 'Official Name', designation: 'Designation', image: `/assets/images/official-${i + 1}.png`, description: 'Official profile information'
}));
export const NOTICES = [
  { date: '2026-10-01', title: 'Recruitment Notice (sample)' }, { date: '2026-09-28', title: 'Academic Schedule (sample)' },
  { date: '2026-09-22', title: 'Hospital Circular (sample)' }, { date: '2026-09-15', title: 'Important Announcement (sample)' }
];
export const EVENTS = [{ day: 15, kind: 'Academic Event' }, { day: 20, kind: 'Holiday' }, { day: 27, kind: 'Important Event' }];
export const POSTS = [1, 2, 3].map(n => ({ page: 'AIIMS Bhopal', date: `0${n} Oct 2026`, text: 'Sample post text. Static placeholder, no Facebook API used.' }));
export const SERVICES = [
  ['Patient Care','🩺','24×7 healthcare and specialised medical services.'], ['Emergency Services','🚨','Round-the-clock emergency medical care.'],
  ['OPD Services','🏥','Outpatient consultation and specialist services.'], ['Diagnostic Services','🧪','Advanced laboratory and diagnostic facilities.'],
  ['Pharmacy','💊','Hospital pharmacy and medication services.'], ['Blood Bank','🩸','Blood storage and transfusion services.'],
  ['Telemedicine','💻','Digital healthcare and remote consultation services.'], ['Academic Services','🎓','Education and training for medical and healthcare professionals.']
].map(([title, icon, desc]) => ({ title, icon, desc }));
export const GALLERY_CATS = ['All', 'Campus', 'Hospital', 'Events', 'Academic', 'Conferences', 'Visits'];
export const GALLERY = Array.from({ length: 12 }, (_, i) => ({ cat: GALLERY_CATS[(i % 6) + 1], src: `assets/images/gallery-${i + 1}.jpg`, tall: i % 3 === 0 }));
export const TICKER = ['Sample: OPD timings update', 'Sample: Recruitment notice', 'Sample: Academic calendar published'];
