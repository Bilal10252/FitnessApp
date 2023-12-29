import { Box, Stack, Typography } from "@mui/material";

const ExerciseVideos = ({ name, exerciseVideoData }) => {
  let { contents } = exerciseVideoData;
  console.log(contents);

  // console.log(contents[0]);
  return (
    <Box sx={{ marginTop: { lg: "100px", xs: "20px" }, p: "20px" }}>
      <Typography variant="h3" mb={"33px"} textAlign={'center'}>
        Watch out{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}{" "}
        </span>{" "}
        videos
      </Typography>
      <Stack
        justifyContent={"center"}
        flexWrap={"wrap"}
        alignItems={"center"}
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "80px", xs: "0" } }}
      >
        {contents?.slice(0, 6).map((content, index) => (
          <a
            className="exercise-video"
            target="_blank"
            href={`https://www.youtube.com/watch?v=${content.video.videoId}`}
          >
            <img src={content.video.thumbnails[0].url} style={{borderRadius:'06px'}}/>
            <Typography variant="h5" color={"#000"}>{content.video.title}</Typography>
            <Typography variant="h6" color={"#000"}>{content.video.channelName}</Typography>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
