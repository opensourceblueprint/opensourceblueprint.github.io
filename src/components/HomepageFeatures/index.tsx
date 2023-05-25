import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  i: any;
  description: JSX.Element;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Principles",
    i: require("@site/static/img/blueprint_logo.png").default,
    description: (
      <>
        <p>
          Principles are the foundation of the Blueprint Protocol. They are the
          guiding light for the development of the protocol.
        </p>
      </>
    ),
    link: "/pillars",
  },
  {
    title: "Protocol",
    i: require("@site/static/img/blueprint_logo.png").default,
    description: (
      <>
        <p>The protocol is the actionable part of the Blueprint.</p>
      </>
    ),
    link: "/category/protocol",
  },
  {
    title: "Measurements",
    i: require("@site/static/img/blueprint_logo.png").default,
    description: <>Learn about which measurements are used in the Blueprint.</>,
    link: "/category/measurements",
  },
];

function Feature({ title, i, description, link }: FeatureItem) {
  return (
    <a className={clsx("col col--4")} href={link}>
      <div className="text--center">
        {/* <img className={styles.featureSvg} src={i} /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
