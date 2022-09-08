import CommerceSDK from "@chec/commerce.js";

const client = new CommerceSDK(process.env.NEXT_ENV_CHEC_PUBLIC_API_KEY);

export default client;
