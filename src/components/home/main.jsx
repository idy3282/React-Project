// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import './home.css';

// import { allCategoriesThunk } from "../../Redux/Slices/Categories/getCategoriesThunk";
// import { allSupplierThunk } from "../../Redux/Slices/Suplliers/getSupplierThunk";
// import { allUsersThunk } from "../../Redux/Slices/Users/getUsersThunk";
// import {
//   Box,
//   Container,
//   Typography,
//   Paper,
//   Grid,
//   Button,
//   Avatar,
//   useTheme,
//   Card,
//   CardContent,
//   CardActionArea,
//   Chip,
//   Tabs,
//   Tab,
//   Divider,
//   IconButton,
//   CardMedia
// } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import ListAltIcon from "@mui/icons-material/ListAlt";
// import BusinessIcon from "@mui/icons-material/Business";
// import CategoryIcon from "@mui/icons-material/Category";
// import PeopleIcon from "@mui/icons-material/People";
// import SchoolIcon from "@mui/icons-material/School";
// import TrendingUpIcon from "@mui/icons-material/TrendingUp";
// import ReceiptIcon from "@mui/icons-material/Receipt";
// import BarChartIcon from "@mui/icons-material/BarChart";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import SettingsIcon from "@mui/icons-material/Settings";

// // Styled components with institution theme
// const PageContainer = styled(Box)(({ theme }) => ({
//   minHeight: "100vh",
//   background: "#f8f9fa",
//   paddingTop: theme.spacing(4),
//   paddingBottom: theme.spacing(4),
// }));

// const ContentContainer = styled(Container)(({ theme }) => ({
//   paddingTop: theme.spacing(2),
//   paddingBottom: theme.spacing(4),
// }));

// const WelcomeSection = styled(Box)(({ theme }) => ({
//   marginBottom: theme.spacing(4),
//   textAlign: "center",
//   padding: theme.spacing(4, 0),
// }));

// const FeatureCard = styled(Card)(({ theme }) => ({
//   height: "100%",
//   display: "flex",
//   flexDirection: "column",
//   borderRadius: 16,
//   overflow: "hidden",
//   transition: "transform 0.3s ease, box-shadow 0.3s ease",
//   border: "1px solid #e0e0e0",
//   "&:hover": {
//     transform: "translateY(-8px)",
//     boxShadow: "0 12px 20px rgba(0,0,0,0.1)",
//   },
// }));

// const StatsCard = styled(Paper)(({ theme }) => ({
//   padding: theme.spacing(3),
//   borderRadius: 16,
//   background: "#fff",
//   height: "100%",
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   justifyContent: "center",
//   border: "1px solid #e0e0e0",
//   transition: "transform 0.3s ease",
//   "&:hover": {
//     transform: "translateY(-5px)",
//     boxShadow: "0 8px 16px rgba(0,0,0,0.05)",
//   },
// }));

// const ActionButton = styled(Button)(({ theme }) => ({
//   borderRadius: 30,
//   padding: "10px 24px",
//   fontWeight: 700,
//   textTransform: "none",
//   fontSize: "1rem",
//   boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
//   transition: "all 0.3s ease",
//   "&:hover": {
//     transform: "translateY(-2px)",
//     boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
//   },
// }));

// const TabPanel = (props) => {
//   const { children, value, index, ...other } = props;
//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
//     </div>
//   );
// };

// export const Main = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const theme = useTheme();
//   const [tabValue, setTabValue] = useState(0);
  
//   const categories = useSelector(s => s.category?.allCategories || []);
//   const suppliers = useSelector(s => s.supplier?.allSuppliers || []);
//   const users = useSelector(s => s.user?.allUsers || []);
//   const currUser = useSelector(s => s.user?.currUser || {});

