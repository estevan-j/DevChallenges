import './DetailRepo.css'
// eslint-disable-next-line react/prop-types
const DetailRepo = ({img, text}) => {
  return (
    <div className="feature-icon">
      <img src={`/${img}.svg`} />
      <span>{text}</span>
    </div>
  );
};

export default DetailRepo;
