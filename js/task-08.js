const logForm = document.querySelector("form.login-form");
const obj = {}

logForm.addEventListener("submit", onHandleSubmit);

function onHandleSubmit(e) {
    e.preventDefault();
if (!e.target.elements.email.value || !e.target.elements.password.value) {
    alert("all fields must be fill")

} else {
    obj.name = e.target.elements.email.value;
    obj.password = e.target.elements.password.value;
    console.log(obj)
    logForm.reset();
}

}