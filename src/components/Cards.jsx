import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardsData from './CardsData'
import "../index.css";

function Cards() {
    const [data, setData] = useState(CardsData);

    return (
        <div className='container mt-3'>
            <h2 className='text-center'>Add to Cart Projects</h2>
            <div className="row d-flex justify-content-center align-items-center">
                {data.map((element) => (
                    <div key={element.id} className="col-sm-12 col-md-6 col-lg-4 d-flex align-items-stretch">
                        <Card style={{ width: '22rem', border: "none" }} className="mx-2 mt-4 card_style">
                            <Card.Img variant="top" src={element.imgdata} style={{ height: "16rem", borderRadius: "9px" }} className="mt-1" />
                            <Card.Body>
                                <Card.Title>{element.rname}</Card.Title>
                                <Card.Text style={{marginBottom: "0.2rem"}}>
                                    Price : ₹ {element.price}
                                </Card.Text>
                                <Card.Text style={{marginBottom: "0.2rem"}}>
                                    Rating : <b>{element.rating}</b>
                                </Card.Text>
                                <div className="button_div d-flex justify-content-center">
                                    <Button variant="primary"
                                        onClick={() => send(element)}
                                        className='col-lg-12'>Add to Cart</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cards