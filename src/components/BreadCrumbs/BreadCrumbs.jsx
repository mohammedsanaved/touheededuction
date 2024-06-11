import React from 'react';
import { BreadCrumbsStyles } from './BreadCrumbsStyles';
import { Link, useLocation } from 'react-router-dom';

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const replaceSymbols = (str) => {
  return str.replace(/[_-]/g, ' ');
};

const skipText = ['School about us', 'schooldetail'];

const isId = (str) => {
  return /^[a-fA-F0-9-]+$/g.test(str); // Matches UUID format
};


const BreadCrumbs = () => {


  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  const lastSegment = pathnames[pathnames.length - 1];
  const isLastSegmentId = isId(lastSegment);
  const indexOfEventDetails = pathnames.indexOf('event-details');
  const isEventDetailsPage = indexOfEventDetails !== -1;



  return (
    <BreadCrumbsStyles>
     
     <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        {pathnames.map((name, index) => {
          if (isEventDetailsPage && index > indexOfEventDetails) return null; // Stop rendering after "EVENT DETAILS"
          if (index === pathnames.length - 1 && isLastSegmentId) return null; // Exclude last ID segment
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          let displayName = replaceSymbols(capitalize(name));
          // Skip specific text
          skipText.forEach(text => {
            if (displayName.toLowerCase().includes(text.toLowerCase())) {
              displayName = displayName.replace(new RegExp(text, 'gi'), '');
            }
          });
          displayName = displayName.trim();
          // Render breadcrumb link only if displayName is not empty and the routeTo doesn't contain adjacent slashes
          if (displayName && !/\/{2,}/.test(routeTo)) {
            return (
              <li key={name} className="breadcrumb-item">
                {isLast || isEventDetailsPage ? (
                  <span style={{ color: 'green' }}>{displayName}</span>
                ) : (
                  <Link to={routeTo}>{displayName}</Link>
                )}
              </li>
            );
          }
          return null;
        })}
      </ol>
    </nav>
   
    </BreadCrumbsStyles>
  )
}

export default BreadCrumbs