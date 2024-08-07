import { AuthContext } from '../components/AuthInformation';
import { Button } from "@/components/ui/button"
import { useContext } from 'react';

const HomePage = () => {

    const { name } = useContext(AuthContext);

    return (
        <div>
            this is the home page of this components {name}
            <Button variant="destructive">this is the shadcn button</Button>
        </div>
    );
};

export default HomePage;