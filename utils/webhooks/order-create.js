/**
 *
 * @typedef {import("@/_developer/types/2024-07/webhooks.js").ORDERS_CREATE} webhookTopic
 */
const ordersCreateHandler = async (
  topic,
  shop,
  webhookRequestBody,
  webhookId,
  apiVersion
) => {
  try {
    /** @type {webhookTopic} */
    const webhookBody = JSON.parse(webhookRequestBody);
    console.log(webhookBody);
  } catch (e) {
    console.error(e);
  }
};
export default ordersCreateHandler;
