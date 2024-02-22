import React, { useEffect, useState } from "react";

import { RingLoader } from "react-spinners";

const Success = () => {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 3000);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loading ? (
        <RingLoader color="#36d7b7" />
      ) : (
        <div>
          <h2 className="text-5xl font-semibold text-green-500 my-3 text-center">
            Order Successful !
          </h2>
          <p className="text-2xl font-mono text-center">Your order have been successfully placed</p>
        </div>
      )}
      
    </div>
  );
};

export default Success;
