import { Stack, Typography } from "@mui/material";
import gymImg from "../assets/icons/gym.png";

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <>
      <Stack
        type="button"
        alignItems={"center"}
        justifyContent={"center"}
        className="bodyPart-card"
        sx={{
          backgroundColor: "#fff",
          width: "270px",
          height: "280px",
          cursor: "pointer",
          gap: "47px",
          borderTop: bodyPart === item ? "4px solid #ff2626" : "",
        }}
        onClick={() => {
          setBodyPart(item);
          window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
        }}
      >
        <img
          src={gymImg}
          style={{
            width: "40px",
            height: "40px",
          }}
        ></img>

        <Typography
          fontSize={"24px"}
          fontWeight={"bold"}
          color={"#3A1212"}
          textTransform={"uppercase"}
        >
          {item}
        </Typography>
      </Stack>
    </>
  );
};

export default BodyPart;
