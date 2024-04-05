import './DetailAccount.css';

// eslint-disable-next-line react/prop-types
const DetailAccount = ({text, value}) => {
  return (
    <div className="detail-info">
      <p className='info'>{text} </p>
      <p className="value"> {value} </p>
    </div>
  );
};

export default DetailAccount;
