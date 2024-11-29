"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="h-screen w-screen bg-cover bg-no-repeat" style={{ backgroundImage: "url('/background.jpg')" }}>
            <Navbar />
            <h1 className="font-serif text-left pl-[25vmin] pt-[15vmin] text-[5vmin]">Welcome to My Portfolio</h1>
            <div>
                <p className="text-center font-bold italic text-[5vmin] text-[#042460] pr-[90vmin] animate-fadeIn">
                    Hi, I am Abrish Rathoor, a fresh front-end developer. I am enthusiastic about creating dynamic and visually appealing web experiences.
                </p>
                <img src="" alt="" className="mt-4" />
            </div>
            <Footer />
        </div>
    );
};

export default Home;