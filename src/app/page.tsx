"use client";
import { useEffect, useLayoutEffect, useState } from "react";
import Post from "@/app/components/post.component";
import Alert from "./components/alert.component";
import Navbar from "./components/navbar.component";
import { PostModels } from "./pages/models/post.model";
import { AuthModels } from "./pages/models/auth.model";
import { usePathname } from "next/navigation";

interface HomeProps {
  children: React.ReactNode;
}

export default function Home({ ...props }: HomeProps) {
  useLayoutEffect(() => {
    window.location.href = "/pages/home";
  }, []);
}
