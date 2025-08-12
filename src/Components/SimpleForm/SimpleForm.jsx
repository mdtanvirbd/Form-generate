const SimpleForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.number.value);

        console.log('form submit');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" />
                <br />
                <input type="email" name="email"></input>
                <br />
                <input type="number"name="number"/>
                <br />
                <input type="submit" value="Submit" />
                
                
            </form>
        </div>
    );
};

export default SimpleForm;
