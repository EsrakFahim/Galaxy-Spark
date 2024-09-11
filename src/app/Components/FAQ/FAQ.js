import React from "react";
import FAQDropdown from "./FAQDropdown";

const FAQQuestion = [
      {
            title: "How does this work?",
            answer: "This works by using a simple algorithm that calculates the amount of time you spend on the website. The more time you spend, the more points you get.",
      },
      {
            title: "How do I get started?",
            answer: "You can get started by clicking the 'Get Started' button on the homepage. You will be redirected to a page where you can sign up and start earning points.",
      },
      {
            title: "How do I redeem my points?",
            answer: "You can redeem your points by clicking the 'Redeem Points' button on the homepage. You will be redirected to a page where you can choose from a variety of rewards.",
      },
      {
            title: "How do I contact support?",
            answer: "You can contact support by clicking the 'Contact Support' button on the homepage. You will be redirected to a page where you can submit a support ticket.",
      },
      {
            title: "How do I earn more points?",
            answer: "You can earn more points by spending more time on the website. You can also earn points by referring friends and family to the website.",
      },
];

const FAQ = () => {
      return (
            <div id="faq" className="py-[100px] px-3" >
                  <div className="flex flex-col justify-center items-center gap-5 my-10">
                        <div className="border border-buttonPrimary bg-buttonSecondary text-buttonPrimary px-3 py-2 rounded-full">Insights</div>
                        <h1 className="text-4xl font-bold text-center text-primary">
                              Frequently Asked Questions
                        </h1>
                  </div>
                  <div>
                        {FAQQuestion?.map((qus, index) => {
                              return (
                                    <FAQDropdown
                                          key={index}
                                          title={qus.title}
                                          answer={qus.answer}
                                    />
                              );
                        })}
                  </div>
            </div>
      );
};

export default FAQ;
