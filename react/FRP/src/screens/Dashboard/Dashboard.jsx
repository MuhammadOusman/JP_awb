import React, { useState, useEffect } from "react";
import {
  Typography,
  Box,
  useMediaQuery,
  useTheme,
  Divider,
} from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase.jsx";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import styles from "./Dashboard.module.css";

export const Dashboard = () => {
  const userDataJSON = localStorage.getItem("userData");
  const userData = JSON.parse(userDataJSON);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [totals, setTotals] = useState({
    students: 0,
    teachers: 0,
    exams: 0,
    admissions: 0,
    subjects: 0,
  });

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const [
          studentsSnap,
          teachersSnap,
          examsSnap,
          admissionsSnap,
          subjectsSnap,
        ] = await Promise.all([
          getDocs(collection(db, "Students")),
          getDocs(collection(db, "Teachers")),
          getDocs(collection(db, "Exam Schedule")),
          getDocs(collection(db, "Admissions")),
          getDocs(collection(db, "Subjects")),
        ]);

        setTotals({
          students: studentsSnap.docs.length,
          teachers: teachersSnap.docs.length,
          exams: examsSnap.docs.length,
          admissions: admissionsSnap.docs.length,
          subjects: subjectsSnap.docs.length,
        });
      } catch (error) {
        console.error("Error fetching totals:", error);
      }
    };

    fetchCounts();
  }, []);

  const data = [
    { name: "Students", count: totals.students },
    { name: "Teachers", count: totals.teachers },
    { name: "Exams", count: totals.exams },
    { name: "Admissions", count: totals.admissions },
    { name: "Subjects", count: totals.subjects },
  ];

  const quotes = [
    "Learning today, leading tomorrow.",
    "Every expert was once a beginner.",
    "Your progress is your power.",
    "Mistakes are proof you are trying.",
    "Small steps every day lead to big results.",
    "Discipline beats motivation.",
    "Keep going, your future self will thank you.",
    "Dream. Learn. Achieve.",
    "One chapter at a time.",
    "Your education is your superpower.",
  ];

  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const hours = new Date().getHours();
  const greeting =
    hours < 12
      ? "Good Morning"
      : hours < 18
      ? "Good Afternoon"
      : "Good Evening";

  const getChartWidth = () => {
    if (window.innerWidth <= 550) return "100%"; // mobile
    // if (window.innerWidth <= 650) return "calc(100% - 0px)";
    // if (window.innerWidth <= 800) return "calc(100% - 100px)";
    return "calc(100% - 0px)"; // desktop
  };

  return (
    <Box className={styles.dashContainer}>
      <Typography
        sx={{ border: "none" }}
        variant={isSmallScreen ? "h3" : "h2"}
        className={styles.heading}
      >
        {greeting}, {userData?.name || "User"}!
      </Typography>

      <Divider sx={{ margin: "20px 0", backgroundColor: "#333" }} />
      <table className={styles.table} style={{ width: "100%", marginTop: 24 }}>
        <thead>
          <tr>
            <th>Category</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Students</td>
            <td>{totals.students}</td>
          </tr>
          <tr>
            <td>Teachers</td>
            <td>{totals.teachers}</td>
          </tr>
          <tr>
            <td>Exams</td>
            <td>{totals.exams}</td>
          </tr>
          <tr>
            <td>Admissions</td>
            <td>{totals.admissions}</td>
          </tr>
          <tr>
            <td>Subjects</td>
            <td>{totals.subjects}</td>
          </tr>
        </tbody>
      </table>
    </Box>
  );
};
