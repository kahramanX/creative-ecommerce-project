import React from "react";
import "assets/styles/components/layouts/footer.scss";
import FooterSection from "./FooterSection";
import { FooterSectionI } from "types/types";

const footerSections: FooterSectionI[] = [
  {
    sectionTitle: "To Clients",
    lists: [
      {
        listName: "Entrance to the office",
      },
      {
        listName: "Catalogue",
      },
      {
        listName: "About Us",
      },
      {
        listName: "Blog",
      },
      {
        listName: "Payment and delivery",
      },
      {
        listName: "Contact Information",
      },
      {
        listName: "Public Offer",
      },
      {
        listName: "Cooperation",
      },
      {
        listName: "Privacy Policy",
      },
      {
        listName: "Help",
      },
    ],
  },
  {
    sectionTitle: "Catalogue",
    lists: [
      {
        listName: "Face",
      },
      {
        listName: "Body",
      },
      {
        listName: "Hair",
      },
      {
        listName: "Hand care",
      },
      {
        listName: "Bath",
      },
      {
        listName: "Foot Care",
      },
      {
        listName: "For Men",
      },
      {
        listName: "Accessories",
      },
      {
        listName: "Gift Sets",
      },
      {
        listName: "For Home",
      },
      {
        listName: "Gift Certificates",
      },
    ],
  },
  {
    sectionTitle: "Contact Information",
    lists: [
      {
        listName: "+380 (66) 163 21 10",
        listIcon: <span className="material-symbols-outlined">call</span>,
      },
      {
        listName: "order@mrscrubber.com",
        listIcon: <span className="material-symbols-outlined">mail</span>,
      },
      {
        listName: "Lutsk, str. Kryvyi Val, bldg. 34, office 305",
        listIcon: (
          <span className="material-symbols-outlined">location_on</span>
        ),
      },
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-section-container">
        <div className="footer-left-infos">
          <div className="footer-logo">Mr.SCRUBBER</div>
          <div className="footer-social-container">
            <div className="social-title"> Follow Us</div>
            <div className="social-icons">
              <span className="material-symbols-outlined">public</span>
              <span className="material-symbols-outlined">public</span>
              <span className="material-symbols-outlined">public</span>
            </div>
          </div>
        </div>
        {footerSections.map((sectionInfos, index: number) => (
          <FooterSection key={index} sectionInfos={sectionInfos} />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
