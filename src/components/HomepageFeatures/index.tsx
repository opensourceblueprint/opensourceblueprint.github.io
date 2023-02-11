import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  i: any;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Easy to Use",
    i: require("@site/static/img/blueprint_logo.png").default,
    description: <></>,
  },
  {
    title: "Focus on What Matters",
    i: require("@site/static/img/blueprint_logo.png").default,
    description: <></>,
  },
  {
    title: "Powered by React",
    i: require("@site/static/img/blueprint_logo.png").default,
    description: <></>,
  },
];

function Feature({ title, i, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img className={styles.featureSvg} src={i} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
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
