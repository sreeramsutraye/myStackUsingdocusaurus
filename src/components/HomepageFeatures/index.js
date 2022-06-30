import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'React JS',
    Svg: require('@site/static/img/reactjs-icon.svg').default,
    description: (
      <>
        React is a free and open-source front-end JavaScript library 
        for building user interfaces based on UI components. 
      </>
    ),
  },
  {
    title: 'FastAPI',
    Svg: require('@site/static/img/fastapi-icon.svg').default,
    description: (
      <>
        FastAPI is an asynchronous web framework for developing RESTful APIs in Python and can run with Uvicorn and Gunicorn. 
        FastAPI is based on Pydantic and type hints to validate, serialize, and deserialize data.
      </>
    ),
  },
  {
    title: 'MongoDB',
    Svg: require('@site/static/img/mongodb-icon.svg').default,
    description: (
      <>
        MongoDB is a source-available cross-platform document-oriented database program. 
        Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
