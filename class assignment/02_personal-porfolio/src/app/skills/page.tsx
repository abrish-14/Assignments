import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Skills = () => {
    return (
        <div
            className="h-screen w-full bg-cover bg-no-repeat"
            style={{ backgroundImage: "url('/background2.jpg')" }} // Ensure the path is correct
        >
            <Navbar />
            <h2 className="text-left pl-[10vmin] text-[5vmin] font-serif">My Skills</h2>
            <p className="text-left font-extrabold italic text-[#041C60] text-[2.5vmin] pl-[5vw] animate-fadeIn">
                I’m a beginner in programming, exploring and polishing my skills through <br />
                various projects and websites. I’ve been learning programming languages for <br />
                a year now. Currently, I’m enrolled in a Generative AI and Metaverse course <br />
                under the Governor House initiative, which is helping me gain advanced <br />
                knowledge in cutting-edge technologies. <br />
                I have experience with the following technologies:
            </p>
            <div className="text-left font-extrabold italic text-[#041C60] text-[2.5vmin] pl-[5vw] animate-fadeIn">
                <ul>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>TypeScript</li>
                    <li>React.js</li>
                </ul>
            </div>
            <Footer />
        </div>
    );
};

export default Skills;