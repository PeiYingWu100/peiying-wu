const AboutMe = () => {
  return (
    <div
      role="card"
      className="flex flex-col md:flex-row justify-center xl:justify-between items-center w-full mb-16 flex-wrap shadow-none p-0 mt-10"
    >
      <div className="relative inline-block w-2/5 sm:w-1/3 h-72 lg:h-96 ml-40">
        <img
          className="z-20 w-40 h-auto rounded-lg shadow-md absolute rotate-12 -bottom-20 -right-12"
          src="../../public/dog_2.jpeg"
          alt="dog"
          width="158"
          height="173"
        />
        <img
          className="min-w-64 w-96 h-auto rounded-lg shadow-md absolute -rotate-6 -left-40 sm:-left-32"
          src="../../public/pei_ying_wu_2.png"
          alt="Pei Ying Wu"
          width="135"
          height="240"
        />
      </div>

      <article className="w-full lg:w-1/2 px-0 lg:pl-20 mt-32 text-center lg:text-left text-slate-700 flex flex-col gap-2">
        <p>
          As a developer, I focus on crafting solutions that address real-world
          challenges while making a meaningful social impact.
        </p>
        <p>
          Beyond coding, I enjoy leisurely exploring the city, immersing myself
          in its nuances and charm. I'm also a devoted dog mom, often
          accompanied by my furry friend on my urban adventures.
        </p>
        <p>
          My guiding principle is simple yet profound: "There's always a
          solution to every problem!" This belief fuels my determination to
          uncover innovative solutions.
        </p>
        <p>
          I look forward to connecting and making a positive difference
          together!
        </p>
      </article>
    </div>
  );
};

export default AboutMe;
