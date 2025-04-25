import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1 = useRef(null);
  const project2 = useRef(null);
  const project3 = useRef(null);

  useGSAP(() => {
    const projects = [project1.current, project2.current, project3.current];
    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: { trigger: card, start: "top bottom-=100 " },
        }
      );
    });
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);
  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div className="first-project-wrapper" ref={project1}>
            <div className="image-wrapper">
              <a href="https://tiksit.com/     " target="_blank">
                <img src="/images/project1.png" alt="TIKSIT" />
              </a>
              {/* am images magivrad unda ikos TIKSIT is foto  */}
            </div>
            <div className="text-content">
              <h2>
                On Demand Rides Made Simple With a Powerfull, User-Friendly App
                Called Ryde
                {/* aq unda ikos chemi teqsti TIKSIT - ze */}
              </h2>
              <p className="text-white-50 md:text-xl">
                An app build with React and Next.js
                {/* aq unda ikos agwera tiksit - is razea dawerili */}
              </p>
            </div>
          </div>
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2}>
              <div className="image-wrapper bg-[#ffeddb]">
                <a href="https://kolkhisea.vercel.app/" target="_blank">
                  <img src="/images/project2.png" alt="Kolkhisea" />
                </a>
                {/* aq ikneba KOlkhiseas is foto */}
              </div>
              <h2>
                Kolkhisea information
                {/* informacia usePopcornze razea dawerili, mokled */}
              </h2>
            </div>
            <div className="project" ref={project3}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <a
                  href="https://use-popcorn-iota-pearl.vercel.app/"
                  target="_blank"
                >
                  <img src="/images/project3.png" alt="usePopCorn" />
                </a>
                {/* aq ikneba usePopcorn is foto */}
              </div>
              <h2>
                usePopcorn information
                {/* informacia usePopcornze razea dawerili, mokled */}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;

// dasamatebelia fotoebi da informacia proeqtebze 1:27:01 ze var ytze
