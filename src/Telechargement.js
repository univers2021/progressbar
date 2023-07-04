import "./telechargement.css";

const Telechargement = ({ width }) => {
  const styles = {
    width: `${width}%`,
    height: "19px",

    position: "absolute",
    top: 0,
    left: 0
  };
  return (
    <div className="tele">
      <div className="bartele">
        <span style={styles}></span>
      </div>
    </div>
  );
};
export default Telechargement;
