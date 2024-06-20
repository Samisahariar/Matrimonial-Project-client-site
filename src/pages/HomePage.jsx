import React, { useContext } from 'react';
import { AuthContext } from '../components/AuthInformation';

const HomePage = () => {

    const { name } = useContext(AuthContext);

    return (
        <div>
            this is the home page of this components {name}
        </div>
    );
};

export default HomePage;