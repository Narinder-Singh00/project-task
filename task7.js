function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    alert(`Name: ${name}, Age: ${age}`);
}