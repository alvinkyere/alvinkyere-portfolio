import {useState} from "react"
import {cn} from "@/lib/utils"
const skills = [
  // Frontend
  { name: "HTML/CSS", level: 85, category: "frontend" },
  { name: "React.js", level: 80, category: "frontend" },
  { name: "Next.js", level: 70, category: "frontend" },
  { name: "JavaScript", level: 75, category: "frontend" },

  // Backend
  { name: "Django", level: 70, category: "backend" },
  { name: "Spring Boot", level: 75, category: "backend" },
  { name: "RESTful APIs", level: 80, category: "backend" },

  // Programming Languages
  { name: "Python", level: 85, category: "languages" },
  { name: "Java", level: 80, category: "languages" },
  { name: "C++", level: 70, category: "languages" },
  { name: "C#", level: 65, category: "languages" },

  // Databases
  { name: "SQL", level: 80, category: "databases" },
  { name: "NoSQL", level: 70, category: "databases" },
  { name: "MySQL", level: 75, category: "databases" },
  { name: "PostgreSQL", level: 70, category: "databases" },

  // Tools
  { name: "Git/GitHub", level: 85, category: "tools" },
  { name: "Unity", level: 65, category: "tools" },
  { name: "Pandas", level: 70, category: "tools" },
  { name: "Data Visualization", level: 65, category: "tools" },
  { name: "Microsoft Office 365", level: 90, category: "tools" },
  { name: "Google Suite", level: 85, category: "tools" },

  // Soft Skills
  { name: "Leadership", level: 90, category: "soft" },
  { name: "Communication", level: 85, category: "soft" },
  { name: "Team Collaboration", level: 85, category: "soft" },
  { name: "Problem Solving", level: 80, category: "soft" },
  { name: "Adaptability", level: 85, category: "soft" },
  { name: "Event Planning", level: 80, category: "soft" },
  { name: "Mentorship", level: 75, category: "soft" }
];

const categories = ["all", "frontend", "backend", "languages", "databases", "tools", "soft"]
export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all")
    const filteredSkills =skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory)
    return (
        <section id = "skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills </span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button 
                        key={key} 
                        onClick={() => setActiveCategory(category)}
                        className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary "
                        )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover ">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>

                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                    <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                    style={{width : skill.level + "%"}}
                                    />
                            </div>
                                <div className="text-right mt-1">
                                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                                </div>
                        </div>
                ))}
                </div>

            </div>

            
        </section>
    )
}