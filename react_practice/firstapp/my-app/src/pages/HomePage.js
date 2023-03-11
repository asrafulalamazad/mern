import React, {Component} from 'react';
import HomeBanner from "../components/HomeBanner";

class HomePage extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <HomeBanner title= "Welcome" subtitle= " to my website" info={{name:'Asraful Alam', city: 'Feni'} }/>
            </div>
        );
    }
}

export default HomePage;