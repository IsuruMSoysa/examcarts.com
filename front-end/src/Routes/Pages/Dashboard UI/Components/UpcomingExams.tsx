import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Fragment } from 'react';
import {Col, Container, Row} from "react-bootstrap";

const MyClassDOM: React.FC = () => {
    return (
        <Container fluid className="p-0 bg-dark ">
            <h1>My Classes</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis sed tellus et rutrum. Cras at
                sagittis felis, cursus faucibus nulla. Sed velit justo, auctor vitae dictum tincidunt, congue a libero.
                Aliquam erat volutpat. Nulla a nulla non nisl finibus venenatis. Quisque vel magna condimentum, accumsan
                nisi mattis, tristique diam. Nam in eleifend ante. Quisque pharetra convallis sagittis. Phasellus quis
                sollicitudin erat. Cras ut odio at est pharetra dictum in vitae nisl. Nunc massa magna, fermentum sed
                mauris eget, accumsan molestie nibh. Aenean auctor gravida neque, et aliquet augue viverra non. Maecenas
                vitae blandit sapien. Vivamus rhoncus odio ex, sit amet porta velit lacinia a. Cras sit amet massa sit
                amet elit imperdiet pellentesque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae;
            </p>
        </Container>

    );
}

export default MyClassDOM;