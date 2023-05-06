import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Privacy',
    Svg: require('@site/static/img/privacy.svg').default,
    description: (
      <>
        Microsoft's Windows operating system is infamous for its privacy-intrusive behaviour towards consumers, which is why ReflexOS takes the privacy aspect into serious account. A plethora of telemetry backdoors have been terminated including, but is not limited to: UWP/AppX Apps, Cortana, Data collection and reporting increase the system load.
      </>
    ),
  },
  {
    title: 'Security',
    Svg: require('@site/static/img/secure.svg').default,
    description: (
      <>
        Windows Defender and Windows Update are removed from many different custom operating systems. We know that the majority of gamers are not particularly tech savvy and cannot manually update or maintain their computer secure, which can be a major security risk. Therefore, we remain to use those features to keep you safe.
      </>
    ),
  },
  {
    title: 'Performance',
    Svg: require('@site/static/img/performance.svg').default,
    description: (
      <>
        Windows is notoriously known for its less-than-ideal performance, especially when compared to its predecessors. ReflexOS attempts to speed up the system, by eliminating redundant tasks and services running in the background, without sacrificing on stability. Better yet, framerate stability is greatly improved, meaning your FPS is less prone to fluctuation.
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
