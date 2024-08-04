import React from "react";
import { FaShippingFast, FaHeadset, FaLock } from "react-icons/fa"; // Import specific icons
import styles from "@/app/styles/features.module.css"; // Create a new CSS module for styles

const FeaturesSection = () => {
  
  const features = [
    {
      icon: <FaShippingFast />,
      title: "Free Shipping",
      description: "Free Dilevery all over Pakistan",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      description: "We're here to help, anytime",
    },
    {
      icon: <FaLock />,
      title: "Secure Payment",
      description: "100% secure payment",
    },
    // Add more features as needed
  ];

  return (
    <div className={styles.featuresContainer}>
      <div className={styles.featuresWrapper}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureItem}>
            <div className={styles.icon}>{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
