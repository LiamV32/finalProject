function validate(event) {
  // custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  const latitude = parseFloat(document.querySelector('form').latitude.value);
  const longitude = parseFloat(document.querySelector('form').longitude.value);
  const lon_err = document.querySelector('#longitude-error');
  const lat_err = document.querySelector('#latitude-error');

  if(!latitudeValidation(latitude)){
    lat_err.innerText = 'must be a valid Latitude (-90 to 90)';
    event.preventDefault();
    return false;
  }
  else lat_err.innerText = '';

  if(!longitudeValidation(longitude)){
    lon_err.innerText = 'must be a valid Longitude (-180 to 180)';
    event.preventDefault();
    return false;
  }
  else lon_err.innerText = '';

  return true;
}

function latitudeValidation(latitude){
  return (!Number.isNaN(latitude) && latitude >= -90 && latitude <= 90)? true : false;
}

function longitudeValidation(longitude){
  return (!Number.isNaN(latitude) && longitude >= -180 && longitude <= 180)? true: false;
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
