// getFCMToken.js
import { messaging } from "./firebase";
import { getToken } from "firebase/messaging";

const getFCMToken = async (setTokenFound) => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const token = await getToken(messaging, {
        vapidKey:
          "BEjaPG8TwChd1532dk3I8B6Luur9a7N1kzYWwpPW4MD2YYHDpBQIuFhBd-AZJdWZQEIyP7jCzXAIFIfvvfKPSzM",
      });
      setTokenFound(true);
      return token;
    } else {
      console.error("Notification permission denied");
    }
  } catch (error) {
    console.error("Error getting FCM token:", error);
  }
};

const getFCM = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const token = await getToken(messaging, {
        vapidKey:
          "BEjaPG8TwChd1532dk3I8B6Luur9a7N1kzYWwpPW4MD2YYHDpBQIuFhBd-AZJdWZQEIyP7jCzXAIFIfvvfKPSzM",
      });
      return token;
    } else {
      console.error("Notification permission denied");
    }
  } catch (error) {
    console.error("Error getting FCM token:", error);
  }
};

export default getFCMToken;
export { getFCM };
