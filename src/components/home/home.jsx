
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import './home.css';

import { allCategoriesThunk } from "../../Redux/Slices/Categories/getCategoriesThunk";
import { allSupplierThunk } from "../../Redux/Slices/Suplliers/getSupplierThunk";
import { allUsersThunk } from "../../Redux/Slices/Users/getUsersThunk";

import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Button,
  Avatar,
  useTheme,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Chip,
  Tabs,
  Tab,
  Divider,
  IconButton
} from "@mui/material";
import { styled } from "@mui/material/styles";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ListAltIcon from "@mui/icons-material/ListAlt";
import BusinessIcon from "@mui/icons-material/Business";
import CategoryIcon from "@mui/icons-material/Category";
import PeopleIcon from "@mui/icons-material/People";
import SchoolIcon from "@mui/icons-material/School";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ReceiptIcon from "@mui/icons-material/Receipt";
import BarChartIcon from "@mui/icons-material/BarChart";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { allSchoolsThunk } from "../../Redux/Slices/Schools/getSchoolThunk";

// Styled components with administrator theme
const PageContainer = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  background: "#f8f9fa",
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

const ContentContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(4),
}));

const WelcomeSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  textAlign: "center",
  padding: theme.spacing(4, 0),
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  borderRadius: 16,
  overflow: "hidden",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  border: "1px solid #e0e0e0",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 12px 20px rgba(0,0,0,0.1)",
  },
}));

const StatsCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: 16,
  background: "#fff",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid #e0e0e0",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 8px 16px rgba(0,0,0,0.05)",
  },
}));

const ActionButton = styled(Button)(({ theme }) => ({
  borderRadius: 30,
  padding: "10px 24px",
  fontWeight: 700,
  textTransform: "none",
  fontSize: "1rem",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
  },
}));

const SchoolCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  borderRadius: 16,
  overflow: "hidden",
  transition: "all 0.3s ease",
  border: "1px solid #e0e0e0",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
  },
}));

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
};

