import { Container, Stack } from "@mui/material";
import { BannerCarousel } from "../components/BannerCarousel";
import { ProductCarousel } from "../components/ProductCarousel";

export function HomePageContainer() {
  return (
    <Container maxWidth="lg">
      <Stack spacing={5}>
        <BannerCarousel />
        <Stack spacing={3}>
          <ProductCarousel isFlashDeal={true} />
          <ProductCarousel isFlashDeal={false} />
        </Stack>
      </Stack>
    </Container>
  );
}
