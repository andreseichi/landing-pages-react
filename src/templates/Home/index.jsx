import { mockBase } from '../Base/mock';
import { Base } from '../Base';
import { useEffect } from 'react';

import { mapData } from '../../api/map-data';
import { useState } from 'react';
import { PageNotFound } from '../PageNotFound';
import { Loading } from '../Loading';

export function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetch(
          'http://localhost:1337/pages/?slug=landing-page'
        );
        const json = await data.json();
        const pageData = mapData(json);
        console.log(pageData);

        setData(pageData[0]);
      } catch (error) {
        setData(undefined);
      }
    };

    load();
  }, []);

  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <Loading />;
  }

  return <Base {...mockBase} />;
}
