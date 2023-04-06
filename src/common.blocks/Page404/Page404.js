import "./Page404.css";
import Background from "../Background/Background";
import Page404Title from "./__Title/Page404Title";
import Page404TextAndButton from "./__TextAndButton/Page404TextAndButton";
import Page404Picture from "./__Picture/Page404Picture";

const Page404 = () => {
  return (
    <>
      <Background />
      <main aria-label="404" className="Page-404">
        <Page404Title />
        <Page404TextAndButton />
        <Page404Picture />
      </main>
    </>
  );
};

export default Page404;
