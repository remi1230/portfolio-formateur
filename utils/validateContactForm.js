// utils/validateContactForm.js
export default function validateContactForm(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Veuillez renseigner ce champ.';
  if (!form.email.trim()) {
    errors.email = 'Veuillez renseigner ce champ.';
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    errors.email = 'L\'adresse email n\'est pas valide.';
  }

  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = form.message;
  const plainText = tempDiv.textContent || tempDiv.innerText || '';
  if (!plainText.trim()) errors.message = 'Veuillez renseigner ce champ.';

  return errors;
}