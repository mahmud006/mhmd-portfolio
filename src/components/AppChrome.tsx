"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import CommandPalette from "@/components/CommandPalette";

export default function AppChrome() {
  const [paletteOpen, setPaletteOpen] = useState(false);

  return (
    <>
      <Nav onOpenPalette={() => setPaletteOpen(true)} />
      <CommandPalette open={paletteOpen} onOpenChange={setPaletteOpen} />
    </>
  );
}
