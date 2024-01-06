import React, { useState, useEffect } from 'react'

const Invoice = ({properties}:any) => {
    return (
        <>
            <div className="navbar-container">
                <div className="categories">
                    <button onClick={() => properties.setCategory("Trending")}>Trending</button>
                    <button onClick={() => properties.setCategory("Popular")}>Popular</button>
                    <button onClick={() => properties.setCategory("TopRated")}>Top Rated</button>
                    <button onClick={() => properties.setCategory("Upcoming")}>Upcoming</button>
                </div>
            </div>
            <input type="text" onChange={(e) => properties.setName(e.target.value)} />
        </>
    )   
}

export default Invoice;