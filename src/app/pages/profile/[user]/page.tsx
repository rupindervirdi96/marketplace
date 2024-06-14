"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import ProfilePage from "../page";

interface UserProfileProps {}

export const UserProfile = ({ ...props }: UserProfileProps) => {
  const [userId, setUserId] = useState<any>();
  const { user } = useParams<{ user: string }>();

  useEffect(() => {
    console.log("X");
  }, []);

  return <ProfilePage user={user} />;
};

export default UserProfile;
