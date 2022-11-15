import React from 'react';
import { Link } from 'react-router-dom';


const ProductCards = ({ productData }) => {
    //console.log(productData);

    return (
        <>
            <section className="main-card--cointainer1">
                {productData.map((curElem) => {
                    const { id, ProductName, Image, Description, viewProduct, Price } = curElem;
                    return (
                        <>
                            <div className="Product-card-Top">
                                <div className="Product-card"  >
                                    <img className="card-img-top" style={{ height: "276.312"}} src={Image} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">{ProductName}</h5>
                                        <p className="card-text">{Description}</p>
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-link" style={{textAlign:"center"}}>{Price}</h4>
                                        <div >
                                            <Link className="card-link" to="/ProductProfile" >
                                                <button type="button" class="btn btn-warning" style={{ width: "95%" , marginLeft:"2.5%"}}>View Details</button>
                                            </Link>
                                            <Link className="card-link" to="/ProductProfile" >
                                                <button type="button" class="btn btn-danger" style={{ width: "95%", marginTop: "2%" , marginLeft:"2.5%"}}>BUY NOW</button>
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}

            </section>
        </>

    )
}

export default ProductCards;