import React, { useEffect, Fragment, useContext } from "react";
import { LayoutContext } from "../layout";
import { toast } from "react-hot-toast";

const OrderSuccessMessage = (props) => {
  const { data, dispatch } = useContext(LayoutContext);
  useEffect(() => {
    if (data.orderSuccess) {
      toast.success("Payment is successful. Your order is in process. Please wait 2 days for delivery.", {
        duration: 10000,
      });
      dispatch({ type: "orderSuccess", payload: false });
    }
  }, [data.orderSuccess, dispatch]);

  return <Fragment />;
};

export default OrderSuccessMessage;