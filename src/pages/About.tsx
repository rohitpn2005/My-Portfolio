import { GraduationCap, Award, Heart } from 'lucide-react';
import aboutMeImage from '@/assets/about-me.jpeg';

const education = [
  {
    institution: 'Amrita Vishwa Vidyapeetham',
    degree: 'B.Tech in Computer Science and Engineering (AI)',
    period: 'Aug 2023 – Present',
    grade: 'GPA: 8.50 / 10.0',
  },
  {
    institution: 'Indian Institute of Technology Madras',
    degree: 'B.Sc in Data Science',
    period: 'Sep 2023 – Present',
    grade: 'GPA: 7.01 / 10.0',
  },
  {
    institution: 'Narayana CO – Kaveri Bhavan',
    degree: 'Intermediate (CBSE)',
    period: 'Apr 2021 – Mar 2023',
    grade: 'CBSE: 85.8%',
  },
  {
    institution: 'Notre Dame Academy',
    degree: 'ICSE (Science)',
    period: 'Apr 2014 – Mar 2021',
    grade: 'ICSE: 95.4%',
  },
];

const achievements = [
  'Startathon – 3rd Place Winner, AMAL Club, Amrita (2025)',
  'Hack Your Life Hackathon – 3rd Place Winner, Dastaan Multifest (2025)',
  'Executive, FACE Club – Managed Marketing Operations',
  'Executive, NSDC Club – Organized Technical Workshops',
  'Treasurer, Narthana Club – Managed Accounts and Events',
];

const volunteering = [
  {
    title: 'Live-In-Labs, Jitwarpur Village, Bihar',
    org: 'Amrita Vishwa Vidyapeetham',
    desc: 'Led a week-long rural immersion focusing on sanitation, water access, and livelihood challenges. Collaborated with Madhubani artists to co-create sustainable solutions.',
  },
  {
    title: 'Business Data Management Project',
    org: 'IIT Madras',
    desc: 'Analyzed business operations for a local cafe, proposing data-driven solutions for profitability and customer growth.',
  },
  {
    title: 'Amala Bharatham Campaign',
    org: 'Majestic Bus Stand, Karnataka',
    desc: 'Volunteered in public space cleaning and waste segregation initiatives to promote environmental hygiene.',
  },
];

const About = () => {
  return (
    <section className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 opacity-0 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold">
            About <span className="text-gradient">Me</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate about AI, research, and creating technology that makes a difference
          </p>
        </div>

        {/* Summary with Image */}
        <div className="glass p-8 opacity-0 animate-fade-in-up animation-delay-200">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-48 h-48 md:w-56 md:h-56 flex-shrink-0 rounded-full overflow-hidden border-2 border-primary/30">
              <img 
                src={aboutMeImage} 
                alt="Rohit Praveen Nair" 
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Passionate AI and Data Science student with a strong foundation in Machine Learning, 
              Deep Learning, and Software Engineering. Skilled in Python, Java, and web technologies, 
              with hands-on experience in intelligent systems, data analysis, and user-focused projects. 
              Actively involved in academic and collaborative research, with IEEE/IMPeC publications, 
              hackathon achievements, and team leadership experience.
            </p>
          </div>
        </div>

        {/* Education */}
        <div className="space-y-6 opacity-0 animate-fade-in-up animation-delay-400">
          <div className="flex items-center gap-3">
            <GraduationCap className="text-primary" size={28} />
            <h2 className="text-2xl font-semibold">Education</h2>
          </div>
          <div className="grid gap-4">
            {education.map((edu, index) => (
              <div
                key={index}
                className="glass p-6 hover:border-primary/50 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-lg">{edu.institution}</h3>
                    <p className="text-muted-foreground">{edu.degree}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">{edu.period}</p>
                    <p className="text-primary font-medium">{edu.grade}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="space-y-6 opacity-0 animate-fade-in-up animation-delay-600">
          <div className="flex items-center gap-3">
            <Award className="text-primary" size={28} />
            <h2 className="text-2xl font-semibold">Achievements</h2>
          </div>
          <div className="glass p-6">
            <ul className="space-y-3">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary mt-1">▸</span>
                  <span className="text-muted-foreground">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Volunteering */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Heart className="text-primary" size={28} />
            <h2 className="text-2xl font-semibold">Volunteering</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {volunteering.map((vol, index) => (
              <div
                key={index}
                className="glass p-6 hover:border-primary/50 transition-colors"
              >
                <h3 className="font-semibold mb-1">{vol.title}</h3>
                <p className="text-sm text-primary mb-3">{vol.org}</p>
                <p className="text-sm text-muted-foreground">{vol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
