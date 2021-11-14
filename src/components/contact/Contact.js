import React from 'react';

const Contact = () => {
    const host = "https://tanpi99.herokuapp.com";
    
    const submitForm = async (event) => {
        event.preventDefault();
        
        const fname = event.target.fname.value;
        const lname = event.target.lname.value;
        const email = event.target.email.value;
        const issue = event.target.issue.value;

        fetch(`${host}/blog/contact/`,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    first_name: fname,
                    last_name: lname,
                    email: email,
                    problem: issue
                })
            })
            .then(function (res) {
                alert("Your Form have been Submit Successfully");
                window.history.push = '/blog'
            })
            .catch(function (res) { alert(res); })
        
    }

    return (
        <>
            <div class="alert alert-warning" role="alert">
                Please Wait After Submitting Form Until You recive a Alert
            </div>
            <form className='container' onSubmit={submitForm}>
                <div className="mb-3">
                    <label for="fname" className="form-label">First Name</label>
                    <input type="text" name="fname" className="form-control" id="fname" aria-describedby="emailHelp" />
                </div>

                <div className="mb-3">
                    <label for="lname" className="form-label">Last Name</label>
                    <input type="text" name="lname" className="form-control" id="lname" aria-describedby="emailHelp" />
                </div>

                <div className="mb-3">
                    <label for="InputEmail1" className="form-label">Email address</label>
                    <input type="email" name="email"  className="form-control" id="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                
                <div className="mb-3">
                    <label for="issue" className="form-label">How Can I help You?</label>
                    <textarea className="form-control" name="issue" id="issue" rows="5"></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default Contact;
