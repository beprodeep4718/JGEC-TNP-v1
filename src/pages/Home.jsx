import Hero from "../Components/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <section className="w-full min-h-screen px-20 py-10">
        <div className="w-full flex items-center justify-center border-t-4 border-primary bg-secondary">
          <div className="w-1/2 p-10">
            <h1 className="text-primary text-2xl font-[gilroy-bold]">
              Who are we?
            </h1>
            <h1 className="text-primary text-3xl font-[gilroy-bold]">
              Training and Placement Cell
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
              architecto eligendi dicta aliquam culpa enim laborum. Excepturi
              non molestiae, accusantium ullam minus, quia ad dolorem reiciendis
              odio debitis porro, ipsum nostrum blanditiis magnam sapiente
              voluptate delectus consequatur aliquid! Quo quidem assumenda quos
              iste possimus praesentium, repellat nihil perferendis autem,
              quibusdam sapiente? Cum voluptates inventore dolores, nobis quidem
              ipsam porro mollitia animi odio quibusdam, voluptatum vero fugit
              voluptatem fuga totam itaque! Nulla eius temporibus voluptatem
              debitis odio sint modi cum cumque quae quibusdam itaque nemo
              pariatur consectetur numquam
            </p>
          </div>
          <div className="w-1/2">
            <img className="w-[75%]" src="/assets/images/herobg.png" alt="" />
          </div>
        </div>
        <div className="w-full flex items-center justify-center bg-secondary gap-10 px-10 py-10">
          <div>
            <div className="bg-primary relative mb-4">
              <img
                className="w-20 absolute -top-10 -left-10"
                src="/assets/images/hero.png"
                alt=""
              />
              <h1 className="text-white text-center text-2xl font-[gilroy-bold]">
                Message from Principal
              </h1>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
              architecto eligendi dicta aliquam culpa enim laborum. Excepturi
              non molestiae, accusantium ullam minus, quia ad dolorem reiciendis
              odio debitis porro, ipsum nostrum blanditiis magnam sapiente
              voluptate delectus consequatur aliquid! Quo quidem assumenda quos
              iste possimus praesentium, repellat nihil perferendis autem,
              quibusdam sapiente? Cum voluptates inventore dolores, nobis quidem
              ipsam porro mollitia animi odio quibusdam, voluptatum vero fugit
              voluptatem fuga totam itaque! Nulla eius temporibus voluptatem
              debitis odio sint modi cum cumque quae quibusdam itaque nemo
              pariatur consectetur numquam
            </p>
          </div>
          <div>
            <div className="bg-primary relative mb-4">
              <img
                className="w-20 absolute -top-10 -left-10"
                src="/assets/images/hero.png"
                alt=""
              />
              <h1 className="text-white text-center text-2xl font-[gilroy-bold]">
                Message from TnP Head
              </h1>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
              architecto eligendi dicta aliquam culpa enim laborum. Excepturi
              non molestiae, accusantium ullam minus, quia ad dolorem reiciendis
              odio debitis porro, ipsum nostrum blanditiis magnam sapiente
              voluptate delectus consequatur aliquid! Quo quidem assumenda quos
              iste possimus praesentium, repellat nihil perferendis autem,
              quibusdam sapiente? Cum voluptates inventore dolores, nobis quidem
              ipsam porro mollitia animi odio quibusdam, voluptatum vero fugit
              voluptatem fuga totam itaque! Nulla eius temporibus voluptatem
              debitis odio sint modi cum cumque quae quibusdam itaque nemo
              pariatur consectetur numquam
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
