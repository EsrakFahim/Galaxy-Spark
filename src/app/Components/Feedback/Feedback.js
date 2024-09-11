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
            review_date: "2021-09-01",
            service: "Web Development",
      },
      {
            client_name: "Bob Smith",
            client_position: "CTO",
            review: "good experience.Fantastic service!",
            review_rate: 4.8,
            client_image: clientImage,
            review_date: "2021-09-01",
            service: "Marketing",
      },
      {
            client_name: "Clara Richards",
            client_position: "Product Manager",
            review: "The team did an exceptional job on our project. They were very responsive, and their attention to detail was outstanding. We’re thrilled with the final results.The team did an exceptional job on our project. They were very responsive, and their attention to detail was outstanding. We’re thrilled with the final results.The team did an exceptional job on our project. They were very responsive, and their attention to detail was outstanding. We’re thrilled with the final results.",
            review_rate: 4.7,
            client_image: clientImage,
            review_date: "2021-09-01",
            service: "Video Editing",
      },
      {
            client_name: "Daniel Green",
            client_position: "CEO",
            review: "The team did an exceptional job on our project. They were very responsive, and their attention to detail was outstanding. We’re thrilled with the final results.The team did an exceptional job on our project. They were very responsive, and their attention to detail was outstanding. We’re thrilled with the final results.The team did an exceptional job on our project. They were very responsive, and their attention to detail was outstanding. We’re thrilled with the final results",
            review_rate: 5.0,
            client_image: clientImage,
            review_date: "2021-09-01",
            service: "Graphic Design",
      },
      {
            client_name: "Eve Campbell",
            client_position: "Business Owner",
            review: "The team demonstrated an impressive understanding of our project needs and delivered high-quality work on time. We are very satisfied with the collaboration.",
            review_rate: 4.6,
            client_image: clientImage,
            review_date: "2021-09-01",
            service: "Web Design",
      },
      {
            client_name: "Frank Martin",
            client_position: "Head of Operations",
            review: "Shakhawat Hossain is a very professional and cooperative to deliver initiatives , for my business, I will continue with him to be our strategic SEO partner.",
            review_rate: 4.9,
            client_image: clientImage,
            review_date: "2021-09-01",
            service: "Marketing",
      },
      {
            client_name: "Grace Lee",
            client_position: "Project Coordinator",
            review: "Fantastic service here, Gary will get more of my business directly and indirectly. Very quick, thorough, and thoughtful in designs. I am very happy with the results.",
            review_rate: 4.8,
            client_image: clientImage,
            review_date: "2021-09-01",
            service: "Graphic Design",
      },
      {
            client_name: "Henry Taylor",
            client_position: "Technical Lead",
            review: "Once again, I'm happy with the finished project! Wasif spent a lot of time working with me to get the details right in the first video he edited. This made completion of the longer videos much easier. I'm happy to continue working with him.",
            review_rate: 5.0,
            client_image: clientImage,
            review_date: "2021-09-01",
            service: "Video Editing",
      },
      {
            client_name: "Alice Johnson",
            client_position: "Marketing Manager",
            review: "He has been great to work with, he is very responsive and has helped us grow on google searches. His work is delivered on time and I would recommend his services to others.",
            review_rate: 4.9,
            client_image: clientImage,
            review_date: "2021-09-01",
            service: "Marketing",
      },
      {
            client_name: "Isabella Morgan",
            client_position: "Digital Marketing Head",
            review: "The team did an exceptional job on our project. They were very responsive, and their attention to detail was outstanding. We’re thrilled with the final results.The team did an exceptional job on our project. They were very responsive, and their attention to detail was outstanding. We’re thrilled with the final results.The team did an exceptional job on our project. They were very responsive, and their attention to detail was outstanding. We’re thrilled with the final results",
            review_rate: 4.7,
            client_image: clientImage,
            review_date: "2021-09-01",
            service: "Marketing",
      },
      {
            client_name: "Jack Rogers",
            client_position: "Entrepreneur",
            review: "Esrak Fahim and the team were great to work with. They communicated proactively, worked quickly, and made all the edits we needed to make sure the site looked just how we wanted. I would recommend them!",
            review_rate: 4.9,
            client_image: clientImage,
            review_date: "2021-09-01",
            service: "Web Development",
      },
      {
            client_name: "Kelly Foster",
            client_position: "HR Manager",
            review: "Working with the team was easy! They were extremely helpful and helped me out no matter how big or small the ask was. I highly recommend them for any intricate website you need coded. 10/10 will definitely be using again. Thanks guys!",
            review_rate: 4.8,
            client_image: clientImage,
            review_date: "2021-09-01",
            service: "Web Development",
      },
      {
            client_name: "Liam Bennett",
            client_position: "Finance Director",
            review: "Great attitude, amazing work, very professional, and super quick.",
            review_rate: 5.0,
            client_image: clientImage,
            review_date: "2021-09-01",
            service: "Web Development",
      },
      {
            client_name: "Mia Collins",
            client_position: "Senior Developer",
            review: "Working with Rafsan has been a great experience. We ve been working together on many projects already. Very glad to have him support me.",
            review_rate: 4.6,
            client_image: clientImage,
            review_date: "2021-09-01",
            service: "Web Development",
      },
      {
            client_name: "Noah White",
            client_position: "Startup Founder",
            review: "Great minimal designs and knows what will work with the logo. I’d recommend it to anyone looking for a logo.",
            review_rate: 5.0,
            client_image: clientImage,
            review_date: "2021-09-01",
            service: "Graphic Design",
      },
      {
            client_name: "Olivia Brooks",
            client_position: "Creative Director",
            review: "He is a skilled editor, who takes the time to get my projects just the way I want them",
            review_rate: 4.9,
            client_image: clientImage,
            review_date: "2021-09-01",
            service: "Video Editing",
      },
      {
            client_name: "Paul Adams",
            client_position: "Product Designer",
            review: "Thanks for these great and very fast work!",
            review_rate: 4.8,
            client_image: clientImage,
            review_date: "2021-09-01",
            service: "Graphic Design",
      },
      {
            client_name: "Quinn Baker",
            client_position: "UX/UI Specialist",
            review: "This guy and his team will get it done. They were professional and worked around my schedule as much as they could.",
            review_rate: 4.7,
            client_image: clientImage,
            review_date: "2021-09-01",
            service: "Web Development",
      },
      {
            client_name: "Rachel Carter",
            client_position: "Freelance Consultant",
            review: "I was highly impressed by the team’s ability to work under pressure and deliver high-quality results. Their dedication to client satisfaction was evident throughout.",
            review_rate: 4.9,
            client_image: clientImage,
            review_date: "2021-09-01",
            service: "Web Design",
      },
      {
            client_name: "Samuel Evans",
            client_position: "IT Manager",
            review: "If you want your site to get worked on until it is complete to your liking this is where you come. I have received nothing to stellar service and work to get my very complicated sites done.",
            review_rate: 5.0,
            client_image: clientImage,
            review_date: "2021-09-01",
            service: "Web Development",
      },
      {
            client_name: "Tina Harris",
            client_position: "Art Director",
            review: "Thank you so much to GalaxySpark and team for your exception SEO performance. After almost a year working with you and your team, I have to say I am very impressed and grateful to have found and to continue with you for the next many months to come. Please keep up the fantastic, high ranking keywords in our local area, revamping some of the pages of our site, optimizing local content, and much more. I highly recommend ",
            review_rate: 4.7,
            client_image: clientImage,
            review_date: "2021-09-01",
            service: "Marketing",
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
                              from our clients. We take great pride in
                              delivering exceptional service and ensuring our
                              clients are satisfied with the results.
                        </p>
                  </div>
                  <div className="w-full h-[80vh]  feedback_wrapper feedback-marquee">
                        {/* Grid container for feedback cards */}
                        <div className="feedback-marquee-group">
                              {feedbackData?.map((el, index) => {
                                    return (
                                          <div
                                                key={index}
                                                className="break-inside-avoid w-full p-4 mb-4 bg-secondary border-[1px] border-neutral-600 h-fit inline-block rounded-2xl shadow-md feedback-card"
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
                                                <div className="h-fit mt-4 text-neutral-400">
                                                      <p>
                                                            <span className="font-medium">
                                                                  Service:{" "}
                                                            </span>
                                                            {el.service}
                                                      </p>
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
