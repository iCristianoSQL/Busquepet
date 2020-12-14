import "./Style.scss";

export default function HeaderAdoption(props) {
  const { titleName, imageOne, imageTwo, identification } = props;

  return (
    <>
      <header className={identification}>
        <div className="arrow-back">
          <img src={imageOne} alt="seta volta" />
        </div>
          <h1>{titleName}</h1>
        <img src={imageTwo} />
      </header>
    </>
  );
}