export const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);
  
  const schools = useSelector(s => s.school?.allSchools || []);
  const categories = useSelector(s => s.category?.allCategories || []);
  const suppliers = useSelector(s => s.supplier?.allSuppliers || []);
  const users = useSelector(s => s.user?.allUsers || []);
  const currUser = useSelector(s => s.user?.currUser || {});

  const getData = async () => {
    await dispatch(allCategoriesThunk());
    await dispatch(allSupplierThunk());
    await dispatch(allUsersThunk());
    // Assuming you have a thunk for schools
    if (allSchoolsThunk) {
      await dispatch(allSchoolsThunk());
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Administrator color palette - Blue and Purple accents
  const colors = {
    primary: "#3f51b5", // Indigo
    primaryLight: "#757de8",
    primaryDark: "#002984",
    secondary: "#6a1b9a", // Purple
    secondaryLight: "#9c4dcc",
    secondaryDark: "#38006b",
    text: "#263238",
    textLight: "#546e7a",
    background: "#f5f5f5",
    card: "#ffffff",
    border: "#e0e0e0",
    success: "#4caf50",
    warning: "#ff9800",
    error: "#f44336",
    info: "#2196f3",
  };

  // Navigation options for administrator
  const navigationOptions = [
    {
      title: "ניהול מוסדות",
      description: "צפייה וניהול של כל המוסדות במערכת",
      icon: <SchoolIcon sx={{ fontSize: 40 }} />,
      color: colors.primary,
      path: "/schools",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "ניהול תקציבים",
      description: "הקצאת תקציבים וניהול תקציבי המוסדות",
      icon: <LocalAtmIcon sx={{ fontSize: 40 }} />,
      color: colors.primaryLight,
      path: "/budgets",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "ניהול ספקים",
      description: "ניהול ספקים מרכזיים ואנשי קשר",
      icon: <BusinessIcon sx={{ fontSize: 40 }} />,
      color: colors.primaryDark,
      path: "/suppliers",
      image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "ניהול קטגוריות",
      description: "הגדרת קטגוריות הוצאה למערכת כולה",
      icon: <CategoryIcon sx={{ fontSize: 40 }} />,
      color: colors.secondary,
      path: "/categories",
      image: "https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "ניהול משתמשים",
      description: "ניהול הרשאות ומשתמשים בכל המוסדות",
      icon: <PeopleIcon sx={{ fontSize: 40 }} />,
      color: colors.secondaryLight,
      path: "/users",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "דוחות מערכת",
      description: "צפייה בדוחות מרוכזים מכל המוסדות",
      icon: <BarChartIcon sx={{ fontSize: 40 }} />,
      color: colors.secondaryDark,
      path: "/reports",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ];

  // Quick actions for administrator dashboard
  const quickActions = [
    {
      title: "הוספת מוסד",
      icon: <AddCircleOutlineIcon />,
      color: colors.primary,
      path: "/addSchool",
    },
    {
      title: "השוואת מוסדות",
      icon: <CompareArrowsIcon />,
      color: colors.secondary,
      path: "/compareSchools",
    },
    {
      title: "הגדרות מערכת",
      icon: <SettingsIcon />,
      color: colors.primaryDark,
      path: "/systemSettings",
    },
    {
      title: "התראות",
      icon: <NotificationsIcon />,
      color: colors.warning,
      path: "/notifications",
    },
  ];

  return (
    <PageContainer>
      <ContentContainer maxWidth="lg">
        {/* Welcome Section */}
        <WelcomeSection>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 4 }}>
            <Avatar
              sx={{
                bgcolor: colors.primary,
                width: 90,
                height: 90,
                mb: 3,
                boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
              }}
            >
              <DashboardIcon sx={{ fontSize: 55, color: "white" }} />
            </Avatar>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                color: colors.text,
                mb: 2,
                textAlign: "center",
              }}
            >
              ברוך הבא למערכת ניהול המוסדות
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: colors.textLight,
                textAlign: "center",
                fontWeight: 500,
                maxWidth: 800,
                mx: "auto",
                mb: 4
              }}
            >
              {currUser?.name ? `${currUser.name}, ` : ""}
              כאן תוכל לנהל את כל המוסדות, התקציבים וההוצאות במערכת בצורה מרוכזת
            </Typography>
            
            {/* Quick Actions */}
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", justifyContent: "center", mb: 4 }}>
              {quickActions.map((action, index) => (
                <Chip
                  key={index}
                  icon={<Box sx={{ color: "white", display: "flex" }}>{action.icon}</Box>}
                  label={action.title}
                  onClick={() => navigate(action.path)}
                  sx={{
                    bgcolor: action.color,
                    color: "white",
                    fontWeight: 600,
                    fontSize: "1rem",
                    py: 2.5,
                    px: 1,
                    "& .MuiChip-icon": { color: "white" },
                    "&:hover": {
                      bgcolor: action.color,
                      filter: "brightness(90%)",
                    },
                  }}
                />
              ))}
            </Box>
          </Box>
        </WelcomeSection>

        {/* Tabs Section */}
        <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 3 }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            variant="fullWidth"
            textColor="primary"
            indicatorColor="primary"
            sx={{
              "& .MuiTab-root": {
                fontWeight: 700,
                fontSize: "1rem",
                color: colors.textLight,
                "&.Mui-selected": {
                  color: colors.primary,
                }
              },
              "& .MuiTabs-indicator": {
                backgroundColor: colors.primary,
                height: 3,
              }
            }}
          >
            <Tab label="ניהול מערכת" />
            <Tab label="סקירת מוסדות" />
            <Tab label="נתונים וסטטיסטיקות" />
          </Tabs>
        </Box>

        {/* Tab Panels */}
        <TabPanel value={tabValue} index={0}>
          <Grid container spacing={3}>
            {navigationOptions.map((option, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <FeatureCard>
                  <CardMedia
                    component="img"
                    height="140"
                    image={option.image}
                    alt={option.title}
                    // sx={{ objectFit: "cover" }}
                    />
                    <CardActionArea onClick={() => navigate(option.path)}>
                      <CardContent sx={{ p: 3 }}>
                        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                          <Avatar
                            sx={{
                              bgcolor: `${option.color}15`,
                              color: option.color,
                              mr: 2,
                            }}
                          >
                            {option.icon}
                          </Avatar>
                          <Typography variant="h6" sx={{ fontWeight: 700, color: colors.text }}>
                            {option.title}
                          </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ color: colors.textLight }}>
                          {option.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </FeatureCard>
                </Grid>
              ))}
            </Grid>
          </TabPanel>
  
          <TabPanel value={tabValue} index={1}>
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: colors.text,
                  mb: 3,
                  borderBottom: `2px solid ${colors.primary}`,
                  pb: 1,
                  display: "inline-block"
                }}
              >
                מוסדות במערכת
              </Typography>
              
              <Grid container spacing={3}>
                {schools && schools.length > 0 ? (
                  schools.map((school, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <SchoolCard>
                        <CardActionArea onClick={() => navigate(`/school/${school.id}`)}>
                          <CardMedia
                            component="img"
                            height="140"
                            image={`https://source.unsplash.com/random/300x200?school&sig=${index}`}
                            alt={school.name}
                          />
                          <CardContent>
                            <Typography variant="h6" sx={{ fontWeight: 700, color: colors.text, mb: 1 }}>
                              {school.name}
                            </Typography>
                            <Typography variant="body2" sx={{ color: colors.textLight, mb: 2 }}>
                              {school.address || "כתובת לא זמינה"}
                            </Typography>
                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                              <Chip
                                size="small"
                                label={`${school.students || 0} תלמידים`}
                                sx={{
                                  bgcolor: `${colors.info}15`,
                                  color: colors.info,
                                  fontWeight: 600,
                                }}
                              />
                              <Typography variant="body2" sx={{ fontWeight: 600, color: colors.primary }}>
                                צפייה בפרטים
                              </Typography>
                            </Box>
                          </CardContent>
                        </CardActionArea>
                      </SchoolCard>
                    </Grid>
                  ))
                ) : (
                  <Grid item xs={12}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 4,
                        borderRadius: 4,
                        textAlign: "center",
                        border: `1px dashed ${colors.border}`,
                      }}
                    >
                      <SchoolIcon sx={{ fontSize: 60, color: colors.textLight, mb: 2, opacity: 0.5 }} />
                      <Typography variant="h6" sx={{ fontWeight: 600, color: colors.text, mb: 1 }}>
                        אין מוסדות במערכת
                      </Typography>
                      <Typography variant="body2" sx={{ color: colors.textLight, mb: 3 }}>
                        התחל להוסיף מוסדות למערכת כדי לנהל את התקציבים שלהם
                      </Typography>
                      <ActionButton
                        variant="contained"
                        sx={{
                          bgcolor: colors.primary,
                          color: "white",
                          "&:hover": {
                            bgcolor: colors.primaryDark,
                          },
                        }}
                        onClick={() => navigate("/addSchool")}
                      >
                        הוסף מוסד חדש
                      </ActionButton>
                    </Paper>
                  </Grid>
                )}
              </Grid>
            </Box>
            
            {schools && schools.length > 0 && (
              <Box sx={{ mt: 4, textAlign: "center" }}>
                <ActionButton
                  variant="contained"
                  sx={{
                    bgcolor: colors.primary,
                    color: "white",
                    "&:hover": {
                      bgcolor: colors.primaryDark,
                    },
                  }}
                  onClick={() => navigate("/addSchool")}
                >
                  הוסף מוסד חדש
                </ActionButton>
              </Box>
            )}
          </TabPanel>
  
          <TabPanel value={tabValue} index={2}>
            <Box sx={{ mb: 5 }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: colors.text,
                  mb: 3,
                  borderBottom: `2px solid ${colors.primary}`,
                  pb: 1,
                  display: "inline-block"
                }}
              >
                סיכום נתונים מערכתי
              </Typography>
              
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3}>
                  <StatsCard elevation={0}>
                    <Avatar
                      sx={{
                        bgcolor: `${colors.primary}15`,
                        width: 70,
                        height: 70,
                        mb: 2,
                        border: `2px solid ${colors.primary}`,
                      }}
                    >
                      <SchoolIcon sx={{ color: colors.primary, fontSize: 35 }} />
                    </Avatar>
                    <Typography variant="h3" sx={{ fontWeight: 700, color: colors.text, mb: 1 }}>
                      {schools?.length || 0}
                    </Typography>
                    <Typography variant="body1" sx={{ color: colors.textLight, fontWeight: 600 }}>
                      מוסדות
                    </Typography>
                  </StatsCard>
                </Grid>
                
                <Grid item xs={12} sm={6} md={3}>
                  <StatsCard elevation={0}>
                    <Avatar
                      sx={{
                        bgcolor: `${colors.primaryLight}15`,
                        width: 70,
                        height: 70,
                        mb: 2,
                        border: `2px solid ${colors.primaryLight}`,
                      }}
                    >
                      <BusinessIcon sx={{ color: colors.primaryLight, fontSize: 35 }} />
                    </Avatar>
                    <Typography variant="h3" sx={{ fontWeight: 700, color: colors.text, mb: 1 }}>
                      {suppliers?.length || 0}
                    </Typography>
                    <Typography variant="body1" sx={{ color: colors.textLight, fontWeight: 600 }}>
                      ספקים
                    </Typography>
                  </StatsCard>
                </Grid>
                
                <Grid item xs={12} sm={6} md={3}>
                  <StatsCard elevation={0}>
                    <Avatar
                      sx={{
                        bgcolor: `${colors.secondary}15`,
                        width: 70,
                        height: 70,
                        mb: 2,
                        border: `2px solid ${colors.secondary}`,
                      }}
                    >
                      <PeopleIcon sx={{ color: colors.secondary, fontSize: 35 }} />
                    </Avatar>
                    <Typography variant="h3" sx={{ fontWeight: 700, color: colors.text, mb: 1 }}>
                      {users?.length || 0}
                    </Typography>
                    <Typography variant="body1" sx={{ color: colors.textLight, fontWeight: 600 }}>
                      משתמשים
                    </Typography>
                  </StatsCard>
                </Grid>
                
                <Grid item xs={12} sm={6} md={3}>
                  <StatsCard elevation={0}>
                    <Avatar
                      sx={{
                        bgcolor: `${colors.secondaryLight}15`,
                        width: 70,
                        height: 70,
                        mb: 2,
                        border: `2px solid ${colors.secondaryLight}`,
                      }}
                    >
                      <CategoryIcon sx={{ color: colors.secondaryLight, fontSize: 35 }} />
                    </Avatar>
                    <Typography variant="h3" sx={{ fontWeight: 700, color: colors.text, mb: 1 }}>
                      {categories?.length || 0}
                    </Typography>
                    <Typography variant="body1" sx={{ color: colors.textLight, fontWeight: 600 }}>
                      קטגוריות
                    </Typography>
                  </StatsCard>
                </Grid>
              </Grid>
            </Box>
            
            {/* Charts Section */}
            <Box sx={{ mt: 5 }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: colors.text,
                  mb: 3,
                  borderBottom: `2px solid ${colors.secondary}`,
                  pb: 1,
                  display: "inline-block"
                }}
              >
                גרפים וניתוח נתונים
              </Typography>
              
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      borderRadius: 4,
                      height: 300,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: `1px solid ${colors.border}`,
                      bgcolor: colors.card,
                    }}
                  >
                    <Box sx={{ textAlign: "center" }}>
                      <BarChartIcon sx={{ fontSize: 60, color: colors.primary, mb: 2, opacity: 0.7 }} />
                      <Typography variant="h6" sx={{ fontWeight: 600, color: colors.textLight }}>
                        התפלגות תקציבים לפי מוסדות
                      </Typography>
                      <Typography variant="body2" sx={{ color: colors.textLight, mt: 1 }}>
                        אין נתונים להצגה כרגע
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      borderRadius: 4,
                      height: 300,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: `1px solid ${colors.border}`,
                      bgcolor: colors.card,
                    }}
                  >
                    <Box sx={{ textAlign: "center" }}>
                      <TrendingUpIcon sx={{ fontSize: 60, color: colors.secondary, mb: 2, opacity: 0.7 }} />
                      <Typography variant="h6" sx={{ fontWeight: 600, color: colors.textLight }}>
                        מגמת הוצאות כללית
                      </Typography>
                      <Typography variant="body2" sx={{ color: colors.textLight, mt: 1 }}>
                        אין נתונים להצגה כרגע
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          </TabPanel>
  
          {/* Call to Action */}
          <Box
            sx={{
              mt: 6,
              mb: 4,
              textAlign: "center",
              p: 4,
              borderRadius: 4,
              bgcolor: `${colors.primary}08`,
              border: `1px dashed ${colors.primary}`,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: colors.text,
                mb: 2,
              }}
            >
              מוכנים לנהל את כל המוסדות במקום אחד?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: colors.textLight,
                maxWidth: 700,
                mx: "auto",
                mb: 3,
              }}
            >
              המערכת מאפשרת לך לנהל את כל המוסדות, התקציבים וההוצאות בצורה יעילה ומרוכזת. התחל עכשיו לנהל את המערכת בצורה חכמה יותר.
            </Typography>
            <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
              <ActionButton
                variant="contained"
                sx={{
                  bgcolor: colors.primary,
                  color: "white",
                  "&:hover": {
                    bgcolor: colors.primaryDark,
                  },
                }}
                onClick={() => navigate("/schools")}
              >
                ניהול מוסדות
              </ActionButton>
              <ActionButton
                variant="outlined"
                sx={{
                  borderColor: colors.primary,
                  color: colors.primary,
                  "&:hover": {
                    borderColor: colors.primaryDark,
                    bgcolor: `${colors.primary}10`,
                  },
                }}
                onClick={() => navigate("/reports")}
              >
                צפייה בדוחות
              </ActionButton>
            </Box>
          </Box>
          
          {/* Footer */}
          <Box
            sx={{
              textAlign: "center",
              mt: 6,
              pt: 3,
              borderTop: `1px solid ${colors.border}`,
              color: colors.textLight
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              מערכת ניהול מוסדות ותקציבים © {new Date().getFullYear()}
            </Typography>
          </Box>
        </ContentContainer>
      </PageContainer>
    );
  };



// מקוריייייייייייייי
// import { Routes, useNavigate } from "react-router-dom"
// import './home.css'

// import { useDispatch } from "react-redux"
// import { allCategoriesThunk } from "../../Redux/Slices/Categories/getCategoriesThunk"
// import { useEffect } from "react"
// export const Home = () => {
// const  dispatch = useDispatch()
// const navigate = useNavigate()
// const getCategory = async () => {
//     await dispatch(allCategoriesThunk());
// }
// useEffect(() => {
//     getCategory();
// },[])
//     return <>

    
//     <div id="navigation">
//         <button className="navigate" onClick={()=>navigate('/expenitures')} >לרשימת הוצאות</button>
//         <button className="navigate" onClick={()=>navigate('/suppliers')} >לרשימת ספקים</button>
//         <button className="navigate" onClick={()=>navigate('/schools')} >לרשימת מוסדות</button>
//         <button className="navigate" onClick={()=>navigate('/users')} >לרשימת משתמשים</button>
//         <button className="navigate" onClick={()=>navigate('/categories')} >לרשימת קטגוריות</button>

//         </div>
//     </>



// }