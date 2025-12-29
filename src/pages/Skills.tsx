import { Code, Database, Wrench, Brain } from 'lucide-react';

const skillCategories = [
  {
    icon: Code,
    title: 'Languages',
    skills: ['Python', 'Java', 'SQL', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    icon: Database,
    title: 'Databases',
    skills: ['Oracle 11g', 'MySQL', 'MongoDB'],
  },
  {
    icon: Wrench,
    title: 'Tools & Platforms',
    skills: ['Jupyter Notebook', 'VS Code', 'AWS', 'MATLAB', 'Arduino UNO', 'Docker', 'Git'],
  },
  {
    icon: Brain,
    title: 'AI & ML',
    skills: ['Machine Learning', 'Deep Learning', 'PyTorch', 'Computer Vision', 'NLP', 'Transformers'],
  },
];

const certifications = [
  'Academy Cloud Foundations – AWS',
  'IITM Pravartak Machine Learning Certification',
  'HackerRank Python Basic Assessment',
  'Google Cloud: Introduction to Generative AI',
];

const softSkills = ['Team Leadership', 'Communication', 'Team Collaboration', 'Problem Solving'];

const Skills = () => {
  return (
    <section className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 opacity-0 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold">
            Skills & <span className="text-gradient">Expertise</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A blend of technical expertise and soft skills developed through projects and collaborations
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 opacity-0 animate-fade-in-up animation-delay-200">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass p-6 group hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <category.icon className="text-primary" size={24} />
                <h3 className="font-semibold text-lg">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 text-sm bg-secondary text-foreground border border-border hover:border-primary/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="space-y-6 opacity-0 animate-fade-in-up animation-delay-400">
          <h2 className="text-2xl font-semibold text-center">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="glass p-4 flex items-center gap-3 hover:border-primary/50 transition-colors"
              >
                <div className="w-2 h-2 bg-primary" />
                <p className="text-muted-foreground">{cert}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="space-y-6 opacity-0 animate-fade-in-up animation-delay-600">
          <h2 className="text-2xl font-semibold text-center">Soft Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill, index) => (
              <span
                key={index}
                className="px-6 py-3 text-lg font-medium glass text-gradient hover:glow-primary transition-all"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Skill Visualization */}
        <div className="glass p-8 opacity-0 animate-fade-in-up">
          <h2 className="text-xl font-semibold mb-6 text-center">Proficiency</h2>
          <div className="space-y-4">
            {[
              { name: 'Python', level: 90 },
              { name: 'Machine Learning', level: 85 },
              { name: 'Deep Learning', level: 80 },
              { name: 'Web Development', level: 75 },
              { name: 'Data Analysis', level: 85 },
            ].map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
