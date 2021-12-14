import { Link } from "react-router-dom";

export default function Error404() {
    return (
        <div className="container" style={{ height: "80vh" }}>
            <div className="row">
                <div className="col-md-12" style={{ marginTop: "35vh" }}>
                    <small>Error 404 - Page not found</small>
                    <h2>Sorry, the page you are looking does not exist 😥</h2>
                    <p>You can go back to the <Link to="/"> <u>index</u> </Link> and continue browsing </p>
                </div>
            </div>
        </div>
    );
}