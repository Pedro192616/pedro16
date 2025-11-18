function validateName(name) {
  return name.trim() !== '';
}

function validatePhone(phone) {
  const phoneRegex = /^[0-9]{10,15}$/; // Adjust the regex as needed for your phone format
  return phoneRegex.test(phone);
}

function validateService(service) {
  return service.trim() !== '';
}

function validateForm(formData) {
  const { name, phone, service } = formData;
  const isValidName = validateName(name);
  const isValidPhone = validatePhone(phone);
  const isValidService = validateService(service);

  return isValidName && isValidPhone && isValidService;
}

export { validateName, validatePhone, validateService, validateForm };