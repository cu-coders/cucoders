import { message } from "antd";
import "../styles/antd.css";

const success = (msg, dur = 3) => {
  message.success({
    content: msg,
    style: {
      style: {
        margin: "10px auto",
      },
    },
    duration: dur,
  });
};

const error = (msg, dur = 3) => {
  message.error({
    content: msg,
    style: {
      style: {
        margin: "10px auto",
      },
    },
    duration: dur,
  });
};

const warning = (msg, dur) => {
  message.warning({
    content: msg,
    style: {
      style: {
        margin: "10px auto",
      },
    },
    duration: dur,
  });
};

export { success, error, warning };
