
// "use client";

// import { useState } from "react";
// import { Progress } from "@/components/ui/progress";
// import Image from "next/image";

// type IntentType = "buyer" | "owner" | null;

// export default function PropertyIntent() {
//     const [activeIntent, setActiveIntent] = useState<IntentType>(null);

//     const [buyerFilters, setBuyerFilters] = useState({
//         propertyType: "Apartment",
//         budgetMin: "AED 50K",
//         budgetMax: "AED 2.5M",
//         location: "Dubai Marina",
//     });

//     const [ownerFilters, setOwnerFilters] = useState({
//         action: "Sell",
//         expectedPrice: "AED 1,850,000",
//         timeline: "Ready",
//     });

//     const buyerDots = ["bg-[#F88379]", "bg-[#FFAB25]", "bg-[#7FFFD4]"];
//     const ownerDots = ["bg-teal-400", "bg-teal-400", "bg-teal-400"];

//     return (
//         <div className=" px-4 py-[84px] sm:px-6 lg:px-0">
//             <div className=" container mx-auto">
//                 {/* Desktop: 3 Column Layout */}
//                 <div className="hidden lg:grid lg:grid-cols-2 lg:gap-10">
//                     <div className="flex gap-5 relative">
//                         <div
//                             className="h-[900px] w-[560px] absolute top-[50%] left-[50%] -z-30 
//              translate-x-[-50%] translate-y-[-50%] 
//              bg-center bg-no-repeat bg-cover rounded-[12px]"
//                             style={{
//                                 backgroundImage: "url('/overly.png')",
//                             }}
//                         ></div>

//                         {/* Buyer Intent Card */}
//                         <div className="rounded-3xl border border-gray-200 bg-[#FBFFFE] p-6 shadow-md w-1/2">
//                             <div className="mb-6 flex items-center  gap-2 border-b border-[#D4D4D4] pb-3">
//                                 {buyerDots.map((color, i) => (
//                                     <div key={i} className={`h-3 w-3 rounded-full ${color}`} />
//                                 ))}

//                                 <h2 className="text-[16px] font-normal text-[#4B4B4B]">
//                                     Buyer Intent
//                                 </h2>
//                             </div>

//                             <div className="space-y-5">
//                                 <div>
//                                     <h3 className="mb-4 text-xl font-normal text-[#4B4B4B]">
//                                         Property type
//                                     </h3>
//                                     <div className="flex gap-2">
//                                         {["Apartment", "Villa"].map((type) => (
//                                             <button
//                                                 key={type}
//                                                 className={`rounded-full px-6 py-3 text-sm text-[#4B4B4B] font-medium transition-colors ${buyerFilters.propertyType === type
//                                                     ? "bg-[#D0FFEF] text-teal-700"
//                                                     : "bg-[#FDFDFD] text-gray-600 shadow-md "
//                                                     }`}
//                                             >
//                                                 {type}
//                                             </button>
//                                         ))}
//                                     </div>
//                                 </div>

//                                 <div>
//                                     <h3 className="mb-3 text-xl font-normal text-[#4B4B4B]">
//                                         Budget Range
//                                     </h3>

//                                     {/* Progress Bar (shadcn) */}
//                                     <div className="space-y-4">
//                                         <Progress value={75} className=" rounded-full bg-[#F0F0F0] h-5" />
//                                         <div className="flex justify-between text-sm text-gray-600">
//                                             <span>{buyerFilters.budgetMin}</span>
//                                             <span>{buyerFilters.budgetMax}</span>
//                                         </div>


//                                     </div>
//                                 </div>

