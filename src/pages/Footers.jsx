import footerContact from "../api/footerApi";
export const Footers = () => {
  return (
    <footer className="footer-section">
      <div className="container grid grid-four-cols">
        {footerContact.map((curData, index) => {
          const { icon, title, description } = curData;
          return (
            <div className="footer-contact" key={index}>
              <div className="footer-icon">{icon}</div>
              <h3 className="footer-title">{title}</h3>
              <p className="footer-description">{description}</p>
            </div>
          );
        })}
      </div>
    </footer>
  );
};
