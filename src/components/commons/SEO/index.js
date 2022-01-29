import React from 'react';
import Head from 'next/head';
import propTypes from 'prop-types';

export default function SEO({ headTitle }) {
  const title = `TRACTIAN | ${headTitle}`;
  const description = 'Monitore seus ativos industriais com o sistema preditivo mais completo do mercado que te informa sobre a operação, melhorando o desempenho de suas máquinas.';
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
    </Head>
  );
}

SEO.defaultProps = {
  headTitle: ''
};

SEO.propTypes = {
  headTitle: propTypes.string
}
