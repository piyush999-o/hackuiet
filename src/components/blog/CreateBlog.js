import React from 'react'

const CreateBlog = () => {
    const host = "https://tanpi99.herokuapp.com";

    const createBlog = (event) => {
        event.preventDefault();
        
        const title = event.target.title.value;
        const content = event.target.content.value;
        const slug = event.target.slug.value;
        const author = event.target.author.value;

        fetch(`${host}/blog/`,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: title,
                    content: content,
                    slug: slug,
                    author: author
                })
            })
            .then(function (res) {
                alert("Your Blog has been Created Successfully");
                window.history.push = '/blog'
            })
            .catch(function (res) { alert(res); })
        
    }

    return (
        <>
            <div class="alert alert-warning" role="alert">
                Please Wait After Submitting Form Until You recive a Alert!
            </div>
            <form className='container mt-3' onSubmit={createBlog}>
                <div className="mb-3">
                    <label for="title" className="form-label">Title:</label>
                    <input type="text" name="title" className="form-control" id="title" aria-describedby="emailHelp" />
                </div>

                <div className="mb-3">
                    <label for="content" className="form-label">Content of your Topic:</label>
                    <textarea className="form-control" name="content" id="content" rows="8"></textarea>
                </div>

                <div className="mb-3">
                    <label for="slug" className="form-label">Slug:</label>
                    <input type="text" name="slug" className="form-control" id="slug" aria-describedby="emailHelp" />
                </div>

                <div className="mb-3">
                    <label for="author" className="form-label">Author:</label>
                    <input type="text" name="author" className="form-control" id="author" aria-describedby="emailHelp" />
                </div>

                <button type="submit" className="btn btn-primary">Create</button>
            </form>
        </>
    )
}

export default CreateBlog
