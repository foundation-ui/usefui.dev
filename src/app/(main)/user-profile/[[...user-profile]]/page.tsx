import UserProfileWrapper from "./_components/UserProfileWrapper";
import { auth } from "@clerk/nextjs/server";

async function UserProfilePage() {
  const { userId, redirectToSignIn } = await auth();
  if (!userId) return redirectToSignIn();

  return <UserProfileWrapper />;
}
export default UserProfilePage;
