import { Button, Typography } from "@mui/material";

const OpenModalButton = ({ children, setModalOpen, disabled }) => {
  return (
    <Button
      color="secondary"
      variant="outlined"
      size="small"
      disabled={disabled}
      onClick={() => setModalOpen(true)}
      sx={{
        borderRadius: "8px",
        textTransform: "none",
        padding: "0.4rem",
        marginBottom: "0.1rem"
      }}
    >
      <Typography variant="h3" fontWeight="600">
        {children}
      </Typography>
    </Button>
  );
};

export default OpenModalButton;
