import { User, Briefcase, Code } from "lucide-react"
export const AboutSection = () => {

    return (
    <section id = "about" className="py-24 px-4 relative"> 
    <div className="container mx-auto max-w-5xl">
         <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className="text-primary ">Me</span>
         </h2>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/*left side div*/}
            <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Aspiring Software Engineer</h3>
                <p className="text-muted-foreground">
                    I’m an aspiring software engineer passionate about turning ideas into functional, real-world solutions. 
                    My journey began with my first lines of C++, and since then I’ve grown as a student, exploring opportunities to develop both academically and personally. 
                    At Calvin University, I study computer science while engaging in campus activities, connecting with peers, and contributing to student communities.
                </p>

                <p className="text-muted-foreground">
                   Beyond academics, I enjoy mentoring others, participating in campus events, and staying active through hobbies like gaming, exploring new technologies, and learning creative skills. 
                   I’m constantly seeking ways to challenge myself, grow as a person, and make meaningful connections. 
                   Balancing school, learning, and personal interests helps me stay motivated and well-rounded in everything I do.
                </p>

                {/*using a div and an 'a' to make a button, technically*/}
                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                    <a href ="#contact" className="cosmic-button">
                        Don't Be A Stranger
                    </a>

                    <a href ="/Alvin Kyere.pdf" download className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                        Download My Résumé
                    </a>
                </div>
            </div>

            {/*right side div*/}
            <div className="grid grid-cols-1 gap-6">
                <div className="gradient-border p-6 card-hover">
                    {/*Divs for Skills section cards*/}
                    <div className="flex items-start gap-4 ">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Code className="h-6 w-6 text-primary"/>
                        </div>
                        <div className="text-left ">
                            <h4 className="font-semibold text-lg"> Developer </h4>
                            <p className="text-muted-foreground">
                            Building reliable software by combining clean code, problem-solving, and creative design.
                            </p>
                        </div>
                    </div>
                </div>
                {/*Second div for Skills Section*/}
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4 ">
                        <div className="p-3 rounded-full bg-primary/10">
                            <User className="h-6 w-6 text-primary"/>
                        </div>
                        <div className="text-left ">
                            <h4 className="font-semibold text-lg"> Leader </h4>
                            <p className="text-muted-foreground">
                            Guiding teams and communities by fostering collaboration, mentorship, and growth.
                            </p>
                        </div>
                    </div>
                </div>
                {/*Third div for Skills Section*/}
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4 ">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Briefcase className="h-6 w-6 text-primary"/>
                        </div>
                        <div className="text-left ">
                            <h4 className="font-semibold text-lg"> Builder </h4>
                            <p className="text-muted-foreground">
                            Transforming ideas into impact through hands-on projects, work experience, and execution.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


         </div>
    </div>
    </section>



         
    )
}