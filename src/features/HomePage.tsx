import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Card from "../components/Card";

const logoRatio = (402 / 237) * 30;
const cards = [
  {
    title: "Atenção",
    content:
      "As informações meteorológicas contidas neste site são geradas de maneira automática sem controle de qualidade realizado visualmente por um meteorologista. Os produtos tem finalidade de ensino, pesquisa, treinamento e divulgação geral. NÃO nos responsabilizamos pela utilização destas informações!",
    width: "50vw",
    backgroundColor: "rgba(236,250,255,255)",
  },
  {
    content:
      "A página antiga do MASTER (www.masterantiga.iag.usp.br) será mantida enquanto todas as funcionalidades não forem migradas para a nova página. Incentivamos os usuários a usar a nova página e, caso tenham duvidas, sugestões ou correções, enviem comentários para melhorar a página do MASTER. Lamentamos os transtornos causados pela transição e reiteramos nosso compromisso de melhor servir aos usuários.",
    width: "50vw",
    backgroundColor: "rgba(247,245,203,255)",
  },
];

const logos = [
  {
    file: "/logos/1.jpg",
  },
  {
    file: "/logos/2.jpg",
  },
  {
    file: "/logos/3.jpg",
  },
  {
    file: "/logos/4.jpg",
  },
  {
    file: "/logos/5.jpg",
  },
  {
    file: "/logos/6.png",
  },
  {
    file: "/logos/7.jpg",
  },
  {
    file: "/logos/8.png",
  },
];

const HomePage: React.FC = () => {
  return (
    <Stack spacing={5}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{ position: "relative", width: `${logoRatio}vh`, height: "30vh" }}
        >
          <Image src="/logo.png" alt="logo" layout="fill" />
        </Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Stack spacing={3}>
          {cards.map((card, index) => (
            <Card key={`card${index}`} {...card} />
          ))}
        </Stack>
      </Box>

      <Box>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          align="center"
          sx={{ mb: 3 }}
        >
          Apoio
        </Typography>
        <Grid container spacing={0}>
          {logos.map((logo) => (
            <Grid key={logo.file} item xs={1}>
              <Box
                sx={{
                  position: "relative",
                  width: "10vh",
                  height: "10vh",
                  backgroundColor: "red",
                }}
              >
                {/* <Image src={logo.file} alt="logo" layout="fill" /> */}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Stack>
  );
};

export default HomePage;