//   const getData = async () => {
//     await dispatch(allCategoriesThunk());
//     await dispatch(allSupplierThunk());
//     await dispatch(allUsersThunk());
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   const handleTabChange = (event, newValue) => {
//     setTabValue(newValue);
//   };

//   // Institution color palette - Teal and Orange accents
//   const colors = {
//     primary: "#00796b", // Teal
//     primaryLight: "#48a999",
//     primaryDark: "#004c40",
//     secondary: "#ff5722", // Deep Orange
//     secondaryLight: "#ff8a50",
//     secondaryDark: "#c41c00",
//     text: "#263238",
//     textLight: "#546e7a",
//     background: "#f5f5f5",
//     card: "#ffffff",
//     border: "#e0e0e0",
//     success: "#4caf50",
//     warning: "#ff9800",
//     error: "#f44336",
//     info: "#2196f3",
//   };

//   // Navigation options for institution manager
//   const navigationOptions = [
//     {
//       title: "הוספת הוצאה",
//       description: "הוספת הוצאה חדשה למערכת",
//       icon: <AddCircleOutlineIcon sx={{ fontSize: 40 }} />,
//       color: colors.primary,
//       path: "/addExpenditure",
//       image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
//     },
//     {
//       title: "רשימת הוצאות",
//       description: "צפייה וניהול של כל ההוצאות",
//       icon: <ListAltIcon sx={{ fontSize: 40 }} />,
//       color: colors.primaryLight,
//       path: "/expenitures",
//       image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
//     },
//     {
//       title: "ניהול ספקים",
//       description: "צפייה וניהול של ספקים",
//       icon: <BusinessIcon sx={{ fontSize: 40 }} />,
//       color: colors.primaryDark,
//       path: "/suppliers",
//       image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
//     },
//     {
//       title: "ניהול קטגוריות",
//       description: "צפייה וניהול של קטגוריות הוצאה",
//       icon: <CategoryIcon sx={{ fontSize: 40 }} />,
//       color: colors.secondary,
//       path: "/categories",
//       image: "https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
//     },
//     {
//       title: "ניהול משתמשים",
//       description: "צפייה וניהול של משתמשי המערכת",
//       icon: <PeopleIcon sx={{ fontSize: 40 }} />,
//       color: colors.secondaryLight,
//       path: "/users",
//       image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
//     },
//     {
//       title: "דוחות והתראות",
//       description: "צפייה בדוחות וניתוח נתונים",
//       icon: <BarChartIcon sx={{ fontSize: 40 }} />,
//       color: colors.secondaryDark,
//       path: "/reports",
//       image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
//     },
//   ];

//   return (
//     <PageContainer>
//       <ContentContainer maxWidth="lg">
//         {/* Welcome Section */}
//         <WelcomeSection>
//           <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 4 }}>
//             <Avatar
//               sx={{
//                 bgcolor: colors.primary,
//                 width: 90,
//                 height: 90,
//                 mb: 3,
//                 boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
//               }}
//             >
//               <DashboardIcon sx={{ fontSize: 55, color: "white" }} />
//             </Avatar>
//             <Typography
//               variant="h3"
//               sx={{
//                 fontWeight: 800,
//                 color: colors.text,
//                 mb: 2,
//                 textAlign: "center",
//               }}
//             >
//               ברוך הבא למערכת ניהול ההוצאות
//             </Typography>
//             <Typography
//               variant="h6"
//               sx={{
//                 color: colors.textLight,
//                 textAlign: "center",
//                 fontWeight: 500,
//                 maxWidth: 800,
//                 mx: "auto",
//                 mb: 4
//               }}
//             >
//               {currUser?.name ? `${currUser.name}, ` : ""}
//               כאן תוכל לנהל את כל ההוצאות, הספקים והקטגוריות של המוסד שלך
//             </Typography>
            
//             {/* Quick Actions */}
//             <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", justifyContent: "center", mb: 4 }}>
//               <ActionButton
//                 variant="contained"
//                 startIcon={<AddCircleOutlineIcon />}
//                 sx={{
//                   bgcolor: colors.primary,
//                   color: "white",
//                   "&:hover": {
//                     bgcolor: colors.primaryDark,
//                   },
//                 }}
//                 onClick={() => navigate("/addExpenditure")}
//               >
//                 הוספת הוצאה חדשה
//               </ActionButton>
//               <ActionButton
//                 variant="outlined"
//                 startIcon={<ListAltIcon />}
//                 sx={{
//                   borderColor: colors.primary,
//                   color: colors.primary,
//                   "&:hover": {
//                     borderColor: colors.primaryDark,
//                     bgcolor: `${colors.primary}10`,
//                   },
//                 }}
//                 onClick={() => navigate("/expenitures")}
//               >
//                 צפייה בהוצאות
//               </ActionButton>
//             </Box>
//           </Box>
//         </WelcomeSection>

//         {/* Tabs Section */}
//         <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 3 }}>
//           <Tabs
//             value={tabValue}
//             onChange={handleTabChange}
//             variant="fullWidth"
//             textColor="primary"
//             indicatorColor="primary"
//             sx={{
//               "& .MuiTab-root": {
//                 fontWeight: 700,
//                 fontSize: "1rem",
//                 color: colors.textLight,
//                 "&.Mui-selected": {
//                   color: colors.primary,
//                 }
//               },
//               "& .MuiTabs-indicator": {
//                 backgroundColor: colors.primary,
//                 height: 3,
//               }
//             }}
//           >
//             <Tab label="ניהול מערכת" />
//             <Tab label="נתונים וסטטיסטיקות" />
//             <Tab label="פעילות אחרונה" />
//           </Tabs>
//         </Box>

//         {/* Tab Panels */}
//         <TabPanel value={tabValue} index={0}>
//           <Grid container spacing={3}>
//             {navigationOptions.map((option, index) => (
//               <Grid item xs={12} sm={6} md={4} key={index}>
//                 <FeatureCard>
//                   <CardMedia
//                     component="img"
//                     height="140"
//                     image={option.image}
//                     alt={option.title}
//                   />
//                   <CardActionArea onClick={() => navigate(option.path)}>
//                     <CardContent sx={{ p: 3 }}>
//                       <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//                         <Avatar
//                           sx={{
//                             bgcolor: `${option.color}15`,
//                             color: option.color,
//                             mr: 2,
//                           }}
//                         >
//                           {option.icon}
//                         </Avatar>
//                         <Typography variant="h6" sx={{ fontWeight: 700, color: colors.text }}>
//                           {option.title}
//                         </Typography>
//                       </Box>
//                       <Typography variant="body2" sx={{ color: colors.textLight }}>
//                         {option.description}
//                       </Typography>
//                     </CardContent>
//                   </CardActionArea>
//                 </FeatureCard>
//               </Grid>
//             ))}
//           </Grid>
//         </TabPanel>

//         <TabPanel value={tabValue} index={1}>
//           <Box sx={{ mb: 4 }}>
//             <Typography
//               variant="h5"
//               sx={{
//                 fontWeight: 700,
//                 color: colors.text,
//                 mb: 3,
//                 borderBottom: `2px solid ${colors.primary}`,
//                 pb: 1,
//                 display: "inline-block"
//               }}
//             >
//               סיכום נתונים
//             </Typography>
            
//             <Grid container spacing={3}>
//               <Grid item xs={12} sm={6} md={3}>
//                 <StatsCard elevation={0}>
//                   <Avatar
//                     sx={{
//                       bgcolor: `${colors.primary}15`,
//                       width: 70,
//                       height: 70,
//                       mb: 2,
//                       border: `2px solid ${colors.primary}`,
//                     }}
//                   >
//                     <BusinessIcon sx={{ color: colors.primary, fontSize: 35 }} />
//                   </Avatar>
//                   {/* <Typography */}
//                                     <Typography variant="h3" sx={{ fontWeight: 700, color: colors.text, mb: 1 }}>
//                                     {suppliers?.length || 0}
//                                   </Typography>
//                                   <Typography variant="body1" sx={{ color: colors.textLight, fontWeight: 600 }}>
//                                     ספקים
//                                   </Typography>
//                                 </StatsCard>
//                               </Grid>
                              
//                               <Grid item xs={12} sm={6} md={3}>
//                                 <StatsCard elevation={0}>
//                                   <Avatar
//                                     sx={{
//                                       bgcolor: `${colors.primaryLight}15`,
//                                       width: 70,
//                                       height: 70,
//                                       mb: 2,
//                                       border: `2px solid ${colors.primaryLight}`,
//                                     }}
//                                   >
//                                     <CategoryIcon sx={{ color: colors.primaryLight, fontSize: 35 }} />
//                                   </Avatar>
//                                   <Typography variant="h3" sx={{ fontWeight: 700, color: colors.text, mb: 1 }}>
//                                     {categories?.length || 0}
//                                   </Typography>
//                                   <Typography variant="body1" sx={{ color: colors.textLight, fontWeight: 600 }}>
//                                     קטגוריות
//                                   </Typography>
//                                 </StatsCard>
//                               </Grid>
                              
//                               <Grid item xs={12} sm={6} md={3}>
//                                 <StatsCard elevation={0}>
//                                   <Avatar
//                                     sx={{
//                                       bgcolor: `${colors.secondary}15`,
//                                       width: 70,
//                                       height: 70,
//                                       mb: 2,
//                                       border: `2px solid ${colors.secondary}`,
//                                     }}
//                                   >
//                                     <PeopleIcon sx={{ color: colors.secondary, fontSize: 35 }} />
//                                   </Avatar>
//                                   <Typography variant="h3" sx={{ fontWeight: 700, color: colors.text, mb: 1 }}>
//                                     {users?.length || 0}
//                                   </Typography>
//                                   <Typography variant="body1" sx={{ color: colors.textLight, fontWeight: 600 }}>
//                                     משתמשים
//                                   </Typography>
//                                 </StatsCard>
//                               </Grid>
                              
//                               <Grid item xs={12} sm={6} md={3}>
//                                 <StatsCard elevation={0}>
//                                   <Avatar
//                                     sx={{
//                                       bgcolor: `${colors.secondaryLight}15`,
//                                       width: 70,
//                                       height: 70,
//                                       mb: 2,
//                                       border: `2px solid ${colors.secondaryLight}`,
//                                     }}
//                                   >
//                                     <TrendingUpIcon sx={{ color: colors.secondaryLight, fontSize: 35 }} />
//                                   </Avatar>
//                                   <Typography variant="h3" sx={{ fontWeight: 700, color: colors.text, mb: 1 }}>
//                                     {/* Placeholder for total expenses */}
//                                     ₪0
//                                   </Typography>
//                                   <Typography variant="body1" sx={{ color: colors.textLight, fontWeight: 600 }}>
//                                     סך הוצאות
//                                   </Typography>
//                                 </StatsCard>
//                               </Grid>
//                             </Grid>
//                           </Box>
                          
//                           {/* Charts Section */}
//                           <Box sx={{ mt: 5 }}>
//                             <Typography
//                               variant="h5"
//                               sx={{
//                                 fontWeight: 700,
//                                 color: colors.text,
//                                 mb: 3,
//                                 borderBottom: `2px solid ${colors.secondary}`,
//                                 pb: 1,
//                                 display: "inline-block"
//                               }}
//                             >
//                               גרפים וניתוח נתונים
//                             </Typography>
                            
//                             <Grid container spacing={3}>
//                               <Grid item xs={12} md={6}>
//                                 <Paper
//                                   elevation={0}
//                                   sx={{
//                                     p: 3,
//                                     borderRadius: 4,
//                                     height: 300,
//                                     display: "flex",
//                                     alignItems: "center",
//                                     justifyContent: "center",
//                                     border: `1px solid ${colors.border}`,
//                                     bgcolor: colors.card,
//                                   }}
//                                 >
//                                   <Box sx={{ textAlign: "center" }}>
//                                     <BarChartIcon sx={{ fontSize: 60, color: colors.primary, mb: 2, opacity: 0.7 }} />
//                                     <Typography variant="h6" sx={{ fontWeight: 600, color: colors.textLight }}>
//                                       התפלגות הוצאות לפי קטגוריה
//                                     </Typography>
//                                     <Typography variant="body2" sx={{ color: colors.textLight, mt: 1 }}>
//                                       אין נתונים להצגה כרגע
//                                     </Typography>
//                                   </Box>
//                                 </Paper>
//                               </Grid>
                              
//                               <Grid item xs={12} md={6}>
//                                 <Paper
//                                   elevation={0}
//                                   sx={{
//                                     p: 3,
//                                     borderRadius: 4,
//                                     height: 300,
//                                     display: "flex",
//                                     alignItems: "center",
//                                     justifyContent: "center",
//                                     border: `1px solid ${colors.border}`,
//                                     bgcolor: colors.card,
//                                   }}
//                                 >
//                                   <Box sx={{ textAlign: "center" }}>
//                                     <TrendingUpIcon sx={{ fontSize: 60, color: colors.secondary, mb: 2, opacity: 0.7 }} />
//                                     <Typography variant="h6" sx={{ fontWeight: 600, color: colors.textLight }}>
//                                       מגמת הוצאות לאורך זמן
//                                     </Typography>
//                                     <Typography variant="body2" sx={{ color: colors.textLight, mt: 1 }}>
//                                       אין נתונים להצגה כרגע
//                                     </Typography>
//                                   </Box>
//                                 </Paper>
//                               </Grid>
//                             </Grid>
//                           </Box>
//                         </TabPanel>
                
//                         <TabPanel value={tabValue} index={2}>
//                           <Box sx={{ mb: 4 }}>
//                             <Typography
//                               variant="h5"
//                               sx={{
//                                 fontWeight: 700,
//                                 color: colors.text,
//                                 mb: 3,
//                                 borderBottom: `2px solid ${colors.primaryDark}`,
//                                 pb: 1,
//                                 display: "inline-block"
//                               }}
//                             >
//                               פעילות אחרונה במערכת
//                             </Typography>
                            
//                             <Paper
//                               elevation={0}
//                               sx={{
//                                 p: 0,
//                                 borderRadius: 4,
//                                 overflow: "hidden",
//                                 border: `1px solid ${colors.border}`,
//                                 bgcolor: colors.card,
//                               }}
//                             >
//                               {/* Placeholder for recent activity */}
//                               {[1, 2, 3, 4, 5].map((item, index) => (
//                                 <React.Fragment key={index}>
//                                   <Box
//                                     sx={{
//                                       p: 3,
//                                       display: "flex",
//                                       alignItems: "center",
//                                       "&:hover": {
//                                         bgcolor: "#f5f5f5",
//                                       }
//                                     }}
//                                   >
//                                     <Avatar
//                                       sx={{
//                                         bgcolor: index % 2 === 0 ? `${colors.primary}15` : `${colors.secondary}15`,
//                                         width: 50,
//                                         height: 50,
//                                         mr: 2,
//                                         border: `2px solid ${index % 2 === 0 ? colors.primary : colors.secondary}`,
//                                       }}
//                                     >
//                                       {index % 2 === 0 ?
//                                         <AddCircleOutlineIcon sx={{ color: colors.primary }} /> :
//                                         <ReceiptIcon sx={{ color: colors.secondary }} />
//                                       }
//                                     </Avatar>
//                                     <Box sx={{ flex: 1 }}>
//                                       <Typography variant="subtitle1" sx={{ fontWeight: 600, color: colors.text }}>
//                                         {index % 2 === 0 ? "הוספת הוצאה חדשה" : "עדכון פרטי ספק"}
//                                       </Typography>
//                                       <Typography variant="body2" sx={{ color: colors.textLight }}>
//                                         {`לפני ${index + 1} ימים`}
//                                       </Typography>
//                                     </Box>
//                                     <Chip
//                                       label={index % 2 === 0 ? "הוצאה" : "ספק"}
//                                       size="small"
//                                       sx={{
//                                         bgcolor: index % 2 === 0 ? `${colors.primary}15` : `${colors.secondary}15`,
//                                         color: index % 2 === 0 ? colors.primary : colors.secondary,
//                                         fontWeight: 600,
//                                         border: `1px solid ${index % 2 === 0 ? colors.primary : colors.secondary}`,
//                                       }}
//                                     />
//                                   </Box>
//                                   {index < 4 && <Divider />}
//                                 </React.Fragment>
//                               ))}
//                             </Paper>
//                           </Box>
//                         </TabPanel>
                
//                         {/* Call to Action */}
//                         <Box
//                           sx={{
//                             mt: 6,
//                             mb: 4,
//                             textAlign: "center",
//                             p: 4,
//                             borderRadius: 4,
//                             bgcolor: `${colors.primary}08`,
//                             border: `1px dashed ${colors.primary}`,
//                           }}
//                         >
//                           <Typography
//                             variant="h5"
//                             sx={{
//                               fontWeight: 700,
//                               color: colors.text,
//                               mb: 2,
//                             }}
//                           >
//                             מוכנים להתחיל לנהל את ההוצאות שלכם?
//                           </Typography>
//                           <Typography
//                             variant="body1"
//                             sx={{
//                               color: colors.textLight,
//                               maxWidth: 700,
//                               mx: "auto",
//                               mb: 3,
//                             }}
//                           >
//                             המערכת מאפשרת לך לנהל את כל ההוצאות של המוסד בצורה יעילה ומסודרת. התחל עכשיו להוסיף הוצאות ולנהל את התקציב שלך.
//                           </Typography>
//                           <ActionButton
//                             variant="contained"
//                             sx={{
//                               bgcolor: colors.primary,
//                               color: "white",
//                               "&:hover": {
//                                 bgcolor: colors.primaryDark,
//                               },
//                             }}
//                             onClick={() => navigate("/addExpenditure")}
//                           >
//                             הוסף הוצאה חדשה
//                           </ActionButton>
//                         </Box>
                        
//                         {/* Footer */}
//                         <Box
//                           sx={{
//                             textAlign: "center",
//                             mt: 6,
//                             pt: 3,
//                             borderTop: `1px solid ${colors.border}`,
//                             color: colors.textLight
//                           }}
//                         >
//                           <Typography variant="body2" sx={{ fontWeight: 500 }}>
//                             מערכת ניהול הוצאות © {new Date().getFullYear()}
//                           </Typography>
//                         </Box>
//                       </ContentContainer>
//                     </PageContainer>
//                   );
//                 };
                




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
  CardActionArea,
  Chip,
  Tabs,
  Tab,
  Divider,
  IconButton,
  CardMedia
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
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";

// Styled components with updated theme
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
  background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(247,247,247,0.5) 100%)",
  borderRadius: 16,
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

