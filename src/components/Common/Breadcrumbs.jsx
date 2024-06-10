// Breadcrumbs.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);

    return (
        <>
            <Link className='link' to="/">Home</Link>
            {pathnames.map((value, index) => {
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                return (
                    <span key={to}>
                        <Link className='link' to={to}>{value.charAt(0).toUpperCase() + value.slice(1)}</Link>
                    </span>
                );
            })}
        </>
    );
};

export default Breadcrumbs;
