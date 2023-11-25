interface CardProps {
  label?: string;
  description?: string;
  authorName?: string;
  authortitle?: string;
}

const Card: React.FC<CardProps> = ({
  label,
  description,
  authorName,
  authortitle
}) => {
    return (
        <div className="jsx-4097859045 card">
        <div className="jsx-4097859045 card-body">
          <div className="jsx-4097859045 testimonial">
            <span className="jsx-4097859045 companyName">{label}</span>
            <p style={{ display: "flex" }} className="jsx-4097859045">
              <span className="jsx-4097859045">
               {description}
              </span>
            </p>
          </div>
          <div className="jsx-4097859045 who">
            <div className="jsx-4097859045 human">
              <div className="lazyload-wrapper ">
                <img
                  src="img/customers/testimonials/microsoft.jpeg"
                  alt="Drizl Founder"
                  className="jsx-4097859045"
                />
              </div>
            </div>
            <p
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
              className="jsx-4097859045"
            >
              <span className="jsx-4097859045 authorName">{authorName}</span>
              <span className="jsx-4097859045 authorTitle">{authortitle}</span>
            </p>
          </div>
        </div>
      </div>
    )
}

export default Card