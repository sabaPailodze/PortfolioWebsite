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
                <img
                  // src="/images/kolkhi.jpg"
                  src="/images/tiksit.jpg"
                  alt="TIKSIT"
                  className="bg-[#fffffff0]"
                />
              </a>
              {/* am images magivrad unda ikos TIKSIT is foto  */}
            </div>
            <div className="text-content">
              <h2>
                TIKSIT — All You Need. One App.
                {/* aq unda ikos chemi teqsti TIKSIT - ze */}
              </h2>
              <p className="text-white-50 md:text-xl">
                From event tickets to restaurant reservations and unique
                experiences — TIKSIT makes discovering and booking simple, fast,
                and seamless.
                {/* aq unda ikos agwera tiksit - is razea dawerili */}
              </p>
            </div>
          </div>
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2}>
              <div className="image-wrapper bg-[#f9f2eaf9]">
                <a href="https://kolkhisea.vercel.app/" target="_blank">
                  <img src="/images/kolkhi.jpg" alt="Kolkhisea" />
                </a>
                {/* aq ikneba KOlkhiseas is foto */}
              </div>
              <h2>
                Kolkhisea - Modern Living, Built for You
                {/* informacia usePopcornze razea dawerili, mokled */}
              </h2>
              <p>
                A real estate and construction company offering high-quality
                apartments for sale. Explore, choose, and invest in your future
                — directly from the source (inProgress).
              </p>
            </div>
            <div className="project" ref={project3}>
              <div className="image-wrapper bg-[#fffffff0]">
                <a
                  href="https://use-popcorn-iota-pearl.vercel.app/"
                  target="_blank"
                >
                  <img
                    src="/images/tiksit.jpg"
                    alt="usePopCorn"
                    className="bg-cover"
                  />
                </a>
                {/* aq ikneba usePopcorn is foto */}
              </div>
              <h2>
                usePopcorn - Your Ultimate Movie Companion
                {/* informacia usePopcornze razea dawerili, mokled */}
              </h2>
              <p>
                Discover films, check details, favorite what you love, and
                manage your watchlist — all with a clean and intuitive
                interface.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;

// dasamatebelia fotoebi da informacia proeqtebze 1:27:01 ze var ytze
