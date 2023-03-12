import SubmitButton from "../SubmitButton";

const Home = () => {
  return (
    <main className="home" aria-label="home">
      <SubmitButton keyword="shop" to="/shop">
        Shop now
      </SubmitButton>
    </main>
  );
};

export default Home;
