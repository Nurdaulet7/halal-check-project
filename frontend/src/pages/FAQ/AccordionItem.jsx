import { useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import "./AccordionStyles.css";

const faqs = [
  {
    id: 1,
    header: "What is the Halal Check Project?",
    text: `The Halal Check Project is a comprehensive platform designed to help consumers find both Halal-certified and non-certified products. It provides detailed information about products to ensure that consumers can make informed decisions according to Halal standards.`,
  },
  {
    id: 2,
    header: "How does the Halal Check Project verify products?",
    text: `Our platform includes a database of products with varying Halal certification statuses. Each product listed, whether certified or not, is displayed with clear information about its Halal status to assist consumers in their selection.`,
  },
  {
    id: 3,
    header: "How do I search for products on the Halal Check Project?",
    text: `You can search for products by entering the product name, category, or Halal status in the search bar. Filters are also available to refine your search results based on certification status and other criteria.`,
  },
  {
    id: 4,
    header: "How can I use the barcode scanner?",
    text: `The barcode scanner feature in the Halal Check Project allows you to easily check a product's Halal status by simply scanning its barcode with your mobile device. This tool is designed to be user-friendly and is accessible directly within our mobile platform, making it convenient to use while shopping or at home. Just open our app, navigate to the barcode scanner, and point your device's camera at the product barcode. The app will automatically scan the barcode and provide you with the Halal status of the product instantly. This feature makes it exceptionally easy for consumers to verify the Halal compliance of any product in real-time.`,
  },
  {
    id: 5,
    header: "How often is the product database updated?",
    text: `Our product database is updated regularly to reflect new information from Halal certification bodies, manufacturers, and community contributions. This ensures that the information provided is both current and accurate.`,
  },
  {
    id: 6,
    header: "How can I suggest a new feature or report a bug?",
    text: `To suggest new features or report bugs, please use the "Contact Us" section on our website. There you can send us a direct message with your feedback, feature suggestions, or details of any issues you've encountered. We value your input and aim to continuously improve the platform based on user suggestions. Your feedback helps us enhance your experience and serve the community better.`,
  },
];

const AccordionItem = ({ handleToggle, active, faq }) => {
  const contentEl = useRef(null);
  const { header, id, text } = faq;

  return (
    <div className="rc-accordion-card">
      <header
        className={active === id ? "active" : ""}
        onClick={() => handleToggle(id)}
      >
        <h2>{header}</h2>
        <span className="material-symbols-outlined">
          <IoIosArrowDown id="arrowDown" />
        </span>
      </header>
      <div
        ref={contentEl}
        className={`collapse ${active === id ? "show" : ""}`}
        style={
          active === id
            ? { height: contentEl.current?.scrollHeight + "px" }
            : { height: "0px" }
        }
      >
        <p>{text}</p>
      </div>
    </div>
  );
};

const Accordion = () => {
  const [active, setActive] = useState(null);

  const handleToggle = (id) => {
    setActive(active === id ? null : id);
  };

  return (
    <article>
      {faqs.map((faq) => (
        <AccordionItem
          key={faq.id}
          active={active}
          handleToggle={handleToggle}
          faq={faq}
        />
      ))}
    </article>
  );
};

export default Accordion;
