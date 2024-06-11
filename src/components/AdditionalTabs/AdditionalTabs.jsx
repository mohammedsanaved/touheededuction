import React, { useState } from 'react';
import {AdditionalTabsStyles} from "./AdditionalTabsStyles";
import { Tabs, Tab, Box, Typography } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LoopIcon from '@mui/icons-material/Loop';
import ScienceIcon from '@mui/icons-material/Science';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`tabpanel-${index}`}
        aria-labelledby={`tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  };





const AdditionalTabs = ({school_data}) => {
    const [value, setValue] = useState(0);
    
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
        <AdditionalTabsStyles>
          <div className='add-tab-bg'>
            <h3 className='addtional-tabs-title'>Our Additional Innovative Concepts</h3>
            <div className='additional-tabs-container'>
      <Box sx={{ width: '100%' }}>
      
        <Tabs
        value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          // indicatorColor="rgba(4, 156, 80, 1)"
          style={{ indicator: { backgroundColor: 'rgba(4, 156, 80, 1)' } }}
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
          className='scrollable-tabs'
          
        >
          {school_data?.additional_concept?.map((concept, index) => (
              <Tab key={index} 
              // icon={<img src={concept.logomark} alt={concept.title} />} 
              label={concept.title} />
            ))}
        </Tabs>
        
        {school_data?.detail_additional_concept?.map((detail, index) => (
            <TabPanel key={index} value={value} index={index}>
              <div className='add-tab-container d-flex'>
                <img 
                
                src={`${process.env.REACT_APP_API_URL}/${detail.image}`}
                className='add-tab-img' />
                <div>
                  <h4 className='add-tab-title'>{detail.title}</h4>
                  <p className='add-tab-text'>{detail.description}</p>
                </div>
              </div>
            </TabPanel>
          ))}
      </Box>
      </div>
      </div>
      </AdditionalTabsStyles>
    );
  };

export default AdditionalTabs;