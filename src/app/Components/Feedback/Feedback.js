import Image from "next/image";
import React from "react";
import clientImage from "@/assets/fav.png";
import "./Feedback.scss";

const feedbackData = [
      {
            client_name: "Alice Johnson",
            client_position: "Marketing Manager",
            review: "The team did an exceptional job on our project. They were very responsive, and their attention to detail was outstanding. We’re thrilled with the final results.The team did an exceptional job on our project. They were very responsive, and their attention to detail was outstanding. We’re thrilled with the final results.The team did an exceptional job on our project. They were very responsive, and their attention to detail was outstanding. We’re thrilled with the final results.",
            review_rate: 4.9,
            client_image: clientImage,
      },
      {
            client_name: "Bob Smith",
            client_position: "CTO",
            review: "We had a tight deadline and they delivered beyond expectations. The work quality was top-notch, and we look forward to collaborating again soon.",
            review_rate: 4.8,
            client_image: clientImage,
      },
      {
            client_name: "Clara Richards",
            client_position: "Product Manager",
            review: "The team did an exceptional job on our project. They were very responsive, and their attention to detail was outstanding. We’re thrilled with the final results.The team did an exceptional job on our project. They were very responsive, and their attention to detail was outstanding. We’re thrilled with the final results.The team did an exceptional job on our project. They were very responsive, and their attention to detail was outstanding. We’re thrilled with the final results.",
            review_rate: 4.7,
            client_image: clientImage,
      },
      {
            client_name: "Daniel Green",
            client_position: "CEO",
            review: "The team did an exceptional job on our project. They were very responsive, and their attention to detail was outstanding. We’re thrilled with the final results.The team did an exceptional job on our project. They were very responsive, and their attention to detail was outstanding. We’re thrilled with the final results.The team did an exceptional job on our project. They were very responsive, and their attention to detail was outstanding. We’re thrilled with the final results",
            review_rate: 5.0,
            client_image: clientImage,
      },
      {
            client_name: "Eve Campbell",
            client_position: "Business Owner",
            review: "The team demonstrated an impressive understanding of our project needs and delivered high-quality work on time. We are very satisfied with the collaboration.",
            review_rate: 4.6,
            client_image: clientImage,
      },
      {
            client_name: "Frank Martin",
            client_position: "Head of Operations",
            review: "The team did an exceptional job on our project. They were very responsive, and their attention to detail was outstanding. We’re thrilled with the final results.The team did an exceptional job on our project. They were very responsive, and their attention to detail was outstanding. We’re thrilled with the final results.The team did an exceptional job on our project. They were very responsive, and their attention to detail was outstanding. We’re thrilled with the final results.",
            review_rate: 4.9,
            client_image: clientImage,
      },
      {
            client_name: "Grace Lee",
            client_position: "Project Coordinator",
            review: "We were particularly impressed by their clear communication and quick turnaround times. The quality of work was exceptional, and the process was seamless.",
            review_rate: 4.8,
            client_image: clientImage,
      },
      {
            client_name: "Henry Taylor",
            client_position: "Technical Lead",
            review: "This team consistently delivered results that were above and beyond what we expected. Their expertise and commitment were evident throughout the entire project.",
            review_rate: 5.0,
            client_image: clientImage,
      },
      {
            client_name: "Alice Johnson",
            client_position: "Marketing Manager",
            review: "The team did an exceptional job on our project. They were very responsive, and their attention to detail was outstanding. We’re thrilled with the final results.",
            review_rate: 4.9,
            client_image: clientImage,
      },
      {
            client_name: "Isabella Morgan",
            client_position: "Digital Marketing Head",
            review: "The team did an exceptional job on our project. They were very responsive, and their attention to detail was outstanding. We’re thrilled with the final results.The team did an exceptional job on our project. They were very responsive, and their attention to detail was outstanding. We’re thrilled with the final results.The team did an exceptional job on our project. They were very responsive, and their attention to detail was outstanding. We’re thrilled with the final results",
            review_rate: 4.7,
            client_image: clientImage,
      },
      {
            client_name: "Jack Rogers",
            client_position: "Entrepreneur",
            review: "The team did an exceptional job on our project. They were very responsive, and their attention to detail was outstanding. We’re thrilled with the final results.The team did an exceptional job on our project. They were very responsive, and their attention to detail was outstanding. We’re thrilled with the final results.The team did an exceptional job on our project. They were very responsive, and their attention to detail was outstanding. We’re thrilled with the final results",
            review_rate: 4.9,
            client_image: clientImage,
      },
      {
            client_name: "Kelly Foster",
            client_position: "HR Manager",
            review: "From start to finish, this team was outstanding. They kept us updated throughout the process and delivered a final product that we are very proud of.",
            review_rate: 4.8,
            client_image: clientImage,
      },
      {
            client_name: "Liam Bennett",
            client_position: "Finance Director",
            review: "Their professionalism and expertise were apparent in every step of the project. We are very satisfied with the quality of work delivered and will be returning for future projects.",
            review_rate: 5.0,
            client_image: clientImage,
      },
      {
            client_name: "Mia Collins",
            client_position: "Senior Developer",
            review: "We were very impressed by their ability to handle complex tasks and deliver solutions that were tailored to our needs. Their attention to detail is second to none.",
            review_rate: 4.6,
            client_image: clientImage,
      },
      {
            client_name: "Noah White",
            client_position: "Startup Founder",
            review: "This team exceeded our expectations on every front. Their technical skills and ability to understand our requirements were invaluable to the success of our project.",
            review_rate: 5.0,
            client_image: clientImage,
      },
      {
            client_name: "Olivia Brooks",
            client_position: "Creative Director",
            review: "The end result was beyond our expectations. Their professionalism, creativity, and technical expertise really stood out. We are incredibly happy with the outcome.",
            review_rate: 4.9,
            client_image: clientImage,
      },
      {
            client_name: "Paul Adams",
            client_position: "Product Designer",
            review: "We received exceptional service from the team. Their approach was innovative, and they truly understood what we wanted. The end product is exactly what we envisioned.",
            review_rate: 4.8,
            client_image: clientImage,
      },
      {
            client_name: "Quinn Baker",
            client_position: "UX/UI Specialist",
            review: "The team was a joy to work with. Their professionalism, clear communication, and ability to understand our needs made this project a success from the start.",
            review_rate: 4.7,
            client_image: clientImage,
      },
      {
            client_name: "Rachel Carter",
            client_position: "Freelance Consultant",
            review: "I was highly impressed by the team’s ability to work under pressure and deliver high-quality results. Their dedication to client satisfaction was evident throughout.",
            review_rate: 4.9,
            client_image: clientImage,
      },
      {
            client_name: "Samuel Evans",
            client_position: "IT Manager",
            review: "The project was completed on time and within budget. Their attention to detail and willingness to go the extra mile for their clients really stood out.",
            review_rate: 5.0,
            client_image: clientImage,
      },
      {
            client_name: "Tina Harris",
            client_position: "Art Director",
            review: "Their innovative ideas and understanding of our needs made this project a true success. We’re excited to continue working with them on future projects.",
            review_rate: 4.7,
            client_image: clientImage,
      },
];

