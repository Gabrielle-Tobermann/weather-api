const weatherForm = () => {
  document.querySelector('#form-container').innerHTML = '<form><div class="mb-3"><label for="location" class="form-label">Enter your location:</label><input type="text" class="form-control" id="location" aria-describedby="location"><button type="submit" class="btn btn-primary" id="submit-location">Submit</button></form>';
};

export default weatherForm;
