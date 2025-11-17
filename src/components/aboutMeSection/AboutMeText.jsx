import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I’m Anwar. My academic journey began at Rajshahi University, where I
        initially pursued a subject that wasn’t my first choice. However, this
        experience was pivotal in helping me discover my true passion for
        Computer Science and Engineering (CSE). I then transferred to BRAC
        University, joining the CSE department, where I started with Python and
        later self-learned C and C++. My curiosity led me to explore app
        development using Java, where I built small projects that strengthened
        my problem-solving and coding abilities. Recognizing the expanding
        opportunities in web development, I transitioned into this field,
        gaining hands-on experience in creating responsive and functional web
        applications. Currently, I am deeply engaged in my thesis research,
        focusing on machine learning for Natural Language Processing (NLP) in
        the medical field, with the goal of making meaningful contributions to
        this evolving domain.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
