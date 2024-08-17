import { useState } from "react";
import Input from "@mui/joy/Input";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

export function NavCenterActions() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="d-flex flex-row gap-1 justify-content-center align-items-center w-50">
      <Input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        sx={{
          flex: 1,
          width: "100%",
          "--Input-focusedThickness": "0px",
          fontSize: "0.875rem",
        }}
        placeholder="Search everything at ShopSphere"
        className="rounded-4"
        color="neutral"
        variant="outlined"
        size="lg"
        endDecorator={
          <div className="d-flex flex-row gap-1">
            <CloseOutlinedIcon
              color="action"
              fontSize="small"
              onClick={() => setSearchQuery("")}
              sx={{
                cursor: "pointer",
              }}
            />
            <SearchRoundedIcon
              fontSize="small"
              sx={{
                cursor: "pointer",
              }}
            />
          </div>
        }
      />
    </div>
  );
}
