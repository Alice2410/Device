import { Tabs } from '@mui/material';
import { useState } from 'react';
import StyledTab from '../StyledTab/StyledTab';
import TabPanel from '../TabPanel/TabPanel';
import styles from './MainTabs.module.scss';

const MainTabs = () => {
  const [tabValue, setTabValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  }

  return(
    <div className={styles.background}>
      <div className={styles.tabs_container}>
        <Tabs
          className={styles.tabs}
          value={tabValue}
          onChange={handleChange}
          orientation="vertical"
          sx={{overflow: 'visible'}}
          >
          <StyledTab label="Доставка"></StyledTab>
          <StyledTab label="Гарантия"></StyledTab>
          <StyledTab label="Кредит"></StyledTab>
        </Tabs>
        <TabPanel value={tabValue} index={0}></TabPanel>
        <TabPanel value={tabValue} index={1}></TabPanel>
        <TabPanel value={tabValue} index={2}></TabPanel>
      </div>
    </div>
  )
}

export default MainTabs;