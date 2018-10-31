import React, { Component } from 'react';
import "./App.css";
import NavBar from './Navbar';
import { Table } from 'reactstrap';


class Bonbondex extends Component {
    render() {
        return (
            <div className="bonbondex">
                <NavBar />
                <div className="container  ">
                    <div className="row margin title justify-content-center p-5">
                        <h2>Votre récolte</h2>
                    </div>
                    <div className="row ml-3">
                        <div className="col-10 offset-1">
                            <Table striped bordered condensed hover>
                                <thead>
                                    <tr>
                                        <th>Nom bonbon</th>
                                        <th>image</th>
                                        <th>Quantité attrapée</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Bonbondex;