import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Projects = () => {
    return (
        <div
            className="h-screen w-full bg-cover bg-no-repeat"
            style={{ backgroundImage: "url('/background3.jpg')" }} // Ensure the path is correct
        >
            <Navbar />
            <h2 className="text-left text-[5vmin] font-serif p-4">My Projects</h2>
            <div className="flex justify-between flex-wrap p-4">
                <div className="flex-1 m-2.5 max-w-[45%] shadow-md p-2.5 rounded">
                    <h3 className="text-xl font-bold">Resume Builder</h3>
                    <img src="project1.jpg" className="max-w-full h-[49vmin] rounded" alt="Resume Builder" />
                    <p className="font-sans text-[1.5rem] text-[#04024f]">A web application to create and customize resumes.</p>
                    <a 
                        href="https://hackathonmilestone1-2-xi.vercel.app/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-500 hover:underline"
                    >
                        View Project
                    </a>
                </div>
                <div className="flex-1 m-2.5 max-w-[45%] shadow-md p-2.5 rounded">
                    <h3 className="text-xl font-bold">Skincare Website</h3>
                    <img src="project2.jpg" className="max-w-full h-[49vmin] rounded" alt="Skincare Website" />
                    <p className="font-sans text-[1.5rem] text-[#04024f]">A skincare tips showcase website.</p>
                    <a 
                        href="https://skincare-website-with-custom-css.vercel.app/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-500 hover:underline"
                    >
                        View Project
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Projects;