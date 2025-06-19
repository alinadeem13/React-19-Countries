export const Contact = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    const formData = new FormData(event.target); // Create FormData object from the form
    const formInputData = Object.fromEntries(formData.entries()); // Correctly use entries()
    console.log(formInputData);
    alert("Form submitted successfully!");
    event.target.reset(); // Reset the form after submission
  };

  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>
      <div className="contact-wrapper container">
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            className="form-control"
            required
            autoComplete="false"
            placeholder="Enter your Name"
            name="username"
          />
          <input
            className="form-control"
            type="text"
            required
            autoComplete="false"
            placeholder="Enter your email"
            name="email"
          />
          <textarea
            className="form-control"
            rows={10}
            type="text"
            required
            autoComplete="false"
            placeholder="Enter your message"
            name="description"
          ></textarea>
          <button
            type="submit"
            value="send"
            className="btn btn-primary d-flex justify-content-center align-items-center text-center"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};
