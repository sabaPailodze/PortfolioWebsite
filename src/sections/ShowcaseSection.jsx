import React from "react";

const ShowcaseSection = () => {
  return (
    <div id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="TIKSIT" />
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
            <div className="project">
              <div className="image-wrapper bg-[#ffeddb]">
                <img src="/images/project2.png" alt="Kolkhisea" />
                {/* aq ikneba KOlkhiseas is foto */}
              </div>
              <h2>
                Kolkhisea information
                {/* informacia usePopcornze razea dawerili, mokled */}
              </h2>
            </div>
            <div className="project">
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="/images/project3.png" alt="usePopCorn" />
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
    </div>
  );
};

export default ShowcaseSection;

// dasamatebelia fotoebi da informacia proeqtebze
