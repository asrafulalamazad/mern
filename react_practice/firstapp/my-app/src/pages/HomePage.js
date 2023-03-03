import React, {Component} from 'react';
import HomeBanner from "../components/HomeBanner";

class HomePage extends Component {
    render() {
        return (
            <div>
                <HomeBanner title= "Home Page" subtitle= "Welcome to my website" info={{name:'Asraful Alam', city: 'Feni'} }/>
            </div>
        );
    }
}

export default HomePage;