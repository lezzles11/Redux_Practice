import { SWITCH_CUSTOMER } from "./types";

/**********************************************
 * The purpose of this method is to change value in a data, given id
 * ==================================
 ***********************************************/
export const markCustomerAsSelected = (id) => ({
  type: SWITCH_CUSTOMER,
  payload: id,
});
