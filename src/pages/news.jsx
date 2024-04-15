import { Helmet } from 'react-helmet-async';

import { NewsView } from 'src/sections/news/view';

// ----------------------------------------------------------------------

export default function NewsPage() {
  return (
    <>
      <Helmet>
        <title> News | myFARM </title>
      </Helmet>

      <NewsView />
    </>
  );
}
