import {
  Banner,
  Navbar,
  Success,
  Today,
  Unleash,
  Visualize,
  Footer,
} from "../../components";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Unleash />
      <Success />
      {/* <WhatIs /> */}
      <Visualize />
      <Today />
      <Footer />
    </>
  );
};

export default Home;
