import withMiddleware from "@/utils/middleware/withMiddleware.js";

const handler = async (req, res) => {
  if (req.method !== "GET") {
    //GET, POST, PUT, DELETE
    console.log("Serve this only if the request method is GET");
    return res.status(405).send({ error: true });
  }

  try {
    return res.status(200).send({ text: "Proxy Be Working" });
  } catch (e) {
    console.error(`---> An error occured at /api/apps: ${e.message}`, e);
    return res.status(403).send({ error: true });
  }
};

export default withMiddleware("verifyRequest")(handler);
