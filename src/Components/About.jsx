/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a Cybersecurity student studying at Jomo kenyatta University of Agriculture and Technology. I am fueled by the remarkable potential of technology, which, much like art, showcases human creativity and innovation. I find immense joy in utilizing technology to develop imaginative solutions that tackle urgent societal issues.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Pen testing",
  "Security Management",
  "Compliance Management",
  "Information protection and Governance",
  "Identity & Access Management (IAM)",
  "Programming",
  "Networking",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
// eslint-disable-next-line prettier/prettier
const detailOrQuote = " I aim at ensuring the confidentiality, integrity, and availability of information, as well as promoting secure practices and fostering a culture of cybersecurity awareness.I am fueled by the remarkable potential of technology, which, much like art, showcases human creativity and innovation. I find immense joy in utilizing technology to develop imaginative solutions that tackle urgent societal issues. By spearheading advancements in technology, I aim at ensuring the confidentiality, integrity, and availability of information, as well as promoting secure practices and fostering a culture of cybersecurity awareness.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