//                                 <div>
//                                     <h3 className="mb-4 text-xl font-normal text-[#4B4B4B]">
//                                         Location
//                                     </h3>
//                                     <div className="flex  gap-2">
//                                         {["Dubai Marina", "Downtown", "Sharjah"].map((loc) => (
//                                             <button
//                                                 key={loc}
//                                                 className={`rounded-full px-3 py-1.5 text-xs transition-colors ${buyerFilters.location === loc
//                                                     ? "bg-[#E2FFF5] text-[#006946]"
//                                                     : "border border-gray-300 text-gray-600 hover:bg-gray-50"
//                                                     }`}
//                                             >
//                                                 {loc}
//                                             </button>
//                                         ))}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Owner Intent Card */}
//                         <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-md w-1/2">
//                             <div className="mb-6 flex items-center  gap-2 border-b border-[#D4D4D4] pb-3">
//                                 {buyerDots.map((color, i) => (
//                                     <div key={i} className={`h-3 w-3 rounded-full ${color}`} />
//                                 ))}

//                                 <h2 className="text-[16px] font-normal text-[#4B4B4B]">
//                                     Owner Intent
//                                 </h2>
//                             </div>



//                             <div className="space-y-5">
//                                 <div>
//                                     <h3 className="mb-4 text-xl font-normal text-[#4B4B4B]">
//                                         I want to
//                                     </h3>
//                                     <div className="flex gap-2">
//                                         {["Sell", "Rent"].map((action) => (
//                                             <button
//                                                 key={action}
//                                                 className={`rounded-full px-6 py-3 text-sm text-[#4B4B4B] font-medium transition-colors ${ownerFilters.action === action
//                                                     ? "bg-[#D0FFEF] text-teal-700"
//                                                     : "bg-[#FDFDFD] text-gray-600 shadow-md "
//                                                     }`}
//                                             >
//                                                 {action}
//                                             </button>
//                                         ))}
//                                     </div>
//                                 </div>

//                                 <div>
//                                     <h3 className="mb-4 text-xl font-normal text-[#4B4B4B]">
//                                         Expected Price
//                                     </h3>
//                                     <input
//                                         type="text"
//                                         value={ownerFilters.expectedPrice}
//                                         readOnly
//                                         className="w-full rounded-[8px] border  bg-[#F6FFFC] px-3 h-[50px] text-base text-[#4B4B4B] "
//                                     />
//                                 </div>

//                                 <div>
//                                     <h3 className="mb-4 text-xl font-normal text-[#4B4B4B]">
//                                         Timeline
//                                     </h3>
//                                     <div className="flex gap-2">
//                                         {["Ready",].map((time) => (
//                                             <button
//                                                 key={time}
//                                                 className={`rounded-full px-3 py-1.5 text-xs transition-colors ${ownerFilters.timeline === time
//                                                     ? "bg-orange-100 text-orange-700"
//                                                     : "border border-gray-300 text-gray-600 hover:bg-gray-50"
//                                                     }`}
//                                             >
//                                                 {time}
//                                             </button>
//                                         ))}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Hero Section */}
//                     <div className="flex flex-col justify-center space-y-6">
//                         <div className="">
//                             <Image src="/intentbutton.png" alt="logo" width={1000} height={1000} className="w-[175px]" />
//                         </div>

//                         <div>
//                             <h1 className="text-[64px] font-medium leading-tight text-[#4B4B4B]">
//                                 Start with intent,{" "}
//                                 <span className="text-[#F88379]">not endless</span>{" "}
//                                 searching.
//                             </h1>
//                         </div>

//                         <p className="text-lg leading-relaxed text-[#686868]">
//                             Whether you're a buyer looking for specific requirements or an
//                             owner ready to sell, Dea360 captures your intent first. This means
//                             better matches, less time wasted, and more meaningful connections.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }




"use client";

import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

// type IntentType = "buyer" | "owner" | null;

