import React from "react";
import img1 from "../../../Assets/Cashew.webp"
import img2 from "../../../Assets/Fried-Onion-Flakes.webp"
import img3 from "../../../Assets/Premium- Dehydrated.webp"
import img4 from "../../../Assets/Dehydrated-Fruits-in-Germany.webp"
import img5 from "../../../Assets/Dehydrated-Beetroot-Powder.webp"
import img6 from "../../../Assets/Oct_21-BlogSS.webp"
import Layout from "../layout/index";

export default function Blog() {
  return (
    <Layout>
    <div className="max-w-6xl mx-auto py-32 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded overflow-hidden shadow-lg">
          <img
            alt="Cashew Nut Export"
            className="w-full"
            height="200"
            src={img1}
            style={{
              aspectRatio: "400/200",
              objectFit: "cover",
            }}
            width="400"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Your Trusted Cashew Nut Exporter and Supplier in North America</div>
            <p className="text-gray-700 text-base">
              Embark on a journey of culinary excellence with SryShaya Group, a distinguished Cashew Nut Export and
              Supplier in North America.
            </p>
          </div>
          <div className="px-6 pt-2 pb-2">
            <button variant="outline">Read More →</button>
          </div>
        </div>
        <div className="rounded overflow-hidden shadow-lg">
          <img
            alt="Fried Onion Flakes"
            className="w-full"
            height="200"
            src={img2}
            style={{
              aspectRatio: "400/200",
              objectFit: "cover",
            }}
            width="400"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              Crafting Culinary Excellence with Fried Onion Flakes – From Gujarat to Global Kitchens
            </div>
            <p className="text-gray-700 text-base">
              Nestled in the culinary heart of Gujarat, SryShaya Group emerges as a leading Fried Onion Flakes producer.
            </p>
          </div>
          <div className="px-6 pt-8 pb-2">
            <button variant="outline">Read More →</button>
          </div>
        </div>
        <div className="rounded overflow-hidden shadow-lg">
          <img
            alt="Dehydrated Vegetables"
            className="w-full"
            height="200"
            src={img3}
            style={{
              aspectRatio: "400/200",
              objectFit: "cover",
            }}
            width="400"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              Elevating Culinary Excellence with Premium Dehydrated Vegetables
            </div>
            <p className="text-gray-700 text-base">
              In the vibrant landscape of Gujarat, SryShaya Group stands as a beacon of quality and innovation in
              dehydrated vegetables.
            </p>
          </div>
          <div className="px-6 pt-2 pb-2">
            <button variant="outline">Read More →</button>
          </div>
        </div>
        <div className="rounded overflow-hidden shadow-lg">
          <img
            alt="Cashew Nut Export"
            className="w-full"
            height="200"
            src={img4}
            style={{
              aspectRatio: "400/200",
              objectFit: "cover",
            }}
            width="400"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Your Trusted Source for the Best Dehydrated Fruits in Germany</div>
            <p className="text-gray-700 text-base">
            In the heart of Germany, where discerning palates seek the finest culinary ingredients, SryShaya 
            </p>
          </div>
          <div className="px-6 pt-8 pb-2">
            <button variant="outline">Read More →</button>
          </div>
        </div>
        <div className="rounded overflow-hidden shadow-lg">
          <img
            alt="Cashew Nut Export"
            className="w-full"
            height="200"
            src={img5}
            style={{
              aspectRatio: "400/200",
              objectFit: "cover",
            }}
            width="400"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Best Quality Dehydrated Beetroot at Best Prices, Only at Sryshya.com</div>
            <p className="text-gray-700 text-base">
            Beetroot, known for its vibrant color and numerous health benefits, is a versatile vegetable that
            </p>
          </div>
          <div className="px-6 pt-2 pb-2">
            <button variant="outline">Read More →</button>
          </div>
        </div>
        <div className="rounded overflow-hidden shadow-lg">
          <img
            alt="Cashew Nut Export"
            className="w-full"
            height="200"
            src={img6}
            style={{
              aspectRatio: "400/200",
              objectFit: "cover",
            }}
            width="400"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Buy Export Quality Dehydrated Carrot at the Best Price Only at Sryshaya.com</div>
            <p className="text-gray-700 text-base">
            Carrots have long been a staple in our diets, loved for their vibrant color, crisp texture, and d
            </p>
          </div>
          <div className="px-6 pt-2 pb-2">
            <button variant="outline">Read More →</button>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  )
}

