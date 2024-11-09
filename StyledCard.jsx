import { styled } from "@mui/system";

const StyledCard = styled("div")(({ theme, liked }) => ({
  background: liked ? "#e1f7d5" : "#fff",
  border: "1px solid #ccc",
  borderRadius: "8px",
  padding: "16px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  transition: "background 0.3s ease",
}));

export default StyledCard;
