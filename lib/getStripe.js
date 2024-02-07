import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const getStripe = () => {
    if(!stripePromise) {
        stripePromise = loadStripe("sk_test_51Oc0LuF4h6AzO4beSFsliJR8IF2Jp3qqKJVJZipHHg10EfCk6eTU8XewS0HN6W32gJOCZpJJtOlRw6E8SAauB0FM00AA2CQyBL");
    }

    return stripePromise;
}

export default getStripe;