export default function PropertyIntent() {

  const [buyerFilters, setBuyerFilters] = useState({
    propertyType: "Apartment",
    budgetMin: "AED 50K",
    budgetMax: "AED 2.5M",
    location: "Dubai Marina",
  });

  const [ownerFilters, setOwnerFilters] = useState({
    action: "Sell",
    expectedPrice: "AED 1,850,000",
    timeline: "Ready",
  });

  const buyerDots = ["bg-[#F88379]", "bg-[#FFAB25]", "bg-[#7FFFD4]"];

  return (
    <div className="px-4 py-[84px] sm:px-6 lg:px-0">
      <div className="container mx-auto">
        {/* ========= MOBILE / TABLET (NEW) ========= */}
        
        <div className="lg:hidden space-y-8">
          {/* Hero (top) */}
          <div className="space-y-6">
            <div>
              <Image
                src="/intentbutton.png"
                alt="logo"
                width={1000}
                height={1000}
                className="w-[175px]"
              />
            </div>

            <h1 className="text-[36px] sm:text-[44px] font-medium leading-tight text-[#4B4B4B] dark:text-white">
              Start with intent,{" "}
              <span className="text-[#F88379]">not endless</span> searching.
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-[#686868] dark:text-white/70">
              Whether you&lsquo;`re a buyer looking for specific requirements or an
              owner ready to sell, Dea360 captures your intent first. This means
              better matches, less time wasted, and more meaningful connections.
            </p>
          </div>

          {/* Cards (stack) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Buyer Card */}
            <div className="rounded-3xl border border-gray-200 dark:border-white/10 bg-[#FBFFFE] dark:bg-[#0b0f14] p-6 shadow-md">
              <div className="mb-6 flex items-center gap-2 border-b border-[#D4D4D4] dark:border-white/10 pb-3">
                {buyerDots.map((color, i) => (
                  <div key={i} className={`h-3 w-3 rounded-full ${color}`} />
                ))}
                <h2 className="text-[16px] font-normal text-[#4B4B4B] dark:text-white">
                  Buyer Intent
                </h2>
              </div>

              <div className="space-y-5">
                <div>
                  <h3 className="mb-4 text-xl font-normal text-[#4B4B4B] dark:text-white">
                    Property type
                  </h3>
                  <div className="flex gap-2">
                    {["Apartment", "Villa"].map((type) => (
                      <button
                        key={type}
                        onClick={() =>
                          setBuyerFilters((p) => ({ ...p, propertyType: type }))
                        }
                        className={`rounded-full px-6 py-3 text-sm font-medium transition-colors ${
                          buyerFilters.propertyType === type
                            ? "bg-[#D0FFEF] text-teal-700"
                            : "bg-[#FDFDFD] text-gray-600 shadow-md dark:bg-white/5 dark:text-white/70"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-normal text-[#4B4B4B] dark:text-white">
                    Budget Range
                  </h3>
                  <div className="space-y-4">
                    <Progress
                      value={75}
                      className="rounded-full bg-[#F0F0F0] dark:bg-white/10 h-5"
                    />
                    <div className="flex justify-between text-sm text-gray-600 dark:text-white/60">
                      <span>{buyerFilters.budgetMin}</span>
                      <span>{buyerFilters.budgetMax}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-normal text-[#4B4B4B] dark:text-white">
                    Location
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["Dubai Marina", "Downtown", "Sharjah"].map((loc) => (
                      <button
                        key={loc}
                        onClick={() =>
                          setBuyerFilters((p) => ({ ...p, location: loc }))
                        }
                        className={`rounded-full px-3 py-1.5 text-xs transition-colors ${
                          buyerFilters.location === loc
                            ? "bg-[#E2FFF5] text-[#006946]"
                            : "border border-gray-300 text-gray-600 hover:bg-gray-50 dark:border-white/15 dark:text-white/70 dark:hover:bg-white/5"
                        }`}
                      >
                        {loc}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Owner Card */}
            <div className="rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0b0f14] p-6 shadow-md">
              <div className="mb-6 flex items-center gap-2 border-b border-[#D4D4D4] dark:border-white/10 pb-3">
                {buyerDots.map((color, i) => (
                  <div key={i} className={`h-3 w-3 rounded-full ${color}`} />
                ))}
                <h2 className="text-[16px] font-normal text-[#4B4B4B] dark:text-white">
                  Owner Intent
                </h2>
              </div>

              <div className="space-y-5">
                <div>
                  <h3 className="mb-4 text-xl font-normal text-[#4B4B4B] dark:text-white">
                    I want to
                  </h3>
                  <div className="flex gap-2">
                    {["Sell", "Rent"].map((action) => (
                      <button
                        key={action}
                        onClick={() =>
                          setOwnerFilters((p) => ({ ...p, action }))
                        }
                        className={`rounded-full px-6 py-3 text-sm font-medium transition-colors ${
                          ownerFilters.action === action
                            ? "bg-[#D0FFEF] text-teal-700"
                            : "bg-[#FDFDFD] text-gray-600 shadow-md dark:bg-white/5 dark:text-white/70"
                        }`}
                      >
                        {action}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-normal text-[#4B4B4B] dark:text-white">
                    Expected Price
                  </h3>
                  <input
                    type="text"
                    value={ownerFilters.expectedPrice}
                    readOnly
                    className="w-full rounded-[8px] border bg-[#F6FFFC] dark:bg-white/5 dark:border-white/10 px-3 h-[50px] text-base text-[#4B4B4B] dark:text-white"
                  />
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-normal text-[#4B4B4B] dark:text-white">
                    Timeline
                  </h3>
                  <div className="flex gap-2">
                    {["Ready"].map((time) => (
                      <button
                        key={time}
                        onClick={() =>
                          setOwnerFilters((p) => ({ ...p, timeline: time }))
                        }
                        className={`rounded-full px-3 py-1.5 text-xs transition-colors ${
                          ownerFilters.timeline === time
                            ? "bg-orange-100 text-orange-700 dark:bg-orange-500/15 dark:text-orange-200"
                            : "border border-gray-300 text-gray-600 hover:bg-gray-50 dark:border-white/15 dark:text-white/70 dark:hover:bg-white/5"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========= DESKTOP (YOUR ORIGINAL - NO DESIGN CHANGE) ========= */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-10">
          <div className="flex gap-5 relative">
            {/* overlay image: light only (dark এ hide) */}
            <div
              className="h-[900px] w-[560px] absolute top-[50%] left-[50%] -z-30 
              translate-x-[-50%] translate-y-[-50%] 
              bg-center bg-no-repeat bg-cover rounded-[12px]
              dark:hidden"
              style={{
                backgroundImage: "url('/overly.png')",
              }}
            ></div>

            {/* Buyer Intent Card */}
            <div className="rounded-3xl border border-gray-200 dark:border-white/10 bg-[#FBFFFE] dark:bg-[#0b0f14] p-6 shadow-md w-1/2">
              <div className="mb-6 flex items-center  gap-2 border-b border-[#D4D4D4] dark:border-white/10 pb-3">
                {buyerDots.map((color, i) => (
                  <div key={i} className={`h-3 w-3 rounded-full ${color}`} />
                ))}

                <h2 className="text-[16px] font-normal text-[#4B4B4B] dark:text-white">
                  Buyer Intent
                </h2>
              </div>

              <div className="space-y-5">
                <div>
                  <h3 className="mb-4 text-xl font-normal text-[#4B4B4B] dark:text-white">
                    Property type
                  </h3>
                  <div className="flex gap-2">
                    {["Apartment", "Villa"].map((type) => (
                      <button
                        key={type}
                        onClick={() =>
                          setBuyerFilters((p) => ({ ...p, propertyType: type }))
                        }
                        className={`rounded-full px-6 py-3 text-sm text-[#4B4B4B] font-medium transition-colors ${
                          buyerFilters.propertyType === type
                            ? "bg-[#D0FFEF] text-teal-700"
                            : "bg-[#FDFDFD] text-gray-600 shadow-md dark:bg-white/5 dark:text-white/70"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-normal text-[#4B4B4B] dark:text-white">
                    Budget Range
                  </h3>

                  <div className="space-y-4">
                    <Progress
                      value={75}
                      className=" rounded-full bg-[#F0F0F0] dark:bg-white/10 h-5"
                    />
                    <div className="flex justify-between text-sm text-gray-600 dark:text-white/60">
                      <span>{buyerFilters.budgetMin}</span>
                      <span>{buyerFilters.budgetMax}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-normal text-[#4B4B4B] dark:text-white">
                    Location
                  </h3>
                  <div className="flex gap-2">
                    {["Dubai Marina", "Downtown", "Sharjah"].map((loc) => (
                      <button
                        key={loc}
                        onClick={() =>
                          setBuyerFilters((p) => ({ ...p, location: loc }))
                        }
                        className={`rounded-full px-3 py-1.5 text-xs transition-colors ${
                          buyerFilters.location === loc
                            ? "bg-[#E2FFF5] text-[#006946]"
                            : "border border-gray-300 text-gray-600 hover:bg-gray-50 dark:border-white/15 dark:text-white/70 dark:hover:bg-white/5"
                        }`}
                      >
                        {loc}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Owner Intent Card */}
            <div className="rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0b0f14] p-6 shadow-md w-1/2">
              <div className="mb-6 flex items-center  gap-2 border-b border-[#D4D4D4] dark:border-white/10 pb-3">
                {buyerDots.map((color, i) => (
                  <div key={i} className={`h-3 w-3 rounded-full ${color}`} />
                ))}

                <h2 className="text-[16px] font-normal text-[#4B4B4B] dark:text-white">
                  Owner Intent
                </h2>
              </div>

              <div className="space-y-5">
                <div>
                  <h3 className="mb-4 text-xl font-normal text-[#4B4B4B] dark:text-white">
                    I want to
                  </h3>
                  <div className="flex gap-2">
                    {["Sell", "Rent"].map((action) => (
                      <button
                        key={action}
                        onClick={() =>
                          setOwnerFilters((p) => ({ ...p, action }))
                        }
                        className={`rounded-full px-6 py-3 text-sm text-[#4B4B4B] font-medium transition-colors ${
                          ownerFilters.action === action
                            ? "bg-[#D0FFEF] text-teal-700"
                            : "bg-[#FDFDFD] text-gray-600 shadow-md dark:bg-white/5 dark:text-white/70"
                        }`}
                      >
                        {action}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-normal text-[#4B4B4B] dark:text-white">
                    Expected Price
                  </h3>
                  <input
                    type="text"
                    value={ownerFilters.expectedPrice}
                    readOnly
                    className="w-full rounded-[8px] border bg-[#F6FFFC] dark:bg-white/5 dark:border-white/10 px-3 h-[50px] text-base text-[#4B4B4B] dark:text-white"
                  />
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-normal text-[#4B4B4B] dark:text-white">
                    Timeline
                  </h3>
                  <div className="flex gap-2">
                    {["Ready"].map((time) => (
                      <button
                        key={time}
                        onClick={() =>
                          setOwnerFilters((p) => ({ ...p, timeline: time }))
                        }
                        className={`rounded-full px-3 py-1.5 text-xs transition-colors ${
                          ownerFilters.timeline === time
                            ? "bg-orange-100 text-orange-700 dark:bg-orange-500/15 dark:text-orange-200"
                            : "border border-gray-300 text-gray-600 hover:bg-gray-50 dark:border-white/15 dark:text-white/70 dark:hover:bg-white/5"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Section */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="">
              <Image
                src="/intentbutton.png"
                alt="logo"
                width={1000}
                height={1000}
                className="w-[175px]"
              />
            </div>

            <div>
              <h1 className="text-[64px] font-medium leading-tight text-[#4B4B4B] dark:text-white">
                Start with intent,{" "}
                <span className="text-[#F88379]">not endless</span> searching.
              </h1>
            </div>

            <p className="text-lg leading-relaxed text-[#686868] dark:text-white/70">
              Whether you&lsquo;`re a buyer looking for specific requirements or an
              owner ready to sell, Dea360 captures your intent first. This means
              better matches, less time wasted, and more meaningful connections.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
