import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faTimeline,
  faExclamationTriangle,
  faCogs,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const impactItems = [
    {
      icon: faLightbulb,
      title: "Smart Planning",
      description: "Plan your tasks efficiently to maximize productivity.",
    },
    {
      icon: faTimeline,
      title: "Visual Timeline",
      description: "See your project progress at a glance with our timeline.",
    },
    {
      icon: faExclamationTriangle,
      title: "Problem Management",
      description: "Identify and address issues quickly and effectively.",
    },
    {
      icon: faCogs,
      title: "Flexible Options",
      description: "Customize your workflow with flexible tools and settings.",
    },
    {
      icon: faRocket,
      title: "Innovative Solutions",
      description: "Leverage creative features to enhance team performance.",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-start p-8 gap-8 min-h-screen bg-gray-50 text-darkNavy">
      <section className="text-center max-w-3xl">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          Welcome to Collab Sphere
        </h1>
        <p className="text-lg text-gray-700">
          Organize your projects, tasks, and team workflow efficiently. Drag &
          drop tasks across columns and manage your projects like a pro.
        </p>
      </section>

      <div className="flex items-center justify-between gap-8 p-8 bg-lightGray">
        <div className="flex-1">
          <p className="text-6xl font-bold leading-tight line-clamp-3 mb-4">
            Empower Your Creativity with Our Advanced Tools
          </p>

          <p className="text-lg font-medium leading-snug line-clamp-2">
            Discover a suite of powerful tools designed to streamline your
            workflow and boost productivity
          </p>
        </div>
        <div className="flex-1">
          <div className="w-full h-96 bg-gray-200 flex items-center justify-center bg-gray">
            <span className="text-gray-500">Photo TODO</span>
          </div>
        </div>
      </div>

      <div className="w-full py-12 px-8 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10 ">Impact Driven</h2>

        <div className="w-full flex flex-col gap-6">
          <div className="flex gap-6">
            {impactItems.slice(0, 2).map((item) => (
              <div
                key={item.title}
                className="flex-1 bg-lightPurple rounded p-6 text-center flex flex-col items-center gap-4"
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-4xl text-black"
                />
                <h3 className="font-bold text-xl">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="flex gap-6">
            {impactItems.slice(2, 5).map((item) => (
              <div
                key={item.title}
                className="flex-1 bg-lightPurple rounded p-6 text-center flex flex-col items-center gap-4"
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-4xl text-black"
                />
                <h3 className="font-bold text-xl">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
