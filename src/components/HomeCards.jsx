
import PropTypes from 'prop-types';

export default function HomeCards({ item }) {
  return (
    <div className="bg-secondary text-white rounded-md shadow-md overflow-hidden max-w-[410px] relative">
      <img
        className="h-48 w-full object-cover object-center"
        src={item.imageSrc}
        alt={item.title}
      />
      <div className="px-6 pb-8 pt-3">
        <h3 className="text-lg text-center font-bold mb-3 uppercase">
          {item.title}
        </h3>
        <p className="text-base font-medium">{item.description}</p>
      </div>
    </div>
  );
}

HomeCards.propTypes = {
  item: PropTypes.shape({
    imageSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
