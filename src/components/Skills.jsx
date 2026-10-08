import { useState } from 'react';
import SectionTitle from './SectionTitle';

// Verified React Icons
import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
  SiGithub,
} from 'react-icons/si';

import {
  TbDeviceMobileCode,
  TbApi,
  TbBrain,
  TbBug,
  TbBrowserCheck,
  TbSparkles,
  TbBrandVscode,
  TbRocket,
} from 'react-icons/tb';

import { FaCss3Alt, FaMicrosoft, FaCode } from 'react-icons/fa6';
import { LuLayoutTemplate } from 'react-icons/lu';
import { RiRobot2Line } from 'react-icons/ri';

// Icon Map with official react-icons components
const SKILL_ICONS_MAP = {
  antigravity: TbRocket,
  html5: SiHtml5,
  css3: FaCss3Alt,
  javascript: SiJavascript,
  react: SiReact,
  nextjs: SiNextdotjs,
  responsive: TbDeviceMobileCode,
  api: TbApi,
  tailwind: SiTailwindcss,
  bootstrap: SiBootstrap,
  ui: LuLayoutTemplate,
  git: SiGit,
  github: SiGithub,
  vscode: TbBrandVscode,
  devtools: TbBrowserCheck,
  office: FaMicrosoft,
  prompt: TbSparkles,
  ai: RiRobot2Line,
  problem: TbBrain,
  debug: TbBug,
};

function SkillIconRenderer({ iconKey }) {
  const IconComponent = SKILL_ICONS_MAP[iconKey] || FaCode;
  return <IconComponent aria-hidden="true" size={26} />;
}

const ALL_TAB = 'All Skills';

export default function Skills({ skills }) {
  const categories = Object.keys(skills);
  const TABS = [ALL_TAB, ...categories];
  const [activeTab, setActiveTab] = useState(ALL_TAB);

  const visibleCategories = activeTab === ALL_TAB
    ? Object.entries(skills)
    : [[activeTab, skills[activeTab] || []]];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <SectionTitle
          label="Skills"
          heading="My Technical Skills"
          subtext="A curated set of technologies and tools I work with to build quality web experiences."
        />

        {/* Category Tabs */}
        <div className="skills__tabs reveal-up delay-100" role="tablist" aria-label="Skill categories">
          {TABS.map(tab => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              className={`skills__tab${activeTab === tab ? ' skills__tab--active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skill Grids */}
        {visibleCategories.map(([category, items]) => (
          items && items.length > 0 && (
            <div key={category} className="skills__category skills__category--visible" role="tabpanel">
              {activeTab === ALL_TAB && (
                <h3 className="skills__category-title">{category}</h3>
              )}
              <div className="skills__grid">
                {items.map((skill) => (
                  <div key={skill.name} className="skill-card hover-float" aria-label={skill.name}>
                    <div className="skill-card__icon">
                      <SkillIconRenderer iconKey={skill.icon} />
                    </div>
                    <span className="skill-card__name">{skill.name}</span>
                  </div>
                ))}
              </div>
              {activeTab === ALL_TAB && <div style={{ marginBottom: '40px' }} />}
            </div>
          )
        ))}
      </div>
    </section>
  );
}
