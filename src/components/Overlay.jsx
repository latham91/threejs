import { Scroll } from "@react-three/drei";

const Section = (props) => {
    return (
        <section
            className={`h-screen w-screen flex flex-col justify-center p-10 ${
                props.right ? "items-end" : "items-start"
            }`}
        >
            <div className="w-1/2 flex items-center justify-center">
                <div className="max-w-md w-full">
                    <div className="bg-slate-800/70 backdrop-blur-lg rounded-lg p-5 border-4 border-white/50">
                        {props.children}
                    </div>
                </div>
            </div>
        </section>
    );
};

export const Overlay = () => {
    return (
        <Scroll html>
            <Section>
                <div className="text-slate-200 flex flex-col gap-3">
                    <h1 className="text-3xl  font-extrabold">Hello World 👋</h1>
                    <p>I'm Aaron, Full-stack developer from Preston, UK.</p>
                    <p>
                        currently enrolled in the Code Nation: Master Software bootcamp, and looking to start my career
                        in the tech industry.
                    </p>
                    <p className="font-semibold text-lg animate-bounce mt-5">Scroll down to see more!</p>
                </div>
            </Section>
            <Section right>
                <div className="text-slate-200 flex flex-col gap-3">
                    <h1 className="text-3xl  font-extrabold">Skills 💻</h1>
                    <p>Some of the skills I&apos;ve picked up on my journey.</p>
                    <ul className="font-semibold">
                        <li>- HTML</li>
                        <li>- CSS</li>
                        <li>- JavaScript</li>
                        <li>- React.js</li>
                        <li>- TailwindCSS</li>
                        <li>- Node.js</li>
                        <li>- MongoDB</li>
                        <li>- MySQL</li>
                        <li>- Sequelize</li>
                    </ul>
                </div>
            </Section>
            <Section>
                <div className="text-slate-200 flex flex-col gap-3">
                    <h1 className="text-3xl  font-extrabold">Contact me 📞</h1>
                    <p>Get in touch with me.</p>
                    <ul>
                        <li>- in/aaronlathamdev</li>
                        <li>- github.com/latham91</li>
                    </ul>
                    <p>Thanks!</p>
                </div>
            </Section>
        </Scroll>
    );
};
