import { ArrowRight, ExternalLink } from "lucide-react"
import { Github} from "lucide-react"

const projects = [
    {
        id: 1,
        title: "StudyBuds",
        description: "Developed to connect students securely and efficiently by implementing RESTful APIs for authentication and peer-matching, a Jaccard-based matching algorithm to cut search time in half, and React features for search and filtering that boosted early engagement.",
        image: "/projects/StudyBuds.png",
        tags: ["Python", "Django", "ReactJS", "RESTful APIs", "PostgreSQL"],
        demoUrl: "#",
        githubUrl: "#",
    },

    {
        id: 2,
        title: "Weather App",
        description: "Displays real-time weather updates using API integration, with a clean UI and responsive design. Provides current conditions and forecasts, allowing users to search cities globally and get accurate data.",
        image: "/projects/Weather app with react.png",
        tags: ["ReactJS", "Weather API"],
        demoUrl: "https://weather-app-react-two-pied.vercel.app/",
        githubUrl: "https://github.com/alvinkyere/weather-app-react",
        
    },

    {
        id: 3,
        title: "Flappious Birdy",
        description: "Implements jump physics, collision detection, and scoring to ensure smooth gameplay. Cross-platform ready with Unity’s Input System and deployed on GitHub + itch.io, demonstrating full-cycle development and publishing.",
        image: "/projects/flappy-bird-project.png",
        tags: ["Unity", "C#", "GitHub.io + Itch.io", "RESTful APIs", "PostgreSQL"],
        demoUrl: "https://alvinkyere.itch.io/flappiousbirdy",
        githubUrl: "https://github.com/alvinkyere/Flappious-Birdy",
        
    },
]
export const ProjectsSection = () => {

    return (
        <section id="projects" className="py-24 px-4 relative ">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center "> 
                    Featured
                    <span className="text-primary"> Projects </span>
                </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto ">
            These are some of the projects I’m most proud of, 
            where I’ve been able to explore new technologies, 
            challenge myself, and create things that are both fun and useful.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((projects, key) => (
                <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                    <div className="h-48 overflow-hidden">
                        <img 
                        src={projects.image} 
                        alt={projects.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                    </div>
                    <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {projects.tags.map((tag) => (
                                <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 bg-secondary text-secondary-foreground">{tag}</span>
                            ))}
                        </div>
                    </div>

                <h3 className="text-xl font-semibold mb-1 "> {projects.title} </h3>
                <p className="text-muted-foreground text-xs mb-3">{projects.description}</p>
                <div className="flex justify-between items-center ">
                    <div className="flex space-x-3">
                        <a target="_blank" href={projects.demoUrl} 
                        className="text-foreground/80 hover:text-primary transition-colors duration-300 ">
                            <ExternalLink size={20}/>
                        </a>
                        <a target="_blank" href={projects.githubUrl} 
                        className="text-foreground/80 hover:text-primary transition-colors duration-300 ">
                            <Github size={20}/>
                        </a>
                    </div>
                </div >
            </div>
            ))}
        </div>
        <div className="text-center mt-12">
            <a 
            className="cosmic-button w-fit flex items-center mx-auto gap-5"
            target="_blank" 
            href="https://www.github.com/alvinkyere"> 
                Github <ArrowRight size={16}/>
            </a>
        </div>
    </div>
        </section>
    )
}