import Hero from "../Components/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <section className="w-full min-h-screen px-5 lg:px-20 py-10">
        {/* First Section */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-center border-t-4 border-primary bg-secondary">
          <div className="w-full lg:w-1/2 p-5 lg:p-10">
            <h1 className="text-primary text-xl lg:text-2xl font-[gilroy-bold]">
              Who are we?
            </h1>
            <h1 className="text-primary text-2xl lg:text-3xl font-[gilroy-bold]">
              Training and Placement Cell
            </h1>
            <p className="text-sm lg:text-base">
            The Training and Placement Cell at Jalpaiguri College of Engineering (JGEC) is a dynamic and dedicated team
             aimed at bridging the gap between academia and industry. With a primary focus on enhancing the employability 
             of students, the cell works relentlessly to prepare them for the competitive job market by providing comprehensive 
             training, career guidance, and placement assistance.

            Our mission is to create a platform for students to connect with leading organizations, ensuring that they are equipped 
            with the necessary skills, knowledge, and confidence to succeed in their chosen careers.

            We are proud of our long-standing partnerships with top-tier companies and strive to uphold our tradition of excellence 
            in placing students in prestigious national and international firms. Through continuous collaboration with industry leaders,
             we ensure that our students are well-prepared to meet the demands of the evolving job landscape.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <img
              className="w-[90%] lg:w-[75%]"
              src="/assets/images/herobg.png"
              alt=""
            />
          </div>
        </div>

        {/* Second Section */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-center bg-secondary gap-5 lg:gap-10 px-5 lg:px-10 py-10">
          {/* Message from Principal */}
          <div className="w-full lg:w-1/2">
            <div className="bg-primary relative mb-4">
              <img
                className="w-16 lg:w-20 absolute -top-6 lg:-top-10 -left-6 lg:-left-10"
                src="/assets/images/hero.png"
                alt=""
              />
              <h1 className="text-white text-center text-lg lg:text-2xl font-[gilroy-bold]">
                Message from Principal
              </h1>
            </div>
            <p className="text-sm lg:text-base">
            Jalpaiguri Government Engineering College (JGEC) in dedicated to nurturing and creating 
            talent for the service of this country. We emphasize upgrading ourselves continuously to match the 
            industry standards. Our students have secured challenging and highly paid positions in top-ranking 
            companies and organizations in India and abroad. Our students have never missed an opportunity to 
            showcase their potential and skills in every field. With the world's mechanism becoming more and more 
            dynamic daily, innovation is the only way to cope with the competition and I am sure that students of 
            JGEC will meet the Industry's requirements and stand up to the trust placed in them. I take great pride in 
            inviting the recruiters to the Campus Placement Drive and provide these graduating students with an opportunity 
            to prove themselves in their areas and add value to the organizations they join We hope this will provide a 
            positive experience for the recruiters and a step ahead in improving existing relations and establishing new ones.
            </p>
          </div>

          {/* Message from TnP Head */}
          <div className="w-full lg:w-1/2">
            <div className="bg-primary relative mb-4">
              <img
                className="w-16 lg:w-20 absolute -top-6 lg:-top-10 -left-6 lg:-left-10"
                src="/assets/images/hero.png"
                alt=""
              />
              <h1 className="text-white text-center text-lg lg:text-2xl font-[gilroy-bold]">
                Message from TnP Head
              </h1>
            </div>
            <p className="text-sm lg:text-base">
            Jalpaiguri Government Engineering College absorbs one of the best talents in West Bengal 
            and we are further committed to converting this pool of talent into industry leaders and technocrats. 
            We take pride in our academic achievements, and we are very much keen on maintaining this standard, 
            JGEC students aro relevant a wel trained and weil equipped with industry " knowledge, hence we are on par 
            with any other institute Emphasis on the overall development of the student is also focus of this institute 
            achieved through various socio- cultural events. The institute is always putting its best efforts to achieve 
            this goal The strong commitment to providing quality human resources to our the industry that indirectly helps in 
            nation building attracts coveted appreciate recruiters their to visit partnership and our campus confirming regularly. 
            We untiring support to them. Furthermore we welcome all our new partners our in the institute and look for 
            a long healthy, mutually beneficial relationship, We wish you all a symbiotic association with this Institute on 
            behalf of the Training and Placement Cell.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
