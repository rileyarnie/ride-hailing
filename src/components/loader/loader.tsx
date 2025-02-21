import "./loader.css";

const Loader = ({ text }: { text: string }) => {
  return (
    <div className="flex flex-col justify-between items-center space-y-4 p-4">
      <span className="loader"></span>
      <p className="capitalize">{text}</p>
    </div>
  );
};

export default Loader;
