import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

import StartHero from '../components/Start/StartHero'

import gtm from '../lib/gtm';

const Start = () => {
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Helmet>
        <title>csWorks - Cloud Warenwirtschaft</title>
      </Helmet>
      <div>
        <StartHero />
      </div>
    </>
  );
};

export default Start;