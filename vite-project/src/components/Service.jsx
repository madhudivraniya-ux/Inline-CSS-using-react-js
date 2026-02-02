import React from 'react'

function Service() {
    return (
        <div>
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <img src="https://images.unsplash.com/photo-1523779105320-d1cd346ff52b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHB1cnNlfGVufDB8fDB8fHww"
                            className="card-img-top" alt="..." style={{ height: 220, width: "100%", objectFit: "cover" }}
                        />
                        <div className="card-body">
                            <h5 className="card-title">Hand Bag</h5>
                            <p className="card-text">Stylish leather hand bag perfect for daily use, with enough space for essentials like wallet, phone, and keys.</p>
                            <a href="#" className="btn btn-primary">Shop Now</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <img src="https://plus.unsplash.com/premium_photo-1693221161739-a4542457fb6a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHB1cnNlfGVufDB8fDB8fHww"
                            className="card-img-top" alt="..." style={{ height: 220, width: "100%", objectFit: "cover" }}
                        />
                        <div className="card-body">
                            <h5 className="card-title">side bag</h5>
                            <p className="card-text">Compact and trendy side bag, ideal for casual outings or shopping trips. Lightweight and easy to carry.</p>
                            <a href="#" className="btn btn-primary">Shop Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img src="https://plus.unsplash.com/premium_photo-1682317744660-5c9580c1b954?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHVyc2V8ZW58MHx8MHx8fDA%3D"
                            className="card-img-top" alt="..." style={{ height: 220, width: "100%", objectFit: "cover" }}
                        />
                        <div className="card-body">
                            <h5 className="card-title">Small Bag</h5>
                            <p className="card-text">Elegant small bag for evening parties or casual events. Perfect for carrying minimal essentials with style.</p>
                            <a href="#" className="btn btn-primary">Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service