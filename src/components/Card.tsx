import { Card as MUICard, CardContent, Typography } from "@mui/material";

interface CardProps {
  title?: string;
  content: string;
  backgroundColor?: string;
  width?: string;
  height?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  content,
  backgroundColor,
  width,
  height,
}) => {
  return (
    <MUICard sx={{ width, height, backgroundColor }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align="center">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          {content}
        </Typography>
      </CardContent>
    </MUICard>
  );
};

export default Card;
