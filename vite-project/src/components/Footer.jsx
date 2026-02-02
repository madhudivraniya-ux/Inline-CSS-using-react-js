import React from 'react'

function Footer() {
    return (
        <footer className="bg-dark text-white mt-5 p-4">
            <div className="container">
                <div className="row">

                    <div className="col-md-6 mb-3">
                        <h5>About Us</h5>
                        <p>
                            Bagify is a premium bag store dedicated to providing high-quality, stylish bags for every occasion.
                            From elegant hand bags to trendy side bags and compact small bags, our products are designed to
                            combine fashion with functionality.
                        </p>
                    </div>


                    <div className="col-md-6 mb-3">
                        <h5>Contact</h5>
                        <p><strong>Email:</strong> bagify@gmail.com</p>
                        <p><strong>Phone:</strong> +917990417571</p>
                        <p><strong>Address:</strong> Bagify, Ahmedabad, India</p>
                    </div>

                </div>

                <div className="text-center mt-3">
                    @copyright 2026 Bagify. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer
