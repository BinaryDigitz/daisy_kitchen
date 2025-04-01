import { Messages, Sales } from "../components/exporComp";

function Home() {
  return (
    <section className=" w-full">
      <div>
      <hr className=" border border-red-50 my-2 " />
        <Sales />
        <Messages />
      </div>
    </section>
  );
}

export default Home;
