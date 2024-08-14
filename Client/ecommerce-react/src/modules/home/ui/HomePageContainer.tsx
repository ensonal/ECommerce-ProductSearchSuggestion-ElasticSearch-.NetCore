import { Container, Stack } from "@mui/material";
import { BannerCarousel } from "../components/BannerCarousel";

export function HomePageContainer() {
  return (
    <Container maxWidth="xl">
      <Stack spacing={5}>
        <BannerCarousel />
      </Stack>
    </Container>
  );
}
