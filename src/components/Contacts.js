import React, { Component } from 'react'
import Contact from './Contact';

class Contacts extends Component {
    
    constructor(){
        super();
        this.state = {
            contacts:[
                {
                    id:1,
                    name: "Sam Kolder",
                    email: "sam@coldmedia.com",
                    phone: "5555-5555-5555"
                },
                {
                    id:1,
                    name: "Swarn Suvarna",
                    email: "info@dev.com",
                    phone: "55545-5555-5555"
                },
                {
                    id:1,
                    name: "John doe",
                    email: "john@meme.com",
                    phone: "5755-5555-5555"
                }
            ]
        }
    }

    render() {
        const {contacts} = this.state;
        return (
            <div>
                {contacts.map(contact => <h1>{contact.name}</h1>)}
            </div>
        )
    }
}

export default Contacts;