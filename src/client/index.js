import { handleSubmit } from "./js/formHandler";
import { isValidUrl } from "./js/urlChecker";

import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";


const urlValue = document.getElementById('url');
const userForm = document.getElementById('form');
const getBtn = document.querySelector("#form input[type=submit]");

userForm.addEventListener("submit", eve => {
eve.preventDefault();
const baseUrl = urlValue.value;


if (isValidUrl(baseUrl)) {
    getBtn.value = "Getting details...";
    handleSubmit(baseUrl,getBtn);
}
});


export { isValidUrl, handleSubmit };
