// Get job title from query parameter
const params = new URLSearchParams(window.location.search);
const job = params.get("job");
if (job) {
  document.getElementById("jobTitle").innerText = job;
}

document.getElementById("applicationForm").addEventListener("submit", async function (event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  try {
    const response = await fetch('http://localhost:5000/submit-application', {
      method: 'POST',
      body: formData
    });

    const result = await response.text();
    alert(result);

    form.reset();
  } catch (error) {
    console.error('Error:', error);
    alert('❌ Something went wrong while submitting your application.');
  }
});
