import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';

const Register = () => {

    const {createUser} = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value; 
        const password = form.password.value;
        console.log(name, email,password); 

        createUser(email, password)
        .then((result) => {
            const user = result.user;
            console.log(user);
        })
        .catch((error) => {
            console.error(error);
        })
    }

    return (
        <div className="max-w-sm container mx-auto">
            <Card>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                    <Label
                        htmlFor="Name"
                        value="Your Name"
                    />
                    </div>
                    <TextInput
                    id="name1"
                    type="text"
                    name="name"
                    placeholder="your name"
                    required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                    <Label
                        htmlFor="email1"
                        value="Your email"
                    />
                    </div>
                    <TextInput
                    id="email1"
                    type="email"
                    name="email"
                    placeholder="your email address"
                    required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                    <Label
                        htmlFor="password1"
                        value="Your password"
                    />
                    </div>
                    <TextInput
                    id="password1"
                    type="password"
                    name="password"
                    required={true}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">
                    Remember me
                    </Label>
                </div>
                <Button type="submit">
                    Submit
                </Button>
                </form>
            </Card>
        </div>
    );
};

export default Register;