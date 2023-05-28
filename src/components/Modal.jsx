import PropTypes from 'prop-types';

export default function Modal({ isOpen, onClose }) {
  const modalClassName = isOpen ? "fixed inset-0 flex items-center justify-center z-50" : "hidden";
  const overlayClassName = isOpen ? "absolute inset-0 bg-black opacity-75 h-screen" : "";

  return (
    <>
      <div className={modalClassName}>
        <div className="relative bg-white w-1/2 p-6 rounded-lg">
          {/* Modal content */}
          <h2 className="text-xl font-bold">Modal Title</h2>
          <p className="mt-2">Modal content goes here.</p>
          <button
            className="mt-4 px-4 py-2 bg-gray-900 text-white rounded-lg"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
      <div className={overlayClassName}></div>
    </>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
