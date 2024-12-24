const Experience = () => {
    return (
        <section className=" p-4 font-primary bg-primary text-white rounded-lg shadow-xl">
            <h5 className="text-lg font-semibold text-accent ">Full-Stack Developer Intern</h5>
            <h6 className="text-md text-accent">Projectile45</h6>
            <p className="text-sm  mt-2">
                <span className="font-medium">Role:</span> Full-Stack Developer Intern — Next.js, Node.js, Tailwind CSS, MongoDB <br />
                <span className="font-medium">Duration:</span> Nov 2024 – Present
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-2 text-sm ">
                <li>
                    Developed a robust and scalable full-stack web application for the EdTech startup Projectile45, delivering seamless user experiences and efficient functionality.
                </li>
                <li>
                    Designed and implemented responsive user interfaces using Next.js and integrated secure, scalable back-end APIs with Node.js and MongoDB.
                </li>
            </ul>
        </section>
    );
};

export default Experience;
