const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('submit-location')) {
      e.preventDefault();
      console.warn('location');
      document.querySelector('form').reset();
    }
  });
};

export default domEvents;
