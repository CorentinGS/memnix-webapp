import React, { lazy, Suspense } from "react";
import { cookies } from "next/headers";
import { isConnected } from "@/common/utils/security";
import { redirect } from "next/navigation";
import Auth from "@components/Auth/Auth";

function Loading() {
  return <div>Loading...</div>;
}

export default async function AuthPage() {
  const jwt = cookies().get("jwt")?.value;
  if (jwt) {
    const data = await isConnected(jwt);
    if (data) redirect("/dashboard");
  }

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Auth />
      </Suspense>
    </>
  );
}
