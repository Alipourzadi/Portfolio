import TimeLineComponent from "./TimeLineComponent";

const projects = [
  {
    title: "ShopPay",
    technologies:
      "Next.js , Tailwind css , headless/ui , Next-auth , Yup , Formik , Redux , ...",
    description:
      "This is an E-commerce website which is under development , This website is a full stack project which is created by mainly using nextjs",
    link: "https://ecommerce-shop-beta-five.vercel.app/",
  },
  {
    title: "Oak-Furn",
    technologies:
      "React.js , TypeScript , Framer-Motion , Tailwind css , Redux , React-toastify , React-Router  ...",
    description:
      "This is an E-commerce webiste for home furniture and it's developed via react.",
    link: "https://oak-furn.vercel.app/",
  },
  {
    title: "Weather-app",
    technologies: "React.js ,TypeScript , Tailwind css , React-toastify,...",
    description:
      "This is an app like webiste which show the weather for a given location and it shows the predtion of weather for the next days also",
    link: "https://c63580fb.weather-app-6v6.pages.dev/",
  },
  {
    title: "EvoGym",
    technologies:
      "React.js ,TypeScript , Tailwind css , React-anchor-link ,Framer-Motion, React-hook-form ,...",
    description:
      "This is a website for A gym called Evogym which is coded with React.",
    link: "https://evogym-typescript-3le.pages.dev/",
  },
  {
    title: "Movie-Fight",
    technologies: "HTML, CSS , javascript",
    description:
      "This website is about comparing two movies and showing the best between two,",
    link: "https://movie-fight.pages.dev/",
  },
];

export default function index() {
  return (
    <>
      <h2 className="text-3xl">Projects</h2>
      <ul className="timeline before:bg-gradient-to-b  from-indigo-400 via-pink-400 to-yellow-600 before:rounded-full before:h-full">
        {projects.map((project, idx) => {
          return (
            <TimeLineComponent
              key={idx}
              title={project.title}
              description={project.description}
              technology={project.technologies}
              link={project.link}
            />
          );
        })}
      </ul>
    </>
  );
}
