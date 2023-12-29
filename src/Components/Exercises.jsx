import { Box, Stack, Typography, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import ExerciseCard from "./ExerciseCard";
import fetchData from "../utils/fetchData";

const Exercises = ({ bodyPart, setSearchedExercises, searchedExercises }) => {
  // Pagination logic
  let [currentPage, setCurrentPage] = useState("1");

  let indexOfLastExercise = currentPage * 9;

  let onThatPageExercise = searchedExercises.slice(
    indexOfLastExercise - 9,
    indexOfLastExercise
  );

  // Pagination function that'll kick in once it changes.
  let paginationLogic = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1570, behavior: "smooth" });
  };

  useEffect(() => {
    let fetchingData = async () => {
      if (bodyPart === "all") {
        onThatPageExercise = await fetchData("?limit=50");
        setSearchedExercises(onThatPageExercise);
      } else {
        onThatPageExercise = await fetchData(`/bodyPart/${bodyPart}?limit=50`);
        setSearchedExercises(onThatPageExercise);
      }
    };

    fetchingData();
  }, [bodyPart]);

  return (
    <Box
      className="exercises"
      id="exercises"
      sx={{
        mt: { lg: "110px" },
        mt: "50px",
        p: "20px",
      }}
    >
      <Typography variant="h3" mb={"40px"}>
        Showing Results
      </Typography>

      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        sx={{ gap: { sm: "50px ", lg: "110px" }, justifyContent: "center" }}
      >
        {onThatPageExercise.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise}></ExerciseCard>
        ))}
      </Stack>
      {/* The whole pagination component. */}
      <Stack alignItems={"center"} marginTop={"100px"}>
        {searchedExercises.length > 9 && (
          <Pagination
            count={Math.ceil(searchedExercises.length / 9)}
            shape="rounded"
            size="large"
            defaultPage={1}
            onChange={paginationLogic}
          ></Pagination>
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
