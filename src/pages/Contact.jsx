export const Contact = () => {



    const handleFormSubmit = (formData) =>{
    // console.log(formData.entries());
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
     
    };




    return <section className="section-contact">
        <h2 className="container-title"> Contact US</h2>

        <div className="contact-wrapper container">


            <form action={handleFormSubmit}>
                

                <input
                    type="text"
                    className="form-control"
                    name="username"
                    placeholder="Enter Your Name"
                    required
                    autoComplete="off"
                />

                <input type="email"
                    className="form-control"
                    placeholder="Enter Your Email"
                    name="email"
                    required
                    autoComplete="off"
                />
                <textarea
                    className="form-control"
                    rows="10"
                    placeholder="Enter Your Message"
                    name="message"
                    required
                    autoComplete="off"
                ></textarea>

                <button type="submit" value="send"> Send</button>

            </form>
        </div>

    </section>
};