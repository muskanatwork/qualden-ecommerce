import React from 'react';
import { useLocation } from 'react-router-dom';
import Nav from '../Home/Nav';
import NavInfo from './NavInfo';
import Accordion from '../AboutUs/Accordian'
const SearchResults = () => {

    const location = useLocation();
    const { results, searchTerm } = location.state || { results: [], searchTerm: '' };

    return (
        <>
            <div className="container">
                <NavInfo />
                <Nav />
                <div className="main">
                    <h1 className='searchResult'>Search Results</h1>
                    {results.length > 0 ? (
                        <ul>
                            {results.map((result, index) => (
                                <li key={index}>
                                    <h3>{result.productName}</h3>
                                    <div className='resultProduct'>
                                    <div>
                                        <img src={result.productImg} alt={result.productName} />
                                    </div>
                                    <div>
                                        <div>{result.businessType}</div>
                                        <div>{result.temperature}</div>
                                        <div>{result.probeMaterial}</div>
                                        <div>{result.probeDiameter}</div>
                                    </div>
                                    </div>
                                </li>

                            ))}
                        </ul>
                    ) : (
                        <div>No results found</div>
                    )}
                                    <div className='aside'>
                                <Accordion />
                                <div className="ContactUsDiv">
                                    <h3>Contact Us</h3>
                                    <hr />
                                    <h4>Kuchhal Brothers</h4>
                                    <div>1104,1105 Salempur Rajputana industrial Area,
                                        Salempur, Roorkee, Uttarakhand - 247667, India</div>
                                    <div>Mobile : +91-9719411764, +91-7017880914</div>
                                    <div>Call Us : 08069247354 Ext : 036</div>
                                </div>
                            </div>

                </div>
            </div>
        </>
    );
};

export default SearchResults;