export const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);
  
  const categories = useSelector(s => s.category?.allCategories || []);
  const suppliers = useSelector(s => s.supplier?.allSuppliers || []);
  const users = useSelector(s => s.user?.allUsers || []);
  const currUser = useSelector(s => s.user?.currUser || {});

  const getData = async () => {
    await dispatch(allCategoriesThunk());
    await dispatch(allSupplierThunk());
    await dispatch(allUsersThunk());
  };

  useEffect(() => {
    getData();
  }, []);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Updated color palette with muted amber/orange
  const colors = {
    primary: "#0288d1", // Blue
    primaryLight: "#5eb8ff",
    primaryDark: "#005b9f",
    secondary: "#009688", // Teal/Turquoise
    secondaryLight: "#52c7b8",
    secondaryDark: "#00675b",
    accent: "#f0a030", // Muted amber/orange
    accentLight: "#ffcf60",
    accentDark: "#c67100",
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

  // Navigation options with updated colors - no images
  const navigationOptions = [
    {
      title: "ניהול ספקים",
      description: "צפייה וניהול של ספקים",
      icon: <BusinessIcon sx={{ fontSize: 40 }} />,
      color: colors.primary,
      path: "/suppliers",
      gradient: `linear-gradient(135deg, ${colors.primary}30 0%, ${colors.primaryLight}30 100%)`,
    },
    {
      title: "ניהול קטגוריות",
      description: "צפייה וניהול של קטגוריות הוצאה",
      icon: <CategoryIcon sx={{ fontSize: 40 }} />,
      color: colors.secondary,
      path: "/categories",
      gradient: `linear-gradient(135deg, ${colors.secondary}30 0%, ${colors.secondaryLight}30 100%)`,
    },
    {
      title: "ניהול משתמשים",
      description: "צפייה וניהול של משתמשי המערכת",
      icon: <PeopleIcon sx={{ fontSize: 40 }} />,
      color: colors.accent,
      path: "/users",
      gradient: `linear-gradient(135deg, ${colors.accent}30 0%, ${colors.accentLight}30 100%)`,
    },
  ];

  return (
    <PageContainer>
      <ContentContainer maxWidth="lg">
        {/* Welcome Section with gradient background */}
        <WelcomeSection>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 4 }}>
            <Avatar
              sx={{
                background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
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
              ברוך הבא למערכת ניהול ההוצאות
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
              כאן תוכל לנהל את כל ההוצאות, הספקים והקטגוריות של המוסד שלך
            </Typography>
            
            {/* Quick Actions with swapped positions */}
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", justifyContent: "center", mb: 4 }}>
              <ActionButton
                variant="outlined"
                startIcon={<ListAltIcon />}
                sx={{
                  borderColor: colors.primary,
                  color: colors.primary,
                  "&:hover": {
                    borderColor: colors.primaryDark,
                    bgcolor: `${colors.primary}10`,
                  },
                }}
                onClick={() => navigate("/expenitures")}
              >
                צפייה בהוצאות
              </ActionButton>
              <ActionButton
                variant="contained"
                startIcon={<AddCircleOutlineIcon />}
                sx={{
                  bgcolor: colors.accent,
                  color: "white",
                  "&:hover": {
                    bgcolor: colors.accentDark,
                  },
                }}
                onClick={() => navigate("/addExpenditure")}
              >
                הוספת הוצאה חדשה
              </ActionButton>
            </Box>
          </Box>
        </WelcomeSection>

        {/* Tabs Section with updated colors */}
        <Box sx={{ 
          borderBottom: 1, 
          borderColor: "divider", 
          mb: 3,
          borderRadius: "8px 8px 0 0",
          overflow: "hidden",
          boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
        }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            variant="fullWidth"
            textColor="primary"
            indicatorColor="primary"
            sx={{
              background: "#ffffff",
              "& .MuiTab-root": {
                fontWeight: 700,
                fontSize: "1rem",
                color: colors.textLight,
                py: 2,
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
            <Tab label="נתונים וסטטיסטיקות" />
            <Tab label="פעילות אחרונה" />
          </Tabs>
        </Box>

        {/* Tab Panels with updated styling - no images in cards */}
        <TabPanel value={tabValue} index={0}>
          <Grid container spacing={3}>
            {navigationOptions.map((option, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <FeatureCard sx={{ 
                  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                  border: `1px solid ${option.color}40`,
                  height: "100%"
                }}>
                  <CardActionArea 
                    onClick={() => navigate(option.path)}
                    sx={{ height: "100%", display: "flex", flexDirection: "column" }}
                  >
                    {/* Decorative header instead of image */}
                    <Box
                      sx={{
                        height: 80,
                        width: "100%",
                        background: option.gradient,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderBottom: `1px solid ${option.color}30`,
                      }}
                    >
                      <Avatar
                        sx={{
                          bgcolor: option.color,
                          width: 60,
                          height: 60,
                          boxShadow: `0 4px 8px ${option.color}40`,
                        }}
                      >
                        {option.icon}
                      </Avatar>
                    </Box>
                    <CardContent sx={{ p: 3, flexGrow: 1, display: "flex", flexDirection: "column" }}>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          fontWeight: 700, 
                          color: colors.text,
                          mb: 2,
                          textAlign: "center",
                          borderBottom: `2px solid ${option.color}40`,
                          pb: 1
                        }}
                      >
                        {option.title}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: colors.textLight,
                          textAlign: "center",
                          flexGrow: 1
                        }}
                      >
                        {option.description}
                      </Typography>
                      <Box 
                        sx={{ 
                          mt: 2, 
                          display: "flex", 
                          justifyContent: "center" 
                        }}
                      >
                        <Chip
                          label="לחץ לניהול"
                          size="small"
                          sx={{
                            bgcolor: `${option.color}15`,
                            color: option.color,
                            fontWeight: 600,
                            border: `1px solid ${option.color}40`,
                          }}
                        />
                      </Box>
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
              סיכום נתונים
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={3}>
                <StatsCard elevation={0} sx={{ borderTop: `3px solid ${colors.primary}` }}>
                  <Avatar
                    sx={{
                      bgcolor: `${colors.primary}15`,
                      width: 70,
                      height: 70,
                      mb: 2,
                      border: `2px solid ${colors.primary}`,
                    }}
                  >
                    <BusinessIcon sx={{ color: colors.primary, fontSize: 35 }} />
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
                <StatsCard elevation={0} sx={{ borderTop: `3px solid ${colors.secondary}` }}>
                  <Avatar
                    sx={{
                      bgcolor: `${colors.secondary}15`,
                      width: 70,
                      height: 70,
                      mb: 2,
                      border: `2px solid ${colors.secondary}`,
                    }}
                  >
                    <CategoryIcon sx={{ color: colors.secondary, fontSize: 35 }} />
                  </Avatar>
                  <Typography variant="h3" sx={{ fontWeight: 700, color: colors.text, mb: 1 }}>
                    {categories?.length || 0}
                  </Typography>
                  <Typography variant="body1" sx={{ color: colors.textLight, fontWeight: 600 }}>
                    קטגוריות
                  </Typography>
                </StatsCard>
              </Grid>
              
              <Grid item xs={12} sm={6} md={3}>
                <StatsCard elevation={0} sx={{ borderTop: `3px solid ${colors.accent}` }}>
                  <Avatar
                    sx={{
                      bgcolor: `${colors.accent}15`,
                      width: 70,
                      height: 70,
                      mb: 2,
                      border: `2px solid ${colors.accent}`,
                    }}
                  >
                    <PeopleIcon sx={{ color: colors.accent, fontSize: 35 }} />
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
                <StatsCard elevation={0} sx={{ borderTop: `3px solid ${colors.primaryLight}` }}>
                  <Avatar
                    sx={{
                      bgcolor: `${colors.primaryLight}15`,
                      width: 70,
                      height: 70,
                      mb: 2,
                      border: `2px solid ${colors.primaryLight}`,
                    }}
                  >
                    <TrendingUpIcon sx={{ color: colors.primaryLight, fontSize: 35 }} />
                  </Avatar>
                  <Typography variant="h3" sx={{ fontWeight: 700, color: colors.text, mb: 1 }}>
                    {/* Placeholder for total expenses */}
                    ₪0
                  </Typography>
                  <Typography variant="body1" sx={{ color: colors.textLight, fontWeight: 600 }}>
                    סך הוצאות
                  </Typography>
                </StatsCard>
              </Grid>
            </Grid>
          </Box>
          
          {/* Charts Section with updated styling */}
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
                    borderLeft: `4px solid ${colors.primary}`,
                  }}
                >
                  <Box sx={{ textAlign: "center" }}>
                    <BarChartIcon sx={{ fontSize: 60, color: colors.primary, mb: 2, opacity: 0.7 }} />
                    <Typography variant="h6" sx={{ fontWeight: 600, color: colors.textLight }}>
                      התפלגות הוצאות לפי קטגוריה
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
                    borderLeft: `4px solid ${colors.accent}`,
                  }}
                >
                  <Box sx={{ textAlign: "center" }}>
                    <TrendingUpIcon sx={{ fontSize: 60, color: colors.accent, mb: 2, opacity: 0.7 }} />
                    <Typography variant="h6" sx={{ fontWeight: 600, color: colors.textLight }}>
                      מגמת הוצאות לאורך זמן
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
        
        <TabPanel value={tabValue} index={2}>
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: colors.text,
                mb: 3,
                borderBottom: `2px solid ${colors.accent}`,
                pb: 1,
                display: "inline-block"
              }}
            >
              פעילות אחרונה במערכת
            </Typography>
            
            <Paper
              elevation={0}
              sx={{
                p: 0,
                borderRadius: 4,
                overflow: "hidden",
                border: `1px solid ${colors.border}`,
                bgcolor: colors.card,
                boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
              }}
            >
              {/* Placeholder for recent activity with updated styling */}
              {[1, 2, 3, 4, 5].map((item, index) => (
                <React.Fragment key={index}>
                  <Box
                    sx={{
                      p: 3,
                      display: "flex",
                      alignItems: "center",
                      "&:hover": {
                        bgcolor: "#f5f5f5",
                      }
                    }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: index % 3 === 0 ? `${colors.primary}15` : 
                                index % 3 === 1 ? `${colors.secondary}15` : `${colors.accent}15`,
                        width: 50,
                        height: 50,
                        mr: 2,
                        border: `2px solid ${index % 3 === 0 ? colors.primary : 
                                           index % 3 === 1 ? colors.secondary : colors.accent}`,
                      }}
                    >
                      {index % 3 === 0 ?
                        <AddCircleOutlineIcon sx={{ color: colors.primary }} /> :
                        index % 3 === 1 ?
                        <ReceiptIcon sx={{ color: colors.secondary }} /> :
                        <CategoryIcon sx={{ color: colors.accent }} />
                      }
                    </Avatar>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600, color: colors.text }}>
                        {index % 3 === 0 ? "הוספת הוצאה חדשה" : 
                         index % 3 === 1 ? "עדכון פרטי ספק" : "עדכון קטגוריה"}
                      </Typography>
                      <Typography variant="body2" sx={{ color: colors.textLight }}>
                        {`לפני ${index + 1} ימים`}
                      </Typography>
                    </Box>
                    <Chip
                      label={index % 3 === 0 ? "הוצאה" : 
                             index % 3 === 1 ? "ספק" : "קטגוריה"}
                      size="small"
                      sx={{
                        bgcolor: index % 3 === 0 ? `${colors.primary}15` : 
                                index % 3 === 1 ? `${colors.secondary}15` : `${colors.accent}15`,
                        color: index % 3 === 0 ? colors.primary : 
                               index % 3 === 1 ? colors.secondary : colors.accent,
                        fontWeight: 600,
                        border: `1px solid ${index % 3 === 0 ? colors.primary : 
                                           index % 3 === 1 ? colors.secondary : colors.accent}`,
                      }}
                    />
                  </Box>
                  {index < 4 && <Divider />}
                </React.Fragment>
              ))}
            </Paper>
          </Box>
        </TabPanel>

        {/* Call to Action with updated styling */}
        <Box
          sx={{
            mt: 6,
            mb: 4,
            textAlign: "center",
            p: 4,
            borderRadius: 4,
            background: `linear-gradient(135deg, ${colors.accent}08 0%, ${colors.primary}08 100%)`,
            border: `1px dashed ${colors.accent}`,
            boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
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
            מוכנים להתחיל לנהל את ההוצאות שלכם?
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
            המערכת מאפשרת לך לנהל את כל ההוצאות של המוסד בצורה יעילה ומסודרת. התחל עכשיו להוסיף הוצאות ולנהל את התקציב שלך.
          </Typography>
          <ActionButton
            variant="contained"
            sx={{
              background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.accentDark} 100%)`,
              color: "white",
              "&:hover": {
                background: `linear-gradient(135deg, ${colors.accentDark} 0%, ${colors.accent} 100%)`,
              },
            }}
            onClick={() => navigate("/addExpenditure")}
          >
            הוסף הוצאה חדשה
          </ActionButton>
        </Box>
        
        {/* Footer with updated styling */}
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
            מערכת ניהול הוצאות © {new Date().getFullYear()}
          </Typography>
        </Box>
      </ContentContainer>
    </PageContainer>
  );
};

