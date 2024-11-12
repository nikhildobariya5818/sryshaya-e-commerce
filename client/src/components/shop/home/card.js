import React from "react";
import cat1 from "../../../Assets/category-1.jpg"
import cat2 from "../../../Assets/category-2.jpg"
import cat3 from "../../../Assets/category-3.jpg"
import cat4 from "../../../Assets/category-4.jpg"
import cat5 from "../../../Assets/category-5.jpg"
export default function card() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-extrabold text-center tracking-tight text-gray-900">Popular on the Shofi store.</h2>
      <p className="mt-2 text-lg text-center text-gray-500">Shop by Category</p>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
        <div className="flex flex-col items-center p-4 rounded-lg shadow" style={{ position: "relative", backgroundColor: '#e5f0e2' }}>
          <img
            src={cat1}
            className="rounded-xl mx-auto"
            style={{ width: "260px", height: "270px", objectFit: "cover" }} />
          <div className="img-content mx-auto" style={{ position: "absolute", top: "30px", width: "100%", height: "20%" }}  >
            <span className="text-[20px]"><center>Frozen Foods-</center></span>
            <p className="mx-auto text-[14px]" style={{ color: "green" }}><center>5 items+</center> </p>
          </div>
        </div>
        <div className="flex flex-col items-center p-4 rounded-lg shadow" style={{ position: "relative", backgroundColor: '#f3e0e4' }}>
          <img
            src={cat2}
            className="rounded-xl mx-auto"
            style={{ width: "260px", height: "270px", objectFit: "cover" }} />
          <div className="img-content mx-auto" style={{ position: "absolute", top: "30px", width: "100%", height: "20%" }}  >
            <span className="text-[20px]"><center>Meat and Fish</center></span>
            <p className="mx-auto text-[14px]" style={{ color: "green" }}><center>2 items+</center> </p>
          </div>
        </div>
        <div className="flex flex-col items-center p-4 rounded-lg shadow" style={{ position: "relative", backgroundColor: '#f5f0ed' }}>
          <img
            src={cat3}
            className="rounded-xl mx-auto"
            style={{ width: "260px", height: "270px", objectFit: "cover" }} />
          <div className="img-content mx-auto" style={{ position: "absolute", top: "30px", width: "100%", height: "20%" }}  >
            <span className="text-[20px]"><center>Milk & Dairy</center></span>
            <p className="mx-auto text-[14px]" style={{ color: "green" }}><center>2 items+</center> </p>
          </div>
        </div>
        <div className="flex flex-col items-center p-4 rounded-lg shadow" style={{ position: "relative", backgroundColor: '#E6F1E0' }}>
          <img
            src={cat4}
            className="rounded-xl mx-auto"
            style={{ width: "260px", height: "270px", objectFit: "cover" }} />
          <div className="img-content mx-auto" style={{ position: "absolute", top: "30px", width: "100%", height: "20%" }}  >
            <span className="text-[20px]"><center>Beverages</center></span>
            <p className="mx-auto text-[14px]" style={{ color: "green" }}><center>3 items+</center> </p>
          </div>
        </div>
        <div className="flex flex-col items-center p-4 rounded-lg shadow" style={{ position: "relative", backgroundColor: '#F3E3D6' }}>
          <img
            src={cat5}
            className="rounded-xl mx-auto"
            style={{ width: "260px", height: "270px", objectFit: "cover" }} />
          <div className="img-content mx-auto" style={{ position: "absolute", top: "30px", width: "100%", height: "20%" }}  >
            <span className="text-[20px]"><center>Vegetables</center></span>
            <p className="mx-auto text-[14px]" style={{ color: "green" }}><center>2 items+</center> </p>
          </div>
        </div>
      </div>
    </div>
  );
}

