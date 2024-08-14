import { Container } from "@mui/material";
import { BannerCarousel } from "../components/BannerCarousel";

export function HomePageContainer() {
  return (
    <Container maxWidth="xl">
      <BannerCarousel />
    </Container>
  );
}
