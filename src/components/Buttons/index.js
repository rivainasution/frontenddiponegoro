import { Button } from "react-bootstrap";

function Buttons(prop){
    return (
        <div className="my-3 text-center">
            <Button variant="primary" type="submit">{prop.button}</Button>
        </div>
    );
}
export default Buttons;