const Feedback = () => {
      return (
            <div id="feedback" className="w-full h-full my-[50px] px-5">
                  <div className="my-14 flex flex-col items-center justify-center">
                        <span className="border border-buttonPrimary bg-buttonSecondary text-buttonPrimary px-3 py-2 rounded-full ">
                              Client Feedback
                        </span>
                        <h2 className="text-2xl lg:text-4xl font-extralight my-8">
                              What Our Clients Say
                        </h2>
                        <p className="text-sm text-neutral-500 lg:w-2/5 text-center">
                              Here are some of the testimonials we have received
                              from our clients. We take great pride in delivering
                              exceptional service and ensuring our clients are
                              satisfied with the results.
                        </p>
                  </div>
                  <div className="w-full h-[80vh]  feedback_wrapper feedback-marquee">
                        {/* Grid container for feedback cards */}
                        <div className="feedback-marquee-group">
                              {feedbackData?.map((el, index) => {
                                    return (
                                          <div
                                                key={index}
                                                className="break-inside-avoid p-4 mb-4 bg-secondary border-[1px] border-neutral-600 h-fit inline-block rounded-2xl shadow-md feedback-card"
                                          >
                                                <div className="flex items-end gap-4">
                                                      <Image
                                                            src={
                                                                  el.client_image
                                                            }
                                                            alt={el.client_name}
                                                            width={50}
                                                            height={50}
                                                            className="w-[50px] h-[50px] rounded-full object-contain"
                                                      />
                                                      <div>
                                                            <h1 className="font-medium">
                                                                  {
                                                                        el.client_name
                                                                  }
                                                            </h1>
                                                            <p className="text-xs text-neutral-500">
                                                                  {
                                                                        el.client_position
                                                                  }
                                                            </p>
                                                      </div>
                                                </div>
                                                <div className="h-fit mt-4 text-neutral-400">
                                                      <p>{el.review}</p>
                                                </div>
                                          </div>
                                    );
                              })}
                        </div>
                  </div>
            </div>
      );
};

export default Feedback;
