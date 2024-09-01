import React from "react";
import Button from "../Elements/Button/Button";
import { Link } from "react-router-dom";
import './Home.css'

function Home() {


    return (
        <div className="home">
            <h2>Hello hai this is home page</h2>
            <h3>Click the button to view the page</h3>
            <div className="d-flex justify-content-center gap-1 m-5">
                <Link to={'/countries'} >
                    <Button value={'Countries'} />
                </Link>
                <Link to={'/todo'}>
                    <Button value={'Todo'} />
                </Link>
            </div>

        </div>
    )
}

export default Home