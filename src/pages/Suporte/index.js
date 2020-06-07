import React from 'react';
import PropTypes from 'prop-types';
import { Box, Tabs, Tab, AppBar, Typography } from '@material-ui/core/';
import { Link } from 'react-router-dom';
import Pendentes from './tabs/Pendentes'
import Andamento from './tabs/Andamento'
import Concluido from './tabs/Concluido'
import '../Login/styles.css'

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`${index}`}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `${index}`,
    'aria-controls': `${index}`,
  };
}

export default function SimpleTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className='Background fullWidth'>
      <AppBar  position="static" style={{backgroundColor:'rgba(0,0,0,0.15)',boxShadow:'none'}}>
        <Tabs value={value} indicatorColor='white' onChange={handleChange}>
          <Tab label="Pendentes" {...a11yProps(0)} />
          <Tab label="Em Andamento" {...a11yProps(1)} />
          <Tab label="Concluídos" {...a11yProps(2)} />
          <Link to="/" style={{ color: '#fff' }}>
            <Tab label="Logout" style={{ position: 'absolute', right: '0'}} />
          </Link>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Pendentes />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Andamento />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Concluido />
      </TabPanel>
    </Box>
  );
}