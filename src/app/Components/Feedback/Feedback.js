import Image from "next/image";
import React from "react";

const feedbackData = [
      {
            client_name: "Alice Johnson",
            client_position: "Marketing Manager",
            review: "The team did an exceptional job on our project. They were very responsive, and their attention to detail was outstanding. We’re thrilled with the final results.",
            review_rate: 4.9,
            client_image:
                  "https://images.unsplash.com/photo-1521566652839-697aa473761a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
            client_name: "Bob Smith",
            client_position: "CTO",
            review: "We had a tight deadline and they delivered beyond expectations. The work quality was top-notch, and we look forward to collaborating again soon.",
            review_rate: 4.8,
            client_image:
                  "https://images.unsplash.com/photo-1521566652839-697aa473761a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
            client_name: "Clara Richards",
            client_position: "Product Manager",
            review: "It was a pleasure working with this team. They communicated effectively throughout the project, ensuring that our needs were met at every stage.",
            review_rate: 4.7,
            client_image:
                  "https://images.unsplash.com/photo-1521566652839-697aa473761a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
            client_name: "Daniel Green",
            client_position: "CEO",
            review: "Their professionalism and dedication stood out. We’re very happy with the services provided, and the results have exceeded our initial expectations.",
            review_rate: 5.0,
            client_image:
                  "https://images.unsplash.com/photo-1521566652839-697aa473761a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
            client_name: "Eve Campbell",
            client_position: "Business Owner",
            review: "The team demonstrated an impressive understanding of our project needs and delivered high-quality work on time. We are very satisfied with the collaboration.",
            review_rate: 4.6,
            client_image:
                  "https://images.unsplash.com/photo-1521566652839-697aa473761a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
            client_name: "Frank Martin",
            client_position: "Head of Operations",
            review: "They brought creative ideas and technical expertise that took our project to the next level. Their commitment to excellence was clear from the start.",
            review_rate: 4.9,
            client_image:
                  "https://images.unsplash.com/photo-1521566652839-697aa473761a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
            client_name: "Grace Lee",
            client_position: "Project Coordinator",
            review: "We were particularly impressed by their clear communication and quick turnaround times. The quality of work was exceptional, and the process was seamless.",
            review_rate: 4.8,
            client_image:
                  "https://images.unsplash.com/photo-1521566652839-697aa473761a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
            client_name: "Henry Taylor",
            client_position: "Technical Lead",
            review: "This team consistently delivered results that were above and beyond what we expected. Their expertise and commitment were evident throughout the entire project.",
            review_rate: 5.0,
            client_image:
                  "https://images.unsplash.com/photo-1521566652839-697aa473761a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
            client_name: "Isabella Morgan",
            client_position: "Digital Marketing Head",
            review: "The team's flexibility and ability to adapt to our changing needs was truly impressive. They delivered excellent results within the timeframe and budget.",
            review_rate: 4.7,
            client_image:
                  "https://images.unsplash.com/photo-1521566652839-697aa473761a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
            client_name: "Jack Rogers",
            client_position: "Entrepreneur",
            review: "Their work ethic and dedication to providing the best possible outcome for our project was remarkable. The results speak for themselves, and we are extremely pleased.",
            review_rate: 4.9,
            client_image:
                  "https://images.unsplash.com/photo-1521566652839-697aa473761a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
            client_name: "Kelly Foster",
            client_position: "HR Manager",
            review: "From start to finish, this team was outstanding. They kept us updated throughout the process and delivered a final product that we are very proud of.",
            review_rate: 4.8,
            client_image:
                  "https://images.unsplash.com/photo-1521566652839-697aa473761a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
            client_name: "Liam Bennett",
            client_position: "Finance Director",
            review: "Their professionalism and expertise were apparent in every step of the project. We are very satisfied with the quality of work delivered and will be returning for future projects.",
            review_rate: 5.0,
            client_image:
                  "https://images.unsplash.com/photo-1521566652839-697aa473761a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
            client_name: "Mia Collins",
            client_position: "Senior Developer",
            review: "We were very impressed by their ability to handle complex tasks and deliver solutions that were tailored to our needs. Their attention to detail is second to none.",
            review_rate: 4.6,
            client_image:
                  "https://images.unsplash.com/photo-1521566652839-697aa473761a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
            client_name: "Noah White",
            client_position: "Startup Founder",
            review: "This team exceeded our expectations on every front. Their technical skills and ability to understand our requirements were invaluable to the success of our project.",
            review_rate: 5.0,
            client_image:
                  "https://images.unsplash.com/photo-1521566652839-697aa473761a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
            client_name: "Olivia Brooks",
            client_position: "Creative Director",
            review: "The end result was beyond our expectations. Their professionalism, creativity, and technical expertise really stood out. We are incredibly happy with the outcome.",
            review_rate: 4.9,
            client_image:
                  "https://images.unsplash.com/photo-1521566652839-697aa473761a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
            client_name: "Paul Adams",
            client_position: "Product Designer",
            review: "We received exceptional service from the team. Their approach was innovative, and they truly understood what we wanted. The end product is exactly what we envisioned.",
            review_rate: 4.8,
            client_image:
                  "https://images.unsplash.com/photo-1521566652839-697aa473761a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
            client_name: "Quinn Baker",
            client_position: "UX/UI Specialist",
            review: "The team was a joy to work with. Their professionalism, clear communication, and ability to understand our needs made this project a success from the start.",
            review_rate: 4.7,
            client_image:
                  "https://images.unsplash.com/photo-1521566652839-697aa473761a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
            client_name: "Rachel Carter",
            client_position: "Freelance Consultant",
            review: "I was highly impressed by the team’s ability to work under pressure and deliver high-quality results. Their dedication to client satisfaction was evident throughout.",
            review_rate: 4.9,
            client_image:
                  "https://images.unsplash.com/photo-1521566652839-697aa473761a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
            client_name: "Samuel Evans",
            client_position: "IT Manager",
            review: "The project was completed on time and within budget. Their attention to detail and willingness to go the extra mile for their clients really stood out.",
            review_rate: 5.0,
            client_image:
                  "https://images.unsplash.com/photo-1521566652839-697aa473761a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
            client_name: "Tina Harris",
            client_position: "Art Director",
            review: "Their innovative ideas and understanding of our needs made this project a true success. We’re excited to continue working with them on future projects.",
            review_rate: 4.7,
            client_image:
                  "https://images.unsplash.com/photo-1521566652839-697aa473761a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
];

const Feedback = () => {
      return (
            <div id="feedback" className="w-full h-full my-[50px]">
                  <div className="w-full h-[70vh] overflow-hidden bg-red-500">
                        <div className="grid grid-cols-3 gap-4">
                              {
                                    // Feedback Section
                                    feedbackData?.map((el, index) => {
                                          return (
                                                <div
                                                      key={index}
                                                      className=" p-4  bg-green-500"
                                                >
                                                      <div className="flex items-end gap-4">
                                                            <Image
                                                                  src={
                                                                        el.client_image
                                                                  }
                                                                  alt={
                                                                        el.client_name
                                                                  }
                                                                  width={50}
                                                                  height={50}
                                                                  className="w-[50px] h-[50px] rounded-full"
                                                            />
                                                            <div>
                                                                  <h1>
                                                                        {
                                                                              el.client_name
                                                                        }
                                                                  </h1>
                                                                  <p>
                                                                        {
                                                                              el.client_position
                                                                        }
                                                                  </p>
                                                            </div>
                                                      </div>
                                                </div>
                                          );
                                    })
                              }
                        </div>
                  </div>
            </div>
      );
};

export default Feedback;
