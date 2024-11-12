import React from 'react';
import image from "../../../Assets/about.jpg";
import w1 from "../../../Assets/w1.jpg"
import w2 from "../../../Assets/w2.jpg"
import w3 from "../../../Assets/w3.jpg"
import w4 from "../../../Assets/w4.jpg"
import w55 from "../../../Assets/w55.jpg"
import w6 from "../../../Assets/w6.jpg"
import Layout from "../layout/index";

const AboutComponent = () => {
  return (
    <div className="max-w-4xl mx-auto my-32 p-6 bg-white shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="col-span-1">
          <img
            alt="Spices and condiments"
            className="w-full h-auto"
            src={image}
            style={{
              aspectRatio: "600/600",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="col-span-1 mt-6 md:mt-0">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-base">
            We are suppliers and exporters of products ranging in three versatile categories, which are: dehydrated
            vegetables, spray-dried, dried leaves, and powder. We also deal in spices, condiments, vegetables, fruits,
            and dehydrated powders and flakes. We are one of the leading suppliers and exporters of these products in
            the industry. We have our base located in the state of Gujarat. We have an edge over other businesses in
            that we take advantage of our strategic location and procure fresh and the finest quality raw onions and
            garlic for producing superior-grade dehydrated products that we offer for distinctive uses.
          </p>
          <p className="text-base mt-4">
            We are dedicated to catering to the needs of quality-conscious customers by providing them with top-notch
            quality dehydrated products processed using advanced technologies and world-class quality-centric processes.
            Our focus is on superior quality, extremely hygienic, natural flavors, and swift supply of products. Our
            motto is to achieve complete customer satisfaction. We carefully look after the packaging and make sure that
            it is designed in an innovative way, distinct for each and every product, holding them in a secure manner to
            ensure better delivery of our products.
          </p>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <Layout>
      <AboutComponent />
      <div className="py-2 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">Why Choose Us</h2>
            <div className="mt-2 h-1 w-24 bg-green-500 inline-block" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-lg shadow-lg p-6 text-center">
              <img
                alt="Decent clientele"
                className="mx-auto mb-4 h-24 w-24 rounded-full object-cover"
                height="100"
                src={w1}
                style={{
                  aspectRatio: "100/100",
                  objectFit: "cover",
                }}
                width="100"
              />
              <h3 className="text-xl font-semibold mb-4">Decent clientele</h3>
              <p className="text-gray-600">
                We have gained a decent clientele in the industry with our service delivery. We have been working
                tirelessly to build the faith of clients in us and cater to their needs the best we can.
              </p>
            </div>
            <div className="rounded-lg shadow-lg p-6 text-center">
              <img
                alt="Great production capacity"
                className="mx-auto mb-4 h-24 w-24 rounded-full object-cover"
                height="100"
                src={w2}
                style={{
                  aspectRatio: "100/100",
                  objectFit: "cover",
                }}
                width="100"
              />
              <h3 className="text-xl font-semibold mb-4">Great production capacity</h3>
              <p className="text-gray-600">
                We always aim to achieve betterment in our production capacity and we continuously try to develop more
                sustainable products.
              </p>
            </div>
            <div className="rounded-lg shadow-lg p-6 text-center">
              <img
                alt="Customer satisfaction"
                className="mx-auto mb-4 h-24 w-24 rounded-full object-cover"
                height="100"
                src={w3}
                style={{
                  aspectRatio: "100/100",
                  objectFit: "cover",
                }}
                width="100"
              />
              <h3 className="text-xl font-semibold mb-4">Customer satisfaction</h3>
              <p className="text-gray-600">
                We believe that the customer is the king of the market and his satisfaction is the ultimate objective that
                we, as a business, have to serve.
              </p>
            </div>
            <div className="rounded-lg shadow-lg p-6 text-center">
              <img
                alt="Affordable"
                className="mx-auto mb-4 h-24 w-24 object-cover"
                height="100"
                src={w4}
                style={{
                  aspectRatio: "100/100",
                  objectFit: "cover",
                }}
                width="100"
              />
              <h3 className="text-xl font-semibold mb-4">Affordable</h3>
              <p className="text-gray-600">
                Our products are offered to the customers and at the most decent prices. We always try to provide the
                customers the best priced products in the market.
              </p>
            </div>
            <div className="rounded-lg shadow-lg p-6 text-center">
              <img
                alt="Quality products"
                className="mx-auto mb-4 h-24 w-24 object-cover"
                height="100"
                src={w55}
                style={{
                  aspectRatio: "100/100",
                  objectFit: "cover",
                }}
                width="100"
              />
              <h3 className="text-xl font-semibold mb-4">Quality products</h3>
              <p className="text-gray-600">
                Our product quality speaks for itself. We don't compromise on the quality of our products at any cost and
                we deliver the finest quality products in the market.
              </p>
            </div>
            <div className="rounded-lg shadow-lg p-6 text-center">
              <img
                alt="Open to suggestions and feedbacks"
                className="mx-auto mb-4 h-24 w-24 object-cover"
                height="100"
                src={w6}
                style={{
                  aspectRatio: "100/100",
                  objectFit: "cover",
                }}
                width="100"
              />
              <h3 className="text-xl font-semibold mb-4">Open to suggestions and feedbacks</h3>
              <p className="text-gray-600">
                We do not hesitate to be open to suggestions from our customers because we believe that it is the best way
                to develop.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">Client Feedback</h2>
          <div className="mt-2 h-1 w-24 bg-green-500 inline-block" />
          <div className="mt-2">
            <span className="inline-block h-1 w-20 rounded bg-[#00B4D8]" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-1/4 bg-gray-100 p-6 rounded-lg shadow-lg">
            <QuoteIcon style={{color:'#00B4D8'}} className=" text-3xl -mt-6 -ml-6" />
            <p className="text-gray-600 mt-4">
              "Thanks so much for the quality spices! The cinnamon sticks are absolutely beautiful and very fragrant. My
              order was packaged so well too! Thanks again...I will be back for more."
            </p>
            <p className="mt-6 font-semibold">Manoj Gupta</p>
          </div>
          <div className="w-full md:w-1/4 bg-gray-100 p-6 rounded-lg shadow-lg">
            <QuoteIcon style={{color:'#00B4D8'}} className="text-[#00B4D8] text-3xl -mt-6 -ml-6" />
            <p className="text-gray-600 mt-4">
              "I absolutely love your spices they are so great!!! They have such great fresh flavor and the smell when
              you open them is amazing! I will be a repeat customer many times over."
            </p>
            <p className="mt-6 font-semibold">Jay Prakash Nirala</p>
          </div>
          <div className="w-full md:w-1/4 bg-gray-100 p-6 rounded-lg shadow-lg">
            <QuoteIcon style={{color:'#00B4D8'}} className="text-[#00B4D8] text-3xl -mt-6 -ml-6" />
            <p className="text-gray-600 mt-4">
              "I was getting my spices from across the country until I found Spices for Less. Very fresh product,
              affordable pricing and fast shipping. Thanks for making my business and life easier."
            </p>
            <p className="mt-6 font-semibold">Rohan Verma</p>
          </div>
          <div className="w-full md:w-1/4 bg-gray-100 p-6 rounded-lg shadow-lg">
            <QuoteIcon style={{color:'#00B4D8'}} className="text-[#00B4D8] text-3xl -mt-6 -ml-6" />
            <p className="text-gray-600 mt-4">
              "I have been ordering in bulk for my cafe for 2 months now, and speedy delivery. Looking forward to several years of working with my new spice vendor!"
            </p>
            <p className="mt-6 font-semibold">Neha</p>
          </div>
        </div>
        
      </div>
    </div>
    </Layout>
  );
};

export default About;


function QuoteIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
    </svg>
  